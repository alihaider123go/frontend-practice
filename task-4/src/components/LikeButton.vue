<template>
	
	<button @click="likecount()" class="btn btn-primary">like</button>
	
</template>

<script>
	
	export default{

		methods:{
			likecount(){ 
				this.$emit('likecounter');   
			}

		},
	

	}

</script>


<style>
</style>