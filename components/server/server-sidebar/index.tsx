import { redirect } from 'next/navigation';
import { ChannelType } from '@prisma/client';

import ServerHeader from './server-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import ServerSearch from './server-search';
import useServerData from '../hooks/use-server-data';
import { ServerWithMembersWithProfiles } from '@/types';
import { Separator } from '@/components/ui/separator';
import ServerSection from './server-section';
import ServerChannel from './server-channels/server-channel';
import ServerMember from './server-members/server-member';
import ServerChannels from './server-channels';
import ServerMembers from './server-members';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
  const {
    server,
    profile,
    channelData,
    role,
    members,
    textChannels,
    audioChannels,
    videoChannels,
  } = await useServerData(serverId);

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
        <Separator className='my-2 rounded-md bg-zinc-200 dark:bg-zinc-700' />
        <ServerChannels
          channels={textChannels}
          role={role}
          server={server}
          channelType={ChannelType.TEXT}
        />
        <ServerChannels
          channels={audioChannels}
          role={role}
          server={server}
          channelType={ChannelType.AUDIO}
        />
        <ServerChannels
          channels={videoChannels}
          role={role}
          server={server}
          channelType={ChannelType.VIDEO}
        />
        <ServerMembers members={members} server={server} role={role} />
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
