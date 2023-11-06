'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '@/components/modals/modal';
import CommonServerModalContent from '../shared/common-server-modal-content';

const LeaveServerModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { server } = data;
  const isModalOpen = isOpen && type === 'leaveServer';
  if (!server) return null;

  return (
    <Modal isOpen={isModalOpen} onClose={onClose} title='Leave server'>
      <CommonServerModalContent
        type='leave'
        serverName={server.name}
        serverId={server.id}
        onClose={onClose}
      />
    </Modal>
  );
};

export default LeaveServerModal;
