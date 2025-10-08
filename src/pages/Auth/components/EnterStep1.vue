<template>
  <UiInput v-model="login" placeholder="+7 000 000 00 00" />
  <UiInput
    class="pass"
    v-if="showPasswordInput"
    type="password"
    v-model="password"
    placeholder="Введите пароль"
  />
  <UiButton
    v-if="!showPasswordInput"
    text="Продолжить"
    @click="openPasswordInput"
  />
  <UiButton v-if="showPasswordInput" text="Войти" @click="enter" />
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
import { useLogin } from '@/store/Login'
const router = useRouter()
const loginStore = useLogin()

const login = ref('+7')
const password = ref('')
const showPasswordInput = ref(false)
function openPasswordInput() {
  //включает инпут пароля
  if (login.value.length === 12) {
    showPasswordInput.value = true
  }
}
function enter() {
  axios.get(`https://dexone.pw/backend_new/users`).then((res) => {
    let logins = []
    let passwords = []
    for (let i = 0; i < res.data.length; i++) {
      logins.push(res.data[i].login) //массив логинов в дб
      passwords.push(res.data[i].password) //массив паролей в дб
    }

    let search = logins.indexOf(login.value) //возврат индекса введенного логина в базе данных или -1 если нет
    if (search > 0 && res.data[search].password == password.value) {
      //если найден логин и пароль по этому индексу равен введенному value то
      loginStore.id = res.data[search].id //задается id пользователя в сторе
      loginStore.getInfo()
      router.push('/profile')
    } else {
      alert('Неверный логин или пароль')
    }
  })
}
</script>

<style scoped lang="scss">
.pass {
  margin-top: 14px;
}
</style>
