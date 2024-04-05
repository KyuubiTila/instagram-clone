import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default function generateToken(id: number, username: string): string {
  return jwt.sign({ id, username }, process.env.SECRET!, { expiresIn: '1h' });
}
