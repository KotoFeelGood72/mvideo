<template>
  <ul class="booster-list">
    <li v-for="(item, i) in boosterList" :key="'booster-list-item-' + i">
      <Booster :boosterImg="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import Booster from "../card/Booster.vue";

const props = defineProps<{
  boosterList: any;
}>();
</script>

<style scoped lang="scss"></style>
