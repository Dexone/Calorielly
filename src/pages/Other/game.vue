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
    <div class="overlay">
      <div class="row">
        <button
          class="btn"
          :disabled="phase === 'waiting' || phase === 'go'"
          @click="startRound"
        >
          Старт
        </button>
        <button
          class="btn outline"
          :disabled="phase === 'waiting'"
          @click="resetAll"
        >
          Сброс
        </button>
      </div>

      <div class="status">
        <template v-if="phase === 'idle'">Готов к старту</template>
        <template v-else-if="phase === 'waiting'">Ждите сигнала…</template>
        <template v-else-if="phase === 'go'"
          >Сигнал! Жми <kbd>{{ keyA.toUpperCase() }}</kbd> или
          <kbd>{{ keyB.toUpperCase() }}</kbd
          >!</template
        >
        <template v-else-if="phase === 'falseStart'"
          >Фальстарт: {{ falseStarterLabel }}. Нажмите «Старт»</template
        >
        <template v-else>Раунд окончен</template>
      </div>

      <div v-if="phase === 'done'" class="result">
        <div class="winner">
          {{
            winner
              ? (winner === 'A' ? 'Игрок A' : 'Игрок B') + ' быстрее!'
              : 'Ничья'
          }}
        </div>
        <div class="times">
          A: {{ formatMs(timeA) }} &nbsp;|&nbsp; B: {{ formatMs(timeB) }}
          <span v-if="timeA != null && timeB != null">
            &nbsp; (Δ {{ formatMs(Math.abs(timeA - timeB)) }})
          </span>
        </div>
      </div>

      <div class="hint">
        Игроки: A — «{{ keyA.toUpperCase() }}», B — «{{ keyB.toUpperCase() }}».
        Нажимать можно только после сигнала.
      </div>
    </div>

    <audio ref="beepRef" :src="soundSrc" preload="auto"></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type Phase = 'idle' | 'waiting' | 'go' | 'done' | 'falseStart'
type Winner = 'A' | 'B' | null

const props = withDefaults(
  defineProps<{
    minDelay?: number
    maxDelay?: number
    keyA?: string
    keyB?: string
    soundSrc?: string
  }>(),
  {
    minDelay: 1000,
    maxDelay: 5000,
    keyA: 'a',
    keyB: 'b',
    soundSrc: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
  },
)

const emit = defineEmits<{
  (e: 'round-start'): void
  (e: 'signal'): void
  (
    e: 'winner',
    payload: { winner: Winner; timeA: number | null; timeB: number | null },
  ): void
}>()

const phase = ref<Phase>('idle')
const startTime = ref<number | null>(null)
const timeA = ref<number | null>(null)
const timeB = ref<number | null>(null)
const winner = ref<Winner>(null)
const falseStarterLabel = ref<string>('')
const timer = ref<number | null>(null)
const beepRef = ref<HTMLAudioElement | null>(null)

function rndDelay(): number {
  const { minDelay, maxDelay } = props
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
}

function startRound(): void {
  clearTimer()
  resetTimes()
  winner.value = null
  falseStarterLabel.value = ''
  phase.value = 'waiting'
  emit('round-start')

  timer.value = window.setTimeout(() => {
    startTime.value = performance.now()
    phase.value = 'go'
    try {
      beepRef.value?.play()
    } catch {}
    emit('signal')
  }, rndDelay())
}

function handleKey(e: KeyboardEvent): void {
  const k = e.key?.toLowerCase()
  const a = props.keyA.toLowerCase()
  const b = props.keyB.toLowerCase()

  if (phase.value === 'waiting' && (k === a || k === b)) {
    phase.value = 'falseStart'
    falseStarterLabel.value = k === a ? 'Игрок A' : 'Игрок B'
    clearTimer()
    return
  }

  if (phase.value !== 'go') return

  const now = performance.now()
  const startedAt = startTime.value ?? now
  const reaction = Math.round(now - startedAt)

  if (k === a && timeA.value == null) timeA.value = reaction
  if (k === b && timeB.value == null) timeB.value = reaction

  if (timeA.value != null && timeB.value != null) {
    finishRound()
  }
}

function finishRound(): void {
  if (timeA.value != null && timeB.value != null) {
    if (timeA.value < timeB.value) winner.value = 'A'
    else if (timeB.value < timeA.value) winner.value = 'B'
    else winner.value = null
  } else if (timeA.value != null) winner.value = 'A'
  else if (timeB.value != null) winner.value = 'B'

  phase.value = 'done'
  emit('winner', {
    winner: winner.value,
    timeA: timeA.value,
    timeB: timeB.value,
  })
}

function resetAll(): void {
  clearTimer()
  resetTimes()
  winner.value = null
  falseStarterLabel.value = ''
  phase.value = 'idle'
}

function resetTimes(): void {
  startTime.value = null
  timeA.value = null
  timeB.value = null
}

function clearTimer(): void {
  if (timer.value != null) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

function formatMs(v: number | null | undefined): string {
  return v == null ? '—' : `${v} мс`
}

onMounted((): void => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount((): void => {
  window.removeEventListener('keydown', handleKey)
  clearTimer()
})
</script>

<style scoped>
.arena {
  background-color: #f5f5dc;
  display: grid;
  inset: 0;
  place-items: center;
  position: fixed;
  transition: background-color 120ms ease-in-out;
  z-index: 999999;
}

.arena.waiting {
  background-color: #eee4c9;
}

.arena.go {
  background-color: #ff2a2a;
}

.arena.done {
  background-color: #e7f5e7;
}

.arena.falseStart {
  background-color: #ffe1b3;
}

.overlay {
  display: grid;
  gap: 16px;
  justify-items: center;
  pointer-events: none;
  text-align: center;
  user-select: none;
}

.row {
  display: flex;
  gap: 8px;
  pointer-events: auto;
}

.btn {
  background: #111;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 16px;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn.outline {
  background: transparent;
  border: 1px solid #111;
  color: #111;
}

.status {
  background: rgb(255 255 255 / 70%);
  border-radius: 8px;
  font-size: 18px;
  padding: 6px 12px;
  pointer-events: auto;
}

.result {
  background: rgb(255 255 255 / 85%);
  border-radius: 10px;
  padding: 10px 16px;
  pointer-events: auto;
}

.winner {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

.times {
  font-size: 16px;
}

.hint {
  background: rgb(255 255 255 / 60%);
  border-radius: 6px;
  font-size: 12px;
  opacity: 0.8;
  padding: 4px 8px;
  pointer-events: auto;
}

kbd {
  border: 1px solid #aaa;
  border-bottom-width: 2px;
  border-radius: 6px;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 0.9em;
  padding: 0 6px;
}
</style>
