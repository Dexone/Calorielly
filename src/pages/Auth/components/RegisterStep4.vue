<template>
  <UiInput v-model="desiredWeight" placeholder="Введите желаемый вес" />
  <UiButton text="Продолжить" @click="sendDesiredWeight" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'

const desiredWeight = ref<number | null>(null)
const emit = defineEmits<{
  (e: 'send-desiredWeight', desiredWeight: number): void
  (e: 'change-step', value: string): void
}>()

function sendDesiredWeight() {
  emit('send-desiredWeight', Number(desiredWeight.value))
  emit('change-step', 'reg5')
}
</script>

<style scoped lang="scss">
.ui-input2 {
  margin-top: 18px;
}
</style>
