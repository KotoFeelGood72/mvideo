import { defineStore, storeToRefs } from "pinia";

interface ModalsState {
  AlertCode: boolean;
  AlertSuccess: boolean;
  Burger: boolean;
  YandexPromocode: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): { modals: ModalsState } => ({
    modals: {
      AlertCode: false,
      AlertSuccess: false,
      Burger: false,
      YandexPromocode: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = true;
    },
    closeModal(modalName: keyof ModalsState) {
      this.modals[modalName] = false;
    },
    closeAllModals() {
      Object.keys(this.modals).forEach((modalName) => {
        this.modals[modalName as keyof ModalsState] = false;
      });
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
