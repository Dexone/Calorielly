// import { createApp } from 'vue'

// import './style.css'
// import App from './App.vue'

// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// const app = createApp(App)
// app.use(pinia)
// createApp(App)
// app.mount('#app')



import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

// import '@/assets/styles/animations.scss'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')
