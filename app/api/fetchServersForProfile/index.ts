import { db } from '@/lib/db';

import { ProfileProps } from '@/interfaces';

export const fetchServersForProfile = async (profile: ProfileProps) => {
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
