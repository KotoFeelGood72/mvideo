<template>
  <div class="register">
    <div class="container">
      <div class="register_main">
        <div class="register_head">
          <Heading title="Регистрация" />
        </div>
        <div class="register_body">
          <Inputs
            v-model="formData.name"
            id="register-name"
            label="Имя"
            placeholder="Введите ваше имя"
          />
          <InputsPhone
            v-model="formData.phone"
            id="register-phone"
            label="Телефон"
            placeholder="+7 (999) 999-99-99"
          />
        </div>
        <div class="register_footer">
          <Buttons name="Получить код" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "@/components/ui/Heading.vue";
import Buttons from "@/components/ui/Buttons.vue";
import Inputs from "@/components/ui/Inputs.vue";
import InputsPhone from "@/components/ui/InputsPhone.vue";
import { ref } from "vue";

interface formData {
  name: string;
  phone: string;
}

const formData = ref<formData>({
  name: "",
  phone: "",
});
</script>

<style scoped></style>
