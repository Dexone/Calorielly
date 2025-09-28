<template>
  <div
    class="arena"
    :class="{
      idle: phase === 'idle',
      waiting: phase === 'waiting',
      go: phase === 'go',
      done: phase === 'done',
      falseStart: phase === 'falseStart',
    }"
    @keydown.stop.prevent
  >
    <!-- Управление / статус (оверлей) -->
    <div class="overlay">
      <div class="row">
        <button class="btn" :disabled="phase === 'waiting' || phase === 'go'" @click="startRound">
          Старт
        </button>
        <button class="btn outline" :disabled="phase === 'waiting'" @click="resetAll">
          Сброс
        </button>
      </div>

      <div class="status">
        <template v-if="phase === 'idle'">Готов к старту</template>
        <template v-else-if="phase === 'waiting'">Ждите сигнала…</template>
        <template v-else-if="phase === 'go'">Сигнал! Жми <kbd>{{ keyA.toUpperCase() }}</kbd> или <kbd>{{ keyB.toUpperCase() }}</kbd>!</template>
        <template v-else-if="phase === 'falseStart'">Фальстарт: {{ falseStarterLabel }}. Нажмите «Старт»</template>
        <template v-else>Раунд окончен</template>
      </div>

      <div v-if="phase === 'done'" class="result">
        <div class="winner">
          {{ winner ? (winner === 'A' ? 'Игрок A' : 'Игрок B') + ' быстрее!' : 'Ничья' }}
        </div>
        <div class="times">
          A: {{ formatMs(timeA) }} &nbsp;|&nbsp; B: {{ formatMs(timeB) }}
          <span v-if="timeA != null && timeB != null">
            &nbsp; (Δ {{ formatMs(Math.abs(timeA - timeB)) }})
          </span>
        </div>
      </div>

      <div class="hint">
        Игроки: A — «{{ keyA.toUpperCase() }}», B — «{{ keyB.toUpperCase() }}». Нажимать можно только после сигнала.
      </div>
    </div>

    <!-- Аудио сигнал -->
    <audio ref="beepRef" :src="soundSrc" preload="auto"></audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

const phase = ref('idle') // idle | waiting | go | falseStart | done
const startTime = ref(null)
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
  winner.value = null
  falseStarterLabel.value = ''
  phase.value = 'waiting'
  emit('round-start')

  timer.value = setTimeout(() => {
    startTime.value = performance.now()
    phase.value = 'go'
    try { beepRef.value?.play?.() } catch {}
    emit('signal')
  }, rndDelay())
}

function handleKey(e) {
  const k = e.key?.toLowerCase()
  const a = props.keyA.toLowerCase()
  const b = props.keyB.toLowerCase()

  // Фальстарт
  if (phase.value === 'waiting' && (k === a || k === b)) {
    phase.value = 'falseStart'
    falseStarterLabel.value = k === a ? 'Игрок A' : 'Игрок B'
    clearTimer()
    return
  }

  if (phase.value !== 'go') return

  const now = performance.now()
  const reaction = Math.round(now - startTime.value)

  if (k === a && timeA.value == null) timeA.value = reaction
  if (k === b && timeB.value == null) timeB.value = reaction

  // завершать раунд сразу по первому нажатию:
  if ((timeA.value != null) ^ (timeB.value != null)) {
    finishRound()
  } else if (timeA.value != null && timeB.value != null) {
    finishRound()
  }
}

function finishRound() {
  if (timeA.value != null && timeB.value != null) {
    if (timeA.value < timeB.value) winner.value = 'A'
    else if (timeB.value < timeA.value) winner.value = 'B'
    else winner.value = null
  } else if (timeA.value != null) winner.value = 'A'
  else if (timeB.value != null) winner.value = 'B'

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
  return v == null ? '—' : `${v} мс`
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
/* Полотно на весь экран */
.arena {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  transition: background-color 120ms ease-in-out;
  background-color: #f5f5dc; /* бежевый по умолчанию */
}

/* Фаза ожидания — можно оставить бежевым, но слегка затемним */
.arena.waiting { background-color: #eee4c9; }

/* Сигнал — красный экран */
.arena.go { background-color: #ff2a2a; }

/* На всякий случай слегка меняем фон после завершения */
.arena.done { background-color: #e7f5e7; }      /* зелёный намёк */
.arena.falseStart { background-color: #ffe1b3; } /* оранжеватый */

/* Оверлей с управлением и статусом */
.overlay {
  display: grid;
  gap: 16px;
  justify-items: center;
  text-align: center;
  user-select: none;
  pointer-events: none; /* чтобы клики не мешали клавишам */
}

.row {
  display: flex;
  gap: 8px;
  pointer-events: auto;
}

.btn {
  padding: 10px 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background: #111;
  color: #fff;
  cursor: pointer;
}
.btn:disabled { opacity: .5; cursor: not-allowed; }
.btn.outline {
  background: transparent;
  color: #111;
  border: 1px solid #111;
}

.status {
  font-size: 18px;
  background: rgba(255,255,255,.7);
  padding: 6px 12px;
  border-radius: 8px;
  pointer-events: auto;
}

.result {
  background: rgba(255,255,255,.85);
  padding: 10px 16px;
  border-radius: 10px;
  pointer-events: auto;
}
.winner { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
.times { font-size: 16px; }

.hint {
  font-size: 12px;
  opacity: .8;
  background: rgba(255,255,255,.6);
  padding: 4px 8px;
  border-radius: 6px;
  pointer-events: auto;
}

kbd {
  padding: 0 6px;
  border: 1px solid #aaa;
  border-bottom-width: 2px;
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
  font-size: .9em;
}
</style>