<template>
	<scroll-view class="person">
	  <view class="content">	
	     <view class="header">
		     <image  :src="avatarUrl"/>
			 <text>{{nickName}}</text>
		 </view>
		   
		 <view class="main">
			  <view class="main-setting"> 
                 <van-cell-group title="设置">
                   <van-cell title="反馈" is-link link-type="navigateTo" url="../feedback/feedback"/>
				   <van-cell title="关于我们" is-link link-type="navigateTo" url="../version/version"/>
				  <block v-if="user.isRoot == 1">
				      <van-cell title="审核文章" is-link link-type="navigateTo" url="../verifyArticle/verifyArticle"/>
				  </block>   
                 </van-cell-group>    				 
			  </view> 
			  <view class="main-userInfo">
				  <block v-if="user.isAssistant == 0">
					  <van-cell-group title="个人信息">
						<van-cell title="姓名" :value="user.trueName" /> 
						<van-cell title="学号" :value="user.username"  />
						<van-cell title="专业" :value="user.studentMajorName" />
						<van-cell title="学院" :value="user.college" />
						<block v-if="user.majorNumber">
						  <van-cell title="专业班级号:" :value="user.majorNumber" />
						</block>  
					  </van-cell-group> 
				  </block> 
				  <block v-else> 
					  <van-cell-group title="个人信息">
					    <van-cell title="专业号" :value="user.majorNumber"></van-cell>
					  </van-cell-group> 
				  </block>	  
			  </view>  
			  <view class="main-logout">
				  <van-button @click="logout()" color="#FF0000" round="true">退出登陆</van-button>
			  </view>
		 </view> 
		 <view class="footer"> 
			   
		 </view>
	  </view>	
    </scroll-view>
</template>

<script>
	var _this
	export default {
		data() {
			return {
				user:{},       //用户的信息
				avatarUrl:'',  //用户的头像
				nickName:''     //用户的昵称
			}
		},
		onLoad() {
			_this = this;
			uni.getStorage({
				key:'user',
				success:(res) => {
					_this.user = res.data
					//#ifdef MP-WEIXIN
					   _this.avatarUrl = res.data.wxAvatarUrl,
					   _this.nickName = res.data.wxNickName
					//#endif
					//#ifdef MP-QQ
					   _this.avatarUrl = res.data.qqAvatarUrl,
					   _this.nickName = res.data.qqNickName
					//#endif
				},
				fail:() => {
					uni.reLaunch({
						url:'../login/login'
					})
				}
			})
		},
		components:{
			
		},
		
		methods: {
			logout:function(){
				_this = this;
				try {
				    uni.clearStorageSync();
					uni.reLaunch({
						url:'../login/login'
					})
				} catch (e) {
				   uni.showToast({
				   	 title:"网络错误",
					 icon:"loading",
					 duration:500
				   })
				   console.log("退出登录失败",e.message)
				}
			}
		}
	}
</script>

<style>
@import url("./css/main.css");
</style>
