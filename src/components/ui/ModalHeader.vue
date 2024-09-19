<template>
  <div class="modal-header">
    <div class="close" @click="closeModal(modalName)">
      <Icons icon="weui:close-outlined" :size="24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
const { closeModal } = useModalStore();

const props = defineProps<{
  modalName: any;
}>();
</script>

<style scoped lang="scss"></style>
