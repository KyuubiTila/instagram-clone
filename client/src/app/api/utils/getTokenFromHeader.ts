import { NextRequest } from 'next/server';

export default function getTokenFromHeader(req: NextRequest): string {
  const authorizationHeader = req.headers?.get('authorization');
  if (!authorizationHeader) {
    throw new Error('Authorization header is missing');
  }

  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    throw new Error('Token is missing');
  }
  return token;
}
