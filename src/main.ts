import Vue from 'vue'
import Component from "vue-class-component";
import App from './App.vue'
import router from './router'
import store from './store'
import {gloNum} from "./config/utils"

Vue.config.productionTip = false
Vue.prototype.$gloNum = gloNum;
Vue.prototype.$bus = new Vue()

// 配置路由守卫
Component.registerHooks([
  "beforeRouteEnter", //进入路由之前
  "beforeRouteLeave", //离开路由之前
  "beforeRouteUpdate"
]);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
