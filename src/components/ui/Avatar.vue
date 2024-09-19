<template>
  <div class="avatar" @click="router.push({ name: 'account' })">
    <div class="avatar__img">
      <img src="@/assets/img/person.png" class="full" />
    </div>
    <div class="avatar_arrow"><img src="@/assets/img/arrow.svg" alt="" /></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
  width: 64px;
  height: 64px;
  @include flex-center;
  background-color: $gray;
  border: 5px solid $text;
  border-radius: 100%;
}

.avatar_arrow {
  position: absolute;
  top: 85%;
}

.avatar__img {
  width: 35px;
  height: 62px;
  margin-bottom: 9px;
}
</style>
