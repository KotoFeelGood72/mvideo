import { defineStore, storeToRefs } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as any,
  }),
  actions: {
    async setUser() {
      try {
        this.user = { name: "test", id: 2 };
      } catch (error) {
        // Handle error appropriately
      }
    },
  },
  persist: true,
});

export const useUserStoreRefs = () => storeToRefs(useUserStore());
