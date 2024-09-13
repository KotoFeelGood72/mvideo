<template>
  <div class="button">
    <div class="button-icon" v-if="loading">
      <Icons icon="line-md:loading-twotone-loop" />
    </div>
    <div class="button-name">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean;
    name: string;
  }>(),
  {
    loading: false,
    name: "Текст кнопки",
  }
);
</script>

<style scoped lang="scss"></style>
