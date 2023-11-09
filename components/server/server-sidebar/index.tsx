import { redirect } from 'next/navigation';

import ServerHeader from './server-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import ServerSearch from './server-search';
import useServerData from '../hooks/use-server-data';
import { ServerWithMembersWithProfiles } from '@/types';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
  const { server, profile, channelData, role } = await useServerData(serverId);

  if (!profile || !server) {
    return redirect('/');
  }

  return (
    <div className=' hidden md:flex flex-col h-full w-full text-primary bg-[#f2f3f5] dark:bg-[#2b2d31]'>
      <ServerHeader
        server={server as ServerWithMembersWithProfiles}
        role={role}
      />
      <ScrollArea className='flex-1 px-3'>
        <div className='mt-2'>
          <ServerSearch channelData={channelData} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
