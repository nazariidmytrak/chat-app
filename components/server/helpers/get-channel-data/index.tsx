import { Channel } from '@prisma/client';

import { filterMembersByProfileId } from '../filter-members';
import { findRoleByProfileId } from '../find-role';
import { MemberWithProfile } from '@/types';
import { mapChannelData } from '../map-channel-data';
import { mapMemberData } from '../map-member-data';
import { channelTypes, filterChannelsByType } from '../filter-channels-by-type';

export const getChannelData = (
  channels: Channel[],
  profileId: string,
  members: MemberWithProfile[]
) => {
  const filteredMembers = filterMembersByProfileId(members, profileId);
  const role = findRoleByProfileId(members, profileId);

  const membersData = filteredMembers.map(mapMemberData);
  const channelDataByType = filterChannelsByType(channels).map(
    ({ channelType, filteredChannels }) => ({
      channelType,
      label: channelTypes[channelType],
      channelData: filteredChannels.map(mapChannelData),
    })
  );

  return {
    channelDataByType,
    membersData,
    role,
  };
};
