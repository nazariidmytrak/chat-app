'use client';

import { useModal } from '@/hooks/use-modal-store';
import { Modal } from '../modal';
import { ServerWithMembersWithProfiles } from '@/types';
import MembersModalContent from './members-modal-content';

const MembersModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { server } = data as { server: ServerWithMembersWithProfiles };
  const isModalOpen = isOpen && type === 'members';

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title='Manage members'
      description={`${server?.members?.length} Members`}
    >
      <MembersModalContent server={server} />
    </Modal>
  );
};

export default MembersModal;
