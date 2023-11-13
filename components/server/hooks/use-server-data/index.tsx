import { Channel, Member, MemberRole, Profile } from '@prisma/client';

import { currentProfile } from '@/lib/current-profile';
import { fetchServerWithDetails } from '@/app/api/server-queries';
import { getChannelData } from '@/components/server/helpers';
import { ChannelDataProps } from '@/components/server/interface';
import { MemberWithProfile, ServerWithMembersWithProfiles } from '@/types';

const useServerData = async (
  serverId: string
): Promise<{
  server: ServerWithMembersWithProfiles;
  profile: Profile;
  members: MemberWithProfile[];
  channels: Channel[];
  channelData: ChannelDataProps[];
  role: MemberRole;
}> => {
  const profile = await currentProfile();
  const server = await fetchServerWithDetails(serverId);

  if (!server || !profile) {
    throw new Error('Server or profile not found');
  }
  const members = server.members;

  const { channelDataByType, role, membersData } = getChannelData(
    server.channels,
    profile.id,
    members
  );

  const channelData = channelDataByType.map(({ label, channelData }) => ({
    label,
    type: 'channel',
    data: channelData,
  }));
  
  channelData.push({
    label: 'Members',
    type: 'member',
    data: membersData,
  });

  return {
    server,
    members,
    profile,
    channels: server.channels,
    channelData,
    role,
  };
};

export default useServerData;
