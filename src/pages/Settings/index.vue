<template>
  <div class="mainBlockSettings">
    <div class="title">Калькулятор граммов</div>

    <div class="nameInput">Желаемый вес</div>
    <div>
      <UiInput placeholder="Вес кг" v-model.number="weight" type="number" />
    </div>
    <div>
      <UiButton @click="editDesiredWeight()" text="Изменить" />
    </div>

    <div class="nameInput">Лимит калорий</div>
    <div>
      <UiInput placeholder="Ккал" v-model.number="ccal" type="number" />
    </div>

    <UiButton @click="editLimitCcal()" text="Изменить" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiInput from '@/components/ui/UiInput.vue'
// @ts-ignore
import { useLogin } from '@/store/Login'
const loginStore = useLogin()

const weight = ref<number | null>(null)
const ccal = ref<number | null>(null)

defineProps({
  msg: String,
})

function editDesiredWeight() {
  if (loginStore.id !== 1) {
    axios
      .patch(`https://dexone.pw/backend_new/data/${loginStore.id}`, {
        desiredWeight: Number(weight.value),
      })
      .then(() => {
        loginStore.getInfo()
        weight.value = null
      })
  } else {
    alert('Вам необходимо создать аккаунт')
  }
}

function editLimitCcal() {
  if (loginStore.id !== 1) {
    axios
      .patch(`https://dexone.pw/backend_new/data/${loginStore.id}`, {
        limitCcal: Number(ccal.value),
      })
      .then(() => {
        loginStore.getInfo()
        ccal.value = null
      })
  } else {
    alert('Вам необходимо создать аккаунт')
  }
}
</script>

<style scoped lang="scss">
.mainBlockSettings {
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
}
</style>
