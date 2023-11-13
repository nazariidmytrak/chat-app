'use client';

import { useParams, useRouter } from 'next/navigation';
import { Channel, MemberRole, Server } from '@prisma/client';
import { Edit, Lock, Trash } from 'lucide-react';

import { cn } from '@/lib/utils';
import ActionTooltip from '@/components/actions/action-tooltip';
import Icon from '@/components/icons';
import ServerChannelActionButton from './server-channel-action-button';

interface Props {
  role?: MemberRole;
  channel: Channel;
}

const ServerChannel = ({ channel, role }: Props) => {
  const router = useRouter();
  const params = useParams();
  const isChannelGeneral = channel.name === 'general';
  const isGuest = role === MemberRole.GUEST;

  const buttonClasses = cn(
    `group flex items-center gap-x-2 w-full px-2 py-2 mb-1 rounded-md transition 
    hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50`,
    params?.channelId === channel.id && 'bg-zinc-700/20 dark:bg-zinc-700'
  );
  const textClasses = cn(
    `truncate font-semibold text-sm text-zinc-500 max-w-[120px]
    group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 `,
    params?.channelId === channel.id &&
      'text-primary dark:text-zinc-200 dark:group-hover:text-white'
  );

  const channelName =
    channel.name.length > 20 ? (
      <ActionTooltip label={channel.name} side='right'>
        <p className={textClasses}>{channel.name}</p>
      </ActionTooltip>
    ) : (
      <p className={textClasses}>{channel.name}</p>
    );

  return (
    <button className={buttonClasses} onClick={() => {}}>
      <Icon
        type={channel.type}
        className='flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400'
      />
      {channelName}
      {!isChannelGeneral && !isGuest && (
        <div className='flex items-center ml-auto gap-x-2'>
          <ServerChannelActionButton label='Edit' IconComponent={Edit} />
          <ServerChannelActionButton label='Delete' IconComponent={Trash} />
        </div>
      )}
      {isChannelGeneral && (
        <Lock className='ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400' />
      )}
    </button>
  );
};

export default ServerChannel;
