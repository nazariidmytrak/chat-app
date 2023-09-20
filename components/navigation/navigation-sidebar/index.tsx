import NavigationAction from '@/components/navigation/navigation-sidebar/navigation-action';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import NavigationUserPanel from '@/components/navigation/navigation-sidebar/navigation-user-panel';
import NavigationItems from './navigation-items';

const NavigationSidebar = () => {
  return (
    <div className='h-full w-full py-3 space-y-4 flex flex-col items-center text-primary dark:bg-[#1e1f22]'>
      <NavigationAction />
      <Separator className='h-[2px] w-10 mx-auto bg-zinc-300 dark:bg-zinc-700 rounded-md' />
      <ScrollArea className='flex-1 h-full'>
        <NavigationItems />
      </ScrollArea>
      <NavigationUserPanel />
    </div>
  );
};

export default NavigationSidebar;
