<template>
  <div>
    <header-nav v-bind:class="{'isShare':active}"></header-nav>
    <div>
    	尽请期待...
    </div>
  </div>
</template>

<script>
	import HeaderNav from '../../components/header.vue'

	export default {
	  data () {
	    return {
	      active:true
	    }
	  },
	  components:{
	  	HeaderNav
	  },
	  methods:{
	  }
	}
</script>
<style>
</style>
