<template>
    <UiBlock class="ui-block">
        <div class="header">
            <a class="t-title">Динамика веса</a>
        </div>

        <div class="content">
            <Chart :data="data" class="chart" />
        </div>
    </UiBlock>
</template>

<script setup lang="ts">
import UiBlock from '@/components/ui/UiBlock.vue'
import Chart from './Chart.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()


import { watch, ref} from 'vue'

const data = ref([[], []]) //веса[0] и даты [1] в графике

function updateData() {
    if (loginStore.weightList !== 'loading') {
        data.value[0] = loginStore.weightList.reduce(function (accumulator, item) {
            accumulator.unshift(Number(item[1]))
            return accumulator
        }, [])

        data.value[1] = loginStore.weightList.reduce(function (accumulator, item) {
            accumulator.unshift(item[0])
            return accumulator
        }, [])
        if (data.value[0][0] === 0) {
            data.value[0].splice(0, 1)
            data.value[1].splice(0, 1)
        }

    }
}

watch(loginStore, () => {
    updateData()
})
</script>



<style scoped lang="scss">
.ui-block {
    margin-bottom: 6px;

    .header {
        .t-title {

            display: block;
            margin-left: 15px;
            margin-top: 8px;

            @media (width <=1000px) {
                margin-left: 5px;
                margin-top: 0;
            }
        }
    }

    .content {
        padding: 8px 10px 5px 15px;
        margin-top: 8px;
    }


}
</style>