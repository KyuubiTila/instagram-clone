import { connectionConfig } from './../../drizzle.config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';

const client = new Client({
  ...connectionConfig,
});

client.connect();

export const db = drizzle(client, { schema });
