import { db } from '../../../db';

export async function GET() {
  try {
    const result = await db.query.posts.findFirst({
      with: { author: true },
    });
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
