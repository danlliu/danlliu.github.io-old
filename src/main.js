import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Homepage from "@/pages/Homepage";
import Error404 from "@/pages/Error404";

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
