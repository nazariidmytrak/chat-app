import { Channel } from '@prisma/client';
import Icon from '@/components/icons';

export const mapChannelData = (channel: Channel) => ({
  id: channel.id,
  name: channel.name,
  icon: <Icon type={channel.type} />,
});
