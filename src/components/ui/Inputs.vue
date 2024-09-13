<template>
  <div class="inputs_w">
    <label class="inputs_label" :for="id">{{ label }}</label>
    <div class="inputs">
      <input :type="type" :placeholder="placeholder" v-model="localValue" :id="id" />
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

<style scoped lang="scss"></style>
