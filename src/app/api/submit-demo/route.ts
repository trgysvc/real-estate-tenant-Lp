import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
    console.log('[Submit Demo] Request received');
    try {
        const body = await req.json();
        console.log('[Submit Demo] Request body:', JSON.stringify(body, null, 2));
        const { fullName, email, phone, companyName, selectedPlan, ip } = body;

        // Basic validation
        if (!fullName || !email || !phone || !companyName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const stmt = db.prepare(`
            INSERT INTO demo_requests (fullName, email, phone, companyName, selectedPlan, ip, timestamp)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

        const info = stmt.run(
            fullName,
            email,
            phone,
            companyName,
            selectedPlan,
            ip || 'Not Captured',
            new Date().toISOString()
        );

        console.log('[Submit Demo] Saved to SQLite:', info);

        return NextResponse.json({ success: true, id: info.lastInsertRowid });
    } catch (error: any) {
        console.error('[Submit Demo] Database Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
