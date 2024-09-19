<template>
  <div class="nav" :class="{ fulls: fulls }">
    <RouterLink v-for="(item, i) in nav" :key="'nav-item-' + i" :to="item.link">
      <div class="nav_item__icon">
        <img :src="item.img" />
      </div>
      <p>{{ item.name }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    fulls: boolean;
  }>(),
  {
    fulls: false,
  }
);

const nav = ref([
  { name: "Задания", img: "/assets/img/task.png", link: "/task" },
  { name: "Игра", img: "/assets/img/home.png", link: "/home" },
  { name: "Розыгрыши", img: "/assets/img/gift.png", link: "/result" },
  { name: "FAQ", img: "/assets/img/faq.png", link: "/" },
]);
</script>

<style scoped lang="scss">
.nav {
  background-color: $red;
  padding: 8px 12px;
  @include flex-center;
  width: 100%;
  max-width: calc(100% - 24px);
  margin: 0 auto;
  border-radius: $brs;
  gap: 4px;

  &.fulls {
    max-width: 100%;
  }
}

.nav_item__icon {
  @include flex-center;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}

a {
  @include flex-center;
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
  width: 25%;
  padding: 8px;
  p {
    color: $white;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    font-family: $font_4;
    font-size: 10px;
  }
}

.router-link-active,
.router-link-exact-active {
  background-color: $text;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.8) inset;
  border-radius: 12px;
}
</style>
