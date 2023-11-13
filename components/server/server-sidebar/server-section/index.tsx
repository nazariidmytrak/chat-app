'use client';

import { useCallback } from 'react';
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

  const handleCreateChannel = useCallback(() => {
    onOpen('createChannel', { channelType });
  }, [onOpen, channelType]);

  const handleManageMembers = useCallback(() => {
    onOpen('members', { server });
  }, [onOpen, server]);

  return (
    <div className='flex items-center justify-between py-2'>
      <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>
        {label}
      </p>
      {!isGuest && isChannelSection && (
        <ServerSectionActionButton
          label='Create Channel'
          IconComponent={Plus}
          onClick={handleCreateChannel}
        />
      )}
      {isAdmin && isMemberSection && (
        <ServerSectionActionButton
          label='Manage Members'
          IconComponent={Settings}
          onClick={handleManageMembers}
        />
      )}
    </div>
  );
};

export default ServerSection;
