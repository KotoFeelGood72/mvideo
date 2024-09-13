import { defineStore, storeToRefs } from 'pinia';

interface ModalsState {
  errorCode: boolean;
  successCode: boolean;
  notice: boolean
  burger: boolean
}

export const useModalStore = defineStore('modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
        errorCode: false,
        successCode: false,
        notice: false,
        burger: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = true;
    },
    closeModal(modalName: keyof ModalsState) {
      this.modals[modalName] = false;
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
