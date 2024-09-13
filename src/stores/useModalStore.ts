import { defineStore, storeToRefs } from "pinia";

interface ModalsState {
  modalBottom: boolean;
  burger: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): { modals: ModalsState } => ({
    modals: {
      modalBottom: false,
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
    closeAllModal() {
      this.modals.modalBottom = false;
      this.modals.burger = false;
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
