<template>

    <div v-if="hiddenStore.settings" class="mainBlockSettings">

<div class="close" @click="hiddenStore.settings = !hiddenStore.settings"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
</div>



<div class="login" >
    <div class="nameLogin">Желаемый вес</div>
    <div> <input v-model="weight" placeholder="Вес кг"></div>
    <div> <button @click="loginStore.editDesiredWeight(weight)" class="buttonGo">Изменить</button></div>
</div>

<div class="login" >
    <div class="nameLogin">Лимит калорий</div>
    <div> <input v-model="ccal" placeholder="Ккал"></div>
    <div> <button @click="loginStore.editLimitCcal(ccal)" class="buttonGo">Изменить</button></div>
</div>

</div>
</template>



<script setup>
import { ref } from 'vue'
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();

import { useLogin } from '../store/Login';
const loginStore = useLogin();


const weight = ref('')
const ccal = ref('')



defineProps({
    msg: String,
})
const regOrLogin = ref('register')











</script>



<style scoped>

.mainBlockSettings {
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
.close{
    float: right;
    margin: 10px;
    color: #666666;
}
.close:hover{
    color: #9b9b9b;
    cursor: pointer;
    transition: 0.3s
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
padding-left: 7px;
}
::placeholder{
    font-size: 14px;
}
.buttonGo{
width: 100%;
margin-top: 20px;
height: 40px;
border-radius: 7px;
border: none;
background-color: #007aff;
color: white;
font-size: 15px;
font-weight: 500;
transition: 0.3s
}

.buttonGo:hover{
    background-color: #439eff;
    cursor: pointer;
    transition: 0.3s
}


</style>