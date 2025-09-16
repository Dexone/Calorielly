<template>
  <Add v-if="showAdd" @close="showAdd = false" />
  <Header />

  <div class="all">
    <div class="leftbar">
      <LeftBar @open="showAdd = true" />
    </div>

    <div class="main">

      <RouterView />
      <Footer class="footer" @open="showAdd = true" />

    </div>
  </div>

  <RouterView name="modal" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'

import Add from './components/Add.vue'

import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import LeftBar from '@/components/LeftBar.vue'
import { useLogin } from '@/store/Login'
const showAdd = ref(false)
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
    padding: 10px;
    padding-bottom: 60px;
  }
}

@media (width >=1000px) {
  .footer {
    display: none;
  }
}
</style>
