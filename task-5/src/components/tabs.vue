<template>
  <div>
   <div>
    <div class="tabs">
      <ul>
       <li v-bind:key="tab" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"><a href="#" @click="selectTab(tab)">{{tab.name}}</a></li>
     </ul>
   </div>

   <div class="tabs-details">
    <slot></slot>
  </div>
</div>
</div>
</template>

<script>
  export default {
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
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
