<template>
  <div v-if="hiddenStore.scales" class="mainBlockScales">
    <div class="x" @click="hiddenStore.scales = !hiddenStore.scales">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>
    </div>

    <div class="login">
      <div class="nameLogin">Калькулятор граммов</div>
      <div>
        <input
          v-model="stoGR"
          type="number"
          placeholder="Ккал/100гр"
          @input="chetGR()"
        />
      </div>
      <div>
        <input
          v-model="ccalGR"
          type="number"
          placeholder="Нужно калорий"
          @input="chetGR()"
        />
      </div>
      <div>
        <button class="buttonGo" disabled>
          {{ itogGR }} грамм ({{ Math.floor(stoGR * (itogGR / 100)) }} ккал)
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useComponents } from '../store/ComponentsHidden'
import { useLogin } from '../store/Login'
const hiddenStore = useComponents()
const loginStore = useLogin()

let stoGR = ref('')
let ccalGR = ref('')
let itogGR = ref(0)
function chetGR() {
  itogGR.value = Math.floor(ccalGR.value / (stoGR.value / 100))
}

defineProps({
  msg: String,
})
const regOrLogin = ref('register')
</script>

<style scoped>
.mainBlockScales {
  background-color: white;
  border-radius: 5px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  position: fixed; /* фиксированное положение */
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1050;
}

.x {
  color: #666;
  float: right;
  margin: 10px;
}

.x:hover {
  color: #9b9b9b;
  cursor: pointer;
  transition: 0.3s;
}

.nameLogin {
  margin-bottom: 10px;
}

.login {
  margin: 30px;
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
  background-color: #f3f2f8;
  border: none;
  border-radius: 7px;
  color: #74408b;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  margin-top: 20px;
  width: 100%;
}
</style>
