<template>
  <div class="notice">
    <div class="notice__icon">
      <Icons :icon="icon" />
    </div>
    <div class="notice__txt">{{ txt }}</div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string;
    txt: string;
  }>(),
  {
    txt: "",
    icon: "ion:alarm-outline",
  }
);
</script>

<style scoped lang="scss">
.notice {
  @include flex-start;
  padding: 16px 0;
  gap: 8px;
  border-top: 0.1rem solid $ulight;
  border-bottom: 0.1rem solid $ulight;
}

.notice__txt {
  font-family: $font_3;
}

.notice__icon {
  @include flex-center;
}
</style>
