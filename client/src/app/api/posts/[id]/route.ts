import { NextRequest, NextResponse } from 'next/server';
import { upload } from '../../../../../config/imageConverterConfig';
import { convertFormDataToUpdatePostCredentialDto } from '../../utils/formConvert';
import {
  deletePost,
  getIndividualPost,
  updatePost,
} from '../service/posts.service';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const formData = await req.formData();
    const filename = await upload(formData);

    const updateProfileCredentialDto =
      convertFormDataToUpdatePostCredentialDto(formData);

    await updatePost(updateProfileCredentialDto, req, filename, id);
    return new NextResponse(
      JSON.stringify({
        message: 'Post updated successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    await deletePost(req, id);
    return new NextResponse(
      JSON.stringify({
        message: 'Post deleted successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    const post = await getIndividualPost(req, id);
    return new NextResponse(
      JSON.stringify({
        message: 'Post fetched successfully',
        success: true,
        post,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
