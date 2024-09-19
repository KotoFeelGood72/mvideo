<template>
  <div class="progress_bar__w">
    <Heading :title="`${level} уровень`" :level="2" :size="2" />
    <div class="progress-bar">
      <div class="progress-bar__fill" :style="{ width: progressPercentage + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "./Heading.vue";
import { computed, defineProps } from "vue";

const props = defineProps<{
  current: number;
  total: number;
  level: number;
}>();

const progressPercentage = computed(() => {
  if (props.total === 0) return 0;
  return (props.current / props.total) * 100;
});
</script>

<style scoped lang="scss">
.progress_bar__w {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.progress-bar {
  width: 100%;
  height: 12px;
  background-color: $white;
  border-radius: 8px;
}

.progress-bar__fill {
  background: linear-gradient(180deg, #ff5252 0%, #f00 100%),
    var(--buttons-accent-default, #f00);
  height: 100%;
  transition: width 0.3s ease;
  border-radius: 8px;
}
</style>
