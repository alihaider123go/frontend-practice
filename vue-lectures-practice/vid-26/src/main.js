import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'


Vue.config.productionTip = false
Vue.filter('ucase',function function_name(code) {
  return code - 10
});

Vue.filter('sdate',function function_name(mydate) {
  if (mydate) {
        return moment(String(mydate)).format('MMMM/DD/YYYY hh:mm')
      
    }
  });
Vue.filter('stime',function function_name(mytime) {
  if (mytime) {
        // return moment(String(mydate)).format('MMMM/DD/YYYY hh:mm')
        return moment().startOf('day').fromNow();
      
    }
  });

new Vue({
  render: h => h(App),
}).$mount('#app')
