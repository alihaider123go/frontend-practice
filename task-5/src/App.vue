<template>
  <div id="app">
   <tabs>
    <tab name="About us"  :selected="true">
      <h1>Here Is the Content for the about our culture tab about us.</h1>
    </tab>
    <tab name="About Culture">
      <h1>Here Is the Content for the about our culture tab culture.</h1>
    </tab>
    <tab name="About Visitor">
      <h1>Here Is the Content for the about our culture tab vsitor.</h1>
    </tab>
  </tabs>
</div>
</template>

<script>
  import tabs from './components/tabs.vue'
  import tab from './components/tab.vue'

  export default {
    name: 'App',
    components: {
      tabs, tab
    }
  }
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
</style>
