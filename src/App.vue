<template>
  <component :is="layoutComponent">
    <router-view />
    <transition name="fade-bg">
      <div v-if="isModalActive" class="page-bg" @click="closeAllModals"></div>
    </transition>
    <ModalGlobal />
  </component>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import GameLayout from "./layouts/GameLayout.vue";
import { useRoute } from "vue-router";
import { useModalStoreRefs, useModalStore } from "./stores/useModalStore";
import { useUserStore, useUserStoreRefs } from "./stores/useUserStore";
import ModalGlobal from "./components/modal/ModalGlobal.vue";

const route = useRoute();
const { modals } = useModalStoreRefs();
const { closeAllModals } = useModalStore();
const { user } = useUserStoreRefs();

const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    case "user":
      return UserLayout;
    case "empty":
      return EmptyLayout;
    case "game":
      return GameLayout;
    default:
      return DefaultLayout;
  }
});

const isModalActive = computed(() => {
  return Object.values(modals.value).some((isActive) => isActive);
});

watch(
  () => route.fullPath,
  () => {
    closeAllModals();
  }
);
</script>

<style lang="scss">
.fixed {
  overflow: hidden;
  @include bp($point_5, $direction: min) {
    padding-right: 1.7rem;
  }
}

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* затемнённый фон */
  z-index: 99;
}

.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.5s ease;
}

.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-bg-enter-to,
.fade-bg-leave-from {
  opacity: 1;
}
:root {
  --full-screen: calc(var(--vh, 1vh) * 100);
}

html {
  height: 100%;
  font: 400 calc(100vw / 1920 * 10) / 1.33 $font_1;

  @include bp($point_2) {
    font-size: 10px;
    line-height: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: $black;
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
    background-color: $black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $black;
  }
}

body {
  position: relative;
  display: flex;
  height: 100%;
  font-size: 16px;
  color: $text;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $white;
  overflow-x: hidden;
  color: $dark;
  font-family: $font_2;

  @supports (display: grid) {
    display: block;
  }
}

a {
  text-decoration: none;
  transition: all 0.3s ease;
  color: $dark;

  &:hover,
  &:focus {
    text-decoration: none;
    transition: all 0.3s ease;
  }
}

#app {
  height: 100%;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>
