import {
  Check,
  Loader2,
  MoreVertical,
  Shield,
  ShieldCheck,
  ShieldQuestion,
  UserX,
} from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { ServerWithMembersWithProfiles } from '@/types';

import {
  DropdownMenu,
  DropdownMenuSub,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';

import { useMemberActions } from '@/hooks/use-member-actions';
import MemberCard from './member-modal-card';

const MembersModalContent = ({
  server,
}: {
  server: ServerWithMembersWithProfiles;
}) => {
  const { performMemberAction, loadingId } = useMemberActions();

  return (
    <ScrollArea className='mt-8 max-h-[420px] p-6 pr-6'>
      {server?.members?.map((member) => (
        <div
          key={member.id}
          className='flex items-center gap-x-2 mb-6 relative'
        >
          <MemberCard key={member.id} member={member} />
          {server.profileId !== member.profileId && loadingId !== member.id && (
            <div className='ml-auto'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className='h-w w-4 text-zinc-500' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side='left'>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className='flex items-center'>
                      <ShieldQuestion className='w-4 h-4 mr-2' />
                      <span>Role</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onClick={() => {
                            performMemberAction(
                              'patch',
                              member.id,
                              server.id,
                              'GUEST'
                            );
                          }}
                        >
                          <Shield className='h-4 w-4 mr-2' />
                          Guest
                          {member.role === 'GUEST' && (
                            <Check className='h-4 w-4 ml-auto' />
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            performMemberAction(
                              'patch',
                              member.id,
                              server.id,
                              'MODERATOR'
                            );
                          }}
                        >
                          <ShieldCheck className='h-4 w-4 mr-2' />
                          Moderator
                          {member.role === 'MODERATOR' && (
                            <Check className='h-4 w-4 ml-auto' />
                          )}
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      performMemberAction('delete', member.id, server.id);
                    }}
                  >
                    <UserX className='h-4 w-4 mr-2' />
                    Kick
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {loadingId === member.id && (
            <Loader2 className=' w-4 h-4 ml-auto animate-spin text-zinc-500' />
          )}
        </div>
      ))}
    </ScrollArea>
  );
};

export default MembersModalContent;
