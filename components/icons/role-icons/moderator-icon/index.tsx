'use client';

import { ShieldCheck } from 'lucide-react';

import ActionTooltip from '@/components/actions/action-tooltip';

const ModeratorIcon = () => {
  return (
    <ActionTooltip label='Moderator' side='right'>
      <ShieldCheck className='h-4 w-4 text-indigo-500' />
    </ActionTooltip>
  );
};

export default ModeratorIcon;
