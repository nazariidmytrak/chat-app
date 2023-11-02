import { currentProfile } from '@/lib/current-profile';
import { NextResponse } from 'next/server';
import { handleDeleteAction } from './handle-delete';
import { handlePatchAction } from './handle-patch';

export async function handleRequest(
  req: Request,
  { params }: { params: { memberId: string } },
  action: 'DELETE' | 'PATCH'
) {
  const profile = await currentProfile();
  const { searchParams } = new URL(req.url);
  const serverId = searchParams.get('serverId');
  const memberId = params.memberId;

  if (!profile) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  if (!serverId) {
    return new NextResponse('Server id missing', { status: 400 });
  }

  if (!memberId) {
    return new NextResponse('Member ID missing', { status: 400 });
  }

  try {
    if (action === 'DELETE') {
      return NextResponse.json(
        await handleDeleteAction(serverId, profile, memberId)
      );
    } else if (action === 'PATCH') {
      const { role } = await req.json();
      return NextResponse.json(
        await handlePatchAction(serverId, profile, memberId, role)
      );
    }
  } catch (error) {
    console.log(`[MEMBERS_ID_${action}`, error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
