<template>
	<view class="login">
		<view class="content">
			
			<!-- 头部logo -->
			<view class="header"> 
				<image :src="logoImage"></image>
			</view>
			
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					v-model="username"
					type="text"
					maxlength="20"
					placeholder="学号"
				></wInput>
				<wInput
					v-model="password"
					type="password"
					maxlength="50"
					placeholder="教务密码"
				></wInput>
			</view>
            
			<!-- #ifdef MP-WEIXIN -->
				<wButton
					text="登 录"
					:rotate="isRotate" 
					@click.native="startLogin()"
					open-type="getUserInfo"
					:v-if="canIUse"
				></wButton>
			<!-- #endif -->
			
			<!-- #ifdef MP-QQ -->
			   <wButton
			    	text="登 录"
			    	:rotate="isRotate" 
			    	@click.native="startLogin()"
			    ></wButton>
			<!-- #endif -->
			
		     <!-- 底部信息 -->
			<view class="footer">
				<navigator url="./teacheLogin" open-type="navigate">
					<text>教师入口>>>>></text>
				</navigator>
			</view>
			
			<!-- 软件版本介绍信息 -->
			<view class="introduce"> 
				<text>
					copyRight © 2020 OnePanda
				</text>
			</view>
		</view>
	</view>
</template>

<script> 
	var _this;
	import wInput from '@/components/watch-login/watch-input.vue' //input
	import wButton from '@/components/watch-login/watch-button.vue' //button
	import {User} from '@/static/js/Utils.js'
	var app = getApp();
	export default {
		data() { 
			return { 
				//logo图片
				logoImage:'https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/logo/logo.png',
				username:'', //学号
				password:'', //密码
				isRotate: false, //是否加载旋转
				   
				canIUse: wx.canIUse('button.open-type.getUserInfo')
			}; 
		},
		components:{  
			wInput, 
			wButton
		},
		mounted() {
			_this = this; 
		},
		methods: {
		    startLogin(){
				//登录
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.username.length == "") {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '学号不能为空'
				    });
				    return;
				}
		        if (this.password.length == "") {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '密码不能为空'
		            });
		            return;
		        }
				let code;
				let userInfo;
				_this.isRotate = true;   
				
				//#ifdef MP-WEIXIN
				 uni.getSetting({
				 	success(res){
				 		if(res.authSetting['scope.userInfo']){
							User.getCode()
							.then(res =>{
								code = res;
								return User.getUserInfo();
							})
							.then(res => {
								userInfo = res;
								return User.userLogin(code,userInfo,_this.username,_this.password,0)
							})
							.then(res =>{  //登录成功返回true 不成功返回false
								_this.isRotate = false;
								console.log("promisefanhuide",res)
								if(res == true){ 
									uni.switchTab({
										url:'/pages/course/course'
									})	
								}else{
									uni.showToast({
										icon: 'none',
										position: 'bottom',
										title: '账号或者密码错误'
									});
								}  
							})
							.catch(Error =>{
								_this.isRotate = false;
								uni.showToast({
									icon:"loading",
									title:"后台网络错误",
									duration:1000
								})
							})
						}else{
							_this.isRotate = false;
							uni.showToast({
								title:"需要微信授权登录",
								duration:1000,
								icon:"none"
							})
						}
				 	}
				 })
				//#endif
				
				//#ifdef MP-QQ
				  User.getCode()
				  .then(res => {
				  	code = res; 
				    return User.getUserInfo();
				  })
				  .then(res => {
				  	userInfo = res;
				  	return User.userLogin(code,userInfo,_this.username,_this.password,0);
				  }) 
				  .then(res => {    //登录成功返回true 失败返回false
					 _this.isRotate = false;
				  	 if(res){
						uni.reLaunch({
							url:'/pages/course/course'
						})	
				  	 }else{
				  		uni.showToast({
				  		    icon: 'none',
				  			position: 'bottom',
				  		    title: '账号或者密码错误'
				  		});
				  	 }
				  })
				  .catch(error => {
					  console.log(error)
					 _this.isRotate = false;
				  	 uni.showToast({
				  		icon:"loading",
				  		title:"后台网络错误",
				  		duration:1000
				  	})
				  })
				//#endif
		    }
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>