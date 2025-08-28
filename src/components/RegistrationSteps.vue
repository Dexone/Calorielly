<template>
  <div v-if="hiddenStore.registrationSteps === true" class="mainBlockLogin">
    <div v-if="loginStore.limitCcal === 0" class="register">
      <div class="nameLogin">Теперь заполним необходимые данные</div>
      <div>
        <input v-model="limCcal" placeholder="Суточный лимит калорий" />
      </div>
      <div>
        <button class="buttonGo" @click="loginStore.editLimitCcal(limCcal)">
          Далее
        </button>
      </div>
    </div>

    <div
      v-if="loginStore.desiredWeight === 0 && loginStore.limitCcal !== 0"
      class="register"
    >
      <div class="nameLogin">Теперь заполним необходимые данные</div>
      <div><input v-model="desWeight" placeholder="Желаемый вес" /></div>
      <div>
        <button
          class="buttonGo"
          @click="loginStore.editDesiredWeight(desWeight)"
        >
          Далее
        </button>
      </div>
    </div>

    <div
      v-if="
        loginStore.weightList.length === 1 &&
        loginStore.limitCcal !== 0 &&
        loginStore.desiredWeight !== 0
      "
      class="register"
    >
      <div class="nameLogin">Теперь заполним необходимые данные</div>
      <div><input v-model="weightNow" placeholder="Текущий вес" /></div>
      <div>
        <button class="buttonGo" @click="loginStore.addWeight(weightNow)">
          Далее
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useComponents } from '../store/ComponentsHidden'
import { useLogin } from '../store/Login'
const loginStore = useLogin()
const hiddenStore = useComponents()

const limCcal = ref('')
const desWeight = ref('')
const weightNow = ref('')

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

.nameLogin {
  margin-bottom: 10px;
}

.register {
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
</style>
