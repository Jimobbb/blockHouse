import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'


Vue.use(ElementUI)
// 配置请求的跟路径,如挂掉了，再改
// axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
// axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
// axios.interceptors.request.use(config => {
//   console.log(config);
//   config.headers.Authorization = window.sessionStorage.getItem('token');
//   return config
// })

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
