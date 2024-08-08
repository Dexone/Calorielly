

<template>
<input class="bg-blue" v-model="calorie" placeholder="калории"><br>

<input class="bg-blue" v-model="name" placeholder="название">

<button @click="addValue()">пуск</button>
<br>
<button @click="updateData()">Обновить</button>

<div>Текущие калории:{{ itog }}</div>
<div>Осталось калорий:{{ ostCalories }}</div>
<div>Есть калорий:{{ estCalories }}</div>




<div> {{ poslPriem }}</div>




<table>



  <td >
      <tr v-for="calories in spisCalories">{{ calories}}</tr>
    </td>

    <td >
      <tr v-for="names in spisNames">{{ names}}</tr>
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


let calorie = ref()
let name = ref()

function addValue() {
        axios.get(`https://dexone.ru/backend_calorie/data/2`).then((res) => {
            let updInfo = res.data.info

            updInfo[0][1].push(calorie.value)
            updInfo[0][2].push(name.value)
            axios.patch(`https://dexone.ru/backend_calorie/data/2`, { info: updInfo }) 
        })
}


let itog = ref()
let spisCalories = ref()
let spisNames = ref()
let poslPriem = ref()
let ostCalories = ref()
let estCalories = ref()
function updateData(){
  let max = userStore.max / 960
  let date = Date.now()
  axios.get(`https://dexone.ru/backend_calorie/data/2`).then((res) => {
            let updInfo = res.data.info[0][0]

estCalories.value = 0
            for(let i = 0; i< res.data.info[0][1].length; i++)[
              estCalories.value = estCalories.value + Number(res.data.info[0][1][i])
            ]
let dolzhCalories = ((date-updInfo)/1000/60) * max

itog.value = (estCalories.value - dolzhCalories).toFixed()

spisCalories.value = res.data.info[0][1]
spisNames.value = res.data.info[0][2]

console.log(dolzhCalories)

ostCalories.value = userStore.max - estCalories.value
poslPriem.value = new Date(updInfo + 46800000)
        })
}



</script>
