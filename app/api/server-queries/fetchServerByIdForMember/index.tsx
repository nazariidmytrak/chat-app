import { db } from '@/lib/db';
import { Profile } from '@prisma/client';

export const fetchServerByIdForMember = async (
  profile: Profile,
  serverId: string
) => {
  try {
    const server = await db.server.findUnique({
      where: {
        id: serverId,
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
