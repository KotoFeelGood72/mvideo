<template>
  <div class="otp">
    <Vue3OtpInput
      v-model:value="localValue"
      :num-inputs="6"
      input-classes="otp-input"
      :placeholder="['*', '*', '*', '*', '*', '*']"
      :class="{ 'is-invalid': isInvalid }"
      @on-change="handleOnChange"
    />
    <div v-if="isInvalid" class="error">
      Введён неверный код. Попробуйте снова
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue3OtpInput from "vue3-otp-input";
import { computed, defineEmits, defineProps, ref } from "vue";

// Определяем пропсы
const props = withDefaults(
  defineProps<{
    modelValue: string;
    isInvalid?: boolean;
  }>(),
  {
    modelValue: "",
    isInvalid: false,
  }
);

const emit = defineEmits(["update:modelValue", "complete"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});

const handleOnChange = (value: string) => {
  if (value.length === 6) {
    emit("complete", value);
  } else {
    console.log("Код не завершен");
  }
};
</script>

<style scoped lang="scss">
.otp-input-container {
  @include flex-center;
  gap: 8px;
}

:deep(.otp-input) {
  @include app;
  width: 48px;
  height: 48px;
  @include flex-center;
  background-color: $light;
  text-align: center;
  border-radius: $brs;
  font-size: 20px;
  font-family: $font_3;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;
}

:deep(.is-invalid) {
  .otp-input {
    border: 1px solid $red !important;
    color: $red;
  }
}

.error {
  color: $red;
}

.otp {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
