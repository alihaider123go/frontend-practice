<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success mt-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <slot name="view"></slot></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <span class="navbar-text">
       <slot name="message">Default</slot>
      </span>
    </div>
  </div>
</nav>
</template>

<script>
  export default {

  }
</script>


<style>

</style>
