import { LucideIcon } from 'lucide-react';

import ActionTooltip from '@/components/actions/action-tooltip';

interface Props {
  label: string;
  IconComponent: LucideIcon;
}

const ServerChannelActionButton = ({ label, IconComponent }: Props) => {
  return (
    <ActionTooltip label={label}>
      <IconComponent
        className='w-4 h-4 text-zinc-500 hidden transition group-hover:block
       hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300'
      />
    </ActionTooltip>
  );
};

export default ServerChannelActionButton;
