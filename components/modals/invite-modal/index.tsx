'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '../modal';
import InviteModalContent from './invite-modal-content';

const InviteModal = () => {
  const { isOpen, type, onClose, onOpen, data } = useModal();
  const { server } = data;
  const isModalOpen = isOpen && type === 'invite';

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title='Invite friends'>
      {server ? (
        <InviteModalContent server={server} onOpen={onOpen} />
      ) : (
        <p>No server data available.</p>
      )}
    </Modal>
  );
};

export default InviteModal;
