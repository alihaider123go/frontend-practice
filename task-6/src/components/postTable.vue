<template>
  <div>
    <table class="table mt-5 border border-dark">
      <thead class="thead-dark bg-danger">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">UserId</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Button</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.userId}}</td>
          <td>{{item.title}}</td>
          <td>{{item.body}}</td> 
          <td><button @click="postDetail(item.id)" type="button" class="btn btn-secondary btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button></td>

        </tr>
      </tbody>
      
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Single Post details</h5>
            <button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table mt-5 border border-dark">
              <thead class="thead-dark bg-danger">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Title</th>
                  <th scope="col">Post</th>

                </tr>
              </thead>
              <tbody>

              </tbody>
              <tr>
                <td>{{singlePostid}}</td>
                <td>{{singlePostUserId}}</td>
                <td>{{singlePostTitle}}</td>
                <td>{{singlePostbody}}</td> 

              </tr>

            </table>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>




</template>

<script>
  import axios from 'axios';
  export default {
    name: 'postTable',
    props: ['list'],
    data(){

     return {

      singlePostid       : '', 
      singlePostUserId   : '', 
      singlePostTitle    : '', 
      singlePostbody     : '', 




    };
  },
  methods: {

    postDetail(id){
     var self = this;

     var posturl = "https://jsonplaceholder.typicode.com/posts/"+id

     axios.get(posturl)
     .then(function (response) {
      console.log(response.data)
      self.singlePostid = response.data.id;
      self.singlePostUserId = response.data.userId;
      self.singlePostTitle = response.data.title;
      self.singlePostbody = response.data.body;



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

</style>
