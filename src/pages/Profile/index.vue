<template>
  <div class="mainBlockLogin">
    <div v-if="loginStore.id === 1">
      <div v-if="regOrLogin === 'enter'">
        <div class="title">Вход</div>
        <div class="nameInput">Логин</div>
        <input v-model="enterLogin" placeholder="Введите логин" />

        <div class="nameInput">Пароль</div>
        <input
          v-model="enterPassword"
          type="password"
          placeholder="Введите пароль"
        />

        <button
          class="buttonGo"
          @click="loginStore.enter(enterLogin, enterPassword)"
        >
          Войти
        </button>

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
        <input v-model="regLogin" placeholder="Введите логин" />
        <div class="nameInput">Пароль</div>

        <input
          v-model="regPassword"
          type="password"
          placeholder="Введите пароль"
        />

        <button
          class="buttonGo"
          @click="loginStore.registration(regLogin, regPassword)"
        >
          Создать аккаунт
        </button>

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

// @ts-ignore
import AccountInfo from './components/AccountInfo.vue'

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

    .buttonRegLogin {
      color: #007aff;
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
