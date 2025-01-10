<template>

            <div class="mainBlockLineChart">

                <LineChart class="lineChart" :chartData="lineData" :options="options" />
            </div>

{{ loginStore.weightList }}

{{ loginStore.getStoreWeights }}

<button @click="console.log(loginStore.getStoreWeights)">11</button>

</template>
<script setup>
import axios from 'axios'
import Chart from 'chart.js/auto';
import { LineChart } from "vue-chart-3"
import { computed, watch, ref, reactive } from 'vue'

import { useComponents } from '../store/ComponentsHidden';
const hiddenStore = useComponents();
import { useLogin } from '../store/Login';
const loginStore = useLogin();

defineProps({
    msg: String,
})

const page = ref([true, false, false])

const info = ref([1, 2 ,3]) //значения в графике
const date = ref([3, 4, 5]) //даты в графике
const total = ref('загрузка...') //среднее значение
const label = ref('загрузка...') //название графика

const selectedRange = ref(false)



const options = reactive({
    responsive: true,
    scales: {
        y: {
            grid: {
                color: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                tickColor: 'rgb(255, 255, 255)',
            },
            ticks: {
                color: 'rgb(255, 255, 255)',
                backdropColor: 'rgb(255, 255, 255)',
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false,
                color: 'rgb(255, 255, 255)',
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },

        title: {
            align: 'end',
            display: true,
            text: total,
            color: 'rgb(199, 206, 223)',
            font: {
                size: 16,
                weight: 'bold',
            },
        },

    },
});

const lineData = computed(() => ({
    name: total,
    labels: date.value,
    boxWidth: 0,
    datasets: [
        {
            // data: info.value,
            data: loginStore.getStoreWeights,
            label: loginStore.getStoreDates,

            borderColor: 'rgb(255, 255, 255)', //цвет линии
            borderWidth: 2, // толщина линии
            backgroundColor: 'rgba(255, 255, 255)', //точки
            color: 'rgba(255, 255, 255)', //точки
            tickColor: 'rgba(255, 255, 255)',
        },
    ],
}));
console.log(loginStore.getStoreWeights)
</script>

<style scope>

.mainBlockLineChart{
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #007aff;
    height: 120px;
    border-radius: 15px;
    padding: 20px;
}

.lineChart{
    height: 120px;
}
</style>