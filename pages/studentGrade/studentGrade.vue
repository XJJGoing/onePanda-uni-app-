<template>
	<scroll-view class="studentGrade">
		 <view class="content">
			 <view class="header">
				 <van-dropdown-menu style="background-color: #39B54A;">
				   <van-dropdown-item @change="changeTerm()" :value="nowTerm" :options="termList" />
				 </van-dropdown-menu>
			 </view>
			 <view class="main">
				 <view class="main-header">
					 <text>学期绩点 : {{termGradePoint}}</text>
					 <text>学年绩点 : {{yearGradePoint}}</text>
				 </view> 
				 <view class="main-content">
					 <view v-for="(item,index) in gradeList" :key = "index">
						 <van-collapse :value="activeNumber" @change="onChange()" accordion>
						       <van-collapse-item :title="item.gradeName" :value="item.score" :name="item.gradeNumber">
						         <view>课程号:{{item.gradeNumber}}</view>
								 <view>考核方式:{{item.examMethod}}</view>
								 <view>课程类型:{{item.gradeKind}}</view>
								 <view>学分:{{item.gradeCredit}}</view>
								 <view>学时:{{item.gradeTime}}</view>
						       </van-collapse-item>
						 </van-collapse>
					 </view>
				 </view>	 
			 </view>
			 <view class="footer">
				
			 </view>
		 </view>
	</scroll-view>	
</template>

<script>
	var _this
	import {queryGrade} from '@/static/js/API.js'
	export default {
		data() {
			return {
				user:{},
				nowTerm:'2019-2020-1',
				termList:[
					{ text: '2019-2020-2', value: '2019-2020-2' },
					{ text: '2019-2020-1', value: '2019-2020-1' },
					{ text: '2018-2019-2', value: '2018-2019-2' },
					{ text: '2018-2019-1', value: '2018-2019-1' },
					{ text: '2017-2018-2', value: '2017-2018-2' },
					{ text: '2017-2018-1', value: '2017-2018-1' },
				],
				gradeList:[],        //用来遍历展示的
				activeNumber:'',    //默认展开的折叠面板
			    termGradePoint:'',     //学期绩点
		        yearGradePoint:''      ,//学年绩点
				
				
				
			}
		},
		onLoad() {
			_this = this
			_this.getUserAndTerm()
			.then(()=>{
			   _this.getStudentGrade(_this.nowTerm)
			})
			.catch(Error =>{
				console.log("获取失败")
			})
		},
		methods: {
			
			//获取学生的信息
			getUserAndTerm(){
				_this = this
				return new Promise((resolver,reject)=>{
					uni.getStorage({
						key:"user",
						success:(res)=>{
							_this.user = res.data
						   uni.getStorage({
						   	  key:"nowTerm",
							  success:(res) =>{
							  	_this.nowTerm = res.data 
								resolver()
							  }
						   })
						},
						fail:()=>{
							uni.reLaunch({
								url:'/pages/login/login'
							})
							reject()
						}
					})
				})
			},
			
			
			//根据学期查询学生的成绩,并且调用获取同学年另外一个学期的函数
			getStudentGrade(term){
					_this = this
					let username = _this.user.username
					let url = `${queryGrade}?studentUsername=${username}&term=${term}`
					uni.showLoading({
						title:"查询中",
						success:() => {
							uni.request({
								url:url,
								method:'GET'
							})
							.then(res => {
								
								//这里我也不知道为什么会查某个学期会得到整年的，但是计算某个学期又是对的，可能是组件的原因
								console.log("查询到的成绩的格式",res)
								uni.hideLoading()
								if(res[1].statusCode == 200 ){
									let gradeList = res[1].data.data 
										_this.gradeList = gradeList
									    console.log(gradeList)
										_this.calculate(gradeList)     
										.then(res1 =>{
											if(res1 == "NaN"){
												_this.termGradePoint = '本学期暂无成绩'
											}else{
											   _this.termGradePoint = res1
											   _this.getOtherTerm(term)	
											}
										})
										.catch(Error=>{
											console.log(Error.message)
										})
								}
							})
							.catch(Error =>{
								console.log(Error.message)
								uni.showToast({
									title:"后台出现错误",
									icon:"loading",
									duration:1000
								})
							})
						}
					})
			},
			
			
	        //改变学期
			changeTerm(event){
				_this = this
				let nowTerm = event.detail
				_this.nowTerm = nowTerm
				_this.getStudentGrade(nowTerm)
			},
			
			
			
			
			//改变折叠面板
			onChange({detail}){
				_this = this
				_this.activeNumber = detail
			},
			
			//获取学年的另一个学期
			getOtherTerm(term){
				_this = this
			    let nowTerm = term
				let studentUsername = _this.user.username
				let splitArray = nowTerm.split('-')
				let requestTerm = ''
				if(splitArray[splitArray.length -1] == '1'){
					requestTerm = splitArray[0] + "-" + splitArray[1] + "-" + '2'
				}else{
					requestTerm = splitArray[0] + "-" + splitArray[1] + "-" + '1'
				}
				let url = `${queryGrade}?studentUsername=${studentUsername}&term=${requestTerm}`
				uni.request({
					url:url,
					method:'GET'
				}) 
				.then(res =>{
				    console.log("查询到的学年的另一个学期的成绩",res[1].data.data)
					if(res[1].statusCode == 200){
						let list = _this.gradeList
					    for(let i = 0;i < res[1].data.data.length;i++){
							list.push(res[1].data.data[i])
						}
						_this.calculate(list)
						.then(res1 =>{
							_this.yearGradePoint = res1
						})
						.catch(Error =>{
							console.log("计算错误")
						})
					} 
				})
				.catch(Error =>{
					console.log(Error.message)
					uni.showLoading({
						title:"后台错误",
						icon:"loading",
						duration:1000
					})
				})
			},
			
			
			
			//计算绩点并且返回值
			calculate(gradeList){
				return new Promise((resolver,reject) => {
					let afterGradeList = []      //除去体育课任选
					for(let i = 0 ; i < gradeList.length ;i++ ){
					   if(gradeList[i].gradeName == '体育1' || gradeList[i].gradeName == '体育2'
					      ||gradeList[i].gradeName == '体育3' || gradeList[i].gradeName == '体育4'
						  ||gradeList[i].gradeKind == '任选' || gradeList[i].gradeName == '三年级体育专项'
					   ){
						     
					   }else{
						   switch(gradeList[i].score){
							   case '优':
							   gradeList[i].score = 95
							     break;
							   case '良':
							     gradeList[i].score = 85 
							      break;
							   case '中':
							      gradeList[i].score = 75
								   break;
							   case '及格':
							      gradeList[i].score = 65
								   break;
							   case '不及格':
							       gradeList[i].score = 0
								   break;
							   case '通过':
							       gradeList[i].score = 75
								   break;
							   case  '不通过':
							       gradeList[i].score = 0
								   break;
							   default: 
									break;  
						   }
						   if(gradeList[i].score >= 60){
							    afterGradeList.push(gradeList[i])    
						   }
					   }
					}
					
					let allMolecule = 0.0    //分子上的总合
					let allDenominator = 0.0  //分母上的总合
					for(let i = 0 ; i < afterGradeList.length ;i++){
					   let credit = parseFloat(afterGradeList[i].gradeCredit)
					   let grade = (parseFloat(afterGradeList[i].score)/10.0) - 5.0
					   allMolecule = allMolecule + (credit * grade)
					   allDenominator = allDenominator + credit
					}
					let gradePoint = (allMolecule/allDenominator).toFixed(2)
					resolver(gradePoint)
				})
			}

		}
	}
</script>

<style>
@import url("./css/main.css");
</style>
