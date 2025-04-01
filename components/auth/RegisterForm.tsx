'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, FormEvent } from 'react';
import { useImmer } from 'use-immer';
import LoaderOverlay from '@/components/LoaderOverlay';

type Payload = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [state, setState] = useImmer<{ loading: boolean; data: Payload }>({
    loading: false,
    data: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((draft) => {
      draft.data[e.target.id as keyof Payload] = e.target.value;
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setState((draft) => {
        draft.loading = true;
      });
      await fetch('/api/auth/register', {
        method: 'post',
        body: JSON.stringify(state),
      });
    } catch (e) {
      throw e;
    } finally {
      setState((draft) => {
        draft.loading = false;
      });
    }
  };

  if (state.loading) return <LoaderOverlay loading={state.loading} />;

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
          <label htmlFor='fullname'>Full Name:</label>
          <input
            className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
            autoComplete='off'
            type='text'
            name='fullname'
            id='fullname'
            value={state.data.fullname}
            onChange={onChange}
            required
          />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <label htmlFor='email'>Email:</label>
          <input
            className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
            autoComplete='off'
            type='email'
            name='email'
            id='email'
            value={state.data.email}
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
            value={state.data.password}
            onChange={onChange}
            required
          />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <label htmlFor='confirmPassword'>Password:</label>
          <input
            className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
            autoComplete='off'
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={state.data.confirmPassword}
            onChange={onChange}
            required
          />
        </div>
      </section>
      <p className='my-10 text-center text-sm'>
        Already have an account?{' '}
        <Link href='/login'>
          <span className='cursor-pointer hover:underline'>Login here</span>
        </Link>
      </p>
      <button
        className='w-full cursor-pointer rounded-lg bg-purple-400 hover:bg-purple-500 p-2 text-white'
        type='submit'
      >
        Register
      </button>
    </form>
  );
}
