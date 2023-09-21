import {
  UserPlus,
  Settings,
  UsersIcon,
  PlusCircle,
  Trash,
  LogOut,
} from 'lucide-react';

import { CustomMenuItemProps } from '@/types';

export const generateMenuItems = (
  isModerator: boolean,
  isAdmin: boolean
): (CustomMenuItemProps | 'separator')[] => {
  const menuItems: (CustomMenuItemProps | 'separator')[] = [
    isModerator && {
      text: 'Invite people',
      Icon: UserPlus,
      variant: 'indigo',
    },
    isAdmin && {
      text: 'Server Settings',
      Icon: Settings,
    },
    isAdmin && {
      text: 'Manage Members',
      Icon: UsersIcon,
    },
    isModerator && {
      text: 'Create Channel',
      Icon: PlusCircle,
    },
    isModerator ? 'separator' : ('separator' as 'separator'),
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
