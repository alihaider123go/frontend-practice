import Vue from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import Vuelidate from 'vuelidate'
Vue.config.productionTip = false

Vue.use(bootstrap);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
