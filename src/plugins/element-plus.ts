import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'small', zIndex: 2000, locale: zhCn })
  }
}
