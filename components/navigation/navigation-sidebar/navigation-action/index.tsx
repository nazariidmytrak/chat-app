'use client';

import { Plus } from 'lucide-react';

import ActionTooltip from '@/components/actions/action-tooltip';

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip side='right' align='center' label='Add a server'>
        <button className='group flex items-center'>
          <div
            className='grid place-items-center mx-3 h-[48px] w-[48px] rounded-[24px] overflow-hidden
          transition-all border-emerald-500 border dark:border-none dark:bg-neutral-700 group-hover:bg-emerald-500 group-hover:rounded-[16px]'
          >
            <Plus
              className='group-hover:text-white transition text-emerald-500'
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
