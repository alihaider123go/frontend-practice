import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

Vue.config.productionTip = false
Vue.use(bootstrap);

new Vue({
  render: h => h(App),
}).$mount('#app')
