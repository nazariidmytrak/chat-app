import { MemberRole, Profile, Server } from '@prisma/client';

import { currentProfile } from '@/lib/current-profile';
import { fetchServerWithDetails } from '@/app/api/server-queries';
import { getChannelData } from '@/components/server/helpers';
import { ChannelDataProps } from '@/components/server/interface';

const useServerData = async (
  serverId: string
): Promise<{
  server: Server;
  profile: Profile;
  channelData: ChannelDataProps[];
  role: MemberRole;
}> => {
  const profile = await currentProfile();
  const server = await fetchServerWithDetails(serverId);

  if (!server || !profile) {
    throw new Error('Server or profile not found');
  }
  const members = server.members;

  const {
    textChannelData,
    audioChannelData,
    videoChannelData,
    membersData,
    role,
  } = getChannelData(server.channels, profile.id, members);

  return {
    server,
    profile,
    channelData: [
      { label: 'Text Channels', type: 'channel', data: textChannelData },
      { label: 'Voice Channels', type: 'channel', data: audioChannelData },
      { label: 'Video Channels', type: 'channel', data: videoChannelData },
      { label: 'Members', type: 'member', data: membersData },
    ],
    role,
  };
};

export default useServerData;
