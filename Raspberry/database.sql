CREATE TABLE environment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    devicename TEXT NOT NULL,
    temperature REAL,
    humidity REAL,
    pressure REAL,
    light REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    tocloud INTEGER DEFAULT 0
);