<template>
  <div class="agreement">
    <input type="checkbox" v-model="localValue" :id="id" />
    <label :for="id">
      <p>
        Подтверждаю согласие с условиями
        <RouterLink to="/">участия в акции</RouterLink> и соглашаюсь на
        <RouterLink to="/">обработку персональных данных</RouterLink>
      </p>
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

<style scoped lang="scss">
.agreement {
  input {
    display: none;
    &:checked + label:after {
      opacity: 1;
      visibility: visible;
    }
  }

  label {
    color: $text;
    position: relative;
    padding-left: 32px;
    @include flex-start;
    a {
      text-decoration: underline;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      content: "";
      border-radius: 5px;
      pointer-events: none;
    }

    &:before {
      background-color: $green;
    }

    &:after {
      transition: all 0.3s ease-in-out;
      opacity: 0;
      visibility: hidden;
      background-color: $green;
      background-position: 45% center;
      background-size: 15px 15px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 256 256'%3E%3Cpath fill='white' d='m232.49 80.49l-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183L215.51 63.51a12 12 0 0 1 17 17Z'/%3E%3C/svg%3E");
    }
  }
}
</style>
