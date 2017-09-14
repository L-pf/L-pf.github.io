<template>
	<div class="share">
		<ul>
			<li v-for="items in shareList">
				<router-link v-bind:to="items.linkUrl">{{items.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"share",
		data(){
			return {
				shareList:[{
					name:"人物",
					linkUrl:"/share/mineInfo"
				},{
					name:"随笔",
					linkUrl:"/share/dateInfo"
				}]
			}
		}
	}
</script>

<style scoped>
	ul{
		border: 1px solid #ddd;
		background: #fff;
	}
	ul li{
		width:100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-bottom: 1px solid #ddd;
	}
	ul li a:hover{
		background: #42B983;
		color: #fff;
	}
	ul li a{
		display: block;
		color: #333;
	}
</style>