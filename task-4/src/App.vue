<template>
  <div id="app">
    <div class="container">
      <div class="row">

        <regstration @inputdata="getStudentsData" :id='postId'></regstration>
        
        <div class="card col m-3">

          <postshow @submitcounter="likecounter"  @discounter="dislikecounter" :title='vtitle' :category='vcategory' :message='vmessage' :id='postId' :dlike='postDislike' :likes="postLikes" :detid='newId'></postshow>

        </div>
        <div class="card col m-3">

          <postupdate @submitupdated="getUpdatedData" :title='vtitle' :category='vcategory' :message='vmessage' :detid='newId'></postupdate>

        </div>
      </div> 
    </div>

    <!-- Table -->
    <div class="container my-5">

      <formlist :list='listData' @sentdata="sentdata"></formlist>

    </div>
  </div>
</template>

<script>

  import regstration from './components/Regstration.vue'
  import formlist from './components/FormList.vue'
  import postshow from './components/PostShow.vue'
  import postupdate from './components/PostUpdate.vue'
  


  export default {
    name: 'App',
    components: {
      regstration, formlist, postshow, postupdate
    },

    data(){
      return{
        vcategory: '',
        vtitle: '',
        vmessage: '',
        postId: '',
        postLikes:'',
        postDislike:'',
        newId: '',


        listData:[
        {id:'0', title:'hello', category:'world', message:'asif', number: 0, dlike: 0,},


        ]
      };
    },

    methods:{

      sentdata(item){

        this.vtitle = item.item.title;
        this.vcategory = item.item.category;
        this.vmessage = item.item.message;
        this.postLikes = item.item.number;
        this.postDislike = item.item.dlike; 
        this.newId = item.id;

      },

      getStudentsData(regData){

        this.remRow = this.listData.length


              // console.log(this.listData.length);
              regData.id = Math.floor(1000 + Math.random() * 9000);
              console.log(regData.id);
              this.listData.push(regData);
              this.postId = regData.id;
              // alert(this.postId);


            },  

            likecounter(counterObj){


              for (var i = 0; i < this.listData.length; i++) {
                if(this.listData[i].id == counterObj.id){
                  this.listData[i].number = counterObj.likebutton;
                }
              }
            },


            dislikecounter(dlikedata){
              for (var i = 0; i < this.listData.length; i++) {
                if(this.listData[i].id == dlikedata.id){
                  this.listData[i].dlike = dlikedata.dlikebutton;
                }
              }
            },

            getUpdatedData(editData){
              for (var i = 0; i < this.listData.length; i++) {
                if(this.listData[i].id == editData.id){
                  this.listData[i].title = editData.title;
                  this.listData[i].category = editData.category;
                  this.listData[i].message = editData.message;

                }
              }
            }
          },

        }
      </script>

      <style>
      @import'~bootstrap/dist/css/bootstrap.css';

      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 20px;
        background: #e3e3e3;
      }

    </style>
