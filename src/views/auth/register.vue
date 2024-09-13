<template>
  <div class="register">
    <div class="container">
      <div class="register_main">
        <div class="register_head">
          <Heading title="Регистрация" :level="2" :size="2" />
        </div>
        <div class="register_body">
          <Inputs
            v-model="formData.name"
            id="register-name"
            label="Имя"
            placeholder="Введите ваше имя"
          />
          <InputsPhone
            v-model="formData.phone"
            id="register-phone"
            label="Телефон"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div class="register_footer">
          <Buttons name="Получить код" @click="getCode()" />
        </div>
      </div>
    </div>
    <transition name="slide-up">
      <ModalBottom
        v-if="modals.modalBottom"
        :modal="{
          title: 'Не удалось отправить код',
          txt: 'Попробуйте повторить попытку позже',
        }"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import Heading from "@/components/ui/Heading.vue";
import Buttons from "@/components/ui/Buttons.vue";
import Inputs from "@/components/ui/Inputs.vue";
import InputsPhone from "@/components/ui/InputsPhone.vue";
import ModalBottom from "@/components/modal/ModalBottom.vue";
import { useModalStore, useModalStoreRefs } from "@/stores/useModalStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

interface formData {
  name: string;
  phone: string;
}

const formData = ref<formData>({
  name: "",
  phone: "",
});

const router = useRouter();
const { openModal } = useModalStore();
const { modals } = useModalStoreRefs();

async function getCode() {
  // openModal("modalBottom");
  router.push({ name: "confirm" });
}
</script>

<style scoped lang="scss">
.register {
  height: 100%;
  :deep(.container) {
    height: 100%;
  }
}
.register_main {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.register_body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  height: 100%;
}
</style>
