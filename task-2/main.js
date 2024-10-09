new Vue ({
	el: '#root',

	data:{
		postList: [ 
		{id:101, title:'British Study: Daily Workouts Help you Cope Better with Stress', author:'Joiya', body:'Asif is a jango developer',category: 'FITNESS'},	
		{id:103, title:'10 Steps to Make to be Successful in Bodybuilding and in Life', author:'Joiya', body:'Asif is a jango developer',category: 'FITNESS'}

		]		

		
	},


	methods:{

		addPost(event){
			console.log(event)
			this.postList.push(event)
			// alert('hello world'); \=
		}
	}




});