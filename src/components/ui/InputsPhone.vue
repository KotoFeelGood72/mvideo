<template>
  <div class="inputs_w">
    <label class="inputs_label" :for="id">{{ label }}</label>
    <div class="inputs">
      <MaskInput
        v-model="localValue"
        mask="+7 (###) ###-##-##"
        :placeholder="placeholder"
      />
    </div>
    <span v-if="error" class="inputs__message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    type?: string;
    placeholder?: string;
    message?: string;
    error?: boolean;
    modelValue: string;
    label?: string;
    id?: string;
  }>(),
  {
    type: "text",
    placeholder: "",
    message: "",
    error: false,
    modelValue: "",
    label: "",
    id: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss">
.inputs_w {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  input {
    @include app;
    width: 100%;
    border: 1px solid $ulight;
    padding: 12px 16px;
    border-radius: 8px;
    color: $text;
    transition: all 0.3s ease-in-out;
    &:focus {
      border-color: $focus;
    }
  }
}

.inputs_label {
  font-size: 15px;
  color: $text;
}
</style>
