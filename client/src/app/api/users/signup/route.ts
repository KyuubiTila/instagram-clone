import { NextRequest, NextResponse } from 'next/server';
import { signup } from './signup.service';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    if (!username || !email || !password) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing input field' }),
        { status: 400 }
      );
    }

    const savedUser = await signup(username, email, password);

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
