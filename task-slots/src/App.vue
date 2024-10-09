<template>
  <div id="app">

    <navbar>
      <div slot="view">Home</div> 
      <div slot="message">abc</div>
    </navbar>
      <navbar>
        <div slot="view">header</div> 
      </navbar>
      </div>
    </template>

    <script>
      import navbar from './components/NavBar.vue'

      export default {
        name: 'App',
        components: {
          navbar
        }
      }
    </script>

    <style>
    @import'~bootstrap/dist/css/bootstrap.css';
  </style>
