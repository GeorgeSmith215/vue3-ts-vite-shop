// src\main.ts
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './styles/index.sass'

createApp(App).use(store).use(router).mount('#app')
