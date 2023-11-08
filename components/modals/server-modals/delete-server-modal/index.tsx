'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '@/components/modals/modal';
import CommonServerModalDescription from '../shared/common-server-modal-description';
import CommonServerModalFooter from '../shared/common-server-modal-footer';

const DeleteServerModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { server } = data;
  if (!server) return null;
  const isModalOpen = isOpen && type === 'deleteServer';

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title='Delete server'
      description={
        <CommonServerModalDescription serverName={server.name} actionType='delete' />
      }
      footer={
        <CommonServerModalFooter
          actionType='delete'
          onClose={onClose}
          serverId={server.id}
        />
      }
    >
      <></>
    </Modal>
  );
};

export default DeleteServerModal;
