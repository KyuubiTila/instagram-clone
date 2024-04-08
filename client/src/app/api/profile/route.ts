import { NextRequest, NextResponse } from 'next/server';
import { createProfile, updateProfile } from './service/profile.service';
import convertFormDataToProfileCredentialDto from '../utils/formConvert';
import { upload } from '../../../../config/imageConverterConfig';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const filename = await upload(formData);

    const profileCredentialDto =
      convertFormDataToProfileCredentialDto(formData);

    await createProfile(profileCredentialDto, req, filename);
    return new NextResponse(
      JSON.stringify({
        message: 'Profile created successfully',
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

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  try {
    const upadateProfileCredentialDto = await req.json();

    await updateProfile(upadateProfileCredentialDto, req);

    return new NextResponse(
      JSON.stringify({
        message: 'Profile updated successfully',
        success: true,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      })
    );
  }
}
