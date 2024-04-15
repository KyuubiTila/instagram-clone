import { NextRequest } from 'next/server';
import CreateCommentDto from '../dto/createComment-credential.dto';
import verifyToken from '../../utils/verifyToken';
import { comments, posts } from '@/db/schema';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import UpdateCommentDto from '../dto/updateComment-credential.dto';

export async function createComment(
  createCommentDto: CreateCommentDto,
  req: NextRequest,
  postId: number
) {
  try {
    const { id } = await verifyToken(req);
    const { comment } = createCommentDto;

    if (!comment) {
      throw new Error('Missing field, please fill comment field');
    }

    const [isPostExisting] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, postId));

    if (!isPostExisting) {
      throw new Error('post with the identity provided does not exist');
    }

    await db.insert(comments).values({
      comment,
      author: id,
      post: postId,
    });

    return true;
  } catch (error: any) {
    throw error;
  }
}

export async function updateComment(
  updateCommentDto: UpdateCommentDto,
  req: NextRequest,
  commentId: number
) {
  try {
    const { id } = await verifyToken(req);
    const { comment } = updateCommentDto;

    const now = new Date();

    if (!comment) {
      throw new Error('Missing field, please fill comment field');
    }

    const [isCommentExisting] = await db
      .select()
      .from(comments)
      .where(eq(comments.id, commentId));

    if (!isCommentExisting) {
      throw new Error('comment with the identity provided does not exist');
    }

    if (isCommentExisting.author !== id) {
      throw new Error('you can not update this comment, you did not create it');
    }

    await db
      .update(comments)
      .set({
        comment,
        updatedAt: now,
      })
      .where(eq(comments.id, commentId));

    return true;
  } catch (error: any) {
    throw error;
  }
}

export async function deleteComment(req: NextRequest, commentId: number) {
  try {
    const { id } = await verifyToken(req);

    const [isCommentExisting] = await db
      .select()
      .from(comments)
      .where(eq(comments.id, commentId));

    if (!isCommentExisting) {
      throw new Error('comment with the identity provided does not exist');
    }

    if (isCommentExisting.author !== id) {
      throw new Error('you can not delete this comment, you did not create it');
    }

    await db.delete(comments).where(eq(comments.id, commentId));

    return true;
  } catch (error: any) {
    throw error;
  }
}

export async function getAllIndividualPostComments(
  req: NextRequest,
  postId: number
) {
  try {
    await verifyToken(req);

    const areCommentsExisting = await db.query.comments.findMany({
      where: eq(comments.post, postId),
      with: {
        author: true,
      },
    });

    return areCommentsExisting;
  } catch (error: any) {
    throw error;
  }
}
