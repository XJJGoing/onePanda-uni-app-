<template>
	<view class="writeArticle">
		<view class="content">
			<view class="header">
				<van-cell-group>
					
					<!--此字符隔空用-->
					<van-field
						label=""
						disabled="true"
					 />
					  
					<van-field
					  :value="title"
					  label="标题:"
					  @change="inputTitle"
					  placeholder="文章的标题"
					/>
					
					<van-field
					  :value="author"
					  @change="inputAuthor"
					  label="作者:"
					  placeholder="用来展示的笔名"
					/>
				   <van-field
					:value="articleAbstract"
					@change="inputArticleAbstract"
					label="摘要:"
					type="textarea"
					placeholder="文章的摘要"
					autosize
				   />
				</van-cell-group> 
				
				  <view class="header-article-kind">
					   <van-divider />
						<picker @change="bindPickerChange1" :value="index1" :range="kinds">
							<view class="uni-input">文章类型一 : {{kinds[index1]}}</view>
						</picker>
						<van-divider />
						<picker @change="bindPickerChange2" :value="index2" :range="kinds">
							<view class="uni-input">文章类型二 : {{kinds[index2]}}</view>
						</picker>
				   </view>
				   
				  <van-divider content-position="center">文章配图</van-divider>  
				  <view class="header-layout">
					  <van-uploader
					    :file-list="fileList"
					    max-count="1"
					    @after-read="afterRead()"
						@delete="deleteLayout()"
						upload-text="选择一张配图"
						accept="image"
					  />
				  </view>  
				  <van-divider content-position="center">文章体（未发表前保存退出下次进入会保存之前状态）</van-divider> 
		  </view>
			
			<view class="main">
				
				<myeditor class="editor" 
					@cancel="submitArticle" 
					@save="saveEditor"  
					:html="articleContent"
					:muiltImage="true"
					:imageUploader="imageUploader"
				>
				</myeditor>
			</view>	
			
		</view>
	</view>
</template>
  
<script>
	var _this
	import {articleInsert,insertArticleContentImg} from '@/static/js/API.js'
	import myeditor from "@/components/robin-editor/editor.vue"
	export default {
		data() {
			return {
				user:'',  //作者的
				author:'',  //文章的作者
				title:'',  //文章的标题
				articleAbstract:'' ,//文章的摘要
				articleKind1:'渣男',
				articleKind2:'渣女',
				articleContent:'',  //html文本
				
			    kinds:['渣男','渣女','吐槽','表白','美文','分享','日常','科技','编程','运动','倾述','恋爱'],
				index1:0,
				index2:1,
				fileList:[],   //只上传单张目前
			}
		},
		components:{ 
			myeditor
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			
			//获取用户的信息和上次编辑保存的文章
			getUser(){
				_this = this
			  uni.getStorage({
			  	key:'user',
				success(res) {
					_this.user = res.data
					uni.getStorage({
						key:'saveArticle',
						success(res){
							_this.articleContent = res.data.articleContent
							_this.author = res.data.author
							_this.title = res.data.title
							_this.articleAbstract = res.data.articleAbstract
							_this.articleKind1 = res.data.articleKind1
							_this.articleKind2 = res.data.articleKind2
							_this.index1 = res.data.index1
							_this.index2 = res.data.index2
						},
						fail() {
							
						}
					})
				},
				fail() {
					uni.reLaunch({
						url:'/pages/login/login'
					})
				}
			  })	
			},
			
			//改变文章的类型
			bindPickerChange1(e){
			  let index1 = e.detail.value
			  this.index1 = index1
			  this.articleKind1 = this.kinds[parseInt(index1)] 
			},
			 
			bindPickerChange2(e){
			   let index2 = e.detail.value
			   this.index2 = index2
			   this.articleKind2 = this.kinds[parseInt(index2)] 
			},
			
			
			//输入文章的标题
			inputTitle(e){
				this.title = e.detail
			},
			
			//输入作者的名字
			inputAuthor(e){
				this.author = e.detail
			},
			
			//输入摘要
			inputArticleAbstract(e){
			   this.articleAbstract = e.detail
			},
			
			
			//选择配图
			afterRead(event){
				let file = {}
				file.url = event.detail.file.path
				file.name = '配图'
				this.fileList.push(file)
			},
			
			//删除上传的配图
			deleteLayout(){
				this.fileList = []
			},
			
		  
			
			/*文本编译区*/
			
			//这个cancel用处不大，所以这里用作了发表文章用的函数
			submitArticle(e){
				_this = this
				if(_this.author && _this.title && _this.articleAbstract 
				   &&_this.articleKind1 && _this.articleKind2 
				   && _this.fileList.length !=0 && _this.articleContent)
				{
				   
				   const uploadTask = uni.uploadFile({
					   url:articleInsert,
					   filePath:_this.fileList[0].url,
					   name:'layouts',
					   header:{
						   "Content-Type":"multipart/form-data",
						   "Referer":''
					   },
					   formData:{
						   userId:_this.user.id,
						   author:_this.author,
						   title:_this.title,
						   articleAbstract:_this.articleAbstract,
						   articleKind1:_this.articleKind1,
						   articleKind2:_this.articleKind2,
						   articleContent:_this.articleContent
					   },
					   success:(res)=>{
						   if(res.statusCode == 200){
                               uni.removeStorage({
                               	  key:'saveArticle'
                               })
						   }
					   },
					   fail:(Error)=>{
						   console.log("网络错误",Error)
						   uni.showToast({
								title:'网络错误，发表失败',
								icon:'loading',
								duration:1000 
						   })
					   }
				   })
				   
				 uploadTask.onProgressUpdate((res)=>{
					 let progress = res.progress
					 uni.showLoading({
					 	title:`发表进度:${progress}`
					 })
					 if(progress == 100){
						 uni.hideLoading()
						 uni.showToast({
						 	title:'发表成功,等待审核人员审核',
							icon:'success',
							duration:2000,
							success() {
								_this.author = ''
								_this.title = ''
								_this.articleAbstract = ''
								_this.articleKind1 = ''
								_this.articleKind2 = ''
								_this.articleContent = ''
								_this.fileList = []
								_this.articleContent = ''
								
							}
						 })
					 }
				 })
				 
				}else{
					uni.showToast({
						title:'亲！记得先点击保存再发表哦！还有信息不能为空',
						duration:2000,
						icon:'none'
					})
				}
			},
			
			//保存文本,并且存放到storage中,下次进行来时候就读取
			saveEditor(e){
				let html = e.html
				console.log("文本编译器",html)
			    this.articleContent = html  
				uni.showToast({
					title:'保存成功',
					icon:'none',
					duration:500,
					success() {
						uni.setStorage({
							key:'saveArticle',
							data:{
								articleContent:_this.articleContent,
							    author:_this.author,
								title:_this.title,
								articleAbstract:_this.articleAbstract,
								articleKind1:_this.articleKind1,
								articleKind2:_this.articleKind2,
								index1:_this.index1,
								index2:_this.index2,
								fileList:_this.fileList
							}
						})
					}
				})
			},
			
			//将图片放入存储桶后返回地址
			imageUploader(img,callback){
			   uni.showLoading({
			   	 title:'录入中'
			   })
			   .then(()=>{
				  const uploadTast = uni.uploadFile({
					  url:insertArticleContentImg,
					  filePath:img,
					  name:'file',
					  header:{
						  "Content-Type":"mutipart/form-data",
						  "Referer":''
					  },
					  success:(res) => {
						  console.log("返回的地址",res)
						  uni.hideLoading()
						  if(res.statusCode == 200){
							 let resData = JSON.parse(res.data)
							 callback(resData.data)  
						  }
					  },
					  fail: (Error) => {
					  	uni.showToast({
					  		title:'网络错误,选择图片失败',
							icon:'loading',
							duration:1000
					  	})
					  }
				   })
			   })
			}
		}
	}
</script>

<style>
@import url("./css/main.css");
</style>
