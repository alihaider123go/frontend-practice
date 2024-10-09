<template>
  <div>
    <hr>
    <form>
      <h1 class="text-center">Form Validation Via Button Disabled</h1>
      <div class="row mt-5">
        <div class="col">
          <input type="text" v-model="postId" class="form-control" placeholder="id">
        </div>
        <div class="col">
          <input type="text" v-model="postUserId" class="form-control" placeholder="user id">
        </div>
        <div class="col">
          <input type="text" v-model="postTitle" class="form-control" placeholder="title">
        </div>  
        <div class="col">
          <input type="text" v-model="postBody" class="form-control" placeholder="body">
        </div>
      </div>
      <button @click="postPost($event)" :disabled='formvalid' class="btn btn-success btn-sm mt-5 mb-3">Submit Post</button>
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
      errors:{}
    }
  },

  computed: {
    formvalid(){
      if (this.postId.length == "" || this.postUserId.length == "" || this.postTitle.length == "" || this.postBody.length == "" ) {
 
        return true;
      }
      return false;
    }
  },

  methods: {
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
      .catch(error => this.errors = error.response.data); 
      
      

    }
  }
}

</script>

<style scoped>

</style>
