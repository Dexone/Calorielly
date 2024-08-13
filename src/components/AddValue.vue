<template>

<div class="relative flex w-full   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3">
  <div class="p-6">
    <div class="block overflow-visible">
      <nav>
        <ul role="tablist" class="relative flex flex-row p-1 rounded-lg bg-gray-200 ">
          <li role="tab" @click="hiddenSelector = true"
            class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center  cursor-pointer  text-gray-900"
            data-value="card">
            <div class="z-20 text-inherit">Ввод</div>
            <div v-if="hiddenSelector === true" class="absolute inset-0 z-10 h-full bg-white rounded-md shadow" data-projection-id="4"></div>
          </li>
          <li role="tab" @click="hiddenSelector = false"
            class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer text-gray-900"
            data-value="paypal">
            <div class="z-20 text-inherit">Калькулятор</div>
            <div v-if="hiddenSelector === false" class="absolute inset-0 z-10 h-full bg-white rounded-md shadow" data-projection-id="4"></div>
          </li>
        </ul>
      </nav>
      <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">


          <form class="flex flex-col gap-4 mt-6" v-if="hiddenSelector === true">
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Калорийность
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="123" v-model="calorie"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>

            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Описание
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input  placeholder="Яичница с сыром" v-model="name"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>



            <button @click="addValue()"
              class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Добавить запись
            </button>

          </form>





          <form class="flex flex-col gap-4 mt-6" v-if="hiddenSelector === false">
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Ккал/100гр
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="350" v-model="sto" @input="chet()"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>

            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Нужно калорий
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="600" v-model="ccal" @input="chet()"
                  class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
      
              </div>
            </div>



            <a
              class="text-center">
              {{ itog }} грамм
          </a>

 

            <button @click="calorie = ccal"
              class="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
             Ввод калорийности
            </button>

          </form>





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
  
  let hiddenSelector = ref(true)



let sto = ref("")
let ccal = ref("")
let itog = ref(0)
  function chet() {
            itog.value = Math.round(ccal.value / (sto.value / 100))
        }


  let calorie = ref("")
  let name = ref("")
  function addValue() {
    if ((calorie.value != "" && name.value != "")) {
      userStore.axiosInfo.info[0][1].push((String(new Date(Date.now()))).slice(15).slice(1, 6))
      userStore.axiosInfo.info[0][2].push(calorie.value)
      userStore.axiosInfo.info[0][3].push(name.value)
      calorie.value = ""
      name.value = ""
      userStore.updateData()
    }
  
    else {
      alert('Ошибка')
    }
  }
  
  
  
  </script>
  