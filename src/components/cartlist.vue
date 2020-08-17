<template>
	<div class="cartlist">
		<div class="title_search">
			<van-row type="flex" justify="space-between">	
				<van-col class="search" span="16" @click="searchPageFn">
					<van-icon name="search" size='.5rem' color="#666"/>
					<span>搜索商品，共35861款好物</span>
				</van-col>
			</van-row> 
		</div>
		<div class="cartlistBody">
			<div>
				<van-sidebar v-model="activeKey" >
				  <van-sidebar-item v-for="(item,index) in listName" :key="index" :title="item.name" />
				</van-sidebar>
			</div>
			<div class="productlist">
				
			</div>
		</div>
		<footerCom></footerCom>
		
	</div>
	
	
</template>

<script>
import '@/css/common.css'
import footerCom from './footerCom.vue'
export default{
	name:"cartlist",
	data(){
		return {
			activeKey:0,
			listName:[
				{name:"推荐专区"},
				{name:"新品专区"},
				{name:"居家生活"},
				{name:"服饰鞋包"},
				{name:"美食酒水"},
				{name:"个护清洁"},
				{name:"母婴亲子"},
				{name:"运动旅行"},
				{name:"数码家电"},
				{name:"严选全球"}
			]
		}
	},
	components:{footerCom},
	methods:{
		searchPageFn:function(){
			 // 路由两种写法：to标签，push（）函数，点击跳转
			 this.$router.push('/searchPage');
		} 
	}
}
</script>


<style scoped>

.cartlist .title_search{
	padding: 0.21333rem 0.4rem;	
	background-color: white;
}
.cartlist .title_search .search{
	background-color: #ededed;
	border-radius: .10667rem;
	width: 100%;
	height: .74667rem;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content:center ;
		
}
.cartlist .title_search .search span{
	font-size: .37333rem;
	color: #666;

}
.cartlist .van-sidebar{
	width: 2.16rem;
	background-color: #fff;
	font-size: .37rem;
	
}
.cartlist .van-sidebar-item--select::before{
	height: .6rem;
}
.cartlistBody{
	display: flex;
	
	
}
.cartlistBody .productlist{
	padding:.53rem .3rem;
	flex:1;
}
</style>
