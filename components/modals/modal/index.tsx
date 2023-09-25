import { FC, ReactNode } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  description?: string;
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  description,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='overflow-hidden p-0 bg-white text-black'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className='text-center text-zinc-500'>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
