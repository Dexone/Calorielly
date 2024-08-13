<template>











<div class="mx-3">
  <div class="flex items-center justify-between gap-4 ">
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      {{ estCalories }}
    </h6>
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      <a v-if="actualCalories > 0">+</a>{{ actualCalories }} <a v-if="actualCalories > 0">({{ timeCalories
      }})</a>
    </h6>
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      {{ userStore.axiosInfo.max - estCalories }}
    </h6>
  </div>
  <div
    class="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-300 font-sans text-xs font-medium">
    <div 
      class="flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full" :style="{ width: ((estCalories / userStore.axiosInfo.max) * 100) + '%' }">
    </div>
  </div>
</div>


<div class="mx-3 mt-1">
  <div class="flex items-center justify-between gap-4 mb-3">
    <h6
      class="block  antialiased text-xs leading-relaxed tracking-normal text-gray-400">
      <svg class="w-4 h-4 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>



    </h6>

    <h6
      class="block  antialiased text-xs leading-relaxed tracking-normal text-gray-400">
     обн. {{ lastUpdateTime }}
    </h6>
  </div>
</div>


  <!-- <div>ПОСЛЕДНИЙ ПРИЕМ {{ Number(userStore.axiosInfo.time) + 13 }}</div> -->





</template>

<script setup>
import { ref, watch } from 'vue'
import { useUser } from '../../store/User';
import axios from 'axios'
const userStore = useUser();
defineProps({
  msg: String,
})


userStore.downFromServer()
let timerId = setInterval(() => userStore.updateData(), 300000);

const estCalories = ref(0)
const actualCalories = ref(0)
const timeCalories = ref(0)
const lastUpdateTime = ref(0)
function  updateData() {
            let dateToday = (new Date()).getDate() + "." + ((new Date()).getMonth() + 1) + "." + (new Date()).getFullYear()
            if (userStore.axiosInfo.info[0][0] != dateToday) {
                userStore.axiosInfo.info.unshift([dateToday, [], [], []])
            } //создание нового дня, если в последнем массиве остался вчерашний день

            estCalories.value = 0
            for (let i = 0; i < userStore.axiosInfo.info[0][2].length; i++) [
                estCalories.value = estCalories.value + Number(userStore.axiosInfo.info[0][2][i])
            ] //сумма всех калорий из массива

            actualCalories.value = (estCalories.value - (((Date.now() - (new Date).setHours(Number(userStore.axiosInfo.time), 0, 0, 0)) / 1000 / 60) * (Number(userStore.axiosInfo.max) / 960))).toFixed() //актуальные калории = съедено калорий - ((время сейчас - время начала дня в минутах) * (максимально калорий / количество минут в дне)


            timeCalories.value = String(new Date((Date.now()) + Number(((actualCalories.value / (Number(userStore.axiosInfo.max) / 960)) * 60 * 1000).toFixed()))).slice(15).slice(1, 6)//время, когда будет 0 калорий = (время сейчас + (актальные калории / кол-во калорий в минуту >> преобразованное в милисекунды))
            console.log('отработала аптейтдата')

            lastUpdateTime.value = (String(new Date())).slice(16).slice(0, 5)
        }
        watch(userStore, () => {
  updateData()
  userStore.upToServer()
})
</script>
