'use client';

import { Server } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';

import { UserAvatar } from '@/components/modals/members-modal/members-modal-content/member-modal-card/user-avatar';
import { cn } from '@/lib/utils';
import { MemberWithProfile } from '@/types';
import Icon from '@/components/icons';

interface Props {
  member: MemberWithProfile;
  server: Server;
}

const ServerMember = ({ member, server }: Props) => {
  const router = useRouter();
  const params = useParams();
  const buttonClasses = cn(
    `flex items-center gap-x-2 w-full group px-2 py-2 mb-1 rounded-md transition
    hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50`,
    params?.memberId === member.id && 'bg-zinc-700/20 dark:bg-zinc-700'
  );

  const textClasses = cn(
    'font-semibold transition text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300',
    params?.memberId === member.id &&
      'text-primary dark:text-zinc-200 dark:group-hover:text-white'
  );
  return (
    <button className={buttonClasses}>
      <UserAvatar
        src={member.profile.imageUrl}
        className='h-8 w-8 md:h-8 md:w-8'
      />
      <p className={textClasses}>{member.profile.name}</p>
      <Icon type={member.role} />
    </button>
  );
};

export default ServerMember;
