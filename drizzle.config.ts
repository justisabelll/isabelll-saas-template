import type { Config } from 'drizzle-kit';
import { env } from '@/lib/env.mjs';

export default {
  schema: 'src/lib/db/drizzle/schema.ts',
  out: 'src/lib/db/drizzle/migrations',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
