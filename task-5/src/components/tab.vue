<template>
	<div v-show="isActive"><slot></slot></div>
</template>


<script>
	export default {
		props: {

			name: {reguired: true},
			seleted: {default: false}

		},
		data() {
			return{
				isActive: false      
			};
			
		},
		mounte(){
			this.isActive = this.selected;
		}
		
	}
</script>
