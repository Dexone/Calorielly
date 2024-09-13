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



    <div>
                <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                  Количество приемов пищи
                </p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <select v-model="inputPriems" @change="editPriems()"
                    class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0">
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
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
function editMax() {
  if(userStore.axiosInfo.id === 1){
    alert("Необходимо зарегистрироваться")
  }
  else{
  userStore.axiosInfo.max = Number(inputMax.value)}
}

const inputPriems = ref(userStore.axiosInfo.priems)
function editPriems() {
  if(userStore.axiosInfo.id === 1){
    alert("Необходимо зарегистрироваться")
  }
  else{
  userStore.axiosInfo.priems = Number(inputPriems.value)
}
}





</script>