// registration.service.ts
import bcryptjs from 'bcrypt';
import { users } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';
import { db } from '../../../../../db';
import { SignUpCredentialDto } from '../dto/signup-credentials.dto';
import { NextResponse } from 'next/server';

export async function signup(
  signupCredentials: SignUpCredentialDto
): Promise<boolean> {
  const { username, email, password } = signupCredentials;

  if (!username || !email || !password) {
    throw new NextResponse(JSON.stringify({ error: 'Missing input field' }), {
      status: 400,
    });
  }
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (existingUser) {
      throw new Error('User already exists');
    }

    await db.insert(users).values({
      username,
      email,
      password: hashedPassword,
    });

    return true;
  } catch (error) {
    throw error;
  }
}
