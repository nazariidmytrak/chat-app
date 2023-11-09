'use client';

import { ShieldAlert } from 'lucide-react';

import ActionTooltip from '@/components/actions/action-tooltip';

const AdminIcon = () => {
  return (
    <ActionTooltip label='Admin' side='right'>
      <ShieldAlert className='h-4 w-4 text-rose-500' />
    </ActionTooltip>
  );
};
export default AdminIcon;
