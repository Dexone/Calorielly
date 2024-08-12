<template>


<div class="w-full mb-3">
  <div class="flex items-center justify-between gap-4 mb-2">
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      {{ userStore.estCalories }}
    </h6>
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      <a v-if="userStore.actualCalories > 0">+</a>{{ userStore.actualCalories }} <a v-if="userStore.actualCalories > 0">({{ userStore.timeCalories
      }})</a>
    </h6>
    <h6
      class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
      {{ userStore.axiosInfo.max - userStore.estCalories }}
    </h6>
  </div>
  <div
    class="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-300 font-sans text-xs font-medium">
    <div 
      class="flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full" :style="{ width: ((userStore.estCalories / userStore.axiosInfo.max) * 100) + '%' }">
    </div>
  </div>
</div>



  <!-- <div>ПОСЛЕДНИЙ ПРИЕМ {{ Number(userStore.axiosInfo.time) + 13 }}</div> -->





</template>

<script setup>
import { ref } from 'vue'
import { useUser } from '../../store/User';
import axios from 'axios'
const userStore = useUser();
defineProps({
  msg: String,
})


userStore.downFromServer()

let timerId = setInterval(() => userStore.updateData(), 60000);







</script>
