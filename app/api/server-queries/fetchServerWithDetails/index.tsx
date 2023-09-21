import { db } from "@/lib/db";

export const fetchServerWithDetails = async (serverId: string) => {
  try {
    const server = await db.server.findUnique({
      where: {
        id: serverId,
      },
      include: {
        channels: {
          orderBy: {
            createdAt: 'asc',
          },
        },
        members: {
          include: {
            profile: true,
          },
          orderBy: {
            role: 'asc',
          },
        },
      },
    });

    return server;
  } catch (error) {
    console.error('Error fetching server with details:', error);
    throw error;
  }
};
