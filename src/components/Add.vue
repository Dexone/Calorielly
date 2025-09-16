<template>
  <div class="overlay"></div>
  <div class="mainBlockAdd">
    <div class="close" @click="$emit('close')">
      <img src="@/assets/Add/close.svg" />
    </div>

    <div class="login">
      <div class="nameLogin">Добавить прием пищи</div>

      <UiInput placeholder="Калорийность" v-model.number="ccalValue" type="number" />

      <UiInput placeholder="Описание" v-model.trim="ccalName" type="string" />


      <UiButton @click="
      (loginStore.addCcal(ccalValue, ccalName),
        (ccalValue = ''),
        (ccalName = ''))
        " text="Добавить" />
    </div>

    <div class="login">
      <div class="nameLogin">Обновить вес</div>

      <UiInput placeholder="Вес кг" v-model.number="weightValue" type="number" />


      <UiButton @click="(loginStore.addWeight(weightValue), (weightValue = ''))" text="Обновить" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UiInput from '@/components/ui/UiInput.vue'
import UiButton from '@/components/ui/UiButton.vue'
// @ts-ignore
import { useLogin } from '@/store/Login'
const loginStore = useLogin()
const emit = defineEmits(['close'])
const ccalValue = ref('')
const ccalName = ref('')

const weightValue = ref('')

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.overlay {
  background-color: rgb(0 0 0 / 50%);
  bottom: 0;
  height: 100%;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
}

.mainBlockAdd {
  background-color: rgb(255 255 255 / 100%);
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  padding: 20px 22px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3301;
}

.close {
  color: #666;
  float: right;
  margin-right: -50px;
  transition: 0.3s;

  &:hover {
    border-radius: 5px;
    color: #9b9b9b;
    cursor: pointer;
    transition: 0.3s;
  }
}

.login {
  margin: 30px;
}

.register {
  margin: 30px;
}

input {
  margin-top: 20px;
}
</style>
