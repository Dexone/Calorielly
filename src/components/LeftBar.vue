<template>
    <div class="mainLeftBar">


        <div class="section" @click="hiddenStore.showLogin()"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <a>Авторизация</a>
        </div>


        <div class="section" @click="hiddenStore.showAdd()"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
            Добавить</div>
    </div>
</template>



<script setup>
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();
import { ref } from 'vue'

defineProps({
    msg: String,
})






</script>



<style scoped>
.mainLeftBar {
    background-color: rgb(255, 255, 255);
    width: 300px;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 20px;
}

.section {
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    border: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #c7c7c7;
}

svg {
    color: #007aff;
    float: left;
    margin-top: -3px;
    margin-right: 5px;
}
</style>