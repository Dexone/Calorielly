<template>
    <header class="header">
        <div class="container">
            <div class="left">
                <RouterLink to="/" class="logo"><img src="@/assets/logo.svg">Calorielly</RouterLink>
            </div>

            <nav class="middle"> {{ pathScheme[route.path] }} </nav>

            <div class="right">
                <img class="avatar" src="@/assets/default_avatar.png">
                <img class="arrow" src="@/assets/Header/arrow-down.svg">
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

const pathScheme: Record<string, string> = {
    '/feed': "Главная",
    '/scales': "Весы",
    '/settings': "Настройки",
    '/profile': "Профиль"
}
</script>

<style scoped lang="scss">
.header {
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0;

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
                color: black;
                font-size: 20px;
                font-weight: 600;
                line-height: 1;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 5px;

                img {
                    width: 30px;
                }
            }
        }

        .middle {
            display: flex;
            color: black;
            font-size: 20px;
            font-weight: 600;
        }


        .right {
            display: flex;
            gap: 6px;

            .avatar {
                width: 44px;
                height: 44px;
                border-radius: 100%;
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
            }}


        }
    }</style>