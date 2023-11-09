import { CustomMenuItemProps } from '@/types';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import CustomMenuItem from '@/components/server/server-sidebar/server-header/server-menu-items/custom-menu-item';

export const renderMenuItems = (
  menuItems: (CustomMenuItemProps | 'separator')[]
) => {
  return menuItems.map((item, index) => {
    if (item === 'separator') {
      return <DropdownMenuSeparator key={index} />;
    } else {
      return <CustomMenuItem {...(item as CustomMenuItemProps)} key={index} />;
    }
  });
};
