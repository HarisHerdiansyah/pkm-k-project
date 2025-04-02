import NextAuth, { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { db } from '@/lib/prisma';

const options: AuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const account = await db.users.findUnique({
          where: { email: credentials.email },
        });
        if (!account) return null;

        const isValidUser = await bcrypt.compare(
          credentials.password,
          account.password,
        );
        if (!isValidUser) return null;

        return {
          email: account.email,
          fullname: account.fullname,
          subscriptionStatus: account.subscription_status,
          currentPlan: account.subscription_plan,
          profileImage: account.profile_image_link,
          role: account.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.subscriptionStatus = user.subscriptionStatus;
        token.currentPlan = user.currentPlan;
        token.profileImage = user.profileImage;
        token.role = user.role;
      }
      return token;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.fullname = token.fullname;
        session.user.subscriptionStatus = token.subscriptionStatus;
        session.user.currentPlan = token.currentPlan;
        session.user.profileImage = token.profileImage;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
