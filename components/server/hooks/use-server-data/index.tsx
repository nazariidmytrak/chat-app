import { Channel, Member, MemberRole, Profile } from '@prisma/client';

import { currentProfile } from '@/lib/current-profile';
import { fetchServerWithDetails } from '@/app/api/server-queries';
import { filterChannels, getChannelData } from '@/components/server/helpers';
import { ChannelDataProps } from '@/components/server/interface';
import { MemberWithProfile, ServerWithMembersWithProfiles } from '@/types';

const useServerData = async (
  serverId: string
): Promise<{
  server: ServerWithMembersWithProfiles;
  profile: Profile;
  members: MemberWithProfile[];
  textChannels: Channel[];
  videoChannels: Channel[];
  audioChannels: Channel[];
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

  const { textChannels, videoChannels, audioChannels } = filterChannels(
    server.channels
  );

  const channelData = [
    { label: 'Text Channels', type: 'channel', data: textChannelData },
    { label: 'Voice Channels', type: 'channel', data: audioChannelData },
    { label: 'Video Channels', type: 'channel', data: videoChannelData },
    { label: 'Members', type: 'member', data: membersData },
  ];

  return {
    server,
    members,
    profile,
    textChannels,
    videoChannels,
    audioChannels,
    channelData,
    role,
  };
};

export default useServerData;
