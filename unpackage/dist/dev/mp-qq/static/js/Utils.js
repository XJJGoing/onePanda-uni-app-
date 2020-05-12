/**
  * @Description: 封装一些通用的工具类函数
  * @author 林永健
  *
  */
 import {userLogin} from './API.js';
 class User{
	 
	 /**
	  *获取微信或者qq用户的code 
	  * @return 微信或者qq用户的code
	  */
	static getCode(){
		   return new Promise((resolve,reject) =>{
			   uni.login({
			   	  success:(res)=>{
					  console.log(res)  
					  resolve(res.code)
				  },
				  fail:(err)=>{
					  reject(err)
				  }
			   })
		   })
	 }
	 
	 /**
	  *  获取微信或者qq用户的信息 
	  * @return 用户信息
	  */
	static getUserInfo(){
		 return new Promise((resolver,reject) => {
			 uni.getUserInfo({
			 	success:(res)=>{
				   resolver(res.userInfo)
				},
				fail:(err)=>{
				   reject(err)
				}
			 })
		 })
	 }
	 
	 
	 /**
	  * 进行登录并且存储用户信息
	  * @return 返回登录与否的判断
	  */
	static userLogin(code,userInfo,username,password,isAssistant){

		 return new Promise((resolver,reject)=>{
			 uni.request({
				 method:"POST",
				 dataType:JSON,
				 header:{ 
					 'Content-type':'application/json'
				 },
				 url:userLogin,
				// #ifdef MP-WEIXIN 
				 data:{
						code:code,
						username:username,
						password:password,
						isAssistant:isAssistant,
						origin:1,
						wxAvatarUrl:userInfo.avatarUrl,
						wxCity:userInfo.city,
						wxCountry:userInfo.country,
					    wxGender:userInfo.gender,
					    wxLanguage:userInfo.language,
					    wxNickName:userInfo.nickName,
					    wxProvince:userInfo.province,
				 },
				// #endif
				
				// #ifdef MP-QQ
				  data:{
					  code:code,
					  username:username,
					  password:password,
					  isAssistant:isAssistant,
					  origin:2,
					  qqAvatarUrl:userInfo.avatarUrl,
					  qqCity:userInfo.city,
					  qqCountry:userInfo.country,
					  qqGender:userInfo.gender,
					  qqLanguage:userInfo.language,
					  qqNickName:userInfo.nickName,
					  qqProvince:userInfo.province,
				  },
				// #endif
				
				success:(res)=>{   //登录成功设置缓存,辅导员只存个人信息
					 let jsonData = JSON.parse(res.data)
					 console.log("jsondata",jsonData)
					if(jsonData.code == 200 && jsonData.data != null){
					   let user = jsonData.data.user
					   let userInfo = {
					   	...user
					   }
					   if(userInfo.isAssistant == 0){  
						   let course = jsonData.data.courses   
						   let nowWeek = jsonData.data.nowWeek
						   let nowTerm = jsonData.data.nowTerm
						   console.log(nowWeek)
						   uni.setStorage({
						   	key:"course",
						   	data:course,
							success:()=>{
								uni.setStorage({
									key:"nowWeek",
									data:nowWeek,
									success:()=>{
										uni.setStorage({
											key:"nowTerm",
											data:nowTerm
										})
									}
								})
							}
					     })
					   } 
						uni.setStorage({
							key:"user",
							data:userInfo,
							success() {
							  resolver(true);  //登录成功返回true
							}
						})			   
					}else{
						resolver(false); //登录失败返回false
					}
				},
				fail:(error)=>{
					console.log(error)
					reject(error)
				}
			 })
		 })
	 }
 }
 
module.exports = {
	User:User
}