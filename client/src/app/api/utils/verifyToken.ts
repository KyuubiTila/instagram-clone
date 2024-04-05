import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import getTokenFromHeader from './getTokenFromHeader';
import { NextRequest } from 'next/server';

dotenv.config();

export default function verifyToken(req: NextRequest): any {
  try {
    const token = getTokenFromHeader(req);

    const decoded = jwt.verify(token, process.env.SECRET!);

    return decoded;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
