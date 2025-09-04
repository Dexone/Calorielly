<template>
  <div class="mainBlockScales">



    <div class="title">Калькулятор граммов</div>


    <div class="nameInput">Калорийность продукта</div>
    <input v-model.number="stoGR" type="number" placeholder="Ккал/100гр" @input="chetGR()" />

    <div class="nameInput">Желаемая калорийность</div>
    <input v-model.number="ccalGR" type="number" placeholder="Нужно калорий" @input="chetGR()" />



    <button class="buttonGo" disabled>
      {{ itogGR }} грамм
      <p>Положите на весы</p>
    </button>



  </div>






</template>

<script setup lang="ts">
import { ref } from 'vue'


let stoGR = ref<number | null>(null)
let ccalGR = ref<number | null>(null)
let itogGR = ref<number>(0)
function chetGR() {
  if (stoGR.value && stoGR.value > 0 && ccalGR.value) {
    itogGR.value = Math.floor(ccalGR.value / (stoGR.value / 100))
  } else {
    itogGR.value = 0
  }
}

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.mainBlockScales {
  border-radius: 8px;
  padding: 20px 22px;
  background-color: #fff;
  border: 0.5px solid #d9d9d9;

  .title {
    font-weight: 600;
    font-size: 17px;
  }

  .nameInput {
    font-weight: 500;
    font-size: 15px;
    color: rgb(88, 99, 111);
    margin-top: 18px;
  }

  input {
    background-color: #f9fafb;
    border: solid;
    border-color: #c7c7c7;
    border-radius: 7px;
    border-width: 1px;
    display: block;
    height: 40px;
    margin-top: 4px;
    padding-left: 7px;
    width: 100%;
    font-size: 15px;
    font-weight: 500;

    &::placeholder {
      font-size: 14px;
      font-weight: 400;
    }
  }



  .buttonGo {
    background-color: rgb(245, 245, 245);
    border: none;
    border-radius: 7px;
    color: #000000;


    margin-top: 20px;
    width: 100%;
    font-weight: 600;
    font-size: 17px;
    padding: 8px 0;

    p {
      font-weight: 500;
      font-size: 14px;
      color: rgb(88, 99, 111);
    }
  }



}
</style>
