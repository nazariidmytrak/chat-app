import { MemberWithProfile } from '@/types';

export const filterMembersByProfileId = (
  members: MemberWithProfile[],
  profileId: string
) => {
  return members.filter((member) => member.profileId !== profileId);
};
