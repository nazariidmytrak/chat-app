import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';
import ServerCreateForm from '@/components/forms/server-create-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isInitialModal: boolean;
}

const SharedModal = ({ isOpen, onClose, isInitialModal }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='overflow-hidden p-0 bg-white text-black'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>
            Customize your server
          </DialogTitle>
          <DialogDescription className='text-center text-zinc-500'>
            Give your server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>
        <ServerCreateForm isInitialModal={isInitialModal} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default SharedModal;
