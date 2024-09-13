<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    case "user":
      return AdminLayout;
    case "empty":
      return EmptyLayout;
    default:
      return DefaultLayout;
  }
});
</script>

<style scoped></style>
