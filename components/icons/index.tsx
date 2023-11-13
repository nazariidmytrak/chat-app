import { ChannelType, MemberRole } from '@prisma/client';
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from 'lucide-react';

import { cn } from '@/lib/utils';
import ActionTooltip from '../actions/action-tooltip';

interface Props {
  type: ChannelType | MemberRole;
  className?: string;
}

const Icon = ({ type, className }: Props) => {
  let IconComponent;
  let tooltipLabel;
  switch (type) {
    case ChannelType.TEXT:
      IconComponent = Hash;
      tooltipLabel = 'Text';
      break;
    case ChannelType.AUDIO:
      IconComponent = Mic;
      tooltipLabel = 'Voice';
      break;
    case ChannelType.VIDEO:
      IconComponent = Video;
      tooltipLabel = 'Video';
      break;
    case MemberRole.MODERATOR:
      IconComponent = ShieldCheck;
      tooltipLabel = 'Moderator';
      className = 'text-indigo-500';
      break;
    case MemberRole.ADMIN:
      IconComponent = ShieldAlert;
      tooltipLabel = 'Admin';
      className = 'text-rose-500';
      break;
    default:
      return null;
  }
  return (
    <ActionTooltip label={tooltipLabel} side='right'>
      <IconComponent className={cn('h-4 w-4 flex-shrink-0', className)} />
    </ActionTooltip>
  );
};

export default Icon;
