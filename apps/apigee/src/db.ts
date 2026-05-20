import { dirname, resolve } from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';

const { DatabaseSync } = require('node:sqlite');

const DEFAULT_DB_PATH = 'data/artchew.sqlite';

type Database = InstanceType<typeof DatabaseSync>;

let db: Database | undefined;

const getDatabasePath = () => {
  return resolve(
    process.cwd(),
    process.env.SQLITE_DB_PATH ??
      process.env.DATABASE_PATH ??
      DEFAULT_DB_PATH
  );
};

export const getDb = () => {
  if (!db) {
    connectDB();
  }

  return db as Database;
};

const connectDB = () => {
  const databasePath = getDatabasePath();
  const databaseDir = dirname(databasePath);

  if (!existsSync(databaseDir)) {
    mkdirSync(databaseDir, { recursive: true });
  }

  db = new DatabaseSync(databasePath);
  db.exec('PRAGMA foreign_keys = ON');
  db.exec(`
    CREATE TABLE IF NOT EXISTS students (
      _id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      courseId TEXT NOT NULL,
      password TEXT,
      time TEXT NOT NULL,
      status TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS users (
      _id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT
    );
  `);

  console.log(`SQLite connected successfully: ${databasePath}`);
};

export default connectDB;
