<script setup>
import { useLogin } from '../src/store/Login';
const loginStore = useLogin();
import { useComponents } from '../src/store/ComponentsHidden';
const hiddenStore = useComponents();
import Name from './components/Name.vue'
import LeftBar from './components/LeftBar.vue'
import Login from './components/Login.vue'
import Now from './components/Now.vue'
import Add from './components/Add.vue'
import Target from './components/Target.vue'
import Footer from './components/Footer.vue'
import Scales from './components/Scales.vue'
import TimeLine from './components/TimeLine.vue'
import LineChart from './components/LineChart.vue'
import Settings from './components/Settings.vue'
import RegistrationSteps from './components/RegistrationSteps.vue'
import { ref, watch } from 'vue';

loginStore.getInfo()




const blur = ref(false)
watch(hiddenStore, () => {
  blurEdit()
})

watch(loginStore, () => {
  if(loginStore.limitCcal === 0 || loginStore.desiredWeight === 0 || loginStore.weightList.length === 1){
    hiddenStore.login = false
    hiddenStore.registrationSteps = true
    blur.value = true
  }
  else{
    hiddenStore.registrationSteps = false
    blur.value = false
  }
})

function blurEdit() {
  if (hiddenStore.login === true || hiddenStore.add === true || hiddenStore.scales === true || hiddenStore.settings === true || hiddenStore.registrationSteps === true) {
    blur.value = true
  }
  else {
    blur.value = false
  }
}
</script>

<template>

  <div class="main">



  </div>




  <div class="all" :class="{ active: blur }">

    <div class="leftbar">
      <LeftBar />
    </div>



    <div class="main">
      <Name />
      <Now />
      <Target />
      <LineChart/>
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

<style scoped>
.active {
  filter: blur(12px);
}


.all {

  display: flex;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
}

.main {
  width: 100%;
}


@media(max-width: 1000px) {

  /* mobile: width < 1000px */
  .leftbar {
    display: none;
  }
}

@media(min-width: 1000px) {

  /* mobile: width < 1000px */
  .footer {
    display: none;
  }
}
</style>
