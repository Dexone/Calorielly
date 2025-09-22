<template>
  <header class="header">
    <div class="container">
      <div class="left">
        <RouterLink to="/" class="logo"
          ><img src="@/assets/logo.svg" />Calorielly</RouterLink
        >
      </div>

      <nav class="middle">{{ pathScheme[route.path] }}</nav>

      <div class="right">
        <img class="avatar" src="@/assets/default_avatar.png" />
        <img class="arrow" src="@/assets/Header/arrow-down.svg" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

const pathScheme: Record<string, string> = {
  '/feed': 'Главная',
  '/scales': 'Весы',
  '/settings': 'Настройки',
  '/profile': 'Профиль',
}
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0 1px 10px rgb(139 139 139 / 10%);
  margin-left: auto;
  margin-right: auto;
  padding: 5px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 880px;
    z-index: 2;

    .left {
      .logo {
        align-items: center;
        color: black;
        display: flex;
        font-size: 20px;
        font-weight: 600;
        gap: 5px;
        line-height: 1;
        text-decoration: none;

        img {
          width: 30px;
        }
      }
    }

    .middle {
      color: black;
      display: flex;
      font-size: 20px;
      font-weight: 600;
    }

    .right {
      display: flex;
      gap: 6px;

      .avatar {
        border-radius: 100%;
        height: 44px;
        width: 44px;
      }

      .arrow {
        width: 9px;
      }
    }
  }
}

@media (width <=720px) {
  .header {
    .container {
      padding: 10px 12px;

      .middle {
        display: none;
      }
    }

    .right {
      .arrow {
        display: none;
      }
    }
  }
}
</style>
