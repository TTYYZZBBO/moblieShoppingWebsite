<template>
	<div class="footer">
		<van-tabbar route v-model="active" active-color="red" @change="changPage">
		  <van-tabbar-item to="/">
		    <span>首页</span>
		    <template #icon="props">
		      <div :class="props.active ? icon.active1 : icon.inactive1"></div>
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item to="/cartlist">
		    <span>分类</span>
		    <template #icon="props">
		      <div :class="props.active ? icon.active2 : icon.inactive2"></div>
		    </template>
		  </van-tabbar-item to="/">
		  <van-tabbar-item>
		    <span>值得买</span>
		    <template #icon="props">
		      <div :class="props.active ? icon.active3 : icon.inactive3"></div>
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item to="/">
		    <span>购物车</span>
		    <template #icon="props">
		      <div :class="props.active ? icon.active4 : icon.inactive4"></div>
		    </template>
		  </van-tabbar-item to="/">
		  <van-tabbar-item>
		    <span>个人</span>
		    <template #icon="props">
		      <div :class="props.active ? icon.active5 : icon.inactive5"></div>
		    </template>
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import '@/css/common.css'
export default{
	name:"footerCom",
	data(){
		return {
			active:0,
			icon:{
				active1:"footerIcon footer_icon_1 ",
				inactive1:"footerIcon footer_icon_1_active",
				active2:"footerIcon footer_icon_2_active ",
				inactive2:"footerIcon footer_icon_2",
				active3:"footerIcon footer_icon_3_active ",
				inactive3:"footerIcon footer_icon_3",
				active4:"footerIcon footer_icon_4_active ",
				inactive4:"footerIcon footer_icon_4",
				active5:"footerIcon footer_icon_5_active ",
				inactive5:"footerIcon footer_icon_5"
			}
		}
	},
	mounted(){
		let index=localStorage.getItem("index");
		this.active=Number(index);	
	},
	methods:{
		changPage:function(index){
			//解决tabbar点击跳转不会变红色的问题，原因是每次点击页面刷新不会保存active的状态
			// 这里就是保存active状态
			localStorage.setItem("index",index);
		}
	}
}
</script>

<style scoped>
/* footer */
.footerIcon{
	width: .53rem;
	height: .53rem;
	margin: 0 auto;
	background-image: url('../assets/images/footer.png');
	background-size: 2.2rem 1.6rem;
	background-repeat: no-repeat;
}
.footer_icon_1{
	background-position: -1.12rem 0;
}
.footer_icon_1_active{
	background-position: -1.12rem -.56rem;
}
.footer_icon_2{
	background-position:-.56rem -.56rem;
}
.footer_icon_2_active{
	background-position:0 -.56rem;
}
.footer_icon_3{
	background-position:-.56rem -1.12rem ;
}
.footer_icon_3_active{
	background-position:0 -1.07rem;
}
.footer_icon_4{
	background-position:-.56rem 0rem ;
}
.footer_icon_4_active{
	background-position:0rem 0 ;
}
.footer_icon_5{
	background-position: -1.68rem 0;
}
.footer_icon_5_active{
	background-position: -1.68rem 0;
}
</style>
