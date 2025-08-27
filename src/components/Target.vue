<template>
  <a class="title">Цели</a>
  <svg
    class="imageMain"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    @click="hiddenStore.showSettings()"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
    />
  </svg>

  <div class="mainBlockTarget">
    <div v-if="loginStore.eatingList[0].length > 1" class="blockTarget">
      <svg
        class="image1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"
        />
      </svg>
       <div class="headerRow">
    <span class="text1">Калории</span>
    <span class="text2">осталось {{ loginStore.limitCcal - loginStore.getSumCcalToday }} ккал</span>
  </div>

      <div class="line">
         <div
      class="lineBlue"
      :style="{ width: (loginStore.getSumCcalToday / loginStore.limitCcal) * 100 + '%' }"
    ></div>
      </div>
    </div>

  <div v-if="loginStore.weightList[0].length > 1" class="blockTarget">
 <svg
        class="image2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.952.462c-.483.19-.868.432-1.19.71-.363.315-.638.677-.831.93l-.106.14c-.21.268-.36.418-.574.527C6.125 6.883 5.74 7 5 7a1 1 0 0 0 0 2c.364 0 .696-.022 1-.067v.41l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.786 1.786 0 0 0 1.768-1.558 1.774 1.774 0 0 0-.122-.899L8 9.343V8.028c.2-.188.36-.38.495-.553.062-.079.118-.15.168-.217.185-.24.311-.406.503-.571a1.89 1.89 0 0 1 .24-.177A3.01 3.01 0 0 0 11 7.829V20H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H13V7.83a3.01 3.01 0 0 0 1.63-1.387c.206.091.373.19.514.29.31.219.532.465.811.78l.025.027.02.023v1.78l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.785 1.785 0 0 0 1.768-1.558 1.773 1.773 0 0 0-.122-.899L18 9.343v-.452c.302.072.633.109 1 .109a1 1 0 1 0 0-2c-.48 0-.731-.098-.899-.2-.2-.12-.363-.293-.651-.617l-.024-.026c-.267-.3-.622-.7-1.127-1.057a5.152 5.152 0 0 0-1.355-.678 3.001 3.001 0 0 0-5.896.04Z"
          clip-rule="evenodd"
        />
      </svg>

  <div class="headerRow">
    <span class="text1">Вес</span>
    <span class="text2">
      осталось
      {{
        loginStore.weightList[0][1] - loginStore.desiredWeight >= 0
          ? loginStore.weightList[0][1] - loginStore.desiredWeight
          : loginStore.desiredWeight - loginStore.weightList[0][1]
      }} кг
    </span>
  </div>

  <div class="line">
    <div
      class="lineBlue"
      :style="{
        width:
          loginStore.weightList[0][1] - loginStore.desiredWeight >= 0
            ? (loginStore.desiredWeight / loginStore.weightList[0][1]) * 100 + '%'
            : (loginStore.weightList[0][1] / loginStore.desiredWeight) * 100 + '%',
      }"
    ></div>
  </div>
</div>

  </div>
</template>

<script setup>
import { useLogin } from '../store/Login'
const loginStore = useLogin()
import { useComponents } from '../store/ComponentsHidden'

const hiddenStore = useComponents()
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>

<style scoped>
.mainBlockTarget {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;
}

.mainBlockTarget::-webkit-scrollbar {
  display: none;
}

.title {
  font-weight: 600;
}

.imageMain {
  color: #007aff;
  float: right;
  transition: 0.3s;
}

.imageMain:hover {
  border-radius: 5px;
  color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}

.blockTarget {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 #dedee0; 
  column-gap: 8px;
  display: inline-grid;
  grid-template-columns: 32px 1fr;
  margin: 10px 10px 12px 0;
  min-height: 60px;
  padding: 8px 14px 10px;
}


.image1,
.image2 {
  place-self: center center;
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 22px;
  width: 22px;
}
.image1 { color: #8d44ad; }
.image2 { color: #2f3945; }
.image1 path, .image2 path { fill: currentcolor; stroke: none; }


.headerRow {
  align-items: center;
  display: flex;
  gap: 6px;
  grid-column: 2;
}

.text1 {
  font-size: 12px;
  font-weight: 600;
}

.text2 {
  color: #8a898e;
  font-size: 12px;
}


.line {
  background-color: #dddddf;
  border-radius: 2px;
  grid-column: 2;
  height: 2px;
  margin-top: 4px;
}

.lineBlue {
  background-color: #007aff;
  border-radius: 2px;
  height: 100%;
}
</style>
