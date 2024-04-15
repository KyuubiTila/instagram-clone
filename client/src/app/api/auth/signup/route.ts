import { NextRequest, NextResponse } from 'next/server';
import { signup } from './service/signup.service';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const signupCredentials = await req.json();

    const savedUser = await signup(signupCredentials);

    return new NextResponse(
      JSON.stringify({
        message: 'User registered successfully',
        success: true,
        savedUser,
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
