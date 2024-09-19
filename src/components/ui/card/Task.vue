<template>
  <div class="task" :class="[isColors]" @click="openModal('Task')">
    <div class="task__content">
      <div class="task_headtitle">{{ task.headtitle }}</div>
      <div class="task_title">{{ task.title }}</div>
      <div class="task_sale">{{ task.sale }}</div>
    </div>
    <div class="task__img">
      <img :src="task.img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "@/stores/useModalStore";

const props = defineProps<{
  task: any;
}>();

const { openModal } = useModalStore();

const isColors = computed(() => {
  switch (props.task.color) {
    case "sea":
      return "sea-color";
    case "red":
      return "red-color";
    case "blue":
      return "blue-color";
    case "green":
      return "green-color";
    default:
      return "red-color";
  }
});
</script>

<style scoped lang="scss">
.task {
  @include flex-space;
  border-radius: 12px;
  padding: 16px;
  color: $white;

  &.sea-color {
    background-color: $sea;
  }
  &.red-color {
    background-color: $red;

    .task__img {
      img {
        max-width: 72px;
        min-width: 72px;
      }
    }
  }
  &.blue-color {
    background-color: $dblue;
  }
  &.green-color {
    background-color: $green;
  }
}

.task__content {
  max-width: 204px;
}

.task__img {
  min-width: 132px;
  width: 100%;
  max-width: 132px;
  @include flex-center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.task_headtitle {
  font-size: 10px;
  font-family: $font_1;
  text-transform: uppercase;
}

.task_title {
  font-size: 16px;
  font-family: $font_4;
  padding: 16px 0;
}

.task_sale {
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: $font_4;
  text-transform: uppercase;
  display: inline-flex;
  border-radius: 12px;
  letter-spacing: 1px;
}
</style>
