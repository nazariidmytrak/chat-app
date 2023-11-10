import { MemberRole } from '@prisma/client';

import ServerMember from './server-member';
import ServerSection from '../server-section';
import { MemberWithProfile, ServerWithMembersWithProfiles } from '@/types';

interface Props {
  role: MemberRole;
  server: ServerWithMembersWithProfiles;
  members: MemberWithProfile[];
}

const ServerMembers = ({ members, server, role }: Props) => {
  if (!members?.length) return null;
  return (
    <div className='mb-2'>
      <ServerSection
        server={server}
        role={role}
        label='Members'
        sectionType='members'
      />
      {members.map((member) => (
        <ServerMember key={member.id} server={server} member={member} />
      ))}
    </div>
  );
};

export default ServerMembers;
