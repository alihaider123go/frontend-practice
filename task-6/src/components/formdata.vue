<template>
  <div>
    <hr>
    <form>
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
      }
    },

    methods: {
    // Pushes posts to the server when called.
    postPost(event) {
      event.preventDefault();
      axios.post(`http://jsonplaceholder.typicode.com/posts`, {

        body:   this.postBody,
        title:  this.postTitle,
        id:     this.postId,
        userId: this.postUserId
      })
      .then(response => {console.log(response)})
      .catch(function () {
      })
      .then(function () {

      });

    }
  }
}


</script>

<style>

</style>
