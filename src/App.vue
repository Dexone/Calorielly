<script setup>

import HelloWorld from './components/HelloWorld.vue'
import AddValue from './components/AddValue.vue'
import Tablitsa from './components/Tablitsa.vue'
import Auth from './components/Auth.vue'
import { useUser } from '../store/User';
const userStore = useUser();



</script>

<template>
<main class="max-w-3xl mx-auto">
  <HelloWorld  />
  <AddValue  />
  <Tablitsa  />
  <Auth  />

</main>

</template>




