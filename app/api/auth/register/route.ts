import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@/lib/prisma';
import { ERROR, SUCCESS } from '@/lib/constants';
import { validateRequest, errorHandler } from '@/lib/utils';
import { registerSchema } from '@/lib/schema/auth';

export async function POST(req: Request) {
  const body = await req.json();
  const result = validateRequest(registerSchema, body);

  if (result?.error) return errorHandler(result.error);
  if (!result?.data) {
    return errorHandler({
      message: 'Data Unknown',
      status: ERROR.EXPECTATION_FAILED,
    });
  }

  const { fullname, email, password } = result.data;

  const existingUser = await db.users.findUnique({ where: { email } });
  if (existingUser) {
    return errorHandler({
      message: 'Account is already registered',
      status: ERROR.CONFLICT,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.users.create({
    data: { fullname, email, password: hashedPassword },
  });

  return NextResponse.json(
    { message: 'Account successfully registered' },
    { status: SUCCESS.MUTATION },
  );
}
