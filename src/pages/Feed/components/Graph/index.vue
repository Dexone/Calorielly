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
import { watch, ref } from 'vue'

import Chart from './Chart.vue'

import UiBlock from '@/components/ui/UiBlock.vue'
import { useLogin } from '@/store/Login'

const loginStore = useLogin()

const data = ref<[number[], string[]]>([[], []]) //веса[0] и даты [1] в графике

function updateData() {
  if (loginStore.weightList !== 'loading') {
    const list: [string, string | number][] = Array.isArray(
      loginStore.weightList,
    )
      ? loginStore.weightList.map(([x, y]) => [String(x), y])
      : []
    data.value[0] = list.reduce<number[]>((accumulator, item) => {
      accumulator.unshift(Number(item[1]))
      return accumulator
    }, [])

    data.value[1] = list.reduce<string[]>((accumulator, item) => {
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
    margin-top: 8px;
    padding: 8px 10px 5px 15px;
  }
}
</style>
