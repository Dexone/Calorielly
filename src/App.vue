<script setup>

import Main from './components/Main.vue'
import AddValue from './components/AddValue.vue'
import Calculator from './components/Calculator.vue'
import Auth from './components/Auth.vue'
import Settings from './components/Settings.vue'
import History from './components/History.vue'

import { useUser } from '../store/User';
const userStore = useUser();

import { provide, inject, ref, watch } from 'vue'



const hiddenSettings = ref(true)
provide("hiddenSettings", hiddenSettings)

const hiddenAuth = ref(true)
provide("hiddenAuth", hiddenAuth)

const calorie = ref("")
provide("calorie", calorie)


const blur = ref(false)
watch(hiddenSettings, () => {
  if (hiddenSettings.value === false) {
    blur.value = true
  }
  if (hiddenSettings.value === true) {
    blur.value = false
  }



})

watch(hiddenAuth, () => {



  if (hiddenAuth.value === false) {
    blur.value = true
  }
  if (hiddenAuth.value === true) {
    blur.value = false
  }
})


</script>

<template>
  <main class="max-w-3xl mx-auto">
    <div :class="{ 'blur-md': blur }">
      <Main />
      <AddValue />
      <Calculator />

      <History />
    </div>
    <Auth />
    <Settings />

  </main>

</template>
