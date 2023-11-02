import { MemberRole, Profile } from '@prisma/client';

import { db } from '@/lib/db';

export async function handlePatchAction(
  serverId: string,
  profile: Profile,
  memberId: string,
  role: MemberRole
) {
  return db.server.update({
    where: {
      id: serverId,
      profileId: profile.id,
    },
    data: {
      members: {
        update: {
          where: {
            id: memberId,
            profileId: {
              not: profile.id,
            },
          },
          data: {
            role,
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
