import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import Lenovo from '@/index.js'
import hljs from 'highlight.js'
import routes from './config/routes'
import icon from './config/icon.json'
import demoBlock from './components/demo-block'

import 'packages/theme-chalk/src/index.scss'
import './demo-styles/index.scss'
import 'normalize.css'
import 'examples/assets/styles/common.scss'
import 'highlight.js/styles/color-brewer.css'

Vue.use(Lenovo)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({ // eslint-disable-line
  ...App,
  router
}).$mount('#app')
