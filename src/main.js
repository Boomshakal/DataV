import Vue from 'vue'
import App from './App.vue'

import router from './router'


// store的引入
import store from '../src/store'

Vue.config.productionTip = false

// 引用dataV
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

// 引用elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import '../static/global/gt.js'


// 导入axios
import * as api from './restful/api'
Vue.prototype.$http = api;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
