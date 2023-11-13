import { ReactNode } from 'react';

import ActionTooltip from '@/components/actions/action-tooltip';
import { LucideIcon } from 'lucide-react';

interface Props {
  label: string;
  IconComponent: LucideIcon;
  onClick: () => void;
}

const ServerSectionActionButton = ({
  label,
  onClick,
  IconComponent,
}: Props) => {
  return (
    <ActionTooltip label={label} side='top'>
      <button
        className='transition text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
        onClick={onClick}
      >
        <IconComponent className='h-4 w-4' />
      </button>
    </ActionTooltip>
  );
};

export default ServerSectionActionButton;
