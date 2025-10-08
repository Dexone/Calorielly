<template>
  <UiInput v-model="password1" placeholder="Пароль" type="password" />
  <UiInput
    class="ui-input2"
    placeholder="Повторите пароль"
    v-model="password2"
    type="password"
  />
  <UiButton text="Продолжить" @click="checkPassword" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

const password1 = ref('')
const password2 = ref('')

const emit = defineEmits<{
  (e: 'send-password', password: string): void
  (e: 'change-step', value: string): void
}>()

function checkPassword() {
  //проверяет совпадение паролей и отправляет в payload
  if (password1.value === password2.value) {
    emit('send-password', password1.value)
    emit('change-step', 'reg3')
  }
}
</script>

<style scoped lang="scss">
.ui-input2 {
  margin-top: 18px;
}
</style>
