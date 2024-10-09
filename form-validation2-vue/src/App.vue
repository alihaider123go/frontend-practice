<template>
  <div id="app">
    <FormValid msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FormValid from './components/validation.vue'

 export default {
 name: 'App',
  components: {
    FormValid
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
#app {

}
</style>
