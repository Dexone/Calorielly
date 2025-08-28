<template>
  <div class="mainBlockFooter">
    <div class="blockItem" @click="hiddenStore.showLogin()">
      <svg
        class="icon1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <div class="textUnderIcon">Аккаунт</div>
    </div>

    <div class="blockItem" @click="hiddenStore.showScales()">
      <svg
        class="icon1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z"
        />
      </svg>
      <div class="textUnderIcon">Весы</div>
    </div>

    <div class="add" @click="hiddenStore.showAdd()">
      <svg
        class="plusIcon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14m-7 7V5"
        />
      </svg>
    </div>

    <div class="blockItem" @click="hiddenStore.showSettings()">
      <svg
        class="icon1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <div class="textUnderIcon">Настройки</div>
    </div>

    <div class="blockItem">
      <svg
        class="icon1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <div class="textUnderIcon">Тест</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useComponents } from '@/store/ComponentsHidden'
import { useLogin } from '@/store/Login'
const loginStore = useLogin()

const hiddenStore = useComponents()

defineProps({
  msg: String,
})
</script>

<style scoped>
.mainBlockFooter {
  align-items: flex-end;
  background-color: #f7f7f7;
  border-top: 1px solid #b2b2b4;
  bottom: 0;
  display: flex;
  height: 60px;
  justify-content: space-around;
  left: 0;
  padding: 5px 0;
  position: fixed;
  right: 0;
  z-index: 1050;
}

.blockItem {
  align-items: center;
  color: #a4a4a6;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 10px;
  font-weight: 500;
  justify-content: flex-end;
}

.icon1 {
  color: #959595;
  height: 30px;
  width: 30px;
}

.textUnderIcon {
  margin-top: 2px;
}

.add {
  align-items: center;
  background-color: #ff2a6d;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  height: 50px;
  justify-content: center;
  position: relative;
  top: -10px;
  width: 50px;
}

.plusIcon {
  color: #fff;
  height: 32px;
  width: 32px;
}
</style>
