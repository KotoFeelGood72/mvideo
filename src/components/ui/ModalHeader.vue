<template>
  <div class="modal-header" @click="closerModal(modalName)">
    <div class="empty"></div>
    <div class="close">
      <Icons icon="weui:close-outlined" :size="24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
const { closeModal } = useModalStore();
import { useRouter } from "vue-router";

const props = defineProps<{
  modalName: any;
  route?: string;
}>();

const router = useRouter();

async function closerModal(modalName: string) {
  if (props.route) {
    closeModal(props.modalName);
    router.push(props.route);
  } else {
    closeModal(props.modalName);
  }
}
</script>

<style scoped lang="scss">
.modal-header {
  width: 100%;
  @include flex-space;
}

.empty {
  width: 24px;
  height: 24px;
}
.close {
  @include flex-center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 13px 16px;
  &:hover {
    :deep(svg) {
      color: $red;
    }
  }
}
</style>
