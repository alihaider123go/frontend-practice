
<template>

    <div class="card-body">
        <h3 class="text-success">Editing Detail</h3> 
        <p class="card-title">Post Title: {{title}}</p>         <input type="text" class="form-control w-75" v-model="title">
        <p class="card-text">Post category: {{category}}</p>    <input type="text" class="form-control w-75" v-model="category">
        <p>Post Message: {{message}}</p>                        <input type="text" class="form-control w-75" v-model="message">
        <br>
        <button @click="updatedvalue" class="btn btn-primary mt-5">Updated</button>
    </div>


</template>

<script>

    export default{

        props: ['title','category','message','hide','detid'],



        methods:{

            updatedvalue(){
                let editData = {id: this.detid, title: this.title, category: this.category, message: this.message};
                console.log(editData);
                this.$emit('submitupdated', editData);
                this.title = '';
                this.category = '';
                this.message = '';




            }

        }

    }

</script>


<style>

</style>