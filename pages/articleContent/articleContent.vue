<template>
	<scroll-view class="article-content">
		<view class="content">
			<view class="header">
				<view class="header-title">
					<text>{{article.title}}</text>
				</view>
				<view class="header-info">
					<text style="margin-left: 20upx;">作者:{{article.author}}</text>
					<text style="margin-right: 20upx;">发表时间：{{article.createTime}}</text>
				</view>
			</view>
			
			<!-- 审核通过就展示评论列表 -->
				<view class="main">
					<view class="main-article">
						 <u-parse :content="article.articleContent" @preview="preview" @navigate="navigate"/>
					</view>
					
			    <block  v-if="article.isCheck == 1">		
					<view class="main-comment">
						<view class="main-comment-addComment">
							<textarea 
									  auto-height
									  placeholder="评论内容"
									  :value="commentMessage"
									  @input="inputCommentMessage"
							>
								
							</textarea>
							<button class="addComment-btn" plain="true" @click="addComment()">
								<text>评论</text>
							</button>
						</view>
						
						<view class="main-comment-list">
							<view v-for="(comment,index1) in article.comments" class="comment-list-view" :key="index1">
								
							  <view class="comment-info">
								  <img :src="comment.commentUser.qqAvatarUrl != null? comment.commentUser.qqAvatarUrl:comment.commentUser.wxAvatarUrl"/>
								  <text>{{comment.commentUser.qqNickName != null? comment.commentUser.qqNickName:comment.commentUser.wxNickName}}</text>
								  <text selectable="true">：{{comment.commentContent}}</text>
							  </view>
							  
							  <!-- 回复列表代开发 -->
	<!-- 						  <view v-for="(answer,index2) in comment.answerList" :key="index2" class="answer-list-view">
								 <view class="answer-info"> 
									  <img :src="answer.answerUser.qqAvatarUrl != null? answer.answerUser.qqAvatarUrl:answer.answerUser.wxAvatarUrl"/>
									  <text>{{answer.answerUser.qqNickName != null? answer.answerUser.qqNickName:answer.answerUser.wxNickName}}</text>
									  <text>回复@{{comment.commentUser.qqNickName != null? comment.commentUser.qqNickName:comment.commentUser.wxNickName}}</text>
									  <text selectable="true">：{{answer.answerContent}}</text>
								 </view> 
							  </view> -->
							  
							</view>
							
						</view>
					</view>
				   </block>
				   
				   <!-- 未审核的文章显示审核按钮 -->
				   <block v-if="article.isCheck == 0">
						<view class="main-verify">
							<van-button type="danger" round  @click="noPassArticle()">不通过</van-button>
							<van-button type="primary" round @click="passArticle()">通过</van-button>
						</view>
				   </block>	   
				</view>
			 
			<view class="footer">
			   
			</view>
		</view>
	</scroll-view>
</template>

<script>
	var _this
	import {queryArticleById,commentInsert,updateArticleBatch} from '@/static/js/API.js'
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		data() {
			return {
				user:{},
				article:{},
				commentMessage:'',    //评论的内容
				articleId:''         //文章的id
			}
		},
		components:{
			uParse
		},
		onLoad(e) {
		    let articleId = e.articleId
			this.getUser()
			this.getArticleContent(articleId)
			this.articleId = articleId
		},
		methods: { 
			
			//获取用户的信息
			getUser(){
				_this = this
				uni.getStorage({
					key:'user',
					success(res) {
						_this.user = res.data
					},
					fail() {
						uni.reLaunch({
							url:'/pages/login/login'
						})
					}
				})
			},
			
			//获取单个文章的内容
			getArticleContent(articleId){
				_this = this
				uni.showLoading({
					title:'获取中',
				})
				.then(()=>{
					let url = `${queryArticleById}?id=${articleId}`
					return uni.request({
						url:url, 
						method:'GET' 
					}) 
				}) 
				.then(res=>{  
					uni.hideLoading()
					console.log("查询到的单个文章信息",res)
					if(res[1].statusCode == 200){
						_this.article = res[1].data.data
						_this.addScanTime()  
					}
				})
				.catch(Error=>{
					console.log("获取单个文章失败",Error)
					uni.showToast({
						title:'获取内容失败',
						icon:'loading',
						duration:1000
					})
				})
			},
			
			preview(src, e) {
				console.log('选中的图片',src)
			  // do something
			},
			navigate(href, e) {
			  // do something
			},
			
			
			//输入评论 
			inputCommentMessage(event){ 
			   this.commentMessage = event.detail.value
			},
			 
			//添加评论
			addComment(){
				_this = this
				if(_this.commentMessage.length >0){
				  uni.showLoading({
					 title:'添加中',
				  })	
				  .then(()=>{
					  uni.request({
					  	 url:commentInsert,
						 method:'POST',
						 data:{ 
							 commentContent:_this.commentMessage,
							 articleId:_this.article.id,
							 userId:_this.user.id
						 }
					  })
				  })
				  .then((res)=>{ 
					  uni.hideLoading()
					  _this.getArticleContent(_this.articleId)
					  _this.commentMessage = ''
				  })
				  .catch(Error =>{
					  console.log("评论失败",Error)
					  uni.showToast({
					  	 title:'网络错误,评论失败',
						 duration:1000,
					     icon:'loading'
					  })
				  })
				}else{
					uni.showToast({
						title:'不能填写空评论哦！',
						duration:1000,
						icon:'none'
					})
				}
			},
			
			
			//增加浏览次数
			addScanTime(){
				_this = this
				uni.request({
					 url:updateArticleBatch,
					 method:'POST',
					 data:[{
						  userId:_this.article.userId,
						  id:_this.article.id,
						  scanTimes:(_this.article.scanTimes + 1)
					 }],
					 header:{
						 'Content-Type':'application/json'
					 }
				})
				.then(res=>{
					if(res[1].data.statusCode == 200){
						 
					}
				})
				.catch(Error=>{
					console.log("增加浏览次数失败",Error)
				})
			},
			
			//不通过文章
			noPassArticle(){
				_this = this
			    uni.showModal({
			    	title:'提示',
					content:'不通过此文章将会删除掉该文章,请慎重',
				    confirmText:'确定',
					confirmColor:'#39B54A',
					showCancel:true,
					cancelText:'再看一下',
					cancelColor:'#DD514C',
					success(res) {
                        if(res.confirm){
							uni.showLoading({
								title:'提交中',
								success() {
									uni.request({
										url:updateArticleBatch,
										method:'POST',
										data:[{
											userId:_this.article.userId,
											id:_this.article.id,
											isCheck:2
										}]
									})
									.then(res=>{
										console.log("审核不通过提交的信息",res)
										uni.hideLoading()
										uni.showToast({
											title:'提交成功',
											duration:500,
											icon:'success',
											success() {
												uni.navigateBack({
													delta:-1
												})
											}
										})
									})
									.catch(Error=>{
										console.log(Error)
										uni.showToast({
											title:'网络错误稍后重试',
											duration:1000,
											icon:'loading'
										})
									})
								}
							})
						}
					}
			    })
			},
			
			//通过文章
			passArticle(){
				_this = this
				uni.showModal({
					title:'提示',
					content:'通过之后文章将发布到校墙，所有人将会看到此文章，请慎重',
				    confirmText:'确定',
					confirmColor:'#39B54A',
					showCancel:true,
					cancelText:'再看一下',
					cancelColor:'#DD514C',
					success(res) {
				        if(res.confirm){
							uni.showLoading({
								title:'提交中',
								success() {
									uni.request({
										url:updateArticleBatch,
										method:'POST',
										data:[{
											userId:_this.article.userId,
											id:_this.article.id,
											isCheck:1
										}]
									})
									.then(res=>{
										console.log("审核通过后返回的信息",res)
										uni.hideLoading()
										uni.showToast({
											title:'提交成功',
											duration:500,
											icon:'success',
											success() {
												uni.navigateBack({
													delta:-1
												})
											}
										})
									})
									.catch(Error=>{
										console.log(Error)
										uni.showToast({
											title:'网络错误稍后重试',
											duration:1000,
											icon:'loading'
										})
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
@import url("../../components/u-parse/u-parse.css");
@import url("./css/main.css");
</style>
