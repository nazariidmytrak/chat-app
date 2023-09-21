import { Member } from '@prisma/client';

export const filterMembersByProfileId = (
  members: Member[],
  profileId: string
) => {
  return members.filter((member) => member.profileId !== profileId);
};
