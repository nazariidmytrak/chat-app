'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import ActionTooltip from '@/components/actions/action-tooltip';

interface Props {
  id: string;
  name: string;
  imageUrl: string;
}

const NavigationItem = ({ id, name, imageUrl }: Props) => {
  const { serverId } = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  const isActive = serverId === id;

  return (
    <ActionTooltip side='right' align='center' label={name}>
      <button className='group relative flex items-center' onClick={onClick}>
        <div
          className={cn(
            'w-[4px] absolute left-0 bg-primary rounded-r-full transition-all',
            isActive ? 'h-[36px]' : 'h-[8px] group-hover:h-[20px]'
          )}
        />
        <div
          className={cn(
            'relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden',
            isActive && 'bg-primary/10 text-primary rounded-[16px]'
          )}
        >
          <Image
            fill
            src={imageUrl}
            alt='Channel'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
