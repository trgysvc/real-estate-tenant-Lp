import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    console.log('[Submit Demo] Request received');
    try {
        const body = await req.json();
        console.log('[Submit Demo] Request body:', JSON.stringify(body, null, 2));
        const { fullName, email, phone, companyName, selectedPlan, ip, timestamp } = body;

        // Basic validation
        if (!fullName || !email || !phone || !companyName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for environment variables
        console.log('[Submit Demo] Checking environment variables...');
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error('[Submit Demo] Missing Google Sheets environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Sanitize sensitive keys (handles base64 newlines and potential wrapping quotes)
        // Robust key sanitization to handle various .env formats and strict OpenSSL requirements
        const getPrivateKey = (key: string | undefined) => {
            if (!key) return undefined;

            let formatted = key;

            // 1. Handle JSON stringified keys
            if (formatted.startsWith('"') && formatted.endsWith('"')) {
                try {
                    formatted = JSON.parse(formatted);
                } catch (e) {
                    formatted = formatted.slice(1, -1);
                }
            }

            // 2. Unescape \n literals if they exist
            if (formatted.includes('\\n')) {
                formatted = formatted.replace(/\\n/g, '\n');
            }

            // 3. Normalize: Strip everything and rebuild.
            // This handles spaces, missing newlines, or messy headers.
            if (formatted.includes('-----BEGIN PRIVATE KEY-----')) {
                // Extract just the base64 content
                const content = formatted
                    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
                    .replace(/-----END PRIVATE KEY-----/g, '')
                    .replace(/\s+/g, ''); // remove ALL whitespace (newlines, spaces)

                // Re-chunk into 64-char lines
                const chunked = content.match(/.{1,64}/g)?.join('\n');

                // Re-wrap
                formatted = `-----BEGIN PRIVATE KEY-----\n${chunked}\n-----END PRIVATE KEY-----\n`;
                console.log('[Submit Demo] Key standardized/reconstructed successfully');
                return formatted;
            }

            console.error('[Submit Demo] Key does not appear to be a valid generic private key (missing headers).');
            return formatted;
        };

        console.log('[Submit Demo] Initializing Google Auth...');
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: getPrivateKey(process.env.GOOGLE_PRIVATE_KEY),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        console.log('[Submit Demo] Appending to Google Sheet...');
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A:G', // Updated range to accommodate extra fields
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        fullName,
                        email,
                        phone,
                        companyName,
                        selectedPlan,
                        ip || 'Not Captured',
                        timestamp || new Date().toISOString()
                    ]
                ],
            },
        });

        console.log('[Submit Demo] Success:', response.data);
        return NextResponse.json({ success: true, data: response.data });
    } catch (error: any) {
        console.error('[Submit Demo] Google Sheets API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
