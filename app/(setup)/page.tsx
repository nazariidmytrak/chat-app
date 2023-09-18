import { redirect } from 'next/navigation';

import InitialModal from '@/components/modals/initial-modal';
import { initialProfile } from '@/lib/initial-profile';
import { fetchServerForProfile } from '@/app/api/fetchServerForProfile';

const SetupPage = async () => {
  try {
    const profile = await initialProfile();
    const server = await fetchServerForProfile(profile);

    if (server) {
      return redirect(`/servers/${server.id}`);
    }
  } catch (error) {
    console.error('Error in SetupPage:', error);
    return <div>An error occurred.</div>;
  }

  return <InitialModal />;
};

export default SetupPage;
