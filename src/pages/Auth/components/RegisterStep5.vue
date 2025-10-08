<template>
  <UiInput v-model="limitCcal" placeholder="Введите дневной лимит калорий" />
  <UiButton text="Продолжить" @click="sendLimitCcal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

const limitCcal = ref<number | null>(null)
const emit = defineEmits<{
  (e: 'send-limitCcal', limitCcal: number): void
  (e: 'start-reg'): void
}>()

function sendLimitCcal() {
  emit('send-limitCcal', Number(limitCcal.value))
  emit('start-reg')
}
</script>

<style scoped lang="scss">
.ui-input2 {
  margin-top: 18px;
}
</style>
