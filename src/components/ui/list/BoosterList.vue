<template>
  <div class="boosters">
    <Swiper :slides-per-view="7" :space-between="7.7">
      <SwiperSlide v-for="(item, i) in boosterList" :key="'booster-list-item-' + i">
        <Booster :boosterImg="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Booster from "../card/Booster.vue";

const props = defineProps<{
  boosterList: any;
}>();

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style scoped lang="scss">
.boosters {
  max-width: 100%;
}
</style>
