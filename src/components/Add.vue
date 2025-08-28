<template>
  <div v-if="hiddenStore.add" class="mainBlockAdd">
    <div class="x" @click="hiddenStore.add = !hiddenStore.add">
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
      <div class="nameLogin">Добавить прием пищи</div>
      <div>
        <input v-model="ccalValue" type="number" placeholder="Калорийность" />
      </div>
      <div><input v-model="ccalName" placeholder="Описание" /></div>
      <div>
        <button
          class="buttonGo"
          @click="
            (loginStore.addCcal(ccalValue, ccalName),
            (ccalValue = ''),
            (ccalName = ''))
          "
        >
          Добавить
        </button>
      </div>
    </div>

    <div class="login">
      <div class="nameLogin">Обновить вес</div>
      <div>
        <input v-model="weightValue" type="number" placeholder="Вес кг" />
      </div>
      <div>
        <button
          class="buttonGo"
          @click="(loginStore.addWeight(weightValue), (weightValue = ''))"
        >
          Обновить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useComponents } from '@/store/ComponentsHidden'
import { useLogin } from '@/store/Login'
const hiddenStore = useComponents()
const loginStore = useLogin()

const ccalValue = ref('')
const ccalName = ref('')

const weightValue = ref('')

defineProps({
  msg: String,
})
const regOrLogin = ref('register')
</script>

<style scoped>
.mainBlockAdd {
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
  transition: 0.3s;
}

.x:hover {
  border-radius: 5px;
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
  background-color: #007aff;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  margin-top: 20px;
  transition: 0.3s;
  width: 100%;
}

.buttonGo:hover {
  background-color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}
</style>
