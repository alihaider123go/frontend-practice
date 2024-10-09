
    Vue.component('likebtn',{

    template:`
    
    <button @click="likecount()" class="btn btn-default"><i class="fa fa-thumbs-o-up fa-2x"></i></button>
    
    `,
    
    methods:{
        likecount(){ 
            this.$emit('likecounter');   
        }
        
    },

});

Vue.component('dislikebtn',{
    
    template:`
    
    <button @click="dlikecount()" class="btn btn-default"><i class="fa fa-thumbs-o-down fa-2x"></i></button>
    
    `,
    
    methods:{
        dlikecount(){ 
            this.$emit('dislikecounter');       
        }
        
    },
});

