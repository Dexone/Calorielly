<template>
        <div class="mainBlockLogin" v-if="hiddenStore.registrationSteps === true">

     


        <div class="register" v-if="loginStore.limitCcal === 0">
            <div class="nameLogin">Теперь заполним необходимые данные</div>
            <div> <input v-model="limCcal" placeholder="Суточный лимит калорий"></div>
            <div><button @click="loginStore.editLimitCcal(limCcal)" class="buttonGo">Далее</button></div>
        </div>

        <div class="register" v-if="loginStore.desiredWeight === 0  && loginStore.limitCcal !== 0">
            <div class="nameLogin">Теперь заполним необходимые данные</div>
            <div> <input v-model="desWeight" placeholder="Желаемый вес"></div>
            <div><button @click="loginStore.editDesiredWeight(desWeight)" class="buttonGo">Далее</button></div>
        </div>

        <div class="register" v-if="loginStore.weightList.length === 1  && loginStore.limitCcal !== 0 && loginStore.desiredWeight !== 0">
            <div class="nameLogin">Теперь заполним необходимые данные</div>
            <div> <input v-model="weightNow" placeholder="Текущий вес"></div>
            <div><button @click="loginStore.addWeight(weightNow)" class="buttonGo">Далее</button></div>
        </div>

    </div>
    

  


</template>



<script setup>
import { ref } from 'vue'
import { useLogin } from '../store/Login';
const loginStore = useLogin();
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();




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

.nameLogin {
    margin-bottom: 10px;
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
.buttonGo:hover{
    background-color: #439eff;
    cursor: pointer;
    transition: 0.3s
}


</style>