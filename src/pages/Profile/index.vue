<template>
  <div  class="mainBlockLogin">
    <div class="x" @click="hiddenStore.login = !hiddenStore.login">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>
    </div>

    <div v-if="loginStore.id === 1">
      <div v-if="regOrLogin === 'enter'" class="login">
        <div class="nameLogin">Вход</div>
        <div><input v-model="enterLogin" placeholder="Логин" /></div>
        <div>
          <input v-model="enterPassword" type="password" placeholder="Пароль" />
        </div>
        <div>
          <button
            class="buttonGo"
            @click="loginStore.enter(enterLogin, enterPassword)"
          >
            Войти
          </button>
        </div>
        <div class="regLogin">
          Не зарегистрированы?
          <a class="buttonRegLogin" @click="regOrLogin = 'register'"
            >Создать аккаунт</a
          >
        </div>
      </div>

      <div v-if="regOrLogin === 'register'" class="register">
        <div class="nameLogin">Регистрация</div>
        <div><input v-model="regLogin" placeholder="Логин" /></div>
        <div>
          <input v-model="regPassword" type="password" placeholder="Пароль" />
        </div>
        <div>
          <button
            class="buttonGo"
            @click="loginStore.registration(regLogin, regPassword)"
          >
            Создать аккаунт
          </button>
        </div>
        <div class="regLogin">
          Уже есть аккаунт?
          <a class="buttonRegLogin" @click="regOrLogin = 'enter'">Войти</a>
        </div>
      </div>
    </div>

    <div v-if="loginStore.id > 1">
      <div class="account">
        <div class="nameLogin">Аккаунт</div>
        <div class="txt">Номер аккаунта: {{ loginStore.id }}</div>
        <div class="txt">Имя: {{ loginStore.login }}</div>
        <div class="txt">Лимит калорий: {{ loginStore.limitCcal }}</div>
        <div class="txt">Желаемый вес {{ loginStore.desiredWeight }}</div>
        <div>
          <button class="buttonGo" @click="loginStore.exit()">Выход</button>
        </div>
        <div class="regLogin">
          Хотите прекратить использование?
          <a class="buttonDeleteAcc" @click="loginStore.deleteAccount()"
            >Удалить аккаунт</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useComponents } from '@/store/ComponentsHidden'
import { useLogin } from '@/store/Login'
const hiddenStore = useComponents()
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

<style scoped>
.mainBlockLogin {
  background-color: white;
  border-radius: 5px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  position: fixed; /* фиксированное положение */
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1050;
}

.x {
  float: right;
  margin: 10px;
}

.x:hover {
  color: #9b9b9b;
  cursor: pointer;
  transition: 0.3s;
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

.account {
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
  width: 100%;
}

.buttonGo:hover {
  background-color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}

.regLogin {
  color: #6c727f;
  margin-top: 15px;
}

.buttonRegLogin {
  color: #007aff;
  transition: 0.3s;
}

.buttonRegLogin:hover {
  color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}

.buttonDeleteAcc {
  color: #df0000;
  transition: 0.3s;
}

.buttonDeleteAcc:hover {
  color: #ca5858;
  cursor: pointer;
  transition: 0.3s;
}

.txt {
  margin-top: 10px;
}
</style>
