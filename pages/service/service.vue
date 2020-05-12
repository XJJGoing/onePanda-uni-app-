<template>
	<scroll-view class="service">
	  <view class="content">
		 <view>
			 <van-notice-bar
			   left-icon="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/laba.png"
			   text="OnePanda重构上线支持微信小程序和QQ小程多端同时使用,希望学弟学妹学长学姐们及时反馈重大Bug问题,以及积极的投稿分享校园娱乐,有商业合作的欢迎骚扰(QQ:1499755237)"
			   speed="40"
			 />
		 </view> 
		 <!-- 顶部栏存放校园功能 -->
		  <view><van-divider contentPosition="center">校园</van-divider></view>  
			<view class="header">
				<view class="header-item"> 
				   <view class="header-item-function" @click="toGrade()">
						<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/studentGrade.png"/>
						<text>成绩</text>
				   </view> 
				   
				   <view class="header-item-function" @click="toClassGrade()">
						<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/classGrade.png"/>
						<text>班级成绩</text> 
				   </view>	  
				   
					<navigator url="/pages/car/car">
						<view class="header-item-function">
							<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/car.png"/>
							<text>校车</text> 
						</view>	
					</navigator>
					
					<view @click="toAoLan()"> 
						<view class="header-item-function">
							<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/aolan.png"/>
							<text>奥兰</text> 
						</view>	
					 </view>
					
					<view @click="toClassRoom()">	
						<view class="header-item-function"> 
							<image  src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/classRoom.png"/>
							<text>空教室</text>
						</view>
					</view>		
				</view> 
				
				
				<view class="header-item">
					
					<view @click="toChooseCourse()">
						<view class="header-item-function">
							<image  src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/chooseCourse.png"/>
							<text>选课</text>
						</view> 
					</view>
					
					<view @click="toLibrary()">	
						<view class="header-item-function"> 
							<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/library.png"/>
							<text>馆藏</text>  
						</view>
					</view>
					
					<view @click="toSport()">
						<view class="header-item-function"> 
							<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/sport.png"/>
							<text>体育</text> 	
						</view> 
					</view>
					
					<view @click="toYZS()">	
						<view class="header-item-function">
							<image src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/yizhanshi.png"/>
							<text>一站式大厅</text> 
						</view>	
					</view>	
					
					<view @click="toFee()">	  
						<view class="header-item-function"> 
							<image  src="https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/icon/fee.png"/>
							<text>学费清查</text>
						</view>
					</view>	
				</view>
				 
			</view>
			
			<view class="main">
				 <view class="main-content">
					 
					 <view class="main-content-Advertisement"> 
					 
						<van-divider contentPosition="center">校内学生写真栏（欢迎投稿QQ：1499755237）</van-divider>
							<view class="main-content-Advertisement-img">
								<!-- <bw-img-upload style="width:100%" ></bw-img-upload> -->
								<bw-swiper :swiperList="swiperListImgs" 
										   :fullScreen="fullScreen"
										   :swiperType="swiperType"   
										   :textTip="textTip"
										   :interval="interval"
										   :textStyleColor='textStyleColor'
										   :indicatorActiveColor='indicatorActiveColor'
										   :videoAuto='videoAutoplay'
										   style="width: 100%;height:300upx"
								></bw-swiper>
						   </view>	 
						
						<van-divider contentPosition="center">校内视频宣传栏（欢迎投稿QQ：1499755237）</van-divider> 
						  <view class="main-content-Advertisement-video">
							<block v-for="(item,index) in videoList " :key="index"> 
								  <text>《{{item.name}}》</text>
								  <video :id="index" 
										 :src="item.src"
										 @error="videoErrorCallback"  
										 controls
										 initial-time="1"
								  >
								  </video>
							</block>   
						  </view>  
						   	  
				  </view>  
			</view>	  
			 
			<view class="foot"> 
			</view>	
	    </view>		
	  </view> 
	</scroll-view>	 
</template>

<script>
	var _this
	import {advertisementImg,advertisementVideo} from '@/static/js/API.js'
	import {bwSwiper} from '@/components/bw-swiper/bw-swiper.vue'
	export default {
		data() { 
			return {
				    user:{},
				 
				   
				    swiperListImgs:[{}], //写真图片,这里必须写对象[{}]格式，不然QQ小程序中会报错
					videoList:[],
					 
					fullScreen:false,  //图片全屏
					swiperType:true,   //卡塔栏式轮播
					textTip:true,      //显示图片文字说明
					interval:3000,     //自动切换的时间间隔
					textStyleColor:'#0000ff',
					indicatorActiveColor:'#00ff66', //选中指点的颜色
					videoAutoplay:false         ,//视频是否自动播放，默认false
				
				
			      
			}
		},
		onLoad() {
			this.getUser()
			this.getImageList()
			this.getVideoList()
		},
		components:{
			bwSwiper,
		},
		methods: {
			getUser(){
				_this = this
				uni.getStorage({
					key:"user",
					success:(res)=>{
						_this.user = res.data
					},
					fail:()=>{
						uni.reLaunch({
							url:'/pages/login/login'
						})
					}
				})  
			},
			
			
			
			//跳转到班级成绩   
			toClassGrade(){   
				_this = this
				console.log(_this.user)
				let majorNumberLength = _this.user.majorNumber.length
				if(majorNumberLength != 0 ){
					uni.navigateTo({
						url:'/pages/classGrade/classGrade',
					})
				}else{
					uni.showToast({
						title:"亲!只有老师才有权限哦!",
						duration:1000, 
						icon:"none"
					})
				}
			},
			
		    //跳转个人成绩页面
			toGrade(){
				_this = this
				if(_this.user.isAssistant != 1 ){
					uni.navigateTo({
						url:'/pages/studentGrade/studentGrade'
					})
				}else{
				  uni.showToast({
				  	title:'您的为辅导员权限并无成绩',
					duration:1000,
					icon:'none'
				  })
				}
			},
			
		    //跳转奥兰
			toAoLan(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//跳空教室
			toAoLan(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			toClassRoom(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//跳选课
			toChooseCourse(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//跳馆藏
			toLibrary(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//跳体育
			toSport(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//一站式大厅
			toYZS(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//跳到学费清查
			toFee(){
				uni.showModal({
					title:'提示',
					content:'攻城狮正在努力中'
				})
			},
			
			//视频播放出错时
		   videoErrorCallback(e) {
					uni.showModal({
						content: e.target.errMsg,
						showCancel: false
					})
			},
			
			//获取图片列表
			getImageList(){  
				_this = this
				uni.request({
					url:advertisementImg,
					method:'GET'
				})
				.then(res =>{
					console.log("获取到的图片列表",res)
					if(res[1].statusCode == 200){
						let swiperListImgs = []
						for(let i = 0 ;i < res[1].data.data.length;i++){
							let image = {}
							image.img = res[1].data.data[i].url
							image.text = ''    //图片展示的文字
							image.width = '100%'
							swiperListImgs.push(image)
						} 
						_this.swiperListImgs = swiperListImgs
		                console.log(swiperListImgs)
					}
				})
				.catch(Error =>{
					uni.showToast({
						title:'获取写真图片失败',  
						duration:1000, 
						icon:'loading'
					})
				})
			}, 
			
			getVideoList(){
				_this = this
				uni.request({
					url:advertisementVideo,
					method:'GET'
				})
				.then(res =>{
					console.log("获取到的视频列表",res)
					if(res[1].statusCode == 200){
						let videoList = []
						for(let i = 0 ;i < res[1].data.data.length;i++){
							let video = {}
							video.src = res[1].data.data[i].url
							video.name = res[1].data.data[i].name
							videoList.push(video)
						} 
						_this.videoList = videoList
					}
				})
				.catch(Error =>{
					uni.showToast({
						title:'获取视频失败',
						duration:1000,
						icon:'loading'
					})
				})
			}
			
		}
	}
</script>

<style scoped>
@import url("./css/main.css");
</style>
