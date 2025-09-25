<template>
  <LineChart class="lineChart" :chartData="lineData" :options="options" />
</template>
<script setup>
import axios from 'axios'
import Chart from 'chart.js/auto'
import { computed, reactive } from 'vue'
import { LineChart } from 'vue-chart-3'

const props = defineProps({
  data: Array,
})

const options = reactive({
  responsive: true,

  scales: {
    y: {
      grid: {
        color: '#e9e9ec', //цвета сетки
        borderColor: '#f2f2f2', //цвета сетки
        tickColor: '#fff', //цвета сетки
      },
      ticks: {
        color: '#58636f', //цвет значений слева
        backdropColor: 'rgb(255, 255, 255)',
        padding: (0, 0, 0, 0),
        stepSize: 1,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false, //откл бордер у нижней линии
      },
      ticks: {
        display: false,
        color: 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: false,
    },
  },
})

const lineData = computed(() => ({
  labels: props.data[1],
  boxWidth: 0,
  datasets: [
    {
      data: props.data[0],
      label: 'Вес, кг',
      borderColor: '#2688EB', //цвет линии
      borderWidth: 2, // толщина линии
      backgroundColor: 'rgba(255, 255, 255)', //точки
      color: 'rgba(255, 255, 255)', //точки
      tickColor: 'rgba(255, 255, 255)',
      tension: 0.4,
    },
  ],
}))
</script>

<style scope lang="scss">
.lineChart {
  height: 100%;
  max-height: 170px;
  width: 100%;
}
</style>
