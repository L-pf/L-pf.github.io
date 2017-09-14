import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import MineInfo from '../page/share/mineInfo.vue'
import DateInfo from '../page/share/dateInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
      	title:"L-pf"
      },
      beforeEnter(to,from,next){
      	console.log(to)
      	if(to.meta.title){
      		document.title = to.meta.title
      	}else{
      		document.title = "李鹏飞-个人"
      	}
      	next();
      }
    },
    {
    	path: '/share/mineInfo',
      name: 'MineInfo',
      component: MineInfo,
      meta:{
      	title:"L-pf信息"
      },
      beforeEnter(to,from,next){
      	if(to.meta.title){
      		document.title = to.meta.title
      	}else{
      		document.title = "L-pf"
      	}
      	next();
      }
    },
    {
    	path: '/share/dateInfo',
      name: 'DateInfo',
      component: DateInfo,
      meta:{
      	title:"L-pf笔记"
      },
      beforeEnter(to,from,next){
      	if(to.meta.title){
      		document.title = to.meta.title
      	}else{
      		document.title = "L-pf"
      	}
      	next();
      }
    }
  ]
})
