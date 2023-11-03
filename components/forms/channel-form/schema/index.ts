import * as z from 'zod';
import { ChannelType } from '@prisma/client';

import { normalizeChannelName } from '@/lib/normalize-channel-name';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Channel name is required.',
    })
    .refine(
      (name) => normalizeChannelName(name).toLowerCase() !== 'general',
      "Channel name can not be 'general'"
    ),

  type: z.nativeEnum(ChannelType),
});
