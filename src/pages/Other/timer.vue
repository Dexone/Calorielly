<template>
  <div class="main">
    <div class="timer">{{ display }}</div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted, onUnmounted } from 'vue'

const targetTimes = ['6:50', '12:50', '18:50']
const display = ref('—:—:—')
let timerId

function pad(n) {
  return String(n).padStart(2, '0')
}

function getNextTargetTime(now = new Date()) {
  const y = now.getFullYear(),
    m = now.getMonth(),
    d = now.getDate()
  const today = targetTimes.map((t) => {
    const [h, min] = t.split(':').map(Number)
    return new Date(y, m, d, h, min, 0, 0)
  })
  const next = today.find((dt) => dt > now)
  if (next) return next
  const [h0, m0] = targetTimes[0].split(':').map(Number)
  return new Date(y, m, d + 1, h0, m0, 0, 0)
}

function tick() {
  const now = new Date()
  const diff = getNextTargetTime(now) - now
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  display.value = `${pad(h)}:${pad(m)}:${pad(s)}`
}

onMounted(() => {
  tick()
  timerId = setInterval(tick, 1000)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<style scoped>
.main {
  background-color: #fff;
  display: grid;
  font-size: 72px;
  inset: 0;
  place-items: center;
  position: fixed;
  z-index: 999999;
}
</style>
