<template>
  <div class="start">
    <div class="container">
      <div class="start_main__w">
        <div class="start_main">
          <div class="start__img">
            <img class="full" src="/assets/img/startgame.png" alt="" />
          </div>
          <div class="start__content">
            <div class="start__head">
              <Heading title="Кликай на квартиру" />
              <p>и увеличивай шансы выиграть одну из 11 квартир в Москве!</p>
            </div>
            <div class="start__body">
              <Heading title="Правила" :level="3" :size="3" />
              <ol class="start_body__list">
                <li>
                  Совершай покупки в М.Видео - Эльдорадо и копи м2 за каждые
                  5000 руб в чеке!
                </li>
                <li>Выполняй задания и получай еще больше м2</li>
                <li>
                  Кликай на квартиру, чтобы заработать больше м2 и участвуй в
                  розыгрыше квартир каждую неделю!
                </li>
              </ol>
            </div>
            <div class="start_rules__link">
              <RouterLink to="/">Правила акции</RouterLink>
            </div>
          </div>
        </div>
        <Buttons name="Играть" @click="nextStep()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "@/components/ui/Heading.vue";
import Buttons from "@/components/ui/Buttons.vue";
import { useRouter } from "vue-router";
import { useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();
const router = useRouter();

async function nextStep() {
  openModal("YandexPromocode");
}
</script>

<style scoped lang="scss">
.start {
  height: 100%;
  :deep(.container) {
    height: 100%;
  }
}
.start__img {
  width: 100%;
  height: 200px;
}

.start_main__w {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 16px 0;
}

.start_main {
  border-radius: $brs;
  overflow: hidden;
  background-color: $light;
  flex-grow: 1;
}

.start__content {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.start__head,
.start__body {
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: $text;
  }
}

.start_body__list {
  list-style: auto !important;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: $text;
  li {
    list-style: auto !important;
  }
}

.start_rules__link {
  a {
    color: $red;
    text-decoration: underline;
  }
}
</style>
