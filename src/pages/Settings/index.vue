<template>
  <div class="mainBlockSettings">
    <div class="title">Калькулятор граммов</div>

    <div class="nameInput">Желаемый вес</div>
    <div>
      <UiInput placeholder="Вес кг" v-model.number="weight" type="number" />
    </div>
    <div>
      <button
        class="buttonGo"
        @click="(loginStore.editDesiredWeight(weight), (weight = null))"
      >
        Изменить
      </button>
    </div>

    <div class="nameInput">Лимит калорий</div>
    <div>
      <UiInput placeholder="Ккал" v-model.number="ccal" type="number" />
    </div>

    <button
      class="buttonGo"
      @click="(loginStore.editLimitCcal(ccal), (ccal = null))"
    >
      Изменить
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// @ts-ignore
import UiInput from '@/components/ui/UiInput.vue'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()

const weight = ref<number | null>(null)
const ccal = ref<number | null>(null)

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.mainBlockSettings {
  background-color: #fff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px 22px;

  .title {
    font-size: 17px;
    font-weight: 600;
  }

  .nameInput {
    color: rgb(88 99 111);
    font-size: 15px;
    font-weight: 500;
    margin-top: 18px;
  }

  .buttonGo {
    background-color: #007aff;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 15px;
    font-weight: 600;
    height: 40px;
    margin-top: 20px;
    transition: 0.3s;
    width: 100%;

    &:hover {
      background-color: #439eff;
      cursor: pointer;
      transition: 0.3s;
    }
  }
}
</style>
