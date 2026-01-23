import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, email, phone, companyName, selectedPlan, ip, timestamp } = body;

        // Basic validation
        if (!fullName || !email || !phone || !companyName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for environment variables
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error('Missing Google Sheets environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Sanitize sensitive keys (handles base64 newlines and potential wrapping quotes)
        const getPrivateKey = (key: string | undefined) => {
            if (!key) return undefined;
            // Handle literal \n (common in environment variables)
            let formatted = key.replace(/\\n/g, '\n');
            // Remove quotes if the user copied them into the env var value
            if (formatted.startsWith('"') && formatted.endsWith('"')) {
                formatted = formatted.slice(1, -1);
            }
            return formatted;
        };

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

        return NextResponse.json({ success: true, data: response.data });
    } catch (error: any) {
        console.error('Google Sheets API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
