<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" class="">
		<model msg="Welcome to Your Vue.js App"/>
		<task></task>
		<task1></task1>

	</div>
</template>

<script>
	import model from './components/model.vue'
	import task from './components/task.vue'
	import task1 from './components/task1.vue'


	export default {
		name: 'App',
		components: {
			model, task, task1
		}
	};
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
#app{
	margin-left: auto;
}
</style>
