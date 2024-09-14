<template>
  <div class="pageHead">
    <div class="container">
      <div class="pageHead__main">
        <div class="pageHead_back">
          <a @click="$router.go(-1)">
            <Icons icon="fluent:arrow-left-12-regular" :size="20" />
          </a>
        </div>
        <p>{{ title }}</p>
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: any;
}>();
</script>

<style scoped lang="scss">
.pageHead__main {
  @include flex-space;
  position: relative;
  padding: 8px;

  p {
    font-size: 20px;
    font-family: $font_3;
  }
}

.pageHead_back {
  width: 40px;
  height: 40px;
  a {
    @include flex-center;
    width: 100%;
    height: 100%;
  }
}

.square {
  width: 40px;
  height: 40px;
}

.pageHead_back {
}
</style>
