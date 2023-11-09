import { Server, Member, Profile } from '@prisma/client';
import { LucideIcon } from 'lucide-react';

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type MemberWithProfile = Member & {
  profile: Profile;
};

export type CustomMenuItemProps = {
  text: string;
  Icon: LucideIcon;
  variant?: 'red' | 'indigo';
  onClick?: () => {};
};
