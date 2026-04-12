import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initI18n } from './i18n'

initI18n()
createApp(App).use(router).mount('#app')
