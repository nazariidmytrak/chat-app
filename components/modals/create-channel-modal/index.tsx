'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '../modal';
import ChannelForm from '@/components/forms/channel-form';

const CreateChannelModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === 'createChannel';

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title='Create channel'>
      <ChannelForm buttonLabel='Create' onClose={onClose} />
    </Modal>
  );
};

export default CreateChannelModal;
