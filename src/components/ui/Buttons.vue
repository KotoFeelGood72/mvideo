<template>
  <div class="button" :disabled="disabled">
    <div class="button-icon" v-if="loading">
      <Icons icon="line-md:loading-twotone-loop" />
    </div>
    <div class="button-name">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    name: string;
    disabled?: boolean;
  }>(),
  {
    loading: false,
    name: "Текст кнопки",
    color: "red",
    disabled: false,
  }
);
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  transition: background-color 0.3s;
  @include flex-center;
  font-size: 16px;
  border-radius: $brs;
  padding: 12px;
  position: relative;
  background-color: $accent;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
    border-radius: $brs;
    top: -2px;
  }

  &:before {
    background: $linear;
    opacity: 0.4;
    z-index: 2;
  }
  &:after {
    background: $red;
    z-index: 1;
  }
  .button-name {
    font-family: $font_3;
    color: $white;
    position: relative;
    z-index: 2;
  }

  &.disabled {
    pointer-events: none;
  }
}
</style>
