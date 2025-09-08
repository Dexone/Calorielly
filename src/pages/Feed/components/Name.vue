<template>
  <div class="blockName">
    {{
      loginStore.login[0].toUpperCase() +
      loginStore.login.slice(1, loginStore.login.length)
    }}
    <RouterLink to="/settings"
      ><a
        ><svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
        </svg>
      </a>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useLogin } from '@/store/Login'

const loginStore = useLogin()


defineProps({
  msg: String,
})
</script>

<style scoped>
.blockName {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  width: 100%;
}

a {
  color: #007aff;
  float: right;
  margin-top: 5px;
  transition: 0.3s;
}

a:hover {
  border-radius: 5px;
  color: #439eff;
  cursor: pointer;
  transition: 0.3s;
}
</style>
