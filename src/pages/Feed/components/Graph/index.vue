<template>
    <UiBlock class="ui-block">
        <div class="header">
            <a class="t-title">Динамика веса</a>
        </div>

        <div class="content">
            <Chart class="chart" />
        </div>
    </UiBlock>
</template>

<script setup lang="ts">
import UiBlock from '@/components/ui/UiBlock.vue'
import Chart from './Chart.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()


import { computed, watch, ref, reactive } from 'vue'
const info = ref([]) //значения в графике
const date = ref([]) //даты в графике


function updateData() {
  if (loginStore.weightList !== 'loading') {
    console.log(loginStore.weightList)
    info.value = loginStore.weightList.reduce(function (accumulator, item) {
      accumulator.unshift(Number(item[1]))
      return accumulator
    }, [])

    date.value = loginStore.weightList.reduce(function (accumulator, item) {
      accumulator.unshift(item[0])
      return accumulator
    }, [])
    if (info.value[0] === 0) {
      info.value.splice(0, 1)
      date.value.splice(0, 1)
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