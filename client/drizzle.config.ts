import type { Config } from 'drizzle-kit';
import 'dotenv/config';

interface ConnectionConfig {
  host: string;
  user: string;
  port: number;
  password: string;
  database: string;
}

export const connectionConfig: ConnectionConfig = {
  host: process.env.HOST!,
  user: process.env.USERNAME!,
  port: 5432,
  password: process.env.PASSWORD!,
  database: process.env.DATABASE!,
};

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    ...connectionConfig,
  },
} satisfies Config;
