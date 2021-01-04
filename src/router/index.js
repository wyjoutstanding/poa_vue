import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
//import page1 from '@/components/pages/page1.vue'
 import page3 from '@/components/pages/page3.vue'
 import page4 from '@/components/pages/page4.vue'
//import index from '../views/center.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: () => import('../views/index.vue')
//   component: () => import('../views/index.vue')
},{
	path:'/login',
	name:'login',
	component:Login
},
{
	path:'/page1',
	name:'page1',
	component:()=>import('../components/pages/page1.vue')
},
{
	path:'/page3',
	name:'page3',
	component:page3
 },
{
	path:'/page4',
	name:'page4',
	component:page4
}
]
const router = new VueRouter({
  mode: "history",
  routes
});
 export default router
/*change here!*/
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index 
//     },
	
// 	{
// 		path:'/index',
// 		name:'index',
// 		component:index
// 	},
// 	{
// 		path:'/login',
// 		name:'login',
// 		component:Login
// 	}
//   ]
// })
