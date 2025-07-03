import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

export const db = drizzle({ client: new Database(import.meta.env.VITE_DB_FILE_PATH!) });