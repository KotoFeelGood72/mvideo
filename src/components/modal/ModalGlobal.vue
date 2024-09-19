<template>
  <transition :name="modalTransitionName">
    <component :is="activeModalComponent" />
  </transition>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { useModalStore, useModalStoreRefs } from "@/stores/useModalStore";

const AsyncModalAlert = defineAsyncComponent(() => import("./AlertCode.vue"));
const AsyncModalAlertSuccess = defineAsyncComponent(
  () => import("./AlertCodeSuccess.vue")
);
const AsyncModalYandexPromocode = defineAsyncComponent(
  () => import("./YandexPromocode.vue")
);
const AsyncModalTask = defineAsyncComponent(() => import("./ModalTask.vue"));

const { modals } = useModalStoreRefs();
const { closeModal } = useModalStore();

type ModalKey = keyof typeof modals.value;

const ModalUp = ref<any>(["AlertCode", "YandexPromocode"]);
const ModalRight = ref<any>(["Burger"]);

const activeModalName = computed(() => {
  for (const name in modals.value) {
    if (modals.value[name as ModalKey]) {
      return name as ModalKey;
    }
  }
  return null;
});

const activeModalComponent = computed(() => {
  for (const [key, isActive] of Object.entries(modals.value)) {
    if (isActive) {
      switch (key) {
        case "AlertCode":
          return AsyncModalAlert;
        case "AlertSuccess":
          return AsyncModalAlertSuccess;
        case "YandexPromocode":
          return AsyncModalYandexPromocode;
        case "Task":
          return AsyncModalTask;
        default:
          return AsyncModalAlert;
      }
    }
  }
  return null;
});

const modalTransitionName = computed(() => {
  if (ModalUp.value.includes(activeModalName.value)) {
    return "slide-up";
  } else if (ModalRight.value.includes(activeModalName.value)) {
    return "slide-right";
  } else {
    return "fade";
  }
});
</script>

<style scoped lang="scss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
