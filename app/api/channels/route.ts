import { NextResponse } from 'next/server';
import { ChannelType, MemberRole } from '@prisma/client';

import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);
    const serverId = searchParams.get('serverId');

    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!serverId) {
      return new NextResponse('Server id missing', { status: 400 });
    }

    if (name === 'general') {
      return new NextResponse(`Name can not be 'general'`, { status: 400 });
    }

    const authorizedRoles = [MemberRole.ADMIN, MemberRole.MODERATOR];
    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: { profileId: profile.id, role: { in: authorizedRoles } },
        },
      },
      data: {
        channels: {
          create: { profileId: profile.id, name, type: ChannelType.TEXT },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log('[CHANNELS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
