import { NextResponse } from 'next/server';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z, ZodError } from 'zod';
import { fromError } from 'zod-validation-error';
import { ERROR } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toIDR(n: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(n);
}

export type ValidationError = {
  message: string;
  details?: string;
  status: number;
};

export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  object: unknown,
): { data: T | null; error: ValidationError | null } | void {
  try {
    const data = schema.parse(object);
    return { data, error: null };
  } catch (e) {
    if (e instanceof ZodError) {
      const validationError = fromError(e);
      return {
        data: null,
        error: {
          message: 'Validation Error',
          details: validationError.toString(),
          status: ERROR.BAD_REQUEST,
        },
      };
    }
  }
  return;
}

export function errorHandler(error: {
  message: string;
  details?: unknown;
  status: number;
}) {
  return NextResponse.json(
    {
      message: error.message,
      details: error.details || undefined,
    },
    { status: error.status },
  );
}
