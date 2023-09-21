'use client';

import { useEffect, useState } from 'react';

import SharedModal from '../shared-modal';

const InitialModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <SharedModal isOpen={true} onClose={() => {}} isInitialModal={true} />;
};

export default InitialModal;
