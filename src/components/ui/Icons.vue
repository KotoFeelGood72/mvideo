<template>
  <Icon
    :icon="icon"
    :size="size"
  />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";

const props = withDefaults(


  defineProps<{
    icon: string;
    size?: number;
    color?: string;
  }>(), {
    icon: '',
    size: 20,
    color: 'black'
  }
) 





</script>

<style scoped lang="scss"></style>
