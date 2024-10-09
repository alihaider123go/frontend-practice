
Vue.component('listitem',{
    props: ['list'],

    template:`

    <table class="table table-striped border border-dark">
    <thead class="bg-success">
    <tr>
    <th scope="col">Sr</th>
    <th scope="col">Post Title</th>
    <th scope="col">Category</th>
    <th scope="col">Message</th>
    <th scope="col">Likes</th>
    <th scope="col">dislike</th>
    <th scope="col">add</th>
    <th scope="col">remove</th>

    </tr>
    </thead>
    <tbody>

    <tr v-for="(item, index) in list">
    <td>{{item.id}}</td> 
    <td>{{item.title}}</td>
    <td>{{item.category}}</td>
    <td>{{item.message}}</td>
    <td>{{item.number}}</td>
    <td>{{item.dlike}}</td>
    <td><button class="btn btn-sm btn-primary" @click="singleitem(item)">Details</button></td>
    <td><button type="button" class="text-center btn btn-sm btn-primary" v-on:click="removeRow(index)">Remove</button></td>
    </tr>

    </tbody>
    </table>
    
    `,


    methods: {

        singleitem(item) {
            
            this.$emit('sentdata',{item: item, id: item.id});
            console.log(item);
            
        },

        removeRow: function(index) {
           

          this.list.splice(index, 1);

      }

  }

});
