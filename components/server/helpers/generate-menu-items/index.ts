import { MemberRole, Server } from '@prisma/client';
import {
  UserPlus,
  Settings,
  UsersIcon,
  PlusCircle,
  Trash,
  LogOut,
} from 'lucide-react';

import { CustomMenuItemProps } from '@/types';
import { useModal } from '@/hooks/use-modal-store';

export const generateMenuItems = (
  server?: Server,
  role?: MemberRole
): (CustomMenuItemProps | 'separator')[] => {
  const { onOpen } = useModal();
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  const isGuest = role === MemberRole.GUEST;

  const menuItems: (CustomMenuItemProps | 'separator')[] = [
    isModerator && {
      text: 'Invite people',
      Icon: UserPlus,
      variant: 'indigo',
      onClick: () => {
        onOpen('invite', { server });
      },
    },
    isAdmin && {
      text: 'Server Settings',
      Icon: Settings,
      onClick: () => {
        onOpen('editServer', { server });
      },
    },
    isAdmin && {
      text: 'Manage Members',
      Icon: UsersIcon,
    },
    isModerator && {
      text: 'Create Channel',
      Icon: PlusCircle,
    },
    !isGuest && 'separator',
    isAdmin
      ? {
          text: 'Delete Server',
          Icon: Trash,
          variant: 'red',
        }
      : {
          text: 'Leave Server',
          Icon: LogOut,
          variant: 'red',
        },
  ].filter(Boolean) as (CustomMenuItemProps | 'separator')[];

  return menuItems;
};
