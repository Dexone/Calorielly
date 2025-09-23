<template>
  <UiBlock class="ui-block">
    <a class="t-title">Калорий сегодня</a>

    <div class="content" @click="$emit('open')">
      <div class="leftBlock">
        <div class="icon">
          <img src="@/assets/Feed/fire.svg" />
        </div>
        <div class="text">
          <p class="t-main">{{ loginStore.getSumCcalToday }} ккал</p>
          <p class="t-comment">обновлено {{ backTime }} мин назад</p>
        </div>
      </div>
      <div class="rightBlock">
        <img src="@/assets/Feed/arrow-right.svg" />
      </div>
    </div>
  </UiBlock>
</template>

<script setup>
import { ref, watch } from 'vue'

import UiBlock from '@/components/ui/UiBlock.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()
const emit = defineEmits(['open'])

const backTime = ref(0)
const upTime = ref(0)
setInterval(() => updateTime(), 60000) //обновлено ... мин назад
function updateTime() {
  backTime.value = ((Date.now() - upTime.value) / 1000 / 60).toFixed()
}
watch(loginStore, () => {
  upTime.value = Date.now()
  updateTime()
})

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.ui-block {
  margin-bottom: 6px;

  .t-title {
    display: block;
    margin-left: 15px;
    margin-top: 8px;

    @media (width <=1000px) {
      margin-left: 5px;
      margin-top: 0;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 8px 10px 8px 15px;
    transition: 0.5s;
      cursor: pointer;
    @media (width <=1000px) {
      padding: 5px;
    }

    &:hover {
      background-color: $palette-bg;
      border-radius: 8px;
      transition: 0.5s;

    }

    .leftBlock {
      align-items: center;
      display: flex;

      .icon {
        background-color: $palette-bg;
        border-radius: 100%;
        padding: 8px;

        @media (width <=1000px) {
          padding: 7px;
        }

        img {
          width: 32px;

          @media (width <=1000px) {
            width: 28px;
          }
        }
      }

      .text {
        display: block;
        margin-left: 14px;

        @media (width <=1000px) {
          margin-left: 10px;
        }
      }
    }

    .rightBlock {
      display: inline-flex;

      img {
        width: 24px;

        @media (width <=1000px) {
          width: 20px;
        }
      }
    }
  }
}
</style>
