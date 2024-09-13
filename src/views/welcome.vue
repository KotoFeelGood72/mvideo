<template>
  <div class="welcome">
    <div class="container">
      <div class="welcome_main">
        <div class="welcome__head">
          <Heading :title="headtitle" />
          <p>{{ headtxt }}</p>
          <div class="welcome_headimg">
            <img :src="headimg" />
          </div>
        </div>
        <div class="welcome__body">
          <div class="welcome__txt">{{ bodytxt }}</div>
          <div class="welcome_body__notice">
            <div class="welcome_notice__head"></div>
            <div class="welcome_notice__txt"></div>
          </div>
        </div>
        <div class="welcome__footer">
          <Buttons name="Играть" />
          <Agreement v-model="isAgreement" id="agreement-input" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "@/components/ui/Buttons.vue";
import Heading from "@/components/ui/Heading.vue";
import Agreement from "@/components/ui/Agreement.vue";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    headtitle?: string;
    headtxt?: string;
    headimg?: string;
    bodytxt?: string;
    notice: any;
  }>(),
  {
    headtitle: "Масштабный розыгрыш ",
    headtxt: "десяти квартир в Москве от М.Видео-Эльдорадо!",
    headimg: "/assets/img/headimg.jpg",
    bodytxt:
      "Наконец-то можно «накликать» на реальную квартиру в Москве! Совершай покупки в сети магазинов М.Видео-Эльдорадо, выполняй задания, копи игровые квадратные метры (м2), и одна из десяти квартир может стать твоей.",
    notice: {
      head: "Больше м2 – больше шансов!",
      txt: "Розыгрыш проходит каждую неделю!",
    },
  }
);

const isAgreement = ref<boolean>(false);
</script>

<style scoped></style>
