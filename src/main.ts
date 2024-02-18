// src\main.ts
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import elementPlus from './plugins/element-plus'

import './styles/index.sass'

createApp(App).use(router).use(elementPlus).mount('#app')
