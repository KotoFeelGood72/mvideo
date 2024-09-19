<template>
  <div class="modal-alert">
    <div class="modal_content__w">
      <div class="modal_content">
        <div class="close" @click="handleLogin()">
          <Icons icon="weui:close-outlined" :size="24" />
        </div>
        <Heading
          title="Вы успешно зарегистрированы текст"
          :level="2"
          :size="2"
        />
        <div class="modal-btn">
          <Buttons name="Играть" @click="handleLogin()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "../ui/Heading.vue";
import Buttons from "../ui/Buttons.vue";
import { useRouter } from "vue-router";
import { useModalStore } from "@/stores/useModalStore";
import { useUserStore } from "@/stores/useUserStore";

const router = useRouter();
const { login } = useUserStore();

const { closeModal } = useModalStore();

async function handleLogin() {
  await login();
  await router.push({ name: "register" });
}
</script>

<style scoped lang="scss">
.modal-alert {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  z-index: 100;
}

.modal_content__w {
  background-color: $white;
  border-top-left-radius: $brs;
  border-top-right-radius: $brs;
  padding: 56px 24px 36px 24px;
  position: relative;
  .modal_content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;

    :deep(h2) {
      max-width: 305px;
    }
  }
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  @include flex-center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    :deep(svg) {
      color: $red;
    }
  }
}

.modal-btn {
  padding-top: 17px;
  width: 100%;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>
