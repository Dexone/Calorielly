<template>

    <div v-if="hiddenStore.scales" class="mainBlockScales">

<div class="x" @click="hiddenStore.scales = !hiddenStore.scales"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
</div>


<div class="login" >
    <div class="nameLogin">Калькулятор граммов</div>
    <div> <input v-model="stoGR" @input="chetGR()" placeholder="Ккал/100гр"></div>
    <div><input v-model="ccalGR" @input="chetGR()" placeholder="Нужно калорий"></div>
    <div> <button  class="buttonGo">{{ itogGR }} грамм</button></div>
</div>



</div>
</template>



<script setup>
import { ref } from 'vue'
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();

import { useLogin } from '../store/Login';
const loginStore = useLogin();


let stoGR = ref("")
let ccalGR = ref("")
let itogGR = ref(0)
function chetGR() {
  itogGR.value = Math.round(ccalGR.value / (stoGR.value / 100))
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
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: fixed; /* фиксированное положение */
    top: 0;
    right: 0;
    left: 0;
    z-index: 1050;
}
.x{
    float: right;
    margin: 10px;
    color: #666666;
}
.nameLogin {
    margin-bottom: 10px;
}

.login {
    margin: 30px
}

.register {
    margin: 30px
}
input{
width: 100%;
margin-top: 20px;
height: 40px;
border: solid;
border-radius: 7px;
border-width: 1px;
border-color: #c7c7c7;
background-color: #f9fafb;
display: block;
}
::placeholder{
    padding-left: 7px;
    font-size: 14px;
}
.buttonGo{
width: 100%;
margin-top: 20px;
height: 40px;
border-radius: 7px;
border: none;
background-color: #f3f2f8;
color: #74408b;
font-size: 15px;
font-weight: 500;
}


</style>