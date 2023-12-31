import { Channel, ChannelType, MemberRole } from '@prisma/client';

import ServerChannel from './server-channel';
import ServerSection from '../server-section';
import { ServerWithMembersWithProfiles } from '@/types';

interface Props {
  channels: Channel[];
  role: MemberRole;
  server: ServerWithMembersWithProfiles;
  channelType: ChannelType;
  label: string;
}

const ServerChannels = ({
  channels,
  role,
  server,
  channelType,
  label,
}: Props) => {
  if (!channels?.length) return null;

  return (
    <div className='mb-2'>
      <ServerSection
        server={server}
        role={role}
        label={label}
        sectionType='channels'
        channelType={channelType}
      />
      {channels.map((channel) => (
        <ServerChannel key={channel.id} role={role} channel={channel} />
      ))}
    </div>
  );
};

export default ServerChannels;
