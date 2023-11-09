import { Channel } from '@prisma/client';

import { filterChannels } from '../filter-channels';
import { filterMembersByProfileId } from '../filter-members';
import { findRoleByProfileId } from '../find-role';
import { MemberWithProfile } from '@/types';
import { mapChannelData } from '../map-channel-data';
import { mapMemberData } from '../map-member-data';

export const getChannelData = (
  channels: Channel[],
  profileId: string,
  members: MemberWithProfile[]
) => {
  const { textChannels, audioChannels, videoChannels } =
    filterChannels(channels);
  const filteredMembers = filterMembersByProfileId(members, profileId);
  const role = findRoleByProfileId(members, profileId);

  const textChannelData = textChannels.map(mapChannelData);
  const audioChannelData = audioChannels.map(mapChannelData);
  const videoChannelData = videoChannels.map(mapChannelData);
  const membersData = filteredMembers.map(mapMemberData);

  return {
    textChannelData,
    audioChannelData,
    videoChannelData,
    membersData,
    role,
  };
};
