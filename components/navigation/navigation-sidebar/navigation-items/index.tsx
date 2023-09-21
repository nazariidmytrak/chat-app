import { redirect } from 'next/navigation';
import { Server } from '@prisma/client';

import { fetchServersForMember } from '@/app/api/server-queries';
import { currentProfile } from '@/lib/current-profile';
import NavigationItem from '../navigation-item';

const NavigationItems = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await fetchServersForMember(profile);

  return (
    <div>
      {servers.map((server: Server) => (
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
