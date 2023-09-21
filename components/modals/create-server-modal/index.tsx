'use client';

import { useModal } from '@/hooks/use-modal-store';
import SharedModal from '../shared-modal';

const CreateServerModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === 'createServer';

  return (
    <SharedModal
      isOpen={isModalOpen}
      onClose={onClose}
      isInitialModal={false}
    />
  );
};

export default CreateServerModal;
