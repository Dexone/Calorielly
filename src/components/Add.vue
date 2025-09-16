<template>
  <div class="overlay">
  </div>
  <div class="mainBlockAdd">
    <div class="close" @click="$emit('close')">
      <img src="@/assets/Add/close.svg">
    </div>

    <div class="login">
      <div class="nameLogin">Добавить прием пищи</div>


          <UiInput placeholder="Калорийность" v-model.number="ccalValue" type="number" />

       <UiInput placeholder="Описание" v-model.trim="ccalName" type="string" />
      <button class="buttonGo" @click="
      (loginStore.addCcal(ccalValue, ccalName),
        (ccalValue = ''),
        (ccalName = ''))
        ">
        Добавить
      </button>

    </div>

    <div class="login">
      <div class="nameLogin">Обновить вес</div>



    <UiInput placeholder="Вес кг" v-model.number="weightValue" type="number" />
      <button class="buttonGo" @click="(loginStore.addWeight(weightValue), (weightValue = ''))">
        Обновить
      </button>
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '@/components/ui/UiInput.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()
const emit = defineEmits(['close'])
const ccalValue = ref('')
const ccalName = ref('')

const weightValue = ref('')

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1100;
  top: 0;
  bottom: 0;
}

.mainBlockAdd {
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 3301;
  background-color: rgba(255, 255, 255, 1);
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 22px;
}

.close {
  color: #666;
  float: right;
  margin-right: -50px;
  transition: 0.3s;

  &:hover {
    border-radius: 5px;
    color: #9b9b9b;
    cursor: pointer;
    transition: 0.3s;
  }
}




.login {
  margin: 30px;
}

.register {
  margin: 30px;
}

input {

  margin-top: 20px;

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
