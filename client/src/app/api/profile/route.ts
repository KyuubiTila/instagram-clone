import { NextRequest, NextResponse } from 'next/server';
import {
  createProfile,
  deleteProfile,
  updateProfile,
} from './service/profile.service';
import { upload } from '../../../../config/imageConverterConfig';
import {
  convertFormDataToProfileCredentialDto,
  convertFormDataToUpdateProfileCredentialDto,
} from '../utils/formConvert';

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
    const formData = await req.formData();
    const filename = await upload(formData);

    const upadateProfileCredentialDto =
      convertFormDataToUpdateProfileCredentialDto(formData);

    await updateProfile(upadateProfileCredentialDto, req, filename);

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

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    await deleteProfile(req);

    return new NextResponse(
      JSON.stringify({
        message: 'Profile deleted successfully',
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
