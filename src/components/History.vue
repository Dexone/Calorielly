<template>
    <div
        class="relative flex mx-3 mt-3 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-3 mt-3 mb-3">
        <div class="p-6">
            <div class="mb-4 flex items-center justify-between">
                <h5
                    class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    <!-- авав -->

                    <div class="flex items-center gap-4">



                        <button :disabled="(daySelector + 1) === userStore.axiosInfo.info.length" @click="daySelector++"
                            class="flex items-center px-1 gap-2 py-1 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                        </button>


                        <div class="flex items-center gap-2">
                            <button
                                class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    {{ userStore.axiosInfo.info[daySelector][0] }}
                                </span>
                            </button>

                        </div>
                        <button :disabled="daySelector === 0" @click="daySelector--"
                            class="flex items-center gap-2 px-1 py-1 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>
                    </div>


                    <!-- ава -->
                </h5>
                <a href="#" class="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased">
                    {{ userStore.axiosInfo.info[daySelector][2].reduce((acc, num) => acc + Number(num), 0) }} ккал
                </a>
            </div>





            <div class="divide-y divide-gray-200">

                <div class="flex items-center justify-between pb-3 pt-3 last:pb-0"
                    v-for="hist, index in userStore.axiosInfo.info[daySelector][1]">
                    <div class="flex items-center gap-x-3">
                        <!-- <img @click=deleteValue(index)
            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
            alt="Tania Andrew"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          /> -->







                        <div>
                            <h6
                                class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                {{ userStore.axiosInfo.info[daySelector][3][index] }}
                            </h6>
                            <p class="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                                {{ userStore.axiosInfo.info[daySelector][1][index] }}
                            </p>
                        </div>
                    </div>
                    <h6
                        class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {{ userStore.axiosInfo.info[daySelector][2][index] }} ккал <button v-if="daySelector === 0" class="text-xm text-gray-400"
                            @click=deleteValue(index)>×</button>
                    </h6>
                </div>

            </div>
        </div>
    </div>





</template>

<script setup>
import { ref, watch, inject } from 'vue'
import { useUser } from '../../store/User';
import axios from 'axios'
const userStore = useUser();
defineProps({
    msg: String,
})
const hiddenSettings = inject("hiddenSettings")
const hiddenAuth = inject("hiddenAuth")



const daySelector = ref(0)


function deleteValue(index) {
    if (userStore.axiosInfo.id === 1) {
        alert("Необходимо зарегистрироваться")
    }
    else {
        userStore.axiosInfo.info[daySelector.value][1].splice(index, 1)
        userStore.axiosInfo.info[daySelector.value][2].splice(index, 1)
        userStore.axiosInfo.info[daySelector.value][3].splice(index, 1)
    }
}
</script>