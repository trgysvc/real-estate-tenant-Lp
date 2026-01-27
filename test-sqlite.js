const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'data', 'test.db');
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

console.log('Opening DB at', dbPath);
try {
    const db = new Database(dbPath, { verbose: console.log });
    db.exec(`
    CREATE TABLE IF NOT EXISTS test_table (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      value TEXT
    )
  `);

    const stmt = db.prepare('INSERT INTO test_table (value) VALUES (?)');
    const info = stmt.run('Hello World');
    console.log('Insert success:', info);

    const row = db.prepare('SELECT * FROM test_table WHERE id = ?').get(info.lastInsertRowid);
    console.log('Read success:', row);
    console.log('better-sqlite3 works fine in isolation.');

    // Clean up
    db.close();
    fs.unlinkSync(dbPath);
} catch (err) {
    console.error('better-sqlite3 failed:', err);
}
