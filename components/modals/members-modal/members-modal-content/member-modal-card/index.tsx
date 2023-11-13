import { UserAvatar } from './user-avatar';
import Icon from '@/components/icons';

type Member = {
  profile: {
    imageUrl: string;
    name: string;
    email: string;
  };
  role: 'GUEST' | 'MODERATOR' | 'ADMIN';
};

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className='flex items-center gap-x-2 mb-6 relative'>
      <UserAvatar src={member.profile.imageUrl} />

      <div className='flex flex-col gap-y-1'>
        <div className='flex items-center gap-x-1 text-xs font-semibold'>
          {member.profile.name}
          <Icon type={member.role} />
        </div>
        <p className='text-xs text-zinc-500'>{member.profile.email}</p>
      </div>
    </div>
  );
};

export default MemberCard;
