import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { redirectToSignIn } from '@clerk/nextjs';

import { currentProfile } from '@/lib/current-profile';
import ServerSidebar from '@/components/server/server-sidebar';
import { fetchServerByIdForMember } from '@/app/api/server-queries';

interface Props {
  children: ReactNode;
  params: { serverId: string };
}

const ServerIdLayout = async ({ children, params }: Props) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await fetchServerByIdForMember(profile, params.serverId);

  if (!server) {
    return redirect('/');
  }

  return (
    <div className='h-full'>
      <div className='fixed h-full w-60 z-20 flex-col inset-y-0 md:flex'>
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className='h-full md:pl-60'>{children}</main>
    </div>
  );
};

export default ServerIdLayout;
