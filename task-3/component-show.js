
Vue.component('postshow',{
    props: ['title','category','message','id','likes', 'dlike', 'hide', 'detid' ],


    template:`

    
    <div class="card-body">
    {{detid}}
    <h3 class="text-success">Show Post</h3>
    <p class="card-title">Post Title: {{title}}</p>
    <p class="card-text">Post category: {{category}}</p>
    <p>Post Message: {{message}}</p>
    <p>Post Likes: {{likes}}</p>
    <p>Post disLikes: {{dlike}}</p>
    <likebtn :id = id @likecounter='catchInShowPost'></likebtn>
    <dislikebtn :id = id @dislikecounter='disLikes'></dislikebtn>
    </div>
    `,

    methods:{
        catchInShowPost(){
            this.likes++;

            counterObj = { likebutton:  this.likes, id: this.detid};
            console.log(counterObj);
            this.$emit('submitcounter', counterObj);

        },

        disLikes(){
            this.dlike++;

                let dlikedata = { dlikebutton:  this.dlike, id: this.detid};
                console.log(dlikedata);
                this.$emit('discounter', dlikedata);
           }

       },

   });

