<template>
	<scroll-view class="verifyArticle">
		<view class="content">
			
			<view class="header">
				<van-divider contentPosition="center">未审核的文章</van-divider>
			</view>
			
		    <!-- 展示文章的主体使用自定义的articleList组件 -->
			<view class="main">
				<componentArticleList v-bind:articleList="articleList">
					
				</componentArticleList>
			</view>
			<view class="footer"></view>
		</view>
	</scroll-view>
</template>

<script>
	var _this
	import {componentArticleList} from '@/pages/article/articleList.vue'
	import {queryUnCheckArticle} from '@/static/js/API.js'
	export default {
		data() {
			return {
				articleList:[],   //所有未审核的文章  
			}
		},
		onShow() {
			this.getArticle()
		},
		components:{
			componentArticleList,
		},
		methods: {
			
			//获取文章
			getArticle(){
				_this = this
				uni.showLoading({
					title:'获取中',
					success() {
						uni.request({
							url:queryUnCheckArticle,
							method:'GET'
						})
						.then(res=>{
							uni.hideLoading()
							console.log("查询到的未审核的文章",res)
							if(res[1].statusCode == 200){
								_this.articleList = res[1].data.data
							}
						})
						.catch(Error =>{
							uni.showToast({
								title:'网络错误',
								duration:1000,
								icon:'loading'
							})
						})
					}
				})
			},
			
		}
	}
</script>

<style>
@import url("./css/main.css");
</style>
