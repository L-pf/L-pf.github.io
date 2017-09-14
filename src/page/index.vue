<template>
  <div>
    <header-nav v-bind:class="{'isIndex':active}"></header-nav>
    <div class="swiper_box">
    	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="itemPic in itemPicList">
		        	<img v-bind:src="itemPic" />
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    
		    <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>
		</div>
    </div>
    
  </div>
</template>

<script>
	import HeaderNav from '../components/header.vue'
	import Swiper from '../../static/lib/swiper'

	export default {
	  data () {
	    return {
	      active:true,
	      itemPicList:[
	      'static/images/banner1.png',
	      'static/images/banner2.png',
	      'static/images/banner3.png'
	      ]
	    }
	  },
	  components:{
	  	HeaderNav
	  },
	  methods:{
	  	swiperinit(){
	  		var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true,
			    speed:300,
			    autoplay : 3000,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			})        
	  	}
	  },
	  mounted(){
	  	this.swiperinit();
	  }
	}
</script>
<style>
	@import '../common/css/swiper.css';
	.fixed{
		position: fixed;
		z-index: 9;
	}
	.swiper_box{
		margin-top: 50px;
	}
	.swiper-container{
		width: 100%;
		height: 500px;
	}
</style>
