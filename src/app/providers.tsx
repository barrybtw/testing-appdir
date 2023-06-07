'use client';

import type { Session } from 'next-auth';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
  session?: Session;
};

export default function Providers({ children }: Props) {
  return (
    <SessionProvider refetchInterval={60} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  );
}
