import { redirect } from 'next/navigation';

import { fetchServersForProfile } from '@/app/api/fetchServersForProfile';
import { currentProfile } from '@/lib/current-profile';
import NavigationItem from '../navigation-item';
import { ServerProps } from '@/interfaces';

const NavigationItems = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await fetchServersForProfile(profile);

  return (
    <div>
      {servers.map((server: ServerProps) => (
        <div className='mb-4' key={server.id}>
          <NavigationItem
            id={server.id}
            name={server.name}
            imageUrl={server.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default NavigationItems;
