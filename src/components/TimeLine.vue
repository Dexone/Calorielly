<template>
    <a class="title">Лента событий</a>
    <div class="mainBlockTimeLine">

<div class="daySelector"><a @click="() => {    if(loginStore.eatingList.length > daySelector+1) { daySelector++ }}" class="selectorArrow"><</a>
    <a class="selectorTxt">{{ loginStore.eatingList[daySelector][0] }}</a>
    <a @click="() => {    if(daySelector > 0) { daySelector-- }}" class="selectorArrow">></a>
</div>
        <div class="blockTimeLine" v-for="hist, index in loginStore.eatingList[daySelector][1]">

            <div class="line">
                <div class="circle">
                    <svg class="img1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
                    </svg>
                </div>
            </div>

            <div class="txt">
                <div class="txt1">{{ loginStore.eatingList[daySelector][3][loginStore.eatingList[daySelector][3].length - 1 - index] }}</div>
                <div class="txt2">
                    {{ loginStore.eatingList[daySelector][1][loginStore.eatingList[daySelector][1].length - 1 - index] }}
                </div>

            </div>
            <div class="update"><div >{{ loginStore.eatingList[daySelector][2][loginStore.eatingList[daySelector][2].length - 1 - index] }} ккал</div>
            <div class="txt3" @click="loginStore.deleteCcalValue(loginStore.eatingList[daySelector][2].length - 1 - index)">Удалить</div></div>

        </div>
    </div>

</template>



<script setup>
import { useLogin } from '../store/Login';
const loginStore = useLogin();

import { ref, watch } from 'vue'

const daySelector = ref(0)

watch(loginStore.eatingList, () => {
    console.log('test')
})

defineProps({
    msg: String,
})


</script>



<style scoped>
.mainBlockTimeLine {
    background-color: white;
    border-radius: 8px;
    width: 100%;
    margin-top: 10px;
    padding-top: 20px;
    box-shadow: 0px 4px 5px 0px #dedee0;
}
.daySelector{
    text-align: right;
    height: 20px;
    color: #8a898e;
    font-size: 12px;
    font-weight: 400;
    margin-right: 15px;
    margin-bottom: 2px;
}


.selectorArrow{
    font-size: 14px;
    padding-right: 3px;
    padding-left: 3px;
    transition: 0.3s
}
.selectorArrow:hover{
    color: #a9a8ac;
    cursor: pointer;
    transition: 0.3s
}

.title {
    font-weight: 600;
}

.blockTimeLine {
    height: 100px;
    margin-left: 15px;
    margin-right: 15px;
}


.line {
    float: left;
    background-color: #e8e8ea;
    width: 2px;
    margin-left: 22px;
    margin-top: -20px;
    height: 100px;
}

.circle {
    background-color: #1e9a82;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    margin-left: -22px;
    margin-top: 20px;
}


.img1 {
    color: #ffffff;
    margin-top: 9px;
    margin-left: 10px;
}



.txt {
    float: left;
    margin-left: 35px;
}

.txt1 {
    font-size: 17px;
    font-weight: 600;
}

.txt2 {
    margin-right: 15px;
    margin-top: 6px;
    color: #8a898e;
    font-size: 12px;
}



.update {
    font-size: 17px;
    font-weight: 600;
    float: right;
}
.txt3 {
    color: #8a898e;
    font-size: 12px;
    font-weight: 400;
    margin-top: 4px;
    float: right;
    transition: 0.3s
}
.txt3:hover{
    color: #a9a8ac;
    cursor: pointer;
    transition: 0.3s
}
</style>