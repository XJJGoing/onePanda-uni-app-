/**
  * @Description: 通用文章列表组件,传入文章列表,使用到的地方--1、article 2、verifyArticle
  * @author 林永健
  *
  */
<template>
	<view class="articleList">
		  <view class="content">	
		  
		    <block v-for="(item,index) in articleList" :key="index">
		       <view class="article" :id="item.id"> 
			   
				   <view class="article-header" @click="toArticleContent(item.id)">
					   <view class="article-header-author">
						    <image :src="item.articleUser.qqAvatarUrl != ''?item.articleUser.qqAvatarUrl:item.articleUser.wxAvatarUrl"/>
						    <text>作者：{{item.author}}</text>
					   </view>
					   <view class="article-header-time">
						  <text>发表时间：{{item.createTime}}</text>
					   </view> 
				   </view>
				   
				   <view class="article-title" @click="toArticleContent(item.id)">
					   <text>{{item.title}}</text>
				   </view>
				   
				   <view class="article-layout">
					  <image :src="item.layout" mode="aspectFit" @click="showImage(item.layout)"/>
				   </view>
				   <view class="article-abstract" @click="toArticleContent(item.id)">
				   	   <text>摘要：{{item.articleAbstract}}</text>		  
				   </view> 
				   <view class="article-label" @click="toArticleContent(item.id)">
					  <uni-tag type="error" circle="true" size="small" :text="item.articleKind1"></uni-tag>
					  <uni-tag type="success" circle="true" size="small" :text="item.articleKind2"></uni-tag>
				   </view>
			   </view>
			 </block>	 
				 
		  </view> 
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	export default {
		data() {
			return {
				
			};
		},
		props:{
			articleList:{
				type:Array,
				require:true,
			}
		},
		components:{
			uniTag,
		},
		mounted() {
			
		},
		methods: {
			
			//跳转到文章内容界面
			toArticleContent(e){
				let articleId = e
				uni.navigateTo({
					url:`/pages/articleContent/articleContent?articleId=${articleId}`,
				})
			},
			
			//展示图片
			showImage(e){
				let imageList = [e]
				uni.previewImage({
					urls:imageList
				})	
			}
		   	
		}
	}
</script>
 
<style>
@import url("./css/articleList.css");
</style>
