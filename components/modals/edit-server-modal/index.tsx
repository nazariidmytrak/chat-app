'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '../modal';
import ServerForm from '@/components/forms/server-form';

const EditServerModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type === 'editServer';

  const { server } = data;

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
        buttonLabel='Save'
        server={server}
      />
    </Modal>
  );
};

export default EditServerModal;
