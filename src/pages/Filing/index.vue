<template>
  <div class="mainBlockLogin">
    <div class="title">Теперь заполним необходимые данные</div>
    <div v-if="loginStore.limitCcal === 0">
      <div class="nameInput">Суточный лимит калорий</div>
      <input v-model="limCcal" placeholder="Введите лимит" />

      <button class="buttonGo" @click="loginStore.editLimitCcal(limCcal)">
        Далее
      </button>
    </div>

    <div v-if="loginStore.desiredWeight === 0 && loginStore.limitCcal !== 0">
      <div class="nameInput">Желаемый вес</div>
      <input v-model="desWeight" placeholder="Введите вес" />

      <button class="buttonGo" @click="loginStore.editDesiredWeight(desWeight)">
        Далее
      </button>
    </div>

    <div
      v-if="
        loginStore.weightList.length === 1 &&
        loginStore.limitCcal !== 0 &&
        loginStore.desiredWeight !== 0
      "
    >
      <div class="nameInput">Текущий вес</div>
      <input v-model="weightNow" placeholder="Введите вес" />

      <button class="buttonGo" @click="loginStore.addWeight(weightNow)">
        Далее
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useLogin } from '@/store/Login'
const loginStore = useLogin()

const limCcal = ref('')
const desWeight = ref('')
const weightNow = ref('')

defineProps({
  msg: String,
})
const regOrLogin = ref('register')
</script>

<style scoped lang="scss">
.mainBlockLogin {
  background-color: #fff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 22px;

  .title {
    font-size: 17px;
    font-weight: 600;
  }

  .nameInput {
    color: rgb(88 99 111);
    font-size: 15px;
    font-weight: 500;
    margin-top: 18px;
  }

  input {
    background-color: #f2f2f2;
    border: solid;
    border-color: #c7c7c7;
    border-radius: 7px;
    border-width: 1px;
    display: block;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    margin-top: 4px;
    padding-left: 7px;
    width: 100%;

    &::placeholder {
      font-size: 15px;
      font-weight: 600;
    }

    &:focus {
      border: 1px solid #007aff;
      outline: none;
    }
  }

  .buttonGo {
    background-color: #007aff;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    margin-top: 20px;
    transition: 0.3s;
    width: 100%;

    &:hover {
      background-color: #439eff;
      cursor: pointer;
      transition: 0.3s;
    }
  }
}
</style>
