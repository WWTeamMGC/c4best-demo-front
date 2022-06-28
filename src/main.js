import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'
import './assets/less/index.less'
import http from 'axios'
import axios from "axios";
import qs from 'qs'
Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.prototype.$http= http
Vue.config.productionTip = false
// 挂载echarts this.$echarts
Vue.prototype.$echarts=window.echarts
import '../src/assets/less/global.less'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
