import { env } from '@/lib/env.mjs';

import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import postgres from 'postgres';

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Disable prefetch as it is not supported for "Transaction" pool mode
const conn = globalForDb.conn ?? postgres(env.DATABASE_URL, { prepare: false });
if (env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
