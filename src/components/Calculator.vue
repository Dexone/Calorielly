<template>

    <div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3 mx-3">
      <div class="p-6">
        <div class="block overflow-visible">
          <nav>
            <ul role="tablist" class="relative flex flex-row p-1 rounded-lg bg-gray-200 ">
              <li role="tab" @click="hiddenSelector = true"
                class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center  cursor-pointer  text-gray-900"
                data-value="card">
                <div class="z-20 text-inherit">Калории</div>
                <div v-if="hiddenSelector === true" class="absolute inset-0 z-10 h-full bg-white rounded-md shadow" data-projection-id="4"></div>
              </li>
              <li role="tab" @click="hiddenSelector = false"
                class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer text-gray-900"
                data-value="paypal">
                <div class="z-20 text-inherit">Граммы</div>
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
                    Ккал/100гр
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input placeholder="350" v-model="stoCCAL" @input="chetCCAL(), calorie = itogCCAL, ", type="number"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
          
                  </div>
                </div>
    
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Кол-во грамм
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input placeholder="600" v-model="grammCCAL" @input="chetCCAL(), calorie = itogCCAL", type="number"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
          
                  </div>
                </div>
    
    
    
                <a
                  class="text-center">
                  {{ itogCCAL }} калорий
              </a>
    
    
    
              </form>
    
    
    
    
    
              <form class="flex flex-col gap-4 mt-6" v-if="hiddenSelector === false">
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Ккал/100гр
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input placeholder="350" v-model="stoGR" @input="chetGR()" type="number"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
          
                  </div>
                </div>
    
                <div>
                  <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                    Нужно калорий
                  </p>
                  <div class="relative h-10 w-full min-w-[200px]">
                    <input placeholder="600" v-model="ccalGR" @input="chetGR(), calorie = ccalGR", type="number"
                      class="peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0" />
          
                  </div>
                </div>
    
    
    
                <a
                  class="text-center">
                  {{ itogGR }} грамм
              </a>
    
     

    
              </form>
    
    
    
    
    
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    
    
      
      
      
      
      
       
      
      
      
      </template>
      
      <script setup>
      import { ref, inject } from 'vue'
      import { useUser } from '../../store/User';
      import axios from 'axios'
      const userStore = useUser();
      defineProps({
        msg: String,
      })
      const calorie = inject("calorie")
      let hiddenSelector = ref(true)
    



      let stoCCAL = ref("")
    let grammCCAL = ref("")
    let itogCCAL = ref(0)
      function chetCCAL() {
                itogCCAL.value = Math.round(stoCCAL.value * (grammCCAL.value / 100))
            }  
    
    
    let stoGR = ref("")
    let ccalGR = ref("")
    let itogGR = ref(0)
      function chetGR() {
                itogGR.value = Math.round(ccalGR.value / (stoGR.value / 100))
            }

      
      
      
      </script>
      