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

<style scoped lang="scss">
.booster {
  @include flex-center;
  padding: 8px;
  background-color: $white;
  border-radius: 12px;
  img {
    width: 28px;
    height: 28px;
  }
}
</style>
