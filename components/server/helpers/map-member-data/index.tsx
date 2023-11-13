import { MemberWithProfile } from '@/types';
import Icon from '@/components/icons';

export const mapMemberData = (member: MemberWithProfile) => ({
  id: member.id,
  name: member.profile.name,
  icon: <Icon type={member.role} />,
});
