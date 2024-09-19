<template>
  <div class="support">
    <div class="support__head">
      <Heading :level="3" :size="3" title="Поддержка" />
      <p>Обращения по вопросам проведения акции</p>
    </div>
    <div class="support_list">
      <div class="support_list__item">
        <p>Телефон</p>
        <a href="#" target="_blank">8 (495) 777-777-5</a>
      </div>
      <div class="support_list__item">
        <p>Электронная почта</p>
        <a href="#" target="_blank">24@mvideo.ru</a>
      </div>
    </div>
    <div class="privacy__link">Правила акции</div>
  </div>
</template>

<script setup lang="ts">
import Heading from "./Heading.vue";
</script>

<style scoped lang="scss"></style>
