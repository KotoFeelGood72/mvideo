<template>
  <div class="task">
    <div class="task_head">
      <div class="tab__links">
        <div
          class="tab_link__item"
          :class="{ active: activeTab === 'active' }"
          @click="activeTab = 'active'"
        >
          Активные
        </div>
        <div
          class="tab_link__item"
          :class="{ active: activeTab === 'complete' }"
          @click="activeTab = 'complete'"
        >
          Выполненые
        </div>
      </div>
    </div>
    <div class="tab_link__contents">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import active from "./active.vue";
import complete from "./complete.vue";

const activeTab = ref("active");

const currentComponent = computed(() => {
  return activeTab.value === "active" ? active : complete;
});
</script>

<style scoped lang="scss">
.task {
  padding: 16px 0;
}
.task_head {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.tab__links {
  @include flex-center;
  background-color: $light;
  border-radius: $brs;
}

.tab_link__item {
  flex-grow: 1;
  width: 100%;
  padding: 12px;
  font-family: $font_3;
  @include flex-center;
  border-radius: $brs;
  color: $gray;
}

.tab_link__item.active {
  background-color: $dark;
  color: $white;
}
</style>
