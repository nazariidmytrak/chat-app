import { Profile } from '@prisma/client';

import { db } from '@/lib/db';

export async function handleDeleteAction(
  serverId: string,
  profile: Profile,
  memberId: string
) {
  return db.server.update({
    where: {
      id: serverId,
      profileId: profile.id,
    },
    data: {
      members: {
        deleteMany: {
          id: memberId,
          profileId: {
            not: profile.id,
          },
        },
      },
    },
    include: {
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
}
