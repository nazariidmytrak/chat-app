import { Member } from '@prisma/client';

export const findRoleByProfileId = (members: Member[], profileId: string) => {
  const member = members.find((member) => member.profileId === profileId);
  return member?.role;
};
