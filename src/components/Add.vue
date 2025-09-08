<template>
  <div  class="mainBlockAdd">
    <div class="x" @click="$emit('close')">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18 17.94 6M18 18 6.06 6" />
      </svg>
    </div>

    <div class="login">
      <div class="nameLogin">Добавить прием пищи</div>

      <input v-model="ccalValue" type="number" placeholder="Калорийность" />

      <input v-model="ccalName" placeholder="Описание" />

      <button class="buttonGo" @click="
      (loginStore.addCcal(ccalValue, ccalName),
        (ccalValue = ''),
        (ccalName = ''))
        ">
        Добавить
      </button>

    </div>

    <div class="login">
      <div class="nameLogin">Обновить вес</div>

      <input v-model="weightValue" type="number" placeholder="Вес кг" />


      <button class="buttonGo" @click="(loginStore.addWeight(weightValue), (weightValue = ''))">
        Обновить
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useLogin } from '@/store/Login'
const loginStore = useLogin()
const emit = defineEmits(['close'])
const ccalValue = ref('')
const ccalName = ref('')

const weightValue = ref('')

defineProps({
  msg: String,
})
const regOrLogin = ref('register')
</script>

<style scoped lang="scss">
.mainBlockAdd {
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  position: fixed;
  /* фиксированное положение */
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1050;
  background-color: #fff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 22px;
}

.x {
  color: #666;
  float: right;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    border-radius: 5px;
    color: #9b9b9b;
    cursor: pointer;
    transition: 0.3s;
  }
}



.nameLogin {
  margin-bottom: 10px;
}

.login {
  margin: 30px;
}

.register {
  margin: 30px;
}

input {
  background-color: #f9fafb;
  border: solid;
  border-color: #c7c7c7;
  border-radius: 7px;
  border-width: 1px;
  display: block;
  height: 40px;
  margin-top: 20px;
  padding-left: 7px;
  width: 100%;
}

::placeholder {
  font-size: 14px;
}

.buttonGo {
  background-color: #007aff;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  margin-top: 20px;
  transition: 0.3s;
  width: 100%;
}

.buttonGo:hover {
  background-color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}
</style>
