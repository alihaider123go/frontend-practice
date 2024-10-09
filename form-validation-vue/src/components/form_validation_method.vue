<template>
  <div>
    <hr>
    <form>
      <h1 class="text-center">Form Validation Via Error Text</h1>
      <div class="row mt-5">
        <div class="col">
          <input type="text" v-model="postId" class="form-control" placeholder="id">
      <span class="text-danger text-end" v-if="errors.length > 0">{{errors[0].error}}</span> 
        </div>
        <div class="col">
          <input type="text" v-model="postUserId" class="form-control" placeholder="user id">
          <span class="text-danger">{{errors}}</span> 
        </div>
        <div class="col">
          <input type="text" v-model="postTitle" class="form-control" placeholder="title">
          <span class="text-danger">{{errors}}</span> 
        </div>  
        <div class="col">
          <input type="text" v-model="postBody" class="form-control" placeholder="body">
          <span class="text-danger">{{errors}}</span> 
        </div>
      </div>
      <button @click="postPost($event)"  class="btn btn-success btn-sm mt-5 mb-3">Submit Post</button>
    </form>
  </div>
</template>

<script>
 import axios from 'axios';

 export default {


  data() {
    return {
      postId: '',
      postUserId: '',
      postTitle: '',
      postBody: '',
      errors:[]
    }
  },



  computed: {
    formvalid(){
      if (this.postId.length == "") {
 
        return true;
      }
      return false;
    }
  },


  methods: {

  //  formvalid(){
  //   var tempObj = {};
  //   if (this.postId.length == "") { 
  //     tempObj['error'] = 'Postid required';

  //     this.errors.push(tempObj);
  //   }
    
  // },

  postPost(event) {
    event.preventDefault();



    axios.post(`http://jsonplaceholder.typicode.com/posts`, {

      body:   this.postBody,
      title:  this.postTitle,
      id:     this.postId,
      userId: this.postUserId
    })
    .then(response => {
      console.log(response), alert('Success')
    })
      // .catch(error => this.errors = error.response.data); 
      
      

    }
  }
}

</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';


</style>
