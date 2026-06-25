<template>
  <nav class="between top-nav">
    <h2><img src="../CDUTCM_logo_school2.png" alt="cdutcm-logo" style="vertical-align: middle; width: 30%;">  工具导航</h2>
    <div class="between" id="timer">
      <p>{{ timerText }}</p>
      <p>{{ timerProgress }}</p>
      <div class="progress" :style="{ width: progressWidth + '%' }"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const timerText = ref('')
const timerProgress = ref('')
const progressWidth = ref(0)
const timerTitle = ref('')
let timerStart = new Date(0)
let timerEnd = new Date(0)
let intervalId: ReturnType<typeof setInterval> | null = null

function tryPeriod(nextTitle: string, nextStartStr: string, nextEndStr: string) {
  const nextStart = new Date(`20${nextStartStr}+08:00`)
  const nextEnd = new Date(`20${nextEndStr}+08:00`)
  const now = new Date()
  if (now > timerEnd && now <= nextEnd) {
    timerTitle.value = nextTitle
    timerStart = nextStart
    timerEnd = nextEnd
  }
}

function updateTimer() {
  const now = new Date()
  if (now > timerEnd) {
    timerEnd = new Date(0)
    timerStart = new Date(0)
    const list = ($: (t: string, s: string, e: string) => void) => {
      $('', '25-09-08 00:00', '26-01-20 00:00')
      $('考试', '26-01-04 00:00', '26-01-20 00:00')
      $('寒假', '26-01-20 00:00', '26-02-28 00:00')
      $('', '26-03-02 00:00', '26-07-13 00:00')
      $('考试', '26-07-06 00:00', '26-07-13 00:00')
      $('暑假', '26-07-13 00:00', '26-08-24 00:00')
    }
    list(tryPeriod)
  }

  const all = Math.ceil((timerEnd.getTime() - timerStart.getTime()) / 86400000)
  if (!all) {
    timerText.value = '计时器未配置'
    timerProgress.value = ''
    progressWidth.value = 0
    return
  }

  const passed = Math.ceil((now.getTime() - timerStart.getTime()) / 86400000)
  const week = Math.ceil(timerStart.getDay() / 7 + (now.getTime() - timerStart.getTime()) / 604800000)
  const progress = ((now.getTime() - timerStart.getTime()) / (timerEnd.getTime() - timerStart.getTime())) * 100

  timerText.value = `${now.getMonth() + 1}.${now.getDate()} ${timerTitle.value}第${week}周 (周日为起始)`
  timerProgress.value = `第${passed}/${all}天 ${progress.toFixed(0)}%`
  progressWidth.value = progress
}

onMounted(() => {
  updateTimer()
  intervalId = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
#timer {
  position: relative;
  gap: 2rem;
  color: var(--ac1);
}

#timer > .progress {
  position: absolute;
  bottom: 0;
  margin: 0;
  background: linear-gradient(to right, var(--ac3), var(--ac2));
  height: .2rem;
}

#timer > .progress::after {
  position: absolute;
  right: 0;
  animation: twinkle 1s alternate infinite;
  width: .2rem;
  height: 100%;
  content: '';
}

@keyframes twinkle {
  0% {
    box-shadow: 0 0 .5rem var(--ac1);
    background: var(--ac3);
  }
  100% {
    box-shadow: 0 0 .2rem var(--ac1);
    background: var(--ac1);
  }
}
</style>
