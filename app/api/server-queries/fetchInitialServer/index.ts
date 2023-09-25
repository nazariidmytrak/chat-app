import { Profile } from '@prisma/client';

import { db } from '@/lib/db';


export const fetchInitialServer = async (profile: Profile) => {
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
