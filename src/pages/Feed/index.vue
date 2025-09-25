<template>
  <div class="main"></div>

  <div class="all" :class="{ active: blur }">
    <div class="main">
      <Name />
      <Now @click="$emit('open')" />
      <Target />
      <Graph />
      <TimeLine />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import Graph from './components/Graph/index.vue'
import Name from './components/Name.vue'
import Now from './components/Now.vue'
import Target from './components/Target.vue'
import TimeLine from './components/TimeLine.vue'

import { useLogin } from '@/store/Login'

const loginStore = useLogin()
const emit = defineEmits(['open'])
loginStore.getInfo()
</script>
