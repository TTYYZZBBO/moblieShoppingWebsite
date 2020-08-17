import Vue from 'vue'
import VueRouter from 'vue-router'
import searchPage from '@/components/searchPage.vue'
import indexPage from '@/components/indexPage.vue'
import cartlist from '@/components/cartlist.vue'

Vue.use(VueRouter);
const routes=[
	{path:'',component:indexPage},
	{path:'/searchPage',component:searchPage},
	{path:'/cartlist',component:cartlist},
]
const router =new VueRouter({
	 mode:"history",
	 routes
})
export default router
