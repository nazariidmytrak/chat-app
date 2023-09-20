import { redirect } from 'next/navigation';

import InitialModal from '@/components/modals/initial-modal';
import { initialProfile } from '@/lib/initial-profile';
import { fetchServerForProfile } from '@/app/api/fetchServerForProfile';

const SetupPage = async () => {
  const profile = await initialProfile();

  if (!profile) {
    return <InitialModal />;
  }

  const server = await fetchServerForProfile(profile);

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
};

export default SetupPage;
