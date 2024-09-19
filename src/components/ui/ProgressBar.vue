<template>
  <div class="progress_bar__w">
    <Heading :title="`${level} уровень`" :level="2" :size="2" />
    <div class="progress-bar">
      <div
        class="progress-bar__fill"
        :style="{ width: progressPercentage + '%' }"
      ></div>
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
.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 30px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.progress-bar__fill {
  background-color: #4caf50;
  height: 100%;
  transition: width 0.3s ease;
}
</style>
