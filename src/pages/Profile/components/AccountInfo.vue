<template>
  <div class="title">Аккаунт</div>
  <div class="txt">Номер аккаунта: {{ loginStore.id }}</div>
  <div class="txt">Имя: {{ loginStore.login }}</div>
  <div class="txt">Лимит калорий: {{ loginStore.limitCcal }} ккал</div>
  <div class="txt">Желаемый вес: {{ loginStore.desiredWeight }} кг</div>

          <UiButton @click="loginStore.exit()" text="Выход" />

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
import UiButton from '@/components/ui/UiButton.vue'
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
