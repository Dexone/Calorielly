<!-- App.vue -->
<template>
  <div class="all">
    <div class="leftbar"><LeftBar /></div>

    <div class="main">
      <!-- сюда рендерятся страницы -->
      <RouterView />
      <Footer class="footer" />
        <Add />
    </div>
  </div>

  <!-- модальные роуты (если надо поверх страниц) -->
  <RouterView name="modal" />
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/store/Login'

import LeftBar from '@/components/LeftBar.vue'
import Footer from '@/components/Footer.vue'
import Add from './components/Add.vue'
const loginStore = useLogin()
const router = useRouter()
watch(loginStore, () => {
  if (
    loginStore.limitCcal === 0 ||
    loginStore.desiredWeight === 0 ||
    loginStore.weightList.length === 1
  ) {
    router.push('/filing')
  }
})
</script>

<style scoped>
.all{display:flex;margin:0 auto;max-width:900px;width:100%}
.main{width:100%}
@media (width <= 1000px){ .leftbar{display:none} .all{padding:10px} }
@media (width >= 1000px){ .footer{display:none} }
</style>
