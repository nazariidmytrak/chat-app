import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { CustomMenuItemProps } from '@/types';

const CustomMenuItem = ({
  variant,
  Icon,
  text,
  onClick,
}: CustomMenuItemProps) => {
  return (
    <DropdownMenuItem
      className={cn(
        `px-3 py-2 text-sm cursor-pointer`,
        variant === 'red' ? 'text-rose-500' : '',
        variant === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' : ''
      )}
      onClick={onClick}
    >
      {text}
      <Icon className='h-4 w-4 ml-auto' />
    </DropdownMenuItem>
  );
};

export default CustomMenuItem;
