<template>

    <div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3 mx-3">
      <div class="p-6">
        <div class="block overflow-visible">

          <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div role="tabpanel"
              class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="card">
    
    
              <form class="flex flex-col gap-4 mt-6" >
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Максимальное количество калорий
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input placeholder="123" v-model="inputMax"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
          
                  </div>
                </div>



                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Начало дня
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <select placeholder="123" v-model="selectTimeStart"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" >

    <option v-for="day in sutki" >{{day}}</option>
  </select>
                  </div>
                </div>
    
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Конец дня
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <select placeholder="123" v-model="selectTimeEnd"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" >

    <option v-for="day in sutki" :selected = userStore.axiosInfo.timeEnd>{{day}}</option>
  </select>
          
                  </div>
                </div>
    
    
    
                <button @click="edit()"
                  class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Изменить
                </button>
    
              </form>
    
    
    
    
    
    
    
    <button @click="console.log(userStore.axiosInfo.timeEnd)">console</button>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
      
      
      
      
      
       
      
      
      
      </template>
      
      <script setup>
      import { ref } from 'vue'
      import { useUser } from '../../store/User';
      import axios from 'axios'
      const userStore = useUser();
      defineProps({
        msg: String,
      })
      const inputMax = ref(userStore.axiosInfo.max)
      const selectTimeStart = ref(userStore.axiosInfo.timeStart)
      const selectTimeEnd = ref(userStore.axiosInfo.timeEnd)
      
      const sutki = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])


      function edit(){
        userStore.axiosInfo.max = Number(inputMax.value)
        userStore.axiosInfo.timeStart = Number(selectTimeStart.value)
        userStore.axiosInfo.timeEnd = Number(selectTimeEnd.value)
      }
      </script>
      