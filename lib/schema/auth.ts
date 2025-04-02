import { z } from 'zod';

export const registerSchema = z
  .object({
    fullname: z
      .string({
        required_error: 'Fullname is required',
        invalid_type_error: 'Fullname must be a string',
      })
      .min(10, {
        message: 'Fullname must have at least 10 characters',
      })
      .max(100, {
        message: 'Fullname cannot be more than 100 characters',
      }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      })
      .email({
        message: 'String must be an valid email',
      }),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(16, 'Password must not exceed 16 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      )
      .regex(/\d/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Confirm Password must match with Password',
    path: ['confirmPassword'],
  });
