import { NextRequest, NextResponse } from 'next/server';
import { signInUser } from './service/signin.service';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const signInCredentialDto = await req.json();

    const user = await signInUser(signInCredentialDto);

    return new NextResponse(
      JSON.stringify({
        message: 'User signed in successfully',
        success: true,
        token: user,
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
