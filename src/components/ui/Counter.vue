<template>
  <div class="counter">
    <div class="counter__num">{{ formattedNumber }}</div>
    <div class="counter__txt">М²</div>
    <div class="counter__square"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Исходное число
const number = ref(0.0002);

// Функция для форматирования числа с разделением запятой
const formattedNumber = computed(() => {
  return number.value
    .toLocaleString("ru-RU", {
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
    })
    .replace(/\./g, ",");
});
</script>

<style scoped lang="scss">
.counter {
  background-color: $yellow;
  @include flex-start;
  height: 40px;
  gap: 0.4rem;
  padding: 11px 16px;
  position: relative;
}

.counter__num {
  font-size: 24px;
  line-height: 26px;
  font-family: $font_5;
}

.counter__txt {
  font-size: 24px;
  font-family: $font_5;
}

.counter__square {
  position: absolute;
  top: 0;
  left: 99%;
  width: 0;
  height: 0;
  border-top: 41px solid $yellow;
  border-right: 30px solid transparent;
}
</style>
