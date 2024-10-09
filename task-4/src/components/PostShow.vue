<template>
	
	<div class="card-body">
		<h3 class="text-success">Show Post</h3>
		<p class="card-title">Post Title: {{title}}</p>
		<p class="card-text">Post category: {{category}}</p>
		<p>Post Message: {{message}}</p>
		<p>Post Likes: {{likes}}</p>
		<p>Post disLikes: {{dlike}}</p>
		<likebtn @likecounter='catchInShowPost'></likebtn>
		<dislike @dislikecounter='disLikes'></dislike>
	</div>
</template>

<script>
	import likebtn from './LikeButton.vue'
	import dislike from './DisLike.vue'
	export default{
		name: 'App',
		props: ['title','category','message','id','likes', 'dlike', 'hide', 'detid' ],
		components: {
			likebtn, dislike
		},

		


		methods:{
			catchInShowPost(){
				this.likes++;

				let counterObj = { likebutton:  this.likes, id: this.detid};
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


	}

</script>


<style>

</style>