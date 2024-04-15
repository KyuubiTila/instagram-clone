import { NextRequest, NextResponse } from 'next/server';
import {
  createComment,
  deleteComment,
  getAllIndividualPostComments,
  updateComment,
} from '../service/comments.service';

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: number } }
): Promise<NextResponse> {
  try {
    const createCommentDto = await req.json();
    const { postId } = params;

    await createComment(createCommentDto, req, postId);

    return new NextResponse(
      JSON.stringify({
        message: 'Comment created successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 401 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { postId: number } }
): Promise<NextResponse> {
  try {
    const updateCommentDto = await req.json();
    const { postId: commenentId } = params;

    await updateComment(updateCommentDto, req, commenentId);

    return new NextResponse(
      JSON.stringify({
        message: 'Comment updated successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 401 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { postId: number } }
): Promise<NextResponse> {
  try {
    const { postId: commenentId } = params;

    await deleteComment(req, commenentId);

    return new NextResponse(
      JSON.stringify({
        message: 'Comment deleted successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 401 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { postId: number } }
): Promise<NextResponse> {
  try {
    const { postId } = params;

    const comments = await getAllIndividualPostComments(req, postId);

    return new NextResponse(
      JSON.stringify({
        message: 'Comments for post fetched successfully',
        success: true,
        comments,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 401 }
    );
  }
}
