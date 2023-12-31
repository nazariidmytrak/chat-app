'use client';

import { MemberRole } from '@prisma/client';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ServerWithMembersWithProfiles } from '@/types';
import ServerMenuItems from './server-menu-items';

interface Props {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

const ServerHeader = ({ server, role }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none' asChild>
        <button className='w-full h-12 px-3 flex items-center font-semibold border-b-2 border-neutral-200 transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50'>
          {server.name}
          <ChevronDown className='h-5 w-5 ml-auto' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 space-y-[2px] text-xs font-medium text-black dark:text-neutral-400'>
        <ServerMenuItems server={server} role={role} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServerHeader;
