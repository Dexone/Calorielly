<template>
<div class="block">{{ loginStore.login }}<a>123</a></div>
  </template>
  
  
  
  <script setup>
  import { useLogin } from '../store/Login';
  const loginStore = useLogin();
  import { ref } from 'vue'
  
  defineProps({
    msg: String,
  })
  
  
  </script>
  
  
  
  <style scoped>
  .block{
    background-color: white;
    border-radius: 5px;
    width: 100%;
  }
  a{
    float: right;
  }
  </style>
  