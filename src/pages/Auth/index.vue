<template>
  <div class="main">
    <UiBlock class="ui-block">
      <img src="@/assets/logo.svg" />
      <p class="t-title-XL">Регистрация в Calorielly</p>

      <RegisterStep1
        v-if="!payload?.id && !payload?.login"
        @send-value="updateLoginId"
      />
      <RegisterStep2
        v-if="payload?.id && payload?.login && !payload?.password"
        @send-password="updatePassword"
      />
      <RegisterStep3
        v-if="
          payload?.id &&
          payload?.login &&
          payload?.password &&
          !payload.weightList
        "
        @send-weightList="updateWeightList"
      />
    </UiBlock>
  </div>
  {{ payload }}
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RegisterStep1 from './components/RegisterStep1.vue'
import RegisterStep2 from './components/RegisterStep2.vue'
import RegisterStep3 from './components/RegisterStep3.vue'

import UiBlock from '@/components/ui/UiBlock.vue'

type ValuePayload = {
  id: number
  login: string
  password?: string
  weightList?: [[string, number]]
}
const payload = ref<ValuePayload | null>(null)

const updateLoginId = ([id, login]: [number, string]) => {
  //добавляет в payload id и логин
  payload.value = { id, login }
}

const updatePassword = (password: string) => {
  //добавляет в payload пароль и вызывает функцию регистрации
  if (payload.value) {
    payload.value.password = password
  }
}

function updateWeightList(weightList: [string, number]) {
  //добавляет в payload первую запись списка веса
  if (payload.value) {
    payload.value.weightList = [weightList]
  }
}
</script>

<style scoped lang="scss">
.main {
  align-items: center;
  display: flex;
  min-height: 100vh;

  @media (width <=1000px) {
    display: block;
  }

  .ui-block {
    margin: 0 auto;
    max-width: 360px;
    padding: 28px;
    text-align: center;
    width: 100%;

    @media (width <=1000px) {
      border: none;
      border-radius: 0;
      height: 100%;
      max-width: 100%;
      position: fixed;
    }

    img {
      height: 48px;
      margin: 0 auto;
      width: 48px;
    }

    .t-title-XL {
      margin: 18px 0;
    }
  }
}
</style>
