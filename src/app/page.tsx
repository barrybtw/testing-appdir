import AuthActions from '@/components/actions';
import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(OPTIONS);

  return (
    <main className='flex flex-col items-center justify-around min-h-screen p-24'>
      <h1>
        {session?.user?.name
          ? `Hello ${session?.user?.name}`
          : 'Welcome, sign in with Discord below!'}
      </h1>
      <AuthActions />
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name ?? 'Profile picture'}
          width={64}
          height={64}
        />
      )}
    </main>
  );
}
