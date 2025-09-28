<template>



  <UiBlock class="ui-block">
    <div class="header">
      <a class="t-title">Калорий сегодня</a>
      <div class="daySelector">
        <a class="selectorBack" @click="
          () => {
            if (loginStore.eatingList.length > daySelector + 1) {
              daySelector++
            }
          }
        ">
          <img class="back" src="@/assets/Feed/arrow-right.svg"></a>
        <a class="t-title">{{ loginStore.eatingList[daySelector][0] }}</a>

         <a v-if="daySelector !==0" class="selectorForward" @click="
          () => {
            if (daySelector > 0) {
              daySelector--
            }
          }
        ">
          <img class="back" src="@/assets/Feed/arrow-right.svg"></a>
      </div>
    </div>
    <div v-for="(_, index) in loginStore.eatingList[daySelector][1]" class="content" @click="$emit('open')">
      <div class="leftBlock">
        <div class="icon">
          <img src="@/assets/Feed/pizza.svg" />
        </div>
        <div class="text">
          <p class="t-main"> {{
            loginStore.eatingList[daySelector][3][
            loginStore.eatingList[daySelector][3].length - 1 - index
            ]
          }} <a>{{
              loginStore.eatingList[daySelector][2][
              loginStore.eatingList[daySelector][2].length - 1 - index
              ]
            }} ккал</a></p>
          <p class="t-comment"> {{
            loginStore.eatingList[daySelector][1][
            loginStore.eatingList[daySelector][1].length - 1 - index
            ]
          }}</p> 
        </div>
      </div>
      <div class="rightBlock">
        <img src="@/assets/Feed/arrow-right.svg" />
      </div>
    </div>
  </UiBlock>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import UiBlock from '@/components/ui/UiBlock.vue'
import { useLogin } from '@/store/Login'

const loginStore = useLogin()

const daySelector = ref(0)

watch(loginStore.eatingList, () => {
  console.log('test')
})

defineProps({
  msg: String,
})
// остались крестики на удаление
</script>

<style scoped lang="scss">
.ui-block {
  margin-bottom: 6px;

  .header {
    margin-left: 15px;
    margin-top: 8px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;

    @media (width <=1000px) {
      margin-left: 5px;
      margin-top: 0;
      padding-right: 5px;
    }

    .t-title {}

    .daySelector {
      display: flex;
      align-items: center;

      .selectorBack {
        img {
          
          transform: rotate(180deg);
          width: 18px;
          cursor: pointer;
          background-color: rgb(0 0 0 / 7%);
          border-radius: 100%;
          color: #666;
          padding: 1px;
          transition: 0.3s;
          margin-right: 8px;

          &:hover {
            background-color: rgb(0 0 0 / 14%);
            color: #9b9b9b;
            transition: 0.3s;
          }

          @media (width <=1000px) {
            width: 15px;
          }
        }
      }

      .t-title {
        color: $palette-blue
      }
 .selectorForward {
        img {
          width: 18px;
          cursor: pointer;
          background-color: rgb(0 0 0 / 7%);
          border-radius: 100%;
          color: #666;
          padding: 1px;
          transition: 0.3s;
          margin-left: 8px;

          &:hover {
            background-color: rgb(0 0 0 / 14%);
            color: #9b9b9b;
            transition: 0.3s;
          }

          @media (width <=1000px) {
            width: 15px;
          }
        }
      }

    }
  }


  .content {

    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding: 8px 10px 8px 15px;
    transition: 0.5s;

    @media (width <=1000px) {
      padding: 5px;
    }



    .leftBlock {
      align-items: center;
      display: flex;

      .icon {
        padding: 8px 8px 8px 0px;

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

        a {
          color: #58636f
        }

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
