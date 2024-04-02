// registration.service.ts
import bcryptjs from 'bcrypt';
import { users } from '../../../../db/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../../../db';

export async function signup(
  username: string,
  email: string,
  password: string
): Promise<any> {
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (existingUser.length > 0) {
      throw new Error('User already exists');
    }

    const savedUser = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
      })
      .returning();

    return savedUser;
  } catch (error) {
    throw error;
  }
}
