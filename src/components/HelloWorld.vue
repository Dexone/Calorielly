<template>

  <input class="bg-blue" v-model="calorie" placeholder="калории"><br>

  <input class="bg-blue" v-model="name" placeholder="название">

  <button @click="addValue()">пуск</button>
  <br>





  <div>Текущие калории:{{ userStore.actualCalories }} <a v-if="userStore.actualCalories > 0">({{ userStore.timeCalories
      }})</a></div>
  <div>Осталось калорий: {{ userStore.axiosInfo.max - userStore.estCalories }}</div>
  <div>Есть калорий:{{ userStore.estCalories }}</div>
  <div>ПОСЛЕДНИЙ ПРИЕМ {{ Number(userStore.axiosInfo.time) + 13 }}</div>




  <table>
    <td>
      <tr v-for="date in userStore.axiosInfo.info[0][1]">{{ date }}</tr>
    </td>
    <td>
      <tr v-for="calories in userStore.axiosInfo.info[0][2]">{{ calories }}</tr>
    </td>

    <td>
      <tr v-for="names in userStore.axiosInfo.info[0][3]">{{ names }}</tr>
    </td>
  </table>



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
