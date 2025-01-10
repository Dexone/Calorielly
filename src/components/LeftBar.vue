<template>
    <div class="mainLeftBar">


        <div class="section" @click="hiddenStore.showLogin()"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <a>Авторизация</a>
        </div>


        <div class="section" @click="hiddenStore.showScales()"><svg
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z" />
            </svg>

            <a>Весы</a>
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
    width: 200px;
    border-radius: 5px;
    padding-top: 30px;
    padding-bottom: 10px;
    margin-right: 20px;
}

.section {
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
}

svg {
    color: #007aff;
    float: left;
    margin-top: -3px;
    margin-right: 10px;
}
</style>