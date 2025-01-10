<script setup>
import { useLogin } from '../src/store/Login';
const loginStore = useLogin();
import { useComponents } from '../src/store/ComponentsHidden';
const hiddenStore = useComponents();
import Name from './components/Name.vue'
import LeftBar from './components/LeftBar.vue'
import Login from './components/Login.vue'
import Now from './components/Now.vue'
import Add from './components/Add.vue'
import { ref, watch } from 'vue';

loginStore.getInfo()




const blur = ref(false)
watch(hiddenStore, () => {
  blurEdit()
})


function blurEdit() {
  if (hiddenStore.login === true || hiddenStore.add === true) {
    blur.value = true
  }
  else {
    blur.value = false
  }
}
</script>

<template>

<div class="main">
    


</div>




<div class="all" :class="{ active: blur }">

    <div class="leftbar">
    <LeftBar />
</div>



      <div class="main">
          <Name />
            <Now />

    </div>

  </div>

  <Login />
  <Add />
</template>

<style scoped>


.active{
    filter: blur(12px);
}


.all{

display: flex;
max-width: 900px;
margin-left: auto;
margin-right: auto;
position: relative;
width: 100%;
}

.main{
width: 100%;
}


@media(max-width: 1000px){
    /* mobile: width < 1000px */
    .leftbar{
        display: none;
} 
}
</style>
