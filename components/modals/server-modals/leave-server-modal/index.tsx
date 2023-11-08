'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '@/components/modals/modal';
import CommonServerModalDescription from '../shared/common-server-modal-description';
import CommonServerModalFooter from '../shared/common-server-modal-footer';

const LeaveServerModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { server } = data;
  const isModalOpen = isOpen && type === 'leaveServer';
  if (!server) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title='Leave server'
      description={
        <CommonServerModalDescription
          serverName={server.name}
          actionType='leave'
        />
      }
      footer={
        <CommonServerModalFooter
          serverId={server.id}
          actionType='leave'
          onClose={onClose}
        />
      }
    >
      <></>
    </Modal>
  );
};

export default LeaveServerModal;
