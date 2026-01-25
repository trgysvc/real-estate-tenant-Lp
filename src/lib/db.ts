import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = path.join(process.cwd(), 'data', 'data.db');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

console.log('[DB] Initializing database at:', dbPath);
const db = new Database(dbPath, { verbose: console.log });

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS demo_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT,
    phone TEXT,
    companyName TEXT,
    selectedPlan TEXT,
    ip TEXT,
    timestamp TEXT
  )
`);

export default db;
