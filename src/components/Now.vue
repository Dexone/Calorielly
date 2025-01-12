<template>
  <div class="blockNow">
    <a class="now">Калорий сегодня</a>
    <a class="update" v-if="backTime > 0">обновлено {{ backTime }} минут назад</a>
    <a class="update" v-else>обновлено только что</a>
    <div class="ccal">{{ loginStore.getSumCcalToday }} ккал<svg @click="hiddenStore.add = !hiddenStore.add"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"
          d="M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z" />
      </svg>
    </div>
  </div>

</template>



<script setup>
import { useLogin } from '../store/Login';
const loginStore = useLogin();
import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();
import { ref, watch } from 'vue'




const backTime = ref(0)
const upTime = ref(0)
setInterval(() => updateTime(), 60000); //обновлено ... мин назад
function updateTime() {
    backTime.value = ((Date.now() - upTime.value) / 1000 / 60).toFixed()
}
watch(loginStore, () => { 
    upTime.value = Date.now()
    updateTime()

})


watch(loginStore.eatingList, () => {
  console.log('test')
})

defineProps({
  msg: String,
})


</script>



<style scoped>
.blockNow {
  background-color: white;
  border-radius: 8px;
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  box-shadow: 0px 4px 5px 0px #dedee0;
  margin-bottom: 20px;
}

.now {
  color: #666666;
  font-size: 12px;
  margin-left: 15px;
}

.update {
  float: right;
  color: #999999;
  font-size: 12px;
  padding-top: 5px;
  padding-right: 15px;
}

.ccal {
  margin-left: 15px;
  margin-top: 7px;
  font-size: 24px;
  font-weight: 600;
}

svg {
  float: right;
  color: #007aff;
  margin-top: 3px;
  margin-right: 11px;
  transition: 0.3s
}

svg:hover{
    color: #439eff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s
}
</style>