<template>
  <div class="blockNow">
    <a class="now">Калорий сегодня</a>
    <a v-if="backTime > 0" class="update"
      >обновлено {{ backTime }} минут назад</a
    >
    <a v-else class="update">обновлено только что</a>
    <div class="ccal">
      {{ loginStore.getSumCcalToday }} ккал<svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        @click="hiddenStore.add = !hiddenStore.add"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.4"
          d="M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import { useComponents } from '../store/ComponentsHidden'
import { useLogin } from '../store/Login'
const loginStore = useLogin()

const hiddenStore = useComponents()

const backTime = ref(0)
const upTime = ref(0)
setInterval(() => updateTime(), 60000) //обновлено ... мин назад
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
  box-shadow: 0 4px 5px 0 #dedee0;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-bottom: 15px;
  padding-top: 10px;
  width: 100%;
}

.now {
  color: #666;
  font-size: 12px;
  margin-left: 15px;
}

.update {
  color: #999;
  float: right;
  font-size: 12px;
  padding-right: 15px;
  padding-top: 5px;
}

.ccal {
  font-size: 24px;
  font-weight: 600;
  margin-left: 15px;
  margin-top: 7px;
}

svg {
  color: #007aff;
  float: right;
  margin-right: 11px;
  margin-top: 3px;
  transition: 0.3s;
}

svg:hover {
  border-radius: 5px;
  color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}
</style>
