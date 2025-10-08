<template>
  <Add :open="showAdd" @close="showAdd = false" />

  <RouterView v-slot="{ Component, route }">
    <!-- компоненты без хедера и меню -->
    <template v-if="route.meta.blank">
      <component :is="Component" @open="showAdd = true" />
    </template>
    <!-- компоненты с хедером и меню -->
    <template v-else>
      <Header />

      <div class="all">
        <div class="leftbar">
          <LeftBar @open="showAdd = true" />
        </div>

        <div class="main">
          <component :is="Component" @open="showAdd = true" />

          <Footer class="footer" @open="showAdd = true" />
        </div>
      </div>
    </template>
  </RouterView>

  <RouterView name="modal" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'

import Add from './components/modals/Add.vue'

import Footer from '@/components/blocks/Footer.vue'
import Header from '@/components/blocks/Header.vue'
import LeftBar from '@/components/blocks/LeftBar.vue'
import { useLogin } from '@/store/Login'
const showAdd = ref(false)
const loginStore = useLogin()
const router = useRouter()
</script>

<style scoped>
.all {
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
  max-width: 900px;
  width: 100%;
}

.main {
  width: 100%;
}

@media (width <=1000px) {
  .leftbar {
    display: none;
  }

  .all {
    padding: 10px 6px;
    padding-bottom: 60px;
  }
}

@media (width >=1000px) {
  .footer {
    display: none;
  }
}
</style>
