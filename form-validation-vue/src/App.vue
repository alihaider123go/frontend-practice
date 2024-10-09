<template>
<div class="container"  id="app">
    <formvalidationcomputed></formvalidationcomputed>
    <formvalidationmethod></formvalidationmethod>
  </div>
</template>

<script>
  import formvalidationcomputed from './components/form_validation_computed.vue';
  import formvalidationmethod from './components/form_validation_method.vue';

export default {
  name: 'App',
  components: {
      formvalidationcomputed,formvalidationmethod
    },
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';

</style>
