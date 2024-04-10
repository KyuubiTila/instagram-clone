import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { profiles, users } from '@/db/schema';
import { db } from '@/db';
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

    const { bio, website, gender, image } = profileCredentialDto;

    if (!bio || !website || !gender || !image) {
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
      image: filename,
      userId: id,
    });

    return true;
  } catch (error) {
    throw error;
  }
}

export async function updateProfile(
  updateProfileCredentialDto: UpdateProfileCredentialDto,
  req: NextRequest,
  filename: string
): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const { bio, website, gender, updatedAt } = updateProfileCredentialDto;

    const [isProfileNotExisting] = await db
      .select()
      .from(profiles)
      .where(eq(profiles.userId, id));

    if (!isProfileNotExisting) {
      throw new Error('create a profile first');
    }
    await db
      .update(profiles)
      .set({
        bio,
        website,
        gender,
        image: filename,
        updatedAt,
      })
      .where(eq(profiles.userId, id));

    return true;
  } catch (error) {
    throw error;
  }
}

export async function deleteProfile(req: NextRequest): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const [isUserExisting] = await db
      .select()
      .from(users)
      .where(eq(users.id, id));

    if (!isUserExisting) {
      throw new Error('you can not delete this profile, it is not yours');
    }

    await db.delete(users).where(eq(users.id, id));

    return true;
  } catch (error) {
    throw error;
  }
}

export async function getIndividualProfile(req: NextRequest, id: number) {
  try {
    await verifyToken(req);

    const [isUserExisting] = await db
      .select()
      .from(profiles)
      .where(eq(profiles.userId, id));

    if (!isUserExisting) {
      throw new Error('profile with this id does not exist');
    }

    return isUserExisting;
  } catch (error) {
    throw error;
  }
}
