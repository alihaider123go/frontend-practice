<template>
	<button @click="dlikecount()" class="btn btn-primary">Dislike</button>
	
</template>

<script>
	
	export default{

		methods:{
			dlikecount(){ 
				this.$emit('dislikecounter');       
			}
			
		},

	}

</script>


<style>
</style>