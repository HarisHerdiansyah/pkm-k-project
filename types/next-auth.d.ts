import { Role, CustomerSubsStatus, SubsPlan } from '@prisma/client';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    email: string;
    fullname: string;
    subscriptionStatus: CustomerSubsStatus;
    currentPlan: SubsPlan | null;
    profileImage: string | null;
    role: Role;
  }

  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    email: string;
    fullname: string;
    subscriptionStatus: CustomerSubsStatus;
    currentPlan: SubsPlan | null;
    profileImage: string | null;
    role: Role;
  }
}
