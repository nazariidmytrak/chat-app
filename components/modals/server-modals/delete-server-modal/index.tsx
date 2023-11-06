'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '@/components/modals/modal';
import CommonServerModalContent from '../shared/common-server-modal-content';

const DeleteServerModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { server } = data;
  if (!server) return null;
  const isModalOpen = isOpen && type === 'deleteServer';

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title='Delete server'>
      <CommonServerModalContent
        type='delete'
        serverName={server.name}
        serverId={server.id}
        onClose={onClose}
      />
    </Modal>
  );
};

export default DeleteServerModal;
