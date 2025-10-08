<template>
  <div class="main">
    <UiBlock class="ui-block">
      <a class="back" v-if="payload?.id" @click="goBack"
        ><img src="@/assets/auth/back.svg"
      /></a>
      <img src="@/assets/logo.svg" />
      <p class="t-title-XL">
        <a v-if="steps === 'enter'">Вход</a> <a v-else>Регистрация</a> в
        Calorielly
      </p>
      <div class="switcher" v-if="steps === 'reg1' || steps === 'enter'">
        <div class="activeButton" :class="{ active: steps === 'reg1' }"></div>
        <div
          class="disabledButton"
          :class="{ active: steps === 'enter' }"
          @click="switchAuth"
        ></div>
        <div class="text"><a>Вход</a> <a>Регистрация</a></div>
      </div>

      <EnterStep1 v-if="steps === 'enter'" />
      <!-- номер телефона -->
      <RegisterStep1
        v-if="steps === 'reg1'"
        @send-value="updateLoginId"
        @change-step="steps = $event as Step"
      />
      <!-- пароль -->
      <RegisterStep2
        v-if="steps === 'reg2'"
        @change-step="steps = $event as Step"
        @send-password="updatePassword"
      />
      <!-- текущий вес -->
      <RegisterStep3
        v-if="steps === 'reg3'"
        @change-step="steps = $event as Step"
        @send-weightList="updateWeightList"
      />
      <!-- текущий вес -->
      <RegisterStep4
        v-if="steps === 'reg4'"
        @change-step="steps = $event as Step"
        @send-desiredWeight="updateDesiredWeight"
      />
      <!-- лимит калорий -->
      <RegisterStep5
        v-if="steps === 'reg5'"
        @start-reg="registration"
        @send-limitCcal="updateLimitCcal"
      />
    </UiBlock>
  </div>
  {{ payload }}
  {{ steps }}
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import EnterStep1 from './components/EnterStep1.vue'
import RegisterStep1 from './components/RegisterStep1.vue'
import RegisterStep2 from './components/RegisterStep2.vue'
import RegisterStep3 from './components/RegisterStep3.vue'
import RegisterStep4 from './components/RegisterStep4.vue'
import RegisterStep5 from './components/RegisterStep5.vue'

import UiBlock from '@/components/ui/UiBlock.vue'
import { useLogin } from '@/store/Login'
const router = useRouter()
const loginStore = useLogin()

type ValuePayload = {
  id?: number
  login?: string
  password?: string
  weightList?: [[string, number]]
  desiredWeight?: number
  limitCcal?: number
}
const payload = ref<ValuePayload | null>(null)

type Step = 'reg1' | 'reg2' | 'reg3' | 'reg4' | 'reg5' | 'enter'
const steps = ref<Step>('reg1')
const switchAuth = () => {
  if (steps.value === 'reg1') {
    console.log(steps.value)
    steps.value = 'enter'
    console.log(steps.value)
  } else if (steps.value === 'enter') {
    steps.value = 'reg1'
  }
}

const fieldByStep = {
  reg2: ['id', 'login', 'password'],
  reg3: ['password', 'weightList'],
  reg4: ['weightList', 'desiredWeight'],
  reg5: ['desiredWeight', 'limitCcal'],
} as const satisfies Partial<Record<Step, readonly (keyof ValuePayload)[]>> //какие поля очищаем при уходе назад с соответствующего шага
const prevByStep = {
  reg2: 'reg1',
  reg3: 'reg2',
  reg4: 'reg3',
  reg5: 'reg4',
} as const satisfies Partial<Record<Step, Step>> //на какой шаг возвращаемся при уходе с соответсвующего шага
const goBack = () => {
  const keys =
    (fieldByStep as Record<string, ReadonlyArray<keyof ValuePayload>>)[
      steps.value
    ] ?? []
  if (!payload.value) return
  for (const k of keys) {
    delete (payload.value as Record<keyof ValuePayload, unknown>)[k]
  }
  const prev = (prevByStep as Record<string, Step>)[steps.value]
  steps.value = prev ?? steps.value //установка шага
}

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

const updateWeightList = (weightList: [string, number]) => {
  //добавляет в payload первую запись списка веса
  if (payload.value) {
    payload.value.weightList = [weightList]
  }
}

const updateDesiredWeight = (desiredWeight: number) => {
  //добавляет в payload желаемый вес
  if (payload.value) {
    payload.value.desiredWeight = desiredWeight
  }
}

const updateLimitCcal = (limitCcal: number) => {
  if (payload.value) {
    payload.value.limitCcal = limitCcal
  }
}

const registration = () => {
  //если логин не найден в бд допускается регистрация
  axios.post(`https://dexone.pw/backend_new/users`, {
    id: payload.value?.id,
    login: payload.value?.login,
    password: payload.value?.password,
  }) //создание пользователя
  axios
    .post('https://dexone.pw/backend_new/data', {
      id: payload.value?.id,
      limitCcal: payload.value?.limitCcal,
      desiredWeight: payload.value?.desiredWeight,
      eatingList: [['0', [], [], []]],
      weightList: payload.value?.weightList,
    })
    .then(() => {
      loginStore.id = payload.value?.id ?? 1 //авторизация пользователя
      loginStore.getInfo()
      router.push('/profile')
    })
    .catch((err) => {
      console.error(err)
    })
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
    position: relative;
    text-align: center;
    width: 100%;

    @media (width <=1000px) {
      border: none;
      border-radius: 0;
      height: 100%;
      max-width: 100%;
      position: fixed;
    }

    .back {
      background: none;
      border: none;
      cursor: pointer;
      left: 10px;
      padding: 10px;
      position: absolute;
      top: 0;

      img {
        width: 26px;
      }
    }

    img {
      height: 48px;
      margin: 0 auto;
      width: 48px;
    }

    .t-title-XL {
      margin: 18px 0;
    }

    .switcher {
      background-color: $palette-bg;
      border-radius: 8px;
      height: 40px;
      margin-bottom: 18px;
      padding: 3px;
      position: relative;
      width: 100%;

      .activeButton {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 1px 10px rgb(139 139 139 / 30%);
        cursor: pointer;
        height: calc(100% - 6px);
        position: absolute;
        transition: transform 0.25s ease;
        width: calc(50% - 3px);

        &.active {
          transform: translateX(100%);
        }
      }

      .disabledButton {
        border-radius: 8px;
        cursor: pointer;
        height: 100%;
        width: 50%;

        &.active {
          transform: translateX(100%);
        }
      }

      .text {
        align-items: center;
        display: flex;
        inset: 0;
        justify-content: space-between;
        pointer-events: none;
        position: absolute;

        a {
          width: 50%;
        }
      }
    }
  }
}
</style>
