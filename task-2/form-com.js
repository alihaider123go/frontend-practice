Vue.component('forrm',{
    

    template:`

    <div class="col-4 mx-0 border border-dark bg-light px-3 py-3">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fw-bold">Title</label>
                    <input type="text" v-model="postTitle" class="form-control" id ="input">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fw-bold">Category</label>
                    <input type="text" v-model="postAuthor" class="form-control" id ="input">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label fw-bold">Author</label>
                    <input type="text" v-model="postCategory" class="form-control" id="exampleFormControlInput1">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label fw-bold">Message</label>
                    <textarea class="form-control" v-model="postBody" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" class="btn btn-primary mt-5" @click ="addPost">Submit</button>
                </div>

    </div>
    `,

    data(){

				return {

	

					postTitle: '',
					postAuthor: '',
					postCategory: '',
					postBody: '',
					postDate: new Date().toLocaleDateString()


				};

		},

		methods: {

			addPost	() {
				



                let payload={
                    title: this.postTitle, author: this.postAuthor, category: this.postCategory, body: this.postBody

                };

				this.$emit('submited',payload);	

				},

		},

 });