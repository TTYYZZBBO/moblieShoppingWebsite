<template>
	<div class="search">
		<van-row type="flex" justify="space-between">
			<van-col  span="20">
				<van-field class="titlt_search" v-model="inputSear" 
				@input="inputFn" @keyup.enter="enterFn" placeholder="9.9包邮">
					<template v-slot:left-icon>
						<van-icon name="search" size='.5rem' color="#666"/>
					</template>
					<template #button >
						<van-icon v-show="isShow" @click="clearInputFn" name="close" size='.4rem' color="#666"/>
					</template>
				</van-field>
				</van-field>
			</van-col>
			<van-col class="clearBtn" span="3">取消</van-col>
		</van-row> 
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:"searchPage",
	data(){
		return {
			inputSear:"",
			inputVal:"",
			isShow:false
		}
	},
	watch:{
		// 监听input输入就显示右边清空按钮
		inputVal(){
			this.isShow=true;
		}
	},
	created(){
		
		
	},
	methods:{
		// watch监听input有没有值
		inputFn:function(v){
			this.inputVal=v
		},
		// 清空搜索框
		clearInputFn:function(){
			this.inputSear="",
			this.isShow=false;
		},
		// enter搜索事件响应
		enterFn:function(){
			axios.get('http://localhost:3344/search',{
				params:{
					// 将输入框输入的搜索值传入这个地址
					searchInput:this.inputSear
				}
			}).then(
				res=>{
					console.log(res.data);
				}
			)
		}
	}
}
</script>

<style scoped>
.search{
	padding: 0.2rem 0.4rem;	
}
.titlt_search{
	height: .74667rem;
	align-items: center;
	border-radius: 4px;
	font-size: .373333rem;
	background-color: #f4f4f4;
	padding-left: .7rem;
}

.clearBtn{
	width: 0.98667rem;
	height: 0.53333rem;
	line-height: 0.53333rem;
	text-align: center;
	
	border-radius: 0.10667rem;
	margin-left: 0.213333rem;
	font-size: .373333rem;
	background: white;
	color: black;
	margin-top: .1rem;
}


</style>
