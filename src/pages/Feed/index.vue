<template>
  <div class="main"></div>

  <div class="all" :class="{ active: blur }">


    <div class="main">
      <Name />
      <Now />
      <Target />
      <LineChart />
      <TimeLine />


    </div>
  </div>



</template>

<script setup>
import { ref, watch } from 'vue'


import LineChart from './components/LineChart.vue'
import Name from './components/Name.vue'
import Now from './components/Now.vue'
import Target from './components/Target.vue'
import TimeLine from './components/TimeLine.vue'
import { useComponents } from '@/store/ComponentsHidden'
import { useLogin } from '@/store/Login'

const loginStore = useLogin()

const hiddenStore = useComponents()

loginStore.getInfo()

const blur = ref(false)
watch(hiddenStore, () => {
  blurEdit()
})



function blurEdit() {
  if (
    hiddenStore.login === true ||
    hiddenStore.add === true ||
    hiddenStore.scales === true ||
    hiddenStore.settings === true ||
    hiddenStore.registrationSteps === true
  ) {
    blur.value = true
  } else {
    blur.value = false
  }
}
</script>

<style scoped>
.active {
  filter: blur(12px);
}

.all {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  position: relative;
  width: 100%;
}

.main {
  width: 100%;
}

@media (width <= 1000px) {
  /* mobile: width < 1000px */
  .leftbar {
    display: none;
  }

  .all {
    padding: 10px;
  }
}

@media (width >= 1000px) {
  /* mobile: width < 1000px */
  .footer {
    display: none;
  }
}
</style>
