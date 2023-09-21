import { Channel, ChannelType } from '@prisma/client';

export const filterChannelsByType = (
  channels: Channel[],
  channelType: ChannelType
) => {
  return channels.filter((channel) => channel.type === channelType);
};

export const filterChannels = (channels: Channel[]) => {
  const textChannels = filterChannelsByType(channels, ChannelType.TEXT);
  const audioChannels = filterChannelsByType(channels, ChannelType.AUDIO);
  const videoChannels = filterChannelsByType(channels, ChannelType.VIDEO);

  return { textChannels, audioChannels, videoChannels };
};
