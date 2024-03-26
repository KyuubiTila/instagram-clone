import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
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
  port: parseInt(process.env.PORT!),
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

export async function establishConnection() {
  const client = new Client(connectionConfig);
  await client.connect();
  return drizzle(client);
}

// Call the function to establish the connection
export const db = establishConnection();
