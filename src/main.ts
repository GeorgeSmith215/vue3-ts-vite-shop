import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'
import 'xe-utils'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(elementPlus)

app.mount('#app')
