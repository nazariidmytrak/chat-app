import { RoleIconsMap } from '@/components/icons';
import { MemberWithProfile } from '@/types';

export const mapMemberData = (member: MemberWithProfile) => ({
  id: member.id,
  name: member.profile.name,
  icon: RoleIconsMap[member.role],
});
