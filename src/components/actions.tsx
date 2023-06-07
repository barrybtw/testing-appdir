'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthActions() {
  const session = useSession();
  console.log(session);

  return (
    <>
      {session.status === 'loading' && <p>Loading...</p>}
      {session.status === 'authenticated' && (
        <button onClick={() => void signOut()}>Logout</button>
      )}
      {session.status === 'unauthenticated' && (
        <button onClick={() => void signIn()}>Login</button>
      )}
    </>
  );
}
