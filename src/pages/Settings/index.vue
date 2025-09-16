<template>
  <div class="mainBlockSettings">
    <div class="title">Калькулятор граммов</div>

    <div class="nameInput">Желаемый вес</div>
    <div>
      <UiInput placeholder="Вес кг" v-model.number="weight" type="number" />
    </div>
    <div>


              <UiButton @click="(loginStore.editDesiredWeight(weight), (weight = null))" text="Изменить" />
    </div>

    <div class="nameInput">Лимит калорий</div>
    <div>
      <UiInput placeholder="Ккал" v-model.number="ccal" type="number" />
    </div>



      <UiButton @click="(loginStore.editLimitCcal(ccal), (ccal = null))" text="Изменить" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import UiInput from '@/components/ui/UiInput.vue'
import UiButton from '@/components/ui/UiButton.vue'
// @ts-ignore
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

}
</style>
