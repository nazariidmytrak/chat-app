'use client';

import { MemberRole, ChannelType } from '@prisma/client';
import { Plus, Settings } from 'lucide-react';

import { useModal } from '@/hooks/use-modal-store';
import { ServerWithMembersWithProfiles } from '@/types';
import ServerSectionActionButton from './server-section-action-button';

interface Props {
  label: string;
  role?: MemberRole;
  sectionType: 'channels' | 'members';
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: Props) => {
  const { onOpen } = useModal();
  const isGuest = role === MemberRole.GUEST;
  const isAdmin = role === MemberRole.ADMIN;
  const isChannelSection = sectionType === 'channels';
  const isMemberSection = sectionType === 'members';
  const iconStyles = 'h-4 w-4';

  return (
    <div className='flex items-center justify-between py-2'>
      <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
        {label}
      </p>
      {!isGuest && isChannelSection && (
        <ServerSectionActionButton
          label='Create Channel'
          side='top'
          icon={<Plus className={iconStyles} />}
          onClick={() => onOpen('createChannel', { channelType })}
        />
      )}
      {isAdmin && isMemberSection && (
        <ServerSectionActionButton
          label='Manage Members'
          side='top'
          icon={<Settings className={iconStyles} />}
          onClick={() => onOpen('members', { server })}
        />
      )}
    </div>
  );
};

export default ServerSection;
