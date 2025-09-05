<template>
  <div class="title">Аккаунт</div>
  <div class="txt">Номер аккаунта: {{ loginStore.id }}</div>
  <div class="txt">Имя: {{ loginStore.login }}</div>
  <div class="txt">Лимит калорий: {{ loginStore.limitCcal }} ккал</div>
  <div class="txt">Желаемый вес: {{ loginStore.desiredWeight }} кг</div>

  <button class="buttonGo" @click="loginStore.exit()">Выход</button>

  <div class="regLogin">
    Хотите прекратить использование?
    <a class="buttonDeleteAcc" @click="loginStore.deleteAccount()"
      >Удалить аккаунт</a
    >
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useLogin } from '@/store/Login'
const loginStore = useLogin()

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.title {
  font-size: 17px;
  font-weight: 600;
}

.txt {
  margin-top: 10px;
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
