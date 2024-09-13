<template>
  <div class="agreement">
    <input type="checkbox" v-model="localValue" :id="id" />
    <label :for="id">
      Подтверждаю согласие с условиями <RouterLink to="/">участия в акции</RouterLink> и
      соглашаюсь на <RouterLink to="/">обработку персональных данных</RouterLink>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    id?: string;
    txt?: string;
  }>(),
  {
    modelValue: false,
    id: "default-id",
  }
);

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped></style>
