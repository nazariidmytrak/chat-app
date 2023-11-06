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

export const generateMenuItems = (
  onOpen?: any,
  server?: Server,
  role?: MemberRole
): (CustomMenuItemProps | 'separator')[] => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  const isGuest = role === MemberRole.GUEST;

  const menuOptions: Record<string, CustomMenuItemProps> = {
    invite: {
      text: 'Invite people',
      Icon: UserPlus,
      variant: 'indigo',
      onClick: () => onOpen('invite', { server }),
    },
    settings: {
      text: 'Server Settings',
      Icon: Settings,
      onClick: () => onOpen('editServer', { server }),
    },
    manageMembers: {
      text: 'Manage Members',
      Icon: UsersIcon,
      onClick: () => onOpen('members', { server }),
    },
    createChannel: {
      text: 'Create Channel',
      Icon: PlusCircle,
      onClick: () => onOpen('createChannel', { server }),
    },
    deleteServer: {
      text: 'Delete Server',
      Icon: Trash,
      variant: 'red',
      onClick: () => onOpen('deleteServer', { server }),
    },
    leaveServer: {
      text: 'Leave Server',
      Icon: LogOut,
      variant: 'red',
      onClick: () => onOpen('leaveServer', { server }),
    },
  };

  const order = isAdmin
    ? [
        'invite',
        'settings',
        'manageMembers',
        'createChannel',
        'separator',
        'deleteServer',
      ]
    : isModerator
    ? ['invite', 'createChannel', 'separator', 'leaveServer']
    : ['leaveServer'];

  return order.map((item) => (item === 'separator' ? item : menuOptions[item]));
};
