import { createApp } from 'vue'
/* 引入element 套装 */
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import './style.css'
import App from './App.vue'
import router from "./router"
const app = createApp(App)
/* element */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn,
  })
  app.use(router)
app.use(ElementPlus).mount('#app')
