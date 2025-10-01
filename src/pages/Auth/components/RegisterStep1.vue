<template>
  <UiInput v-model="login" placeholder="+7 000 000 00 00" />
  <UiButton text="Продолжить" @click="checkLogin" />
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

const login = ref('+7')

const emit = defineEmits<{ (e: 'send-value', value: [number, string]): void }>()

function checkLogin() {
  //проверят доступность логина для регистрации и отправляет его в payload с уникальным id
  axios.get(`https://dexone.pw/backend_new/users`).then((res) => {
    let lastId = Number(res.data[res.data.length - 1].id) //последний зарегистрированный id
    let logins = [] //массив логинов в бд
    for (let i = 0; i < res.data.length; i++) {
      logins.push(res.data[i].login)
    }

    if (logins.includes(login.value) == false) {
      //если логин не найден в бд - отправка id и логина в payload
      emit('send-value', [lastId + 1, login.value])
    }
  })
}
</script>

<style scoped lang="scss"></style>
