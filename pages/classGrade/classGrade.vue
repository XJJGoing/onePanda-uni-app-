<template>
	<scroll-view class="classGrade">
		<view class="content">
			<view class="header">
				<text>专业号：{{user.majorNumber}}</text>
				<van-dropdown-menu z-index="30" direction="up">
				  <van-dropdown-item :value="nowTerm" :options="termList" @change="changeTerm()"/>
				</van-dropdown-menu>
			</view>
			  
			<view class="main">
				<view class="main-student-gradePointChart">
					<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
				</view>
				<view class="main-student-list">
					<view v-for="(student,index) in studentGradeList" :key="index">
							<van-collapse :value="activeName" @change="onChange()" accordion>
							  <van-collapse-item :title=" index + 1 +' '+ student.trueName"  :value="'绩点 : '+student.gradePoint"  :name="student.username">
                                  <view class="main-student-list-info">
									  <text>学号：{{student.username}}</text>
									  <text>各科成绩信息如下:</text>
								  </view>
								  <view class="main-student-list-header">
									  <text>课程号</text>
									  <text>课程名称</text>
									  <text>课程成绩</text>  
								  </view>
								  <view class="main-student-list-grade" v-for="(grade,index2) in student.grades" :key="index2" >
				                      <view>
										  <text>{{grade.gradeNumber}}</text>
										  <text>{{grade.gradeName}}</text>
										  <text :style="{'color':!isNaN(Number(grade.score)) & Number(grade.score) < 60?'red':''}">{{grade.score}}</text>
									  </view>
								  </view>
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
    var canvaLineA=null;
	import {teacherQueryGrade} from '@/static/js/API.js'
	import uCharts from '@/components/js_sdk/u-charts/u-charts/u-charts.js';
	export default {
		data() {
			return {
				user:{},
				nowTerm:'2019-2020-2', 
				termList:[
					{ text: '2020-2021-1',value:'2020-2021-1'},
					{ text: '2019-2020-2',value:'2019-2020-2'},
					{ text: '2019-2020-1',value:'2019-2020-1'},
					{ text: '2018-2019-2',value:'2018-2019-2'},
					{ text: '2018-2019-1',value:'2018-2019-1'},
					{ text: '2017-2018-2',value:'2017-2018-2'},
					{ text: '2017-2018-1',value:'2017-2018-1'},
				],
				
				studentGradeList:[],  //专业学生成绩列表，由高到低排序好的
				activeName:'',
				 
			    studentGradePointList:[],  //存放学生的绩点,不排序 
				
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
			}
		},
		onLoad() {
			_this = this
			this.cWidth=uni.upx2px(750)
			this.cHeight=uni.upx2px(500)
			try{
			  	let user = uni.getStorageSync('user')
				if(user){
					_this.user = user
					this.getMajorGrade(this.nowTerm)
				}else{
					uni.reLaunch({
						url:'/pages/login/login'
					})
				}
			}catch(e){
				
			}
		},
		methods: {
			
			
			//改变学期
			changeTerm(event){
			    this.nowTerm = event.detail
				this.getMajorGrade(this.nowTerm)
			},
			
		    //获取专业学生的成绩
			getMajorGrade(nowTerm){
				_this = this
				let term = nowTerm
				let majorNumber = _this.user.majorNumber
				// let majorNumber = '172210409'
				let url = `${teacherQueryGrade}?majorNumber=${majorNumber}&term=${term}`
			    uni.showLoading({
			    	title:'查询中'
			    })
				.then(()=>{
					return uni.request({
						url:url,
						method:'GET'
					})
				})
				.then(res=>{
					console.log("查询到的专业的成绩",res)
					uni.hideLoading()
					if(res[1].statusCode == 200){     //冒泡排序,绩点由高到低
						let studentGradeList = res[1].data.data
				        let studentGradePointList = []
						let studentNameList = []
						for(let i = 0; i < studentGradeList.length; i++){
							studentNameList.push(studentGradeList[i].trueName)
							studentGradePointList.push(studentGradeList[i].gradePoint)
						}
						for(let i = 0; i < studentGradeList.length; i++){
							for(let j = 0; j < studentGradeList.length - i -1 ; j++ ){
								if(studentGradeList[j].gradePoint < studentGradeList[j+1].gradePoint){
									let temp = studentGradeList[j]
									studentGradeList[j] = studentGradeList[j+1]
									studentGradeList[j+1] = temp
								} 
							} 
						}
						_this.studentGradeList = studentGradeList
						_this.studentGradePointList = studentGradePointList
						_this.doWithStudentGradePointData(studentGradePointList,studentNameList)
					}
				})
				.catch(Error => {
					console.log("查询出错",Error)
					uni.showToast({
						title:'后台查询出错',
						duration:1000,
						icon:'loading'
					})
				})
			},
			
			//展开折叠面板
			onChange(event){
				this.activeName = event.detail
			},
			
			//处理绩点数据，并将处理好的数组传入绩点曲线
			doWithStudentGradePointData(studentGradePointList,studentNameList){
				let LineA={categories:[],series:[]}
				LineA.categories = studentNameList
				LineA.series = [{
								 name: '绩点',
								 data: studentGradePointList,
								 color: '#66ccff'
						       }]
				this.showGradePointChart('canvasLineA',LineA)				
			},
			
				
		     				
			//展示折线图
			showGradePointChart(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_this,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{
						show:true,//是否展示下方说明
					},    
					dataLabel:false,
					showTitle:true, 
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_this.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll:true,
					xAxis: {
						title:'姓名',
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
						disableGrid:true,
						rotateLabel:true, 
						scrollShow:true,
						itemCount:10,
						scrollAlign:'left'
					},
					yAxis: {
						titleFontColor:"#CCCCCC",
						title:'绩点',
						gridType:'solid',
						gridColor:'#CCCCCC',
						axisLine:false,
						splitNumber:10,
						min:0,
						max:5,
						position:'right',
						format:(val)=>{return val.toFixed(1)}
					},
					width: _this.cWidth*_this.pixelRatio,
					height: _this.cHeight*_this.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			
			
			//点击图标时
			touchLineA(e){
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
			
		}
	}
</script>

<style>
@import url("./css/main.css");



/*图线样式图*/
.main-student-gradePointChart{
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
}
.charts{
	width: 750upx; 
	height:500upx;
	background-color: #FFFFFF;
}
</style>
