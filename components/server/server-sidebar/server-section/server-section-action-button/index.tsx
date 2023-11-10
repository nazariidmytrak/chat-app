import { ReactNode } from 'react';

import ActionTooltip from '@/components/actions/action-tooltip';

interface Props {
  label: string;
  icon: ReactNode;
  side: 'top' | 'left' | 'bottom' | 'right';
  onClick: () => void;
}

const ServerSectionActionButton = ({ label, side, onClick, icon }: Props) => {
  return (
    <ActionTooltip label={label} side={side}>
      <button
        className='transition text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'
        onClick={onClick}
      >
        {icon}
      </button>
    </ActionTooltip>
  );
};

export default ServerSectionActionButton;
