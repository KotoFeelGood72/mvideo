<template>
  <div class="home-list">
    <div class="home_item" v-for="(item, i) in length" :key="'home-list-item-' + i">
      <Icons icon="ion:home" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  length: number;
  active: number;
}>();
</script>

<style scoped lang="scss"></style>
