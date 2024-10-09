<template>
  <div class="container text-center"  id="app">
    <usertable :list="post"></usertable>
    <button @click="gitUserData()" class="btn btn-danger mt-3 mb-3 btn-sm ">show post</button>
    <formdata></formdata>
  </div>

</template>

<script>
  import axios from 'axios';
  import usertable from './components/postTable.vue';
  import formdata from './components/formdata.vue';



  export default {

    name: 'axios',

    components: {
      usertable,formdata
    },
    data () {
      return {
       post:'',
     }
   },

   methods: {

    gitUserData(){
      var self = this;

      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log(response.data)
        self.post = response.data;
      })
      .catch(function () {
      })
      .then(function () {

      });

    }


  },


}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';

</style>
