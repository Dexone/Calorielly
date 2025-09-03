<template>
  <div class="mainLeftBar">
    <RouterLink to="/feed">
      <div class="section">

        <img src="@/assets/LeftBar/home.svg"></img>
        <span>Главная</span>
      </div>
    </RouterLink>

    <RouterLink to="/scales">
      <div class="section">

        <img src="@/assets/LeftBar/scales.svg"></img>
        <span>Весы</span>
      </div>
    </RouterLink>
    <div class="section" @click="hiddenStore.showAdd()">
      <img src="@/assets/LeftBar/add.svg"></img>
      Добавить
    </div>
    <RouterLink to="/settings">
      <div class="section">
        <img src="@/assets/LeftBar/settings.svg"></img>

        <span>Настройки</span>
      </div>
    </RouterLink>
    <RouterLink to="/profile">
      <div class="section">
        <img src="@/assets/LeftBar/auth.svg"></img>
        <span>Авторизация</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang='ts'>

import { useComponents } from '@/store/ComponentsHidden.js'

const hiddenStore = useComponents()

defineProps({
  msg: String,
})
</script>

<style scoped lang="scss">
.mainLeftBar {
  background-color: #fff;
border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  margin-right: 20px;
  padding: 8px;
  text-decoration: none;
  width: 320px;

  &:hover {
    background-color: rgb(242 242 242);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

   & :deep(a) { // ибо routerLink после рендера будет <a>
    color: black;
    font-size: 15px;
    text-decoration: none;
  }

  .router-link-active {
    .section {
      background-color: rgb(242 242 242);
        border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }
  }

  .section {
    padding: 14px;
    padding-bottom: 8px;
    text-decoration: none;
    transition: 0.3s;


  }



  img {
    float: left;
    margin-right: 10px;
    margin-top: -5px;
    stroke: #007aff;
    width: 32px;
  }

 
}
</style>
