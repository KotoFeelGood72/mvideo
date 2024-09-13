<template>
  <div class="otp">
    <Vue3OtpInput
      v-model:value="localValue"
      :num-inputs="6"
      input-classes="otp-input"
      @on-complete="nextStep"
      :placeholder="['*', '*', '*', '*', '*', '*']"
    />
  </div>
</template>

<script setup lang="ts">
import Vue3OtpInput from "vue3-otp-input";
import { computed, defineEmits } from "vue";

const props = withDefaults();
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped></style>
