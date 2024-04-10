import { NextRequest, NextResponse } from 'next/server';
import { upload } from '../../../../config/imageConverterConfig';
import { convertFormDataToPostCredentialDto } from '../utils/formConvert';
import { createPost } from './service/posts.service';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const filename = await upload(formData);

    const createPostCredentialDto =
      convertFormDataToPostCredentialDto(formData);

    await createPost(createPostCredentialDto, req, filename);
    return new NextResponse(
      JSON.stringify({
        message: 'Post created successfully',
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
