<template>
  <div class="w-full max-w-md mx-auto p-4 rounded-2xl shadow bg-white border">
    <h2 class="text-xl font-semibold mb-2">Игра на реакцию: A vs B</h2>

    <div class="space-y-2">
      <div class="text-sm">
        <span class="font-medium">Статус:</span>
        <span>
          <template v-if="phase === 'idle'">Готов к старту</template>
          <template v-else-if="phase === 'waiting'">Ждите сигнала…</template>
          <template v-else-if="phase === 'go'">Сигнал! Жми <kbd>A</kbd> или <kbd>B</kbd>!</template>
          <template v-else-if="phase === 'falseStart'">Фальстарт: {{ falseStarterLabel }}! Нажми «Старт»</template>
          <template v-else>Раунд окончен</template>
        </span>
      </div>

      <div class="flex gap-2">
        <button
          class="px-3 py-2 rounded-lg bg-black text-white disabled:opacity-40"
          :disabled="phase === 'waiting' || phase === 'go'"
          @click="startRound"
        >
          Старт
        </button>
        <button
          class="px-3 py-2 rounded-lg border"
          :disabled="phase === 'waiting'"
          @click="resetAll"
        >
          Сброс
        </button>
      </div>

      <div v-if="phase === 'done'" class="mt-2 p-3 rounded-lg bg-gray-50 border">
        <div class="font-medium mb-1">
          {{ winner ? (winner === 'A' ? 'Игрок A' : 'Игрок B') + ' быстрее!' : 'Ничья' }}
        </div>
        <div class="text-sm">
          Время реакции:
          <span :class="winner === 'A' ? 'font-semibold' : ''">A: {{ formatMs(timeA) }}</span>,
          <span :class="winner === 'B' ? 'font-semibold' : ''">B: {{ formatMs(timeB) }}</span>
          <span v-if="timeA != null && timeB != null">
            (Δ {{ formatMs(Math.abs(timeA - timeB)) }})
          </span>
        </div>
      </div>

      <audio ref="beepRef" :src="soundSrc" preload="auto"></audio>

      <div class="text-xs text-gray-500">
        Игроки: A — клавиша "{{ keyA.toUpperCase() }}", B — "{{ keyB.toUpperCase() }}".
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Props
 * - minDelay/maxDelay: случайная задержка перед сигналом (мс)
 * - keyA/keyB: какие клавиши у игроков
 * - soundSrc: звук сигнала
 */
const props = defineProps({
  minDelay: { type: Number, default: 1000 },
  maxDelay: { type: Number, default: 5000 },
  keyA: { type: String, default: 'a' },
  keyB: { type: String, default: 'b' },
  soundSrc: {
    type: String,
    default: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
  },
})

const emit = defineEmits(['round-start', 'signal', 'winner'])

const phase = ref('idle') // 'idle' | 'waiting' | 'go' | 'done' | 'falseStart'
const startTime = ref(null) // performance.now() при сигнале
const timeA = ref(null)
const timeB = ref(null)
const winner = ref(null) // 'A' | 'B' | null
const falseStarterLabel = ref('')
const timer = ref(null)
const beepRef = ref(null)

function rndDelay() {
  const { minDelay, maxDelay } = props
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
}

function startRound() {
  clearTimer()
  resetTimes()
  phase.value = 'waiting'
  winner.value = null
  emit('round-start')

  timer.value = setTimeout(() => {
    // Сигнал
    startTime.value = performance.now()
    phase.value = 'go'
    try { beepRef.value?.play?.() } catch {}
    emit('signal')
  }, rndDelay())
}

function handleKey(e) {
  const k = e.key?.toLowerCase()
  // Фальстарт: нажали до сигнала
  if (phase.value === 'waiting' && (k === props.keyA.toLowerCase() || k === props.keyB.toLowerCase())) {
    phase.value = 'falseStart'
    falseStarterLabel.value = k === props.keyA.toLowerCase() ? 'Игрок A' : 'Игрок B'
    clearTimer()
    return
  }

  if (phase.value !== 'go') return

  const now = performance.now()
  const reaction = Math.round(now - startTime.value)

  if (k === props.keyA.toLowerCase() && timeA.value == null) {
    timeA.value = reaction
  } else if (k === props.keyB.toLowerCase() && timeB.value == null) {
    timeB.value = reaction
  }

  // Определяем победителя, как только оба нажали или один нажал, а второй так и не нажмёт — можно принудительно завершить по первому.
  if (timeA.value != null && timeB.value != null) {
    finishRound()
  } else if (timeA.value != null || timeB.value != null) {
    // Если хочешь завершать сразу по первому — раскомментируй следующую строку:
    // finishRound()
  }
}

function finishRound() {
  if (timeA.value != null && timeB.value != null) {
    if (timeA.value < timeB.value) winner.value = 'A'
    else if (timeB.value < timeA.value) winner.value = 'B'
    else winner.value = null // ничья
  } else if (timeA.value != null) {
    winner.value = 'A'
  } else if (timeB.value != null) {
    winner.value = 'B'
  }
  phase.value = 'done'
  emit('winner', { winner: winner.value, timeA: timeA.value, timeB: timeB.value })
}

function resetAll() {
  clearTimer()
  resetTimes()
  winner.value = null
  falseStarterLabel.value = ''
  phase.value = 'idle'
}

function resetTimes() {
  startTime.value = null
  timeA.value = null
  timeB.value = null
}

function clearTimer() {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

function formatMs(v) {
  if (v == null) return '—'
  return `${v} мс`
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
  clearTimer()
})
</script>

<style scoped>
/* Небольшая стилизация, без зависимостей */
kbd {
  padding: 0.1rem 0.35rem;
  border: 1px solid #d1d5db;
  border-bottom-width: 2px;
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.85em;
}
</style>