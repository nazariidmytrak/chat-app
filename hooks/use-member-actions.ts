import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MemberRole } from '@prisma/client';

import { useModal } from './use-modal-store';
import { useToast } from '@/components/ui/use-toast';

export function useMemberActions() {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState('');
  const { onOpen } = useModal();
  const { toast } = useToast();

  const performMemberAction = async (
    action: 'patch' | 'delete',
    memberId: string,
    serverId: string,
    role?: MemberRole
  ) => {
    try {
      setLoadingId(memberId);

      const url = `/api/members/${memberId}?serverId=${serverId}`;
      const requestData = action === 'delete' ? undefined : { role };
      const response = await axios[action](url, requestData);
      const successMessage =
        action === 'patch'
          ? 'Member role successfully updated!'
          : 'Member successfully deleted!';

      toast({
        title: successMessage,
      });

      /*   router.refresh(); */
      onOpen('members', { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId('');
    }
  };

  return { performMemberAction, loadingId };
}
