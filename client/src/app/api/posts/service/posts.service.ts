import { NextRequest } from 'next/server';
import CreatePostCredentialDto from '../dto/createPost-credential.dto';
import verifyToken from '../../utils/verifyToken';
import { db } from '@/db';
import { posts } from '@/db/schema';
import UpdatePostCredentialDto from '../dto/updatePost-credential.dto';
import { eq } from 'drizzle-orm';

export async function createPost(
  createPostCredentialDto: CreatePostCredentialDto,
  req: NextRequest,
  filename: string
): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const { image, text } = createPostCredentialDto;

    if (!image || !text) {
      throw new Error('Missing field, please fill all inputs');
    }

    await db.insert(posts).values({
      text,
      image: filename,
      author: id,
    });

    return true;
  } catch (error) {
    throw error;
  }
}

export async function updatePost(
  updateProfileCredentialDto: UpdatePostCredentialDto,
  req: NextRequest,
  filename: string,
  postId: number
): Promise<boolean> {
  try {
    const { id } = verifyToken(req);

    const { text, updatedAt } = updateProfileCredentialDto;

    const [isPostExisting] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, postId));

    if (!isPostExisting) {
      throw new Error('post with the id does not exist');
    }

    if (isPostExisting.author !== id) {
      throw new Error('You cannot update this tweet, you did not create it');
    }

    await db
      .update(posts)
      .set({
        text,
        image: filename,
        updatedAt,
      })
      .where(eq(posts.id, postId));

    return true;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(
  req: NextRequest,
  postId: number
): Promise<boolean> {
  try {
    const { id } = await verifyToken(req);

    const [isPostExisting] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, postId));

    if (!isPostExisting) {
      throw new Error('post with this id does nto exist');
    }

    if (isPostExisting.author !== id) {
      throw new Error('you can not delete this post, you did not create it');
    }

    await db.delete(posts).where(eq(posts.id, postId));

    return true;
  } catch (error) {
    throw error;
  }
}

export async function getIndividualPost(req: NextRequest, postId: number) {
  try {
    await verifyToken(req);

    const isPostExisting = await db.query.posts.findFirst({
      where: eq(posts.id, postId),
      with: {
        author: true,
      },
    });

    if (!isPostExisting) {
      throw new Error('post with this id does not exist');
    }

    return isPostExisting;
  } catch (error) {
    throw error;
  }
}

export async function getAllPosts(req: NextRequest) {
  try {
    await verifyToken(req);

    const arePostsExisting = await db.query.posts.findMany({
      with: {
        author: true,
      },
    });

    return arePostsExisting;
  } catch (error) {
    throw error;
  }
}
