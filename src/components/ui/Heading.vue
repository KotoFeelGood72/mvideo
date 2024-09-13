<template>
  <component :is="`h${level}`" :class="sizes">
    {{ title }} <span><slot></slot></span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    level?: number;
    size?: number;
  }>(),
  {
    title: "",
    level: 1,
    size: 1,
  }
);

const sizes = computed(() => {
  return `heading-${props.size}`;
});
</script>

<style lang="scss" scoped>
.heading-1 {
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  font-family: $font_5;
}
.heading-2 {
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  font-family: $font_5;
}
</style>
