<template>
  <scroll-view class="article" >
		  <view class="content">
			 
			  <view class="header">
				  <van-divider contentPosition="center">文章(吐槽、倾泻、撒娇、卖萌、表白、科技、美文等)</van-divider>
			  </view>
			  
				  <view class="main">
					 <componentArticleList v-bind:articleList="articleList">
						 
					 </componentArticleList>
					 <view class="main-float-icon" @click="toWrite()">
						 <van-icon name="plus" />
						 <text>
							 发表
						 </text>
					 </view>
				  </view>
			    
			  <view class="footer"></view>
		  </view>	
  </scroll-view>			 	
</template> 
 
<script>
	var _this
	import {queryArticleByCheckStatus} from '@/static/js/API.js'
	import {componentArticleList} from './articleList.vue'
	export default {
		data() {
			return {
				articleList:[], //文章列表
				pageNum:1,      //页数,默认只为1,去增加pageNum
				pageSize:3,    //默认每页显示的个数
				
				screenHeight:'',      //屏幕的高度
				isLoading: false,     //防止频繁触发
				bottomDistinct:100    //距离底部多少像素时触发
				
			}
		}, 
		onLoad(){
			this.screenHeight = uni.getSystemInfoSync().screenHeight;
			this.getArticle()
		},
		components:{
			componentArticleList,
		},
		methods: {
			
			
			
			//获取已经审核的文章
			getArticle(){
				_this = this
					uni.showLoading({
						title:'获取中',
					})
					.then(()=>{
					let pageNum = _this.pageNum
					let pageSize = _this.pageSize
					let isCheck = 1
				    let url = `${queryArticleByCheckStatus}?isCheck=${isCheck}&pageNum=${pageNum}&pageSize=${pageSize}`
					return uni.request({
						url:url,
						method:'GET'
					})
				}) 
				.then(res =>{
					console.log("获取到的文章数",res[1].data.data)
					uni.hideLoading()
					_this.isLoading = false    
					
					//当pageNum等于页数的时候表示已经到底了
					if(res[1].statusCode == 200 && res[1].data.data.pages >= _this.pageNum){
						// console.log("进来")
						let newArticleList = _this.articleList.concat(res[1].data.data.list)
						_this.articleList = newArticleList
						console.log(_this.articleList)
					}else{
					   uni.showToast({
					   	title:'我是有底线的',
						icon:'none',
						duration:500
					   })
					}
					
				})
				.catch(Error =>{
					console.log("获取文章列表错误",Error)
					uni.showToast({
						title:'获取文章失败',
						icon:'loading',
						duration:1000
					})
				})
			},
			
			
			//页面滚动
			onPageScroll(e) {
				_this = this
				let screenHeight = _this.screenHeight
				const {
					scrollTop         //滚动条距离页面顶部的像素
				} = e;
				
				
				//防止重复触发
				if(_this.isLoading){
					return;
				}
				
				const query = uni.createSelectorQuery().in(_this);
				query.select('.main').boundingClientRect(data => {
					let {
						height         //main节点的高度
					} = data; 
					
					//如果设置的事件触发距离 大于等于 (节点的高度-屏幕高度-滚动条到顶部的距离)
					if(_this.bottomDistinct >= height-_this.screenHeight-scrollTop){
						
						//阻止时间重复触发
						_this.isLoading=true;
						
						//模拟异步加载数据
						_this.pageNum = _this.pageNum + 1
						_this.getArticle()
					}
				}).exec();
			},
			
			//跳转到富文本编译器
			toWrite(){
				uni.navigateTo({
					url:'/pages/writeArticle/writeArticle'
				})
			}
			
			
		}
	}
</script>

<style>
@import url("./css/article.css");
</style>
