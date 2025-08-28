<template>
  <div class="main"></div>

  <div class="all" :class="{ active: blur }">
    <div class="leftbar">
      <LeftBar />
    </div>

    <div class="main">
      <Name />
      <Now />
      <Target />
      <LineChart />
      <TimeLine />

      <Footer class="footer" />
    </div>
  </div>
  <Scales />
  <Login />
  <Add />
  <Settings />
  <RegistrationSteps />
</template>

<script setup>
import { ref, watch } from 'vue'

import { useComponents } from '../src/store/ComponentsHidden'
import { useLogin } from '../src/store/Login'

import Add from './components/Add.vue'
import Footer from './components/Footer.vue'
import LeftBar from './components/LeftBar.vue'
import LineChart from './components/LineChart.vue'
import Login from './components/Login.vue'
import Name from './components/Name.vue'
import Now from './components/Now.vue'
import RegistrationSteps from './components/RegistrationSteps.vue'
import Scales from './components/Scales.vue'
import Settings from './components/Settings.vue'
import Target from './components/Target.vue'
import TimeLine from './components/TimeLine.vue'

const loginStore = useLogin()

const hiddenStore = useComponents()

loginStore.getInfo()

const blur = ref(false)
watch(hiddenStore, () => {
  blurEdit()
})

watch(loginStore, () => {
  if (
    loginStore.limitCcal === 0 ||
    loginStore.desiredWeight === 0 ||
    loginStore.weightList.length === 1
  ) {
    hiddenStore.login = false
    hiddenStore.registrationSteps = true
    blur.value = true
  } else {
    hiddenStore.registrationSteps = false
  }
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
