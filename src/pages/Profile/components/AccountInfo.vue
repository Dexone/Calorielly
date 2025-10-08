<template>
  <div class="title">Аккаунт</div>
  <div class="txt">Номер аккаунта: {{ loginStore.id }}</div>
  <div class="txt">Имя: {{ loginStore.login }}</div>
  <div class="txt">Лимит калорий: {{ loginStore.limitCcal }} ккал</div>
  <div class="txt">Желаемый вес: {{ loginStore.desiredWeight }} кг</div>

  <UiButton @click="exit()" text="Выход" />

  <div class="regLogin">
    Хотите прекратить использование?
    <a class="buttonDeleteAcc" @click="deleteAccount()">Удалить аккаунт</a>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'

import UiButton from '@/components/ui/UiButton.vue'
// @ts-ignore
import { useLogin } from '@/store/Login'
const router = useRouter()
const loginStore = useLogin()
defineProps({
  msg: String,
})

function exit() {
  loginStore.id = 1
  loginStore.getInfo()
  router.push('/auth')
}

function deleteAccount() {
  if (loginStore.id !== 2) {
    //чтобы свой акк случайно не удалить)0))
    axios.delete(`https://dexone.pw/backend_new/users/${loginStore.id}`)
    axios.delete(`https://dexone.pw/backend_new/data/${loginStore.id}`)
    loginStore.id = 1 //задается id пользователя в сторе
    loginStore.getInfo()
    router.push('/auth')
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 17px;
  font-weight: 600;
}

.txt {
  margin-top: 10px;
}

.regLogin {
  color: #6c727f;
  margin-top: 15px;

  .buttonDeleteAcc {
    color: #df0000;
    transition: 0.3s;

    &:hover {
      color: #ca5858;
      cursor: pointer;
      transition: 0.3s;
    }
  }
}
</style>
