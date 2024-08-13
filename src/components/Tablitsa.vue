<template>
 <div
  class="relative flex flex-col  h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mx-3">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border-b border-gray-100 bg-gray-200">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
            Время
          </p>
        </th>
        <th class="p-4 border-b border-gray-100 bg-gray-200">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
            Ккал
          </p>
        </th>
        <th class="p-4 border-b border-gray-100 bg-gray-200">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
            Описание
          </p>
        </th>
        <th class="p-4 border-b border-gray-100 bg-gray-200">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70"></p>
        </th>
      </tr>
    </thead>


    
    <tbody>




      <tr  v-for="date, index in userStore.axiosInfo.info[0][1]">
        <td class="p-4 border-b border-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
            {{ date }}
          </p>
        </td>
        <td class="p-4 border-b border-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
            {{userStore.axiosInfo.info[0][2][index]}}
          </p>
        </td>
        <td class="p-4 border-b border-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900">
           {{   userStore.axiosInfo.info[0][3][index] }}
          </p>
        </td>
        <td class="p-4 border-b border-gray-50" @click=deleteValue(index)>
          <a  class="block font-sans text-sm antialiased font-medium leading-normal text-gray-900">
            Удалить
          </a>
        </td>
      </tr>
    
    </tbody>
  </table>
</div>
    
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { useUser } from '../../store/User';
    import axios from 'axios'
    const userStore = useUser();
    defineProps({
      msg: String,
    })
    
    
    
    function deleteValue(index) {
      userStore.axiosInfo.info[0][1].splice(index, 1)
      userStore.axiosInfo.info[0][2].splice(index, 1)
      userStore.axiosInfo.info[0][3].splice(index, 1)
    }
  
  
    
    
    
    </script>
    