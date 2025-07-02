import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

export const db = drizzle({ client: new Database(import.meta.env.DB_FILE_NAME!) });
