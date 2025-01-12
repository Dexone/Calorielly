<template>
    <div v-if="hiddenStore.login" class="mainBlockLogin">
        <div class="x" @click="hiddenStore.login = !hiddenStore.login"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg></div>

        <div v-if="loginStore.id === 1">
        <div class="login" v-if="regOrLogin === 'enter'">
            <div class="nameLogin">Вход</div>
            <div> <input v-model="enterLogin" placeholder="Логин"></div>
            <div><input v-model="enterPassword" placeholder="Пароль"></div>
            <div> <button @click="loginStore.enter(enterLogin, enterPassword)" class="buttonGo">Войти</button></div>
            <div class="regLogin">Не зарегистрированы? <a class="buttonRegLogin" @click="regOrLogin = 'register'">Создать аккаунт</a></div>
        </div>

        <div class="register" v-if="regOrLogin === 'register'">
            <div class="nameLogin">Регистрация</div>
            <div> <input v-model="regLogin" placeholder="Логин"></div>
            <div><input v-model="regPassword" placeholder="Пароль"></div>
            <div><button @click="loginStore.registration(regLogin, regPassword)" class="buttonGo">Создать аккаунт</button></div>
            <div class="regLogin">Уже есть аккаунт? <a class="buttonRegLogin" @click="regOrLogin = 'enter'">Войти</a></div>
        </div>
    </div>

    <div v-if="loginStore.id > 1">

<div class="account">
        <div class="nameLogin">Аккаунт</div>
            <div class="txt">Номер аккаунта: {{ loginStore.id }}</div>
            <div class="txt">Имя: {{ loginStore.login }}</div>
            <div><button @click="loginStore.exit()" class="buttonGo">Выход</button></div>
            <div class="regLogin">Хотите прекратить использование? <a class="buttonDeleteAcc" @click="loginStore.deleteAccount()">Удалить аккаунт</a></div>
        </div>
    </div>

    </div>
</template>



<script setup>
import { ref } from 'vue'
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();

import { useLogin } from '../store/Login';
const loginStore = useLogin();


const regLogin = ref('')
const regPassword = ref('')

const enterLogin = ref('')
const enterPassword = ref('')





defineProps({
    msg: String,
})
const regOrLogin = ref('register')











</script>



<style scoped>
.mainBlockLogin {
    background-color: white;
    border-radius: 5px;
    max-width: 500px;
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
.x:hover{
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
.account{
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
.buttonGo:hover{
    background-color: #439eff;
    cursor: pointer;
    transition: 0.3s
}

.regLogin{
    margin-top: 15px;
    color: #6c727f
}
.buttonRegLogin{
color: #007aff;
transition: 0.3s
}
.buttonRegLogin:hover{
    color: #439eff;
    cursor: pointer;
    transition: 0.3s
}


.buttonDeleteAcc{
color: #df0000;
transition: 0.3s
}
.buttonDeleteAcc:hover{
    color: #ca5858;
    cursor: pointer;
    transition: 0.3s
}

.txt{
    margin-top: 10px;
}
</style>