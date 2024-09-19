<template>
  <div class="promocode__w p16">
    <div class="promocode">{{ code }}</div>
    <button type="button">cкопировать</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string;
}>();
</script>

<style scoped lang="scss">
.promocode__w {
  background-color: $light;
  @include flex-start;
  gap: 30px;
  border-radius: $brs;
}

.promocode {
  font-family: $font_3;
}

button {
  appearance: none;
  color: $red;
  font-family: $font_3;
}
</style>
