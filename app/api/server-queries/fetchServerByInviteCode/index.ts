import { Profile } from '@prisma/client';
import { db } from '@/lib/db';

export const fetchServerByInviteCode = async (
  inviteCode: string,
  profile: Profile
) => {
  try {
    const existingServer = await db.server.findFirst({
      where: {
        inviteCode,
        members: { some: { profileId: profile.id } },
      },
    });

    if (existingServer) {
      return existingServer;
    }

    const updatedServer = await db.server.update({
      where: { inviteCode },
      data: {
        members: {
          create: [{ profileId: profile.id }],
        },
      },
    });

    return updatedServer;
  } catch (error) {
    console.error('Error finding or creating server:', error);
    throw error;
  }
};
