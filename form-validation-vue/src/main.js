import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

Vue.use(bootstrap);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
