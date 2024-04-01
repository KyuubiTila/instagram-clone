import { db } from '../../../db';

export async function GET() {
  try {
    const result = await db.query.users.findFirst({
      with: { profile: true },
    });
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
