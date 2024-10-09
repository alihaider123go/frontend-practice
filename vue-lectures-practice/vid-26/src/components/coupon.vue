<template>
  <div>
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">

    <p>{{code | capitlize | ucase}}</p>
    
  </div>
</template>

<script>
  export default {

    name: 'HelloWorld',
    props: ['code'],
    

    methods: {

      updateCode(code) {
        if (code === 'hello') {
          alert('This is a Error');

        this.$refs.input.value = code = '';


    
          
        }

        this.$emit('input', code);




      }
    },
    filters:{
      capitlize(code) {
        return code.toUpperCase();
      }
    }
  }
</script>

<style>
 #app{
  text-align: center; 
  border: 3px solid green;

 }

</style>
