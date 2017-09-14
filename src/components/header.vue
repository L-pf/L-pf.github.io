<template>
	<div class="header fixed">
		<ul>
			<li>
				<router-link to="/">L-pf</router-link>
			</li>
			<li v-on:click="shareList">
				<span>信息</span>
				<Sharelist v-bind:class="{'isShow':isNow}"></Sharelist>
			</li>
			<li>
				<a class="gitLink" href="https://github.com/L-pf/L-pf.github.io" target="_blank">GitHub</a>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import Sharelist from '../page/share/sharelist.vue'
	export default{
		components:{
			Sharelist
		},
		data(){
			return {
				isNow:true
			}
		},
		methods:{
			shareList(){
				this.isNow= false;
			}
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		min-width: 1080px;
		height: 50px;
		line-height: 50px;
		color: #fff;
		background: #2C3E50;
		top: 0;
	}
	.header ul{
		/*width: 900px;*/
		height: 100%;
		margin: 0 auto;
	}
	.header li{
		float:left;
		width: 100px;
		height: 50px;
		text-align: center;
		box-sizing: border-box;
		cursor: pointer;
	}
	.header li:hover{
		border-bottom: 3px solid #42B983;
	}
	.header a{
		color: #fff;
	}
	.isShow{
		display: none;
	}
	.isIndex ul li:first-child{
		border-bottom: 3px solid #42B983;
	}
	.isShare ul li:nth-child(2){
		border-bottom: 3px solid #42B983;
	}
	.isGit ul li:last-child{
		border-bottom: 3px solid #42B983;
	}
</style>