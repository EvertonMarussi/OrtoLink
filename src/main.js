import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import VueMq from 'vue-mq'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('apex-chart', VueApexCharts)

Vue.use(VueMq, {
  breakpoints: { 
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  defaultBreakpoint: 'md' // escolha um breakpoint intermediário
})



Vue.config.productionTip = false

import '@/assets/global.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
