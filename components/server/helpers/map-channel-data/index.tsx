import { Channel } from '@prisma/client';
import { ChannelIconsMap } from '@/components/icons';

export const mapChannelData = (channel: Channel) => ({
  id: channel.id,
  name: channel.name,
  icon: ChannelIconsMap[channel.type],
});
