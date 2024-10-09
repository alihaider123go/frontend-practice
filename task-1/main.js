

Vue.component('post',{



          //  props:['title', 'body','author'],        

            template: `
                <div class="row align-items-start">
                        <div class="col-3 mr-1 my-1">
                            <img src="49-696x465.jpg" width="200px" height="200px">
                        </div>
                            <div class="col-6 mt-3">
                                <h2><a class="ex1" href="default.asp">{{title}}</a></h2>
                                    <p>{{postDate}} {{author}}</p>
                                    <p>{{body}}<p/>
                                </div>

                                <div class="col-3 py-2 border border-dark">
                                    <div class="mb-3">
                                      <label for="exampleFormControlInput1" class="form-label">Title</label>
                                      <input type="text" v-model='title' class="form-control" id ="input">
                                    </div>
                                <div class="mb-3">
                                      <label for="exampleFormControlInput1" class="form-label">Author</label>
                                      <input type="text" v-model='author' class="form-control" id="exampleFormControlInput1">
                                </div>
                                <div class="mb-3">
                                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                            <textarea class="form-control" v-model='body' id="exampleFormControlTextarea1" rows="3"></textarea>
                                      <button type="button" class="btn btn-primary mt-5">Submit</button>
                                </div>
                            </div>
                        </div>
                `,
                 data(){

                         return {

                            title   : 'hello', 
                            author : 'hello',
                            body    : 'hello',
                            postDate : new Date().toLocaleDateString()

                            
                         };
                },

        });

        new Vue ({
            el: '#root'
        });