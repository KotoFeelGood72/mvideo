<template>
  <div class="nav">
    <NuxtLink v-for="(item, i) in nav" :key="'nav-item-' + i" :to="item.link">
      <div class="nav_item__icon">
        <img :src="item.img" />
      </div>
      <p>{{ item.name }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const nav = ref([
  { name: "Задания", img: "/assets/img/task.png", link: "/" },
  { name: "Игра", img: "/assets/img/home.png", link: "/" },
  { name: "Розыгрыши", img: "/assets/img/gift.png", link: "/" },
  { name: "FAQ", img: "/assets/img/faq.png", link: "/" },
]);
</script>

<style scoped lang="scss"></style>
