import { FC, ReactNode } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  description?: string | ReactNode;
  footer?: any;
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  description,
  footer,
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
        {footer && (
          <DialogFooter className='bg-gray-100 px-6 py-4'>
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
