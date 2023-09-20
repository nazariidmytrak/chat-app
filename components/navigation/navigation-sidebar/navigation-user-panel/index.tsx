import { UserButton } from '@clerk/nextjs';

import { ModeToggle } from '@/components/actions/mode-toggle';

const NavigationUserPanel = () => {
  return (
    <div className='pb-3 flex flex-col items-center gap-y-4'>
      <ModeToggle />
      <UserButton
        appearance={{
          elements: {
            avatarBox: 'h-[48px] w-[48px]',
          },
        }}
        afterSignOutUrl='/'
      />
    </div>
  );
};

export default NavigationUserPanel;
