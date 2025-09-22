<template>
  <div class="mainBlockLogin">
    <div v-if="loginStore.id === 1">
      <div v-if="regOrLogin === 'enter'">
        <div class="title">Вход</div>
        <div class="nameInput">Логин</div>
        <UiInput
          placeholder="Введите логин"
          v-model.trim="enterLogin"
          type="string"
        />

        <div class="nameInput">Пароль</div>
        <UiInput
          placeholder="Введите пароль"
          v-model.trim="enterPassword"
          type="password"
        />

        <UiButton
          @click="loginStore.enter(enterLogin, enterPassword)"
          text="Войти"
        />

        <div class="regLogin">
          Не зарегистрированы?
          <a class="buttonRegLogin" @click="regOrLogin = 'register'"
            >Создать аккаунт</a
          >
        </div>
      </div>
      <div v-if="regOrLogin === 'register'">
        <div class="title">Регистрация</div>
        <div class="nameInput">Логин</div>
        <UiInput
          placeholder="Введите логин"
          v-model.trim="regLogin"
          type="string"
        />
        <div class="nameInput">Пароль</div>

        <UiInput
          placeholder="Введите пароль"
          v-model.trim="regPassword"
          type="password"
        />

        <UiButton
          @click="loginStore.registration(regLogin, regPassword)"
          text="Создать аккаунт"
        />

        <div class="regLogin">
          Уже есть аккаунт?
          <a class="buttonRegLogin" @click="regOrLogin = 'enter'">Войти</a>
        </div>
      </div>
    </div>

    <div v-if="loginStore.id > 1">
      <AccountInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import AccountInfo from './components/AccountInfo.vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
// @ts-ignore

import { useLogin } from '@/store/Login'
const loginStore = useLogin()

const regLogin = ref('')
const regPassword = ref('')

const enterLogin = ref('')
const enterPassword = ref('')

defineProps({
  msg: String,
})
const regOrLogin = ref('register')
</script>

<style scoped lang="scss">
.mainBlockLogin {
  background-color: #fff;
  border: 0.5px solid #d9d9d9;
  border-radius: 16px;
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

  .regLogin {
    color: #6c727f;
    margin-top: 15px;

    .buttonRegLogin {
      color: #2688eb;
      transition: 0.3s;

      &:hover {
        color: #439eff;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
}
</style>
