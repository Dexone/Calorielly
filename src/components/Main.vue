<template>








  <!-- {{ raznitsa.length - 1 }} -->


  <div class="mx-3 mt-3">

    <div class="flex items-center justify-between gap-4 ">
      <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900"
        @click="hiddenAuth = false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
          class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"></path>
        </svg>
      </h6>
      <h6 class=" block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
        <div class="text-center mx-auto">{{ userStore.axiosInfo.name }}</div>
        <div class="text-center mx-auto text-xs text-gray-400">Обновлено {{ lastUpdateTime }}
        </div>
      </h6>
      <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900"
        @click="hiddenSettings = false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
          class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clip-rule="evenodd"></path>
        </svg>
      </h6>
    </div>



    <div
      class="relative flex flex-col rounded-xl  from-gray-900 to-gray-800 text-gray-900  w-full max-w-[20rem] mb-3 mx-auto">

      <h1
        class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-gray-900 text-7xl">
        {{ estCalories }}
        <span class="mt-1 text-4xl">/{{ userStore.axiosInfo.max }}</span>
      </h1>
    </div>




    <div
      class="relative flex flex-col rounded-xl  from-gray-900 to-gray-800 text-gray-900  w-full max-w-[20rem] mx-auto">
      <a class="flex justify-center gap-1 font-sans antialiased font-normal tracking-normal text-gray-900 ">
        {{ ostCalories }} ккал осталось
      </a>
    </div>





    <div class="mx-2">
      <div class="flex items-center justify-between gap-4 mt-3">
        <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-900"
          v-for="ras, index in raspred">
          <a class="line-through" v-if="index < (userStore.axiosInfo.priems-ostPriems)">{{ ras }}</a>
          <a v-else>{{ ras }}</a>
        </h6>

      </div>
      <div
        class="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-300 font-sans text-xs font-medium mb-6">
        <div
          class="flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full"
          :style="{ width: ((estCalories / userStore.axiosInfo.max) * 100) + '%' }">
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

axios.get(`https://dexone.ru/backend_calorie/data/${userStore.axiosInfo.id}`).then((res) => {
  userStore.axiosInfo = res.data
}) //получение инфо с сервера при загрузке страницы



const estCalories = ref(0) //съедено калорий
const ostCalories = ref(0) //осталось калорий
const lastUpdateTime = ref(0) //время последнего апдейтдата

const raspred = ref([]) //распределение калорий
const ostPriems = ref() //количество оставшихся приемов пищи (для зачеркивания на таймлайне)




function updateData() {
  let dateToday = (new Date()).getDate() + "." + ((new Date()).getMonth() + 1) + "." + (new Date()).getFullYear()
  if (userStore.axiosInfo.info[0][0] != dateToday && userStore.axiosInfo.id != 1) {
    userStore.axiosInfo.info.unshift([dateToday, [], [], []])
  } //создание нового дня, если в последнем массиве остался вчерашний день и пользователь не гость (id != 1)

  estCalories.value = 0
  for (let i = 0; i < userStore.axiosInfo.info[0][2].length; i++) [
    estCalories.value = estCalories.value + Number(userStore.axiosInfo.info[0][2][i])
  ] //сумма всех калорий из массива

  ostCalories.value = userStore.axiosInfo.max - estCalories.value

  lastUpdateTime.value = (String(new Date())).slice(16).slice(0, 5)


///////////распределение калорий
  raspred.value = []
  let maximum = (userStore.axiosInfo.max / userStore.axiosInfo.priems) + ((userStore.axiosInfo.max / userStore.axiosInfo.priems) / 100 * 30) //максимальное значение за раз
  let itogccal
  for (let i = 1; i <= userStore.axiosInfo.priems; i++) { //получение количества оставшихся приемов и калорий в каждом из них
    if (ostCalories.value / i < maximum) {
      itogccal = ostCalories.value / i
      ostPriems.value = i
      break
    }
  }
  for (let i = 0; i < (userStore.axiosInfo.priems - ostPriems.value); i++) { //пуш состоявшихся приемов в массив
    raspred.value.unshift(estCalories.value / (userStore.axiosInfo.priems - ostPriems.value))
  }
  for (let i = 0; i < ostPriems.value; i++) { //пуш оставшихся приемов в массив
    raspred.value.push(itogccal)
  }
  //////////////////////
}


watch(userStore, () => {
  updateData()
  axios.patch(`https://dexone.ru/backend_calorie/data/${userStore.axiosInfo.id}`, { priems: userStore.axiosInfo.priems, max: userStore.axiosInfo.max, info: userStore.axiosInfo.info })
  console.log('загружено на сервер')
})
</script>
