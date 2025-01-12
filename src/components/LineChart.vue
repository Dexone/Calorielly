<template>




    <div class="mainBlockLineChart">

        <LineChart class="lineChart" :chartData="lineData" :options="options" />
    </div>



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

const info = ref([]) //значения в графике
const date = ref([]) //даты в графике
const total = ref('загрузка...') //среднее значение

const selectedRange = ref(false)





function updateData() {

    if (loginStore.weightList !== 'loading') {
        info.value = loginStore.weightList.reduce(function (accumulator, item) {
            accumulator.unshift(Number(item[1]))
            return accumulator
        }, [])



        date.value = loginStore.weightList.reduce(function (accumulator, item) {
            accumulator.unshift(item[0])
            return accumulator
        }, [])
        if(info.value[0] === 0){
            info.value.splice(0,1)
            date.value.splice(0, 1)
        }

        total.value = 'Текущий вес: ' + Number(info.value[info.value.length -1]) + ' кг'

    }
}


watch(loginStore, () => {
    updateData()
})







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
            color: 'rgb(199, 220, 223)',
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
            data: info.value,
            label: 'Вес, кг',
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



.mainBlockLineChart {
    background-color: #007aff;
    height: 120px;
    border-radius: 15px;
    padding: 10px 20px 20px 20px;
    margin-bottom: 20px;
}

.lineChart {
    height: 120px;
}
</style>