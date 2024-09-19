<template>
  <div class="yandex">
    <div class="yandex__main">
      <ModalHeader modalName="YandexPromocode" route="/home" />
      <div class="yandex__img">
        <img src="@/assets/img/yandex.svg" />
      </div>
      <div class="yandex__content p16">
        <div class="yandex_content__head">
          <Heading title="промокод ваш!" :level="2" :size="2" />
          <p>500 ₽ скидка на заказ от 4 500 ₽</p>
        </div>
        <div class="yandex__body">
          <Promocode code="dl511g85hg33evwuwjvp" />
          <Notice txt="Действует до 20 октября 23:26" />
        </div>
        <div class="yandex__bottom">
          <Heading title="Как использовать промокод" :level="3" :size="3" />
          <p>
            Введите его в корзине до оплаты заказа — и скидка учтётся в итоговой
            стоимости
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "../ui/Heading.vue";
import Promocode from "../ui/Promocode.vue";
import Notice from "../ui/Notice.vue";
import ModalHeader from "../ui/ModalHeader.vue";
import { useModalStore } from "@/stores/useModalStore";
</script>

<style scoped lang="scss">
.yandex {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  z-index: 100;
}

.yandex__main {
  background-color: $white;
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-left-radius: $brs;
  border-top-right-radius: $brs;
  .modal_content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;

    :deep(h2, p) {
      max-width: 300px;
    }
  }
}

.yandex_content__head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: $font_3;
  }
}

.yandex__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.yandex__content {
  display: flex;
  flex-direction: column;
  gap: 16px;

  :deep(h3) {
    text-transform: none;
  }
}
.yandex__bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 236px;
}
.yandex__img {
  @include flex-center;
  height: 200px;
}
</style>
