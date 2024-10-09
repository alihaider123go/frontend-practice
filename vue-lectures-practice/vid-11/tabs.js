Vue.component('tabs',{
    template: `
    <div>
        <div class="tabs">
            <ul>
             <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"><a href="#" @click="selectTab(tab)">{{tab.name}}</a></li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>

    `,

    data() {

        return { tabs: [] };
    },

    created(){
        this.tabs = this.$children;
    },

    methods:{
        selectTab(selectedTab) {

            this.tabs.forEach(tab => {

                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});



// tab in tabs


Vue.component('tab', {
      props: {

        name: {reguired: true},
        seleted: {default: false}

    },
    
    template: `
    <div v-show="isActive"><slot></slot></div>
    `,

  

    data() {
        return{
            isActive: false      
        };
        
    },
    mounte(){
        this.isActive = this.selected;
    }


});


new Vue({
    el: '#root'
});
