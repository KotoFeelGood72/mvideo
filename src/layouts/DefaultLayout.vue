<template>
  <div class="default">
    <PageHead :title="route.meta.title" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHead from "@/components/ui/PageHead.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped lang="scss">
.content {
  padding: 0 16px 16px 16px;
  height: calc(100% - 56px);
}

.default {
  height: 100%;
}
</style>
