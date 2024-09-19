<template>
  <div class="game">
    <div class="page-head">
      <Counter />
      <Avatar />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Avatar from "@/components/ui/Avatar.vue";
import Counter from "@/components/ui/Counter.vue";

const route = useRoute();
</script>

<style scoped lang="scss">
.content {
  // padding: 0 16px 16px 16px;
  // height: calc(100% - 56px);
}

.game {
  height: 100%;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 144px;
    content: "";
    background: linear-gradient(
      180deg,
      #e31336 10.99%,
      rgba(227, 19, 54, 0) 99.84%
    );
  }
}
.page-head {
  @include flex-space;
  padding: 16px 16px 16px 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
</style>
