import { redirect } from 'next/navigation';

import InitialModal from '@/components/modals/initial-modal';
import { initialProfile } from '@/lib/initial-profile';
import { fetchInitialServer } from '@/app/api/server-queries';

const SetupPage = async () => {
  const profile = await initialProfile();

  if (!profile) {
    return <InitialModal />;
  }

  const server = await fetchInitialServer(profile);

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModal />;
};

export default SetupPage;
