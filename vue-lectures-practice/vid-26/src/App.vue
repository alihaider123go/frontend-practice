<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <coupon :code="coupon" v-model="coupon"></coupon>
      <h2>Date & time Format</h2>

    <input type="datetime-local" v-model="mydate">
       <p>{{currentDateTime() | sdate}}</p>
    <span class="text-muted pr-2" v-text="dateago"></span>
    <br>
    <input type="time" v-model="mytime">
    <p>{{mytime | stime}}</p>

  </div>
</template>

<script>
  import coupon from './components/coupon.vue'
  import moment from 'moment'

  

  export default {
  
    name: 'App',
    data(){
      return{
        coupon: 'write text here',
        mydate: '',
        mytime: ''
      }

    },

      methods: {
    currentDateTime() {
      return moment(this.mydate);

    },
  },
   
   computed: {
  dateago() {
     return moment(this.mydate).fromNow();
    },
},
    components: {
      coupon
    },

  }
</script>

<style>
</style>
