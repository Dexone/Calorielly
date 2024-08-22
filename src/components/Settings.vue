<template>

  <div
    class=" fixed top-0 right-0  z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-w-3xl mx-auto mt-3 "
    :class="{ 'hidden': hiddenSettings }">
    <div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-3">



      <div class="flex items-center justify-between p-3 p-4 border-b rounded-t">
        <h4 class="ml-2 text-center align-middle font-sans text-sm font-bold ">
          Настройки
        </h4>
        <button @click="hiddenSettings = true"
          class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>




      <div class="block overflow-visible p-6">

        <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
          <div role="tabpanel"
            class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
            data-value="card">


            <form class="flex flex-col gap-4">



        

    <div class="relative">

        <input v-model="inputMax" class="block w-full py-2.5 ps-3 text-sm text-gray-900 hover:border-gray-200 border border-gray-200 rounded-lg" >
        <button @click="editMax()" class="text-white absolute end-2.5 bottom-2 bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1" type="button">Изменить</button>
    </div>



{{ inputMax }}


<!-- <div>
                <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                  Максимальное количество калорий
                </p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input placeholder="123" v-model="inputMax"
                    class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />

                </div>
              </div>

              <button @click="editMax()"
                class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-2"
                type="button">
                Изменить
              </button> -->




              <div>
                <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                  Начало дня
                </p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <select placeholder="123" v-model="selectTimeStart"
                    class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0">

                    <option v-for="day in sutki">{{ day }}</option>
                  </select>
                </div>
              </div>





              <div>
                <div class="flex items-start  text-sm font-medium text-gray-900   ">
                  <div class="flex  h-5">
                    8-часовой сон
                  </div>
                  <a class="ms-auto text-gray-400 text-xs">

                    <label class="inline-flex items-center cursor-pointer mr-1">
                      <input type="checkbox" value="" class="sr-only peer" v-model="hour8">
                      <div
                        class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-gray-600">
                      </div>
                    </label>
                  </a>
                </div>
              </div>





              <div>
                <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                  Конец дня
                </p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <select :disabled="hour8" :value="selectTimeEnd" v-model="selectTimeEnd"
                    class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0">

                    <option v-for="day in sutki" :selected=userStore.axiosInfo.timeEnd>{{ day }}</option>
                  </select>

                </div>
              </div>










            </form>








          </div>
        </div>
      </div>
    </div>
  </div>





</template>

<script setup>
import { ref, inject, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { useUser } from '../../store/User';
import axios from 'axios'
const userStore = useUser();
defineProps({
  msg: String,
})

const hiddenSettings = inject("hiddenSettings")
const inputMax = ref(userStore.axiosInfo.max)
const selectTimeStart = ref(userStore.axiosInfo.timeStart)
const selectTimeEnd = ref(userStore.axiosInfo.timeEnd)










const hour8 = ref(true)
const state = useStorage('vue-use-local-storage', hour8)
watch([selectTimeStart, hour8], () => {
if(hour8.value === true){
  let chet = selectTimeStart.value
  for (let i = 0; i < 8; i++) {
    if (chet === 0) {
      chet = 24
    }
    chet--
  } //8 часов назад от начала дня
  console.log(chet)
  selectTimeEnd.value = chet}
})


const sutki = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])


function editMax() {
  if(userStore.axiosInfo.id === 1){
    alert("Необходимо зарегистрироваться")
  }
  else{
  userStore.axiosInfo.max = Number(inputMax.value)}
}



watch(selectTimeStart, () => {
  if(userStore.axiosInfo.id === 1){
    alert("Необходимо зарегистрироваться")
  }
  else{
  userStore.axiosInfo.timeStart = Number(selectTimeStart.value)}
})
watch(selectTimeEnd, () => {
  if(userStore.axiosInfo.id === 1){
    alert("Необходимо зарегистрироваться")
  }
  else{
  userStore.axiosInfo.timeEnd = Number(selectTimeEnd.value)}
})


</script>