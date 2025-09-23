<template>
  <UiBlock class="ui-block">
    <div class="header">
      <a class="t-title">Цели</a>
    </div>


    <div class="content">

      <UiBlock class="card" v-if="loginStore.eatingList[0].length > 1">
        <div class="image">
          <img src="@/assets/Feed/cookie.svg">
        </div>
        <div class="description">
          <a class="t-title">Калории</a>
          <a class="t-comment">осталось
            {{ loginStore.limitCcal - loginStore.getSumCcalToday }} ккал</a>


          <div class="line">
            <div class="lineBlue" :style="{
              width:
                (loginStore.getSumCcalToday / loginStore.limitCcal) * 100 + '%',
            }"></div>
          </div>
        </div>
      </UiBlock>

      <UiBlock class="card" v-if="loginStore.weightList[0].length > 1">
        <div class="image">
          <img src="@/assets/Feed/cookie.svg">
        </div>
        <div class="description">
          <a class="t-title">Вес</a>
          <a class="t-comment">осталось
            {{
              loginStore.weightList[0][1] - loginStore.desiredWeight >= 0
                ? loginStore.weightList[0][1] - loginStore.desiredWeight
                : loginStore.desiredWeight - loginStore.weightList[0][1]
            }}
            кг
          </a>


          <div class="line">
            <div class="lineBlue" :style="{
              width:
                loginStore.weightList[0][1] - loginStore.desiredWeight >= 0
                  ? (loginStore.desiredWeight / loginStore.weightList[0][1]) *
                  100 +
                  '%'
                  : (loginStore.weightList[0][1] / loginStore.desiredWeight) *
                  100 +
                  '%',
            }"></div>
          </div>
        </div>
      </UiBlock>
    </div>



  </UiBlock>
</template>

<script setup>
import { ref } from 'vue'
import UiBlock from '@/components/ui/UiBlock.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()

defineProps({
  msg: String,
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
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-top: 8px;
    overflow-x: auto;
    max-width: 100%;
    min-width: 0;
    width: 100%;

    @media (width <=1000px) {
    padding: 5px 5px 0px 5px;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    .card {
      border: none;

      background-color: $palette-bg;
      display: inline-grid;
      grid-template-columns: max-content 1fr;
      margin-right: 8px;
      padding: 18px;
      flex: 0 0 auto;
      white-space: normal;

      .image {

        display: flex;
        align-items: center;
        background-color: #ffffff;
        border-radius: 100%;
        padding: 5px;
        margin-right: 10px;

        @media (width <=1000px) {
          padding: 4px;
        }

        img {
          width: 32px;

          @media (width <=1000px) {
            width: 28px;
          }
        }
      }

      .description {
        margin-right: 8px;

        .t-comment {
          margin-left: 8px;
        }

        .line {
          background-color: #ffffff;
          border-radius: 9999px;
          height: 4px;
          margin-top: 6px;


          .lineBlue {
            background-color: #2688eb;
            border-radius: 9999px;
            height: 100%;
          }
        }
      }

    }


  }


}
</style>
