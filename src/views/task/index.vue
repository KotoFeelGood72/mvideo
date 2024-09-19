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
    <BottomNav :fulls="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import active from "./active.vue";
import complete from "./complete.vue";
import BottomNav from "@/components/ui/nav/BottomNav.vue";

const activeTab = ref("active");

const currentComponent = computed(() => {
  return activeTab.value === "active" ? active : complete;
});
</script>

<style scoped lang="scss">
.task {
  padding: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}
.task_head {
  display: flex;
  flex-direction: column;
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

.tab_link__contents {
  max-height: calc(100% - 124px);
  height: 100%;
  overflow-y: auto;
}
</style>
