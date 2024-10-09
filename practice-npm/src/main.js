import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(bootstrap);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')
