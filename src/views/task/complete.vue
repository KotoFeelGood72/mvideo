<template>
  <div class="task-list">
    <Task v-for="(item, i) in tasks" :key="'active-task-item' + i" :task="item" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Task from "@/components/ui/card/Task.vue";

const tasks = ref([
  {
    title: "Покупка фена Rowenta Karl Lagerfeld Pro Stylist CV888LF0",
    sale: "+ 5 м2",
    img: "/assets/img/task-4.png",
    color: "green",
  },
]);
</script>

<style scoped lang="scss">
.task-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
