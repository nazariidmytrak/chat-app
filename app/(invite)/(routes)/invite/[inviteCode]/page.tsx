import { redirect } from 'next/navigation';
import { redirectToSignIn } from '@clerk/nextjs';

import { currentProfile } from '@/lib/current-profile';
import { fetchServerByInviteCode } from '@/app/api/server-queries';

interface Props {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params: { inviteCode } }: Props) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!inviteCode) {
    return redirect('/');
  }

  const server = await fetchServerByInviteCode(inviteCode, profile);

  return redirect(`/servers/${server.id}`);
};

export default InviteCodePage;
