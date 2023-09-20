import { db } from '@/lib/db';

import { ProfileProps } from '@/interfaces';

export const fetchServerForProfile = async (profile: ProfileProps) => {
  try {
    const server = await db.server.findFirst({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });
    return server;
  } catch (error) {
    console.error('Error fetching server:', error);
    throw error;
  }
};
