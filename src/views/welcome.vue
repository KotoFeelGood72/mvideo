<template>
  <div class="welcome">
    <div class="container">
      <div class="welcome_main">
        <div class="welcome__head">
          <Heading :title="headtitle" />
          <p>{{ headtxt }}</p>
        </div>
        <div class="welcome_headimg">
          <img class="full" :src="headimg" />
        </div>
        <div class="welcome__body">
          <div class="welcome__txt" v-html="bodytxt"></div>
          <div class="welcome_body__notice">
            <div class="welcome_notice__head">{{ notice.head }}</div>
            <div class="welcome_notice__txt">{{ notice.txt }}</div>
          </div>
        </div>
        <div class="welcome__footer">
          <Buttons name="Играть" @click="router.push({ name: 'register' })" />
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
import { useRouter } from "vue-router";

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
    headtxt: "десяти квартир в Москве от М.Видео-Эльдорадо!",
    headimg: "/assets/img/headimg.jpg",
    bodytxt:
      "Наконец-то можно <b>«накликать» на реальную квартиру в Москве!</b> Совершай покупки в сети магазинов М.Видео-Эльдорадо, выполняй задания, копи игровые квадратные метры (м2), и одна из десяти квартир может стать твоей.",
    notice: {
      head: "Больше м2 – больше шансов!",
      txt: "Розыгрыш проходит каждую неделю!",
    },
  }
);

const router = useRouter();
const isAgreement = ref<boolean>(false);
</script>

<style scoped lang="scss">
.welcome_main,
.welcome__footer,
.welcome__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.welcome__head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.welcome_headimg {
  @include flex-center;
  border-radius: $brs;
  overflow: hidden;
}

.welcome_body__notice {
  background-color: $light;
  padding: 16px;
  border-radius: $brs;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.welcome_notice__head {
  color: $red;
  font-family: $font_4;
}
</style>
