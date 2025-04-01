'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, FormEvent } from 'react';
import { useImmer } from 'use-immer';
import LoaderOverlay from '@/components/LoaderOverlay';
import { Payload, registerUser } from '@/services/auth';

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

    setState((draft) => {
      draft.loading = true;
    });

    await registerUser(state.data);

    setState((draft) => {
      draft.loading = false;
    });
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
        {[
          { label: 'Full Name', id: 'fullname', type: 'text' },
          { label: 'Email', id: 'email', type: 'email' },
          { label: 'Password', id: 'password', type: 'password' },
          {
            label: 'Confirm Password',
            id: 'confirmPassword',
            type: 'password',
          },
        ].map(({ label, id, type }) => (
          <div key={id} className='flex flex-col gap-y-1.5'>
            <label htmlFor={id}>{label}:</label>
            <input
              className='rounded-lg border border-gray-200 px-4 py-2 focus:outline-none'
              autoComplete='off'
              type={type}
              name={id}
              id={id}
              value={state.data[id as keyof Payload]}
              onChange={onChange}
              required
            />
          </div>
        ))}
      </section>
      <p className='my-10 text-center text-sm'>
        Already have an account?{' '}
        <Link href='/login' className='cursor-pointer hover:underline'>
          Login here
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
