import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { profiles } from '../../../../db/schema';
import { db } from '../../../../db';
import verifyToken from '../../utils/verifyToken';
import UpdateProfileCredentialDto from '../dto/updateProfile-credentials.dto';
import ProfileCredentialDto from '../dto/profile-credentials.dto';

export async function createProfile(
  profileCredentialDto: ProfileCredentialDto,
  req: NextRequest,
  filename: string
): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const { bio, website, gender, photo } = profileCredentialDto;

    if (!bio || !website || !gender || !photo) {
      throw new Error('Missing field, please fill all inputs');
    }

    const [isProfileExisting] = await db
      .select()
      .from(profiles)
      .where(eq(profiles.userId, id));

    if (isProfileExisting) {
      throw new Error('Profile already exists');
    }

    await db.insert(profiles).values({
      bio,
      website,
      gender,
      photo: filename,
      userId: id,
    });

    return true;
  } catch (error) {
    throw error;
  }
}

export async function updateProfile(
  updateProfileCredentialDto: UpdateProfileCredentialDto,
  req: NextRequest
): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const { bio, website, gender, photo } = updateProfileCredentialDto;

    await db
      .update(profiles)
      .set({
        bio,
        website,
        gender,
        photo,
      })
      .where(eq(profiles.userId, id));

    return true;
  } catch (error) {
    throw error;
  }
}
