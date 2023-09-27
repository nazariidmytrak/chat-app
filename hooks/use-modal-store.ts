import { create } from 'zustand';
import { Server } from '@prisma/client';

export type ModalType = 'createServer' | 'invite' | 'editServer';

export type ModalData = {
  server?: Server;
};

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onClose: () => void;
  onOpen: (type: ModalType, data?: ModalData) => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
