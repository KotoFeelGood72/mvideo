<template>
  <div class="booster">
    <img :src="boosterImg" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  boosterImg: string;
}>();
</script>

<style scoped lang="scss"></style>
