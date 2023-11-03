import { ChannelType } from '@prisma/client';

export type FormValues = {
  name: string;
  type: ChannelType;
};
