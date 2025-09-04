<template>
  <div class="mainBlockSettings">

    <div class="title">Калькулятор граммов</div>

    <div class="nameInput">Желаемый вес</div>
    <div><input v-model="weight" type="number" placeholder="Вес кг" /></div>
    <div>
      <button class="buttonGo" @click="(loginStore.editDesiredWeight(weight), (weight = ''))">
        Изменить
      </button>
    </div>



    <div class="nameInput">Лимит калорий</div>
    <div><input v-model="ccal" type="number" placeholder="Ккал" /></div>

      <button class="buttonGo" @click="(loginStore.editLimitCcal(ccal), (ccal = ''))">
        Изменить
      </button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import { useLogin } from '@/store/Login'

const loginStore = useLogin()

const weight = ref<number | null >(null)
const ccal = ref<number | null>(null)

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.mainBlockSettings {
  background-color: #fff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
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

  input {
    background-color: #f2f2f2;
    border: solid;
    border-color: #c7c7c7;
    border-radius: 7px;
    border-width: 1px;
    display: block;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    margin-top: 4px;
    padding-left: 7px;
    width: 100%;

    &::placeholder {
      font-size: 15px;
      font-weight: 600;
    }

    &:focus {
  border: 1px solid #007aff;
  outline: none;
  
    }
  }



  .buttonGo {
    background-color: #007aff;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    margin-top: 20px;
    transition: 0.3s;
    width: 100%;
      &:hover {
    background-color: #439eff;
    cursor: pointer;
    transition: 0.3s;
  }
  }




}
</style>
