import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

import './common/stylus/index.styl'

Vue.use(VuelazyLoad, {
  loading: require('common/image/default.png')
  // loading: 'src/common/image/default.png'
})

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
