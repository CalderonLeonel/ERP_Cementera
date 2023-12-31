import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import vuetify from './plugins/vuetify'
import '@babel/polyfill'


Vue.use(VueAxios,axios);

axios.defaults.baseURL='http://35.222.66.155:3000/'
//axios.defaults.baseURL='http://216.158.233.122:3009/'
//axios.defaults.baseURL='http://192.168.1.10:3000/'
Vue.config.productionTip = false



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
