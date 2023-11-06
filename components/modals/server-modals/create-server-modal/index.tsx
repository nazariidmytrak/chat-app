'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '../../modal';
import ServerForm from '@/components/forms/server-form';

const CreateServerModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === 'createServer';

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title='Customize Your Server'
      description='Give your server personality with a name and an image. You can always change it later'
    >
      <ServerForm
        isInitialModal={false}
        onClose={onClose}
        buttonLabel='Create'
      />
    </Modal>
  );
};

export default CreateServerModal;
