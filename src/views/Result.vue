<template>
  <div class="result">
    <div class="result_head">
      <div class="result_navigation">
        <div class="result_nav__prev">
          <Icons icon="solar:arrow-left-linear" />
        </div>
        <div class="result__date">с 1 - 6 октября</div>
        <div class="result_nav__prev">
          <Icons icon="solar:arrow-right-linear" />
        </div>
      </div>
      <HomeList :length="11" :active="3" />
    </div>
    <div class="result_body">
      <Heading title="Розыгрыш идет" :level="2" :size="2" />
      <p>Вы набрали 4 м2, вам осталось совершить покупку от 5 000 ₽</p>
    </div>
    <div class="result_bottom">
      <Heading title="Ждем" :level="3" :size="3" />
      <p>После 6 октября на данной странице будут опубликованы результаты</p>
    </div>
    <BottomNav :fulls="true" />
  </div>
</template>

<script setup lang="ts">
import HomeList from "@/components/ui/list/HomeList.vue";
import Heading from "@/components/ui/Heading.vue";
import BottomNav from "@/components/ui/nav/BottomNav.vue";
</script>

<style scoped lang="scss"></style>
