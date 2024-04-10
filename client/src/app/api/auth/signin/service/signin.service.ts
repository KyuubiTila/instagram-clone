import bcryptjs from 'bcrypt';
import { SignInCredentialDto } from '../dto/signin-credentials.dto';
import { users } from '@/db/schema';
import { db } from '@/db';

import { eq } from 'drizzle-orm';
import generateToken from '../../../utils/generateToken';

export async function signInUser(
  signInCredentialDto: SignInCredentialDto
): Promise<string> {
  const { email, password } = signInCredentialDto;

  if (!email || !password) {
    throw new Error('Missing email or password');
  }

  try {
    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatch = await bcryptjs.compare(password, user.password!);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    const token = generateToken(user.id, user.username!);

    return token;
  } catch (error) {
    throw error;
  }
}
