<template>

    <div v-if="hiddenStore.add" class="mainBlock">

<div class="x" @click="hiddenStore.add = !hiddenStore.add">X</div>


<div class="login" >
    <div class="nameLogin">Добавить прием пищи</div>
    <div> <input v-model="ccalValue" placeholder="Калорийность"></div>
    <div><input v-model="ccalName" placeholder="Описание"></div>
    <div> <button @click="loginStore.addCcal(ccalValue, ccalName)" class="buttonGo">Добавить</button></div>
</div>

</div>
</template>



<script setup>
import { ref } from 'vue'
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();

import { useLogin } from '../store/Login';
const loginStore = useLogin();


const ccalValue = ref('')
const ccalName = ref('')

const weightValue = ref('')



defineProps({
    msg: String,
})
const regOrLogin = ref('register')











</script>



<style scoped>

.mainBlock {
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
background-color: #007aff;
color: white;
font-size: 15px;
font-weight: 500;
}


</style>