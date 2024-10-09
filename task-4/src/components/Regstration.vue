<template>
	<form class="row g-3 w-25 me-5  bg-white p-2 border border-dark rounded">
		<div class="col-md-6">
			<label for="formGroupExampleInput" class="form-label">Post Title</label>
			<input type="text" v-model="postTitle" class="form-control" placeholder="Title" aria-label="Post Title">
		</div>
		<div class="col-md-6">
			<label for="formGroupExampleInput" class="form-label">Category</label>
			<input type="text" v-model="postCategory" class="form-control" placeholder="Last name" aria-label="Last name">
		</div>
		<div class="col-12">
			<label for="exampleFormControlTextarea1" class="form-label">Message</label>
			<textarea class="form-control" v-model="postMessage"  rows="3"></textarea>
		</div>
		<div class="col-12">
			<button class="btn btn-sm btn-primary" @click="insertdata">Insert</button>
		</div>
	</form>
</template>

<script>
	
	export default{

		data(){

			return{

				postTitle: '',
				postCategory: '',
				postMessage: '',
				clike: '0',
				dislike: '0',
				id: 1,


			};

		},
		methods:{
			insertdata(event){
				let regData={id: this.id, title: this.postTitle, category: this.postCategory, message: this.postMessage, number: this.clike, dlike: this.dislike };
				this.$emit('inputdata',regData);
            //console.log(regData)

            this.postTitle= '';
            this.postCategory= '';
            this.postMessage= '';
            
            event.preventDefault();

        }
        
    },





}

</script>


<style>
</style>