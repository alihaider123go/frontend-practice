
Vue.component('post',{
			props: ['title','author','body','category'],

			template: `
				<div class="col-12">

					<div class="row w-100">

						<div class="col-4">

							<img src="123.jpg" width="100%" >

						</div>
						<div class="col-8  mr-0">

								<h4 class="heading-css my-2"><a href="">{{title}}</a></h4>
								<p class="my-1"><span>{{category}}</span> - <span>{{author}}</span> - <span class="text-muted">{{postDate}}</span></p>
								<p class="text-muted">{{body}}</p>

						</div>
					</div>

					<div>
						<hr class="w-75 mx-auto">
					</div>	

				</div>	

			`,

			data(){

				return {

					
					postDate: new Date().toLocaleDateString()


				};
			},
});