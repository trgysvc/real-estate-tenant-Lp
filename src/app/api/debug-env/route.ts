
import { NextResponse } from 'next/server';
import os from 'os';

export async function GET() {
    return NextResponse.json({
        nodeVersion: process.version,
        env: process.env.NODE_ENV,
        arch: os.arch(),
        platform: os.platform(),
        cwd: process.cwd(),
        // Check if data directory is writable
        // fs functions would need to be imported, let's keep it simple for now or import fs
    });
}
