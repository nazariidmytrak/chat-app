import { ChannelType, MemberRole } from '@prisma/client';
import {
  TextChannelIcon,
  AudioChannelIcon,
  VideoChannelIcon,
} from './channel-icons';
import { ModeratorIcon, AdminIcon } from './role-icons';

export const ChannelIconsMap = {
  [ChannelType.TEXT]: <TextChannelIcon />,
  [ChannelType.AUDIO]: <AudioChannelIcon />,
  [ChannelType.VIDEO]: <VideoChannelIcon />,
};

export const RoleIconsMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ModeratorIcon />,
  [MemberRole.ADMIN]: <AdminIcon />,
};
