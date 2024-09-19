<template>
  <div class="home">
    <div class="room">
      <img src="@/assets/img/room.png" alt="" class="full" />
    </div>
    <div class="action">
      <ProgressBar :current="50" :total="100" :level="3" />
      <BoosterList :booster-list="boosterList" />
    </div>
    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/ui/ProgressBar.vue";
import BoosterList from "@/components/ui/list/BoosterList.vue";
import BottomNav from "@/components/ui/nav/BottomNav.vue";
import { ref } from "vue";

const boosterList = ref([
  "/assets/img/booster-1.png",
  "/assets/img/booster-2.png",
  "/assets/img/booster-3.png",
]);
</script>

<style scoped lang="scss"></style>
