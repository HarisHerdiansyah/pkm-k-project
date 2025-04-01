'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn('credentials', {
      ...credentials,
      redirect: false,
    });
  };

  return (
    <form
      className='max-w-[500px] flex-auto rounded-lg bg-white p-6'
      onSubmit={onSubmit}
    >
      <Image
        src='/logo/logo.png'
        alt='Logo Mufiko'
        className='mx-auto mb-4'
        width={92}
        height={69}
      />
      <section className='space-y-4'>
        <div className='flex flex-col gap-y-1.5'>
          <label htmlFor='email'>Email:</label>
          <input
            className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
            autoComplete='off'
            type='email'
            name='email'
            id='email'
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <label htmlFor='password'>Password:</label>
          <input
            className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
            autoComplete='off'
            type='password'
            name='password'
            id='password'
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>
      </section>
      <p className='my-10 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <Link href='/register'>
          <span className='cursor-pointer hover:underline'>Register here</span>
        </Link>
      </p>
      <button
        className='w-full cursor-pointer rounded-lg bg-red-400 hover:bg-red-500 p-2 text-white'
        type='submit'
      >
        Login
      </button>
    </form>
  );
}
