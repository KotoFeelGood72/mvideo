<template>
  <div class="confirm">
    <div class="container">
      <div class="confirm_main">
        <div class="confirm__head">
          <Heading :level="2" :size="2" title="Подтверждение" />
          <div class="confirm_head__txt">
            <p>Код отправлен на номер</p>
            <span>7 (999) 999-99-99</span>
          </div>
        </div>
        <div class="confirm__body">
          <InputOtp
            v-model="code"
            :isInvalid="isInvalid"
            @complete="checkCode"
          />
        </div>
        <div class="confirm_footer">
          <div class="confirm_timer">
            <template v-if="isTimerActive">
              Отправить повторно через {{ timer }} с.
            </template>
            <template v-else>
              <span class="resend_message"
                >Код просрочен. Запросите новый код</span
              >
            </template>
          </div>
          <template v-if="!isTimerActive">
            <Buttons name="Запросить код" @click="resetCode" />
          </template>
        </div>
      </div>
    </div>
    <transition name="slide-up">
      <ModalBottom
        v-if="modals.modalBottom"
        :modal="{
          title: 'Вы успешно зарегистрированы',
          btn: true,
        }"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import Heading from "@/components/ui/Heading.vue";
import InputOtp from "@/components/ui/InputOtp.vue";
import Buttons from "@/components/ui/Buttons.vue";
import { useModalStore, useModalStoreRefs } from "@/stores/useModalStore";
import ModalBottom from "@/components/modal/ModalBottom.vue";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const code = ref<string>("");
const isInvalid = ref(false);
const timer = ref(38);
const isTimerActive = ref(true);
let intervalId: ReturnType<typeof setInterval>;
const correctCode = "222222";

const { modals } = useModalStoreRefs();
const { openModal } = useModalStore();

watch(code, (newCode) => {
  if (newCode.length === 6) {
    checkCode(newCode);
  } else {
    isInvalid.value = false;
  }
});

watch(isInvalid, (newValue) => {
  if (newValue) {
    console.log("Неверный код, ошибка активна.");
  } else {
    console.log("Ошибка исправлена.");
  }
});

const checkCode = (inputCode: string) => {
  if (inputCode !== correctCode) {
    console.log("Неверный код. Попробуйте снова.", inputCode);
    isInvalid.value = true;
    return;
  }

  isInvalid.value = false;

  openModal("modalBottom");

  if (!isTimerActive.value) {
    console.log("Код отправлен!");
    resetTimer();
  }
};

const resetCode = () => {
  code.value = "";
  isInvalid.value = false;
  resetTimer();
};

const resetTimer = () => {
  isTimerActive.value = true;
  timer.value = 38;
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(intervalId);
      isTimerActive.value = false;
    }
  }, 1000);
};

onMounted(() => {
  resetTimer();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.confirm {
  height: 100%;
  text-align: center;

  :deep(.container) {
    height: 100%;
  }
}

.confirm__head {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.confirm__body {
  margin: 24px 0 32px 0;
}

.confirm_main {
  height: 100%;
  @include flex-center;
  flex-direction: column;
}

.confirm_timer {
  padding-bottom: 32px;
  color: $gray;
}

.resend-link {
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
  &:hover {
    color: darken($gray, 15%);
  }
}
</style>
