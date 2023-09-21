import { redirect } from 'next/navigation';

import { currentProfile } from '@/lib/current-profile';
import ServerHeader from '../server-header';
import { fetchServerWithDetails } from '@/app/api/server-queries';
import {
  filterChannels,
  filterMembersByProfileId,
  findRoleByProfileId,
} from '../helpers';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
  const profile = await currentProfile();
  const server = await fetchServerWithDetails(serverId);

  if (!profile || !server) {
    return redirect('/');
  }

  const { textChannels, audioChannels, videoChannels } = filterChannels(
    server.channels
  );
  const members = filterMembersByProfileId(server.members, profile.id);
  const role = findRoleByProfileId(server.members, profile.id);

  return (
    <div className='flex flex-col h-full w-full text-primary bg-[#f2f3f5] dark:bg-[#2b2d31]'>
      <ServerHeader server={server} role={role} />
    </div>
  );
};

export default ServerSidebar;
