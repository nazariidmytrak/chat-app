'use client';

import { useEffect, useState } from 'react';

import { Modal } from '../modal';
import ServerForm from '@/components/forms/server-form';
import { useModal } from '@/hooks/use-modal-store';

const InitialModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { onClose } = useModal();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      onClose={() => {}}
      title='Customize Your Server'
      description='Give your server personality with a name and an image. You can always change it later'
    >
      <ServerForm
        isInitialModal={true}
        onClose={onClose}
        buttonLabel='Create'
      />
    </Modal>
  );
};

export default InitialModal;
