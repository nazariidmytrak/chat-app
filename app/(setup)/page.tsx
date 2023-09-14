import { redirect } from 'next/navigation';

import { initialProfile } from '@/lib/initial-profile';
import { fetchServerForProfile } from '@/app/api/fetchServerForProfile';

const SetupPage = async () => {
  try {
    const profile = await initialProfile();
    const server = await fetchServerForProfile(profile);

    return server ? (
      redirect(`servers/${server.id}`)
    ) : (
      <div>Create a server</div>
    );
  } catch (error) {
    console.error('Error in SetupPage:', error);
    return <div>An error occurred.</div>;
  }
};

export default SetupPage;
