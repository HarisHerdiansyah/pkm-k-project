import { LoginForm } from '@/components/auth';

export default function Login() {
  return (
    <div className='flex min-h-screen max-w-screen items-center justify-center bg-[url(/background/pastel-bg.jpg)] p-4'>
      <LoginForm />
    </div>
  );
}
