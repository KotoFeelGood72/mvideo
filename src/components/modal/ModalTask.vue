<template>
  <div class="task">
    <div class="task__main">
      <ModalHeader modalName="Task" route="/home" />
      <div class="task__content p16">
        <div class="task_content__head">
          <p>осталось 13 дней 8 часов</p>
          <Heading title="Совершить покупку бренда Carrera Текст" :level="2" :size="2" />
        </div>
      </div>
      <div class="task__img">
        <img src="/assets/img/task.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "../ui/Heading.vue";
import Promocode from "../ui/Promocode.vue";
import Notice from "../ui/Notice.vue";
import ModalHeader from "../ui/ModalHeader.vue";
import { useModalStore } from "@/stores/useModalStore";
</script>

<style scoped lang="scss">
.task {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  z-index: 100;
}

.task__main {
  background-color: $white;
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-left-radius: $brs;
  border-top-right-radius: $brs;
  .modal_content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;

    :deep(h2, p) {
      max-width: 300px;
    }
  }
}

.task_content__head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: $font_3;
  }
}

.task__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.task__content {
  display: flex;
  flex-direction: column;
  gap: 16px;

  :deep(h3) {
    text-transform: none;
  }
}
.task__bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 236px;
}
.task__img {
  @include flex-center;
  height: 200px;
}
</style>
