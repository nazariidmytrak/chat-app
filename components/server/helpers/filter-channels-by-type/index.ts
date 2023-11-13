import { Channel, ChannelType } from '@prisma/client';

export const channelTypes = {
  [ChannelType.TEXT]: 'Text Channels',
  [ChannelType.AUDIO]: 'Voice Channels',
  [ChannelType.VIDEO]: 'Video Channels',
};

export const filterChannelsByType = (channels: Channel[]) => {
  return Object.entries(channelTypes).map(([channelType, label]) => {
    const filteredChannels = channels.filter(
      (channel) => channel.type === channelType
    );
    return {
      channelType: channelType as ChannelType,
      filteredChannels,
      label,
    };
  });
};
