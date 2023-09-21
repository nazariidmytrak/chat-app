import { Profile } from '@prisma/client';

import { db } from '@/lib/db';

export const fetchServersForMember = async (profile: Profile) => {
  try {
    const servers = await db.server.findMany({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });
    return servers;
  } catch (error) {
    console.error('Error fetching servers:', error);
    throw error;
  }
};
