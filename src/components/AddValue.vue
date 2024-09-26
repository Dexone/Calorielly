<template>

<div class="relative flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3 mx-3">
  <div class="p-6">
    <div class="block overflow-visible">

      <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          class="w-full p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">


          <form class="flex flex-col gap-4 ">
            <div>
              <p class="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-gray-900">
                Калорийность
              </p>
              <div class="relative h-10 w-full min-w-[200px]">
                <input placeholder="123" v-model="calorie" type="number"
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
  



  const hiddenAuth = inject("hiddenAuth")
  
  const calorie = inject("calorie")
  let name = ref("")
  function addValue() {
    if(userStore.axiosInfo.id === 1){
    hiddenAuth.value = false
  }
  else{
    if ((calorie.value != "" && name.value != "")) {
      userStore.axiosInfo.info[0][1].push((String(new Date(Date.now()))).slice(15).slice(1, 6))
      userStore.axiosInfo.info[0][2].push(calorie.value)
      userStore.axiosInfo.info[0][3].push(name.value)
      calorie.value = ""
      name.value = ""
      // userStore.updateData()
    }
    else {
      alert('Ошибка')
    }}
  }
  
  
  
  </script>
  