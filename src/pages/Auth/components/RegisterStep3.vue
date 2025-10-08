<template>
  <UiInput v-model="weight" placeholder="Введите текущий вес" />
  <UiButton text="Продолжить" @click="sendWeight" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

const weight = ref()
const weightList = ref<[string, number] | null>(null)
const emit = defineEmits<{
  (e: 'send-weightList', weightList: [string, number]): void
  (e: 'change-step', value: string): void
}>()

function sendWeight() {
  //отправляет массив дата:вес в payload

  let dateToday =
    new Date().getDate() +
    '.' +
    (new Date().getMonth() + 1) +
    '.' +
    new Date().getFullYear()

  weightList.value = [dateToday, Number(weight.value)]

  emit('send-weightList', weightList.value)
  emit('change-step', 'reg4')
}
</script>

<style scoped lang="scss">
.ui-input2 {
  margin-top: 18px;
}
</style>
