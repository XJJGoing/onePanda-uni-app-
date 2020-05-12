
<script>
	import Vue from 'vue'
	import {queryUserById} from '@/static/js/API.js'
	const User = require('@/static/js/Utils.js').User
	var _this;
	export default {
		data() {
			return {
			};
		},
		onShow:function() {   
			uni.getSystemInfo({
				success: function(e) {   						
					// #ifdef APP-PLUS
					plus.navigator.closeSplashscreen(); 
					// #endif 
					
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
							
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
							  
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
			   }
			})
		},
		onLaunch() {
			_this = this;
			console.log('App onshow')
			 
			  uni.getStorage({
				key:"user",
				success:(res)=>{
				   console.log(res) 
				   if(res.data != null){  //每次启动去数据库中同步一次用户信息,包括课表信息，周次信息，学期信息
						let user = res.data
						let url = `${queryUserById}?id=${user.id}`
						uni.request({
							url:url,
							method:'POST',
							dataType:'json'  
						})
						.then(res2=>{
							console.log("同步到的用户信息",res2)
							if(res2[1].statusCode == 200 && res2[1].data.data.user != null){
								uni.setStorage({
									key:'user',
									data:res2[1].data.data.user,
									success() {
										uni.setStorage({
											key:'course',
											data:res2[1].data.data.courses,
											success() {
												uni.setStorage({
													key : 'nowTerm',
													data:res2[1].data.data.nowTerm,
													success() {
														uni.setStorage({
															key:'nowWeek',
															data:res2[1].data.data.nowWeek
														})
													}
												})
											},
											fail() {   //设置course失败则为老师
												uni.redirectTo({
													url: '/pages/service/service'
												});
											}
										})
									},
								})
							}
						})
						.catch(Error=>{ 
							console.log("启动同步用户信息错误",Error)
							
						})     
					   }else{
						   uni.redirectTo({
							url: '/pages/login/login'
						   });
					   }
					},
					fail:() => {
						uni.redirectTo({
							url: '/pages/login/login'
						});
					}
				  })		
		}, 
		onHide: function() {
			console.log('App 关闭')
		}
	}
</script>

<style >
@import url("/wxcomponents/vant-weapp/common/index.wxss");
/* @import url("/components/color-ui/css/icon.css");
@import url("/components/color-ui/css/main.css"); */

body{
	background: #FFFFFF !important;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  color:#ffffff;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color:#FFFFFF;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color:#39b54a;
}

</style>
