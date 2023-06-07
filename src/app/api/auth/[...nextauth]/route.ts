import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import DiscordProvider from 'next-auth/providers/discord';
import { env } from '@/lib/env';
import { db } from '@/lib/db';
import { Adapter } from 'next-auth/adapters';

export const OPTIONS: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENTID,
      clientSecret: env.DISCORD_CLIENTSECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db) as Adapter,
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
