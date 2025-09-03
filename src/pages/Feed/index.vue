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
</script>
