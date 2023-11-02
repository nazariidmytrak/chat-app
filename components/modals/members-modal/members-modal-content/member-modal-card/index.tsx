import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';
import { UserAvatar } from './user-avatar';

type Member = {
  profile: {
    imageUrl: string;
    name: string;
    email: string;
  };
  role: 'GUEST' | 'MODERATOR' | 'ADMIN';
};

const roleIconMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className='h-4 w-4 ml-2 text-indigo-500' />,
  ADMIN: <ShieldAlert className='h-4 w-4 text-rose-500' />,
};

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className='flex items-center gap-x-2 mb-6 relative'>
      <UserAvatar src={member.profile.imageUrl} />
      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center gap-x-1 text-xs font-semibold'>
          {member.profile.name}
          {roleIconMap[member.role]}
        </div>
        <p className='text-xs text-zinc-500'>{member.profile.email}</p>
      </div>
    </div>
  );
};

export default MemberCard;
