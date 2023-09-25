'use client';

import { Server } from '@prisma/client';
import { Check, Copy, RefreshCw } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useOrigin } from '@/hooks/use-origin';
import { useClipboard } from '@/hooks/use-clipboard';
import { useGenerateNewLink } from '@/hooks/use-generate-new-link';
import { ModalType, ModalData } from '@/hooks/use-modal-store';

interface Props {
  server: Server;
  onOpen: (type: ModalType, data: ModalData) => void;
}

const InviteModalContent = ({ server, onOpen }: Props) => {
  const origin = useOrigin();
  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;
  const { copied, copyToClipboard } = useClipboard(inviteUrl);
  const { isLoading, generateNewLink } = useGenerateNewLink({ server, onOpen });

  return (
    <div className='p-6'>
      <Label className='uppercase text-xs text-zinc-500 font-bold dark:text-secondary/70'>
        Server Invite Link
      </Label>
      <div className='flex items-center gap-x-2 my-2'>
        <Input
          className='bg-zinc-300/50 border-0 text-black focus-visible:ring-0 focus-visible:ring-offset-0'
          value={inviteUrl}
          disabled={isLoading}
        />
        <Button onClick={copyToClipboard} size='icon' disabled={isLoading}>
          {copied ? (
            <Check className='w-4 h-4' />
          ) : (
            <Copy className='w-4 h-4' />
          )}
        </Button>
      </div>
      <Button
        className='text-xs text-zinc-500'
        variant='link'
        size='sm'
        disabled={isLoading}
        onClick={generateNewLink}
      >
        Generate a new link
        <RefreshCw className='w-4 h-4 ml-2' />
      </Button>
    </div>
  );
};

export default InviteModalContent;
