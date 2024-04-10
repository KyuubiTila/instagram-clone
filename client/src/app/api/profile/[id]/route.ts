import { NextRequest, NextResponse } from 'next/server';
import { getIndividualProfile } from '../service/profile.service';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    const fetchedProfile = await getIndividualProfile(req, id);

    return new NextResponse(
      JSON.stringify({
        message: 'Profile fetched successfully',
        success: true,
        fetchedProfile,
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
