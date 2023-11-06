import { useState } from 'react';
import axios from 'axios';
import { Server } from '@prisma/client';

import { ModalType, ModalData } from '@/hooks/use-modal-store';

interface Props {
  server: Server;
  onOpen: (type: ModalType, data: ModalData) => void;
}

export const useGenerateNewLink = ({ server, onOpen }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const generateNewLink = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );
      onOpen('invite', { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, generateNewLink };
};
