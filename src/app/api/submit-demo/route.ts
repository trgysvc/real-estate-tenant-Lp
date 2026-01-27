import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
    const requestId = crypto.randomUUID();
    console.log(`[Submit Demo] [${requestId}] Request received`);
    console.log(`[Submit Demo] [${requestId}] Node Version: ${process.version}`);

    try {
        const body = await req.json();
        // Safe logging of body (excluding sensitive fields if any, though here it's mostly contact info)
        console.log(`[Submit Demo] [${requestId}] Request body keys:`, Object.keys(body));

        const { fullName, email, phone, companyName, selectedPlan, ip } = body;

        // Basic validation
        if (!fullName || !email || !phone || !companyName) {
            console.warn(`[Submit Demo] [${requestId}] Missing fields:`, { fullName: !!fullName, email: !!email, phone: !!phone, companyName: !!companyName });
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log(`[Submit Demo] [${requestId}] Preparing DB insert...`);
        // Log DB path from the imported module context if possible, or just re-log what we assume
        // We can't access local vars of db.ts easily, but we can verify if db is ready.

        const stmt = db.prepare(`
            INSERT INTO demo_requests (fullName, email, phone, companyName, selectedPlan, ip, timestamp)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

        console.log(`[Submit Demo] [${requestId}] Statement prepared. Executing...`);

        const info = stmt.run(
            fullName,
            email,
            phone,
            companyName,
            selectedPlan,
            ip || 'Not Captured',
            new Date().toISOString()
        );

        console.log(`[Submit Demo] [${requestId}] Saved to SQLite. Info:`, info);

        return NextResponse.json({ success: true, id: info.lastInsertRowid });
    } catch (error: any) {
        console.error(`[Submit Demo] [${requestId}] CRITICAL ERROR:`, error);

        // Detailed error logging
        if (error instanceof Error) {
            console.error(`[Submit Demo] [${requestId}] Stack:`, error.stack);
            console.error(`[Submit Demo] [${requestId}] Name:`, error.name);
            console.error(`[Submit Demo] [${requestId}] Message:`, error.message);
            // @ts-ignore
            if (error.code) console.error(`[Submit Demo] [${requestId}] Code:`, error.code);
            // @ts-ignore
            if (error.opensslErrorStack) console.error(`[Submit Demo] [${requestId}] OpenSSL Stack:`, error.opensslErrorStack);
        }

        return NextResponse.json(
            {
                error: error.message || 'Internal Server Error',
                debug_id: requestId,
                details: process.env.NODE_ENV === 'development' ? error.stack : undefined
            },
            { status: 500 }
        );
    }
}
