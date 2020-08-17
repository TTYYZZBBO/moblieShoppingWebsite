<template>
	<div>
		<div class="title_search">
			<van-row type="flex" justify="space-between">
				<van-col class="logo" span="5">网易严选</van-col>
				<van-col class="search" span="16" @click="searchPageFn">
					<van-icon name="search" size='.5rem' color="#666"/>
					<span>搜索商品，共35861款好物</span>
				</van-col>
				<van-col class="loginBtn" span="3">登录</van-col>
			</van-row> 
		</div>
		<!-- tab导航栏 -->
		<van-tabs class="tabs" sticky>
			<van-tab  v-for="item in tabs" :title="item" ></van-tab>
		</van-tabs>
		<!-- 轮播图 -->
		<van-swipe class="my-swipe" :autoplay="2000" >
		   <van-swipe-item v-for="item in swipImage">
			   <img :src="item" alt="">
		   </van-swipe-item>
		</van-swipe>
		<!-- 中间三个标识 -->
		<div class="m-indexService">
			<ul class="g-grow">	
				<li class="item">
					<a href="">
						<i style="background-image: url('http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');"></i>
								
						<span>网易自营品牌</span>
					</a>
				</li>
				<li class="item">
					<a href="">
						<i style="background-image: url('http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');"></i>
						<span>30天无忧退货</span>
					</a>
				</li>
				<li class="item">
					<a href="">
						<i style="background-image: url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');"></i>
						<span>48小时快速退货</span>
					</a>
				</li>
			</ul>
		</div>
		<!-- 产品列表 -->
		<div class="productlist">
			<van-grid :column-num="5">
			  <van-grid-item  v-for="item in productList" :icon="item.image" :text="item.name" />
			</van-grid>
		</div>
		<!-- 倒计时购物 -->
		<div class="CountDownShopping">
			<div class="CountDownHeader">
				<p class="left">限时购</p>
				<van-count-down :time="time">
					<template v-slot="timeData">
					  <span class="block">{{ timeData.hours }}</span>
					  <span class="colon">:</span>
					  <span class="block">{{ timeData.minutes }}</span>
					  <span class="colon">:</span>
					  <span class="block">{{ timeData.seconds }}</span>
					  </template>
					</van-count-down>
			    <a class="right">更多></a>
			</div>
			<div class="CountDownBody">
				<van-grid :column-num="3">
				   <van-grid-item v-for="item in countdownProduct">
					   <img :src="item.image" alt="" />
					   <div class="price">
						   <span class="nowprice">￥{{item.nowprice}}</span>
						   <span class="oldprice">￥{{item.oldprice}}</span>
					   </div>		   
				   </van-grid-item>
				  <!-- <van-grid-item  v-for="item in countdownProduct" :icon="item.image" :text="item.nowprice" /> -->
				</van-grid>
			</div>
		</div>
		<!-- footer -->
		<footerCom></footerCom>
	</div>	
</template>

<script>
import '@/css/common.css'
import footerCom from './footerCom.vue'
import axios from 'axios'
export default{
	name:"indexPage",
	data(){
		return {
			time:30*60*60*100,
			tabs:[],
			swipImage:[],
			productList:[],
			countdownProduct:[]
			
		}
	},
	methods:{
		searchPageFn:function(){
			 // 路由两种写法：to标签，push（）函数，点击跳转
			 this.$router.push('/searchPage');
		} 
	},
	created() {
		axios.get('http://localhost:3344/getTabs').then(res=>{
			this.tabs=res.data;
		}),
		axios.get('http://localhost:3344/getSwipe').then(res=>{
			this.swipImage=res.data;
		}),
		axios.get('http://localhost:3344/getProductList').then(res=>{
			this.productList=res.data;
		}),
		axios.get('http://localhost:3344/getcountdownProduct').then(res=>{
			this.countdownProduct=res.data;
			console.log(res.data);
		})
	},
	components:{footerCom}
}
</script>

<style scoped>

.title_search{
	padding: 0.21333rem 0.4rem;	
	background-color: white;
}
.logo{
	width: 1.84rem;
	align-items: center;
	font-size: 0.4rem ;
	/* margin-top: 0.1rem; */
	display: flex;
	align-items: center;

}	
.title_search .search{
	background-color: #ededed;
	border-radius: .10667rem;
	height: .74667rem;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content:center ;
		
}
.title_search .search span{
	font-size: .37333rem;
	color: #666;

}
.loginBtn{
	width: 0.98667rem;
	height: 0.53333rem;
	line-height: 0.53333rem;
	text-align: center;
	border: 1px solid #DD1A21;
	border-radius: 0.10667rem;
	margin-left: 0.213333rem;
	font-size: 0.32rem;
	background: white;
	color: #DD1A21;
	margin-top: .1rem;
}
.tabs{
	font-size: .37rem;
	padding-top: .2rem;
	padding-bottom: .2rem;
	background-color: white;
}
.van-tab{
	padding:.2rem 0;
}
.my-swipe{
	height: 3.9rem;
	background-color: white;
}
.my-swipe img{
	width: 100%;
}
.my-swipe van-swipe-item{
	width: 100%;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-image: ;
 }
.m-indexService{
	width: 100%;
	height: .96rem;
	background-color: white;
}
.m-indexService .g-grow{
	display: flex;
	
	height: .96rem;
	padding:0 .4rem;
	justify-content: center;
	align-items: center;
}
.m-indexService .g-grow .item{
	
	flex:1;
	float: left;	
	font-size: .32rem;
	margin-left: .1rem;
	line-height: .4rem;
	vertical-align: middle;
}
.m-indexService .g-grow .item span{
	color: black;
}
.m-indexService .g-grow .item i{
	display: inline-block;
	width: .4rem;
	height: .4rem;
	font-size: .32rem;
	margin-right: .1rem;
	line-height: .4rem;
	background-size: 100% 100%;
	vertical-align: middle;
	margin-top: -.1rem;	
}
.colon {
    display: inline-block;
    margin: .13rem;
    color: black;
	font-size: .37rem;
  }
.block {
    display: inline-block;
    width: .48rem;
	height: .48rem;
	line-height: .48rem;
	border-radius: .053rem;
    color: white;
    font-size: .32rem;
    text-align: center;
    background-color: black;
  }
.CountDownShopping{
	background-color: white;
	margin-top: .5rem;
}
.CountDownShopping .CountDownHeader{
	height: 1.3rem;
	padding:0 .4rem;
}
.CountDownShopping .CountDownHeader .left{
	float: left;
	font-size: .4rem;
	line-height: 1.3rem;
	margin-right: .5rem;
	margin-top: 0;
	margin-bottom: 0;
	padding: 0;	
}
.CountDownShopping .CountDownHeader .right{
	float: right;
	font-size: .37rem;
	color: #333;
	line-height: 1.3rem;
}
.CountDownShopping .CountDownBody{
	background-color: #EDEDED;
	height: 4rem;
}
.CountDownBody .van-grid-item img{
	background-color: #f5f5f5;
	width: 2.88rem;
	height: 2.88rem;
	border-radius: .1rem;
	margin-bottom: .16rem;
	
}
.CountDownBody .van-grid-item .price{
	margin-top: 0;
	margin-bottom: 0;
	height: .8rem;
	line-height: .8rem;
}
.CountDownBody .van-grid-item .nowprice{

	font-size: .37rem;
	color: red;
	margin-right: .2rem;
}
.CountDownBody .van-grid-item .oldprice{
	font-size: .32rem;
	text-decoration: line-through;
}

</style>

