<template>
	<scroll-view class="course">
			 <view class="content"> 
				 <view class="title">  
					<van-dropdown-menu>
					   <van-dropdown-item @change="changeNowWeek()"  :value="nowWeek" :options="weekList"/>
					   <van-dropdown-item @change="changeNowTerm()"  :value="nowTerm" :options="termList" />
					</van-dropdown-menu>
				 </view>
				 
				 <view class="main"> 

					     <!-- 顶部日期栏 -->
						 <view class="main-header">
							   <view class="main-header-month" >
								  <text>{{month}}</text>
								  <text>月</text>
							    </view>
							    <block v-for="(item,index) in dayArrayList" :key="index" >
								  <view :style="{'background-color':item.bg}">
									  <text>{{item.nowWeekDayValue}}</text>
									  <text>{{item.showMonthAndAay}}</text>
								  </view> 
								</block>	
						 </view>
						 
					
						 <view class="main-center">
							  <!-- 侧边信息栏 -->
							 <view>
							 	<mLeft></mLeft>
							 </view>
							 
					    <!-- 单单有专业号的为班长，老师有专业号和isAssistant -->
	                    <block v-if="user.isAssistant == 0">
							
							 <!-- 课表主题信息 -->
							 <view class="main-center-content">
							   <block v-if="course.length != 0">
								   <block v-for="(item,index) in xqArray" :key="index">
									 <view> 
										   <view>  
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view v-if="course.courseJc == 1 && course.courseXq == item"
														  plain="true"
														  :style="{'background-color':course.bg}"
														  @click="getCourseDetail(course)"	 
												  >
													 <text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														{{'\n@'+course.courseRoom}}
														</block>	
													</text>
												  </view>	 
											  </block>		
										   </view> 
										  
										  <view>  
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 2 && course.courseXq == item"
														 :style="{'background-color':course.bg}"
														  @click="getCourseDetail(course)"	
												  >
													<text>
														 {{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														 {{'\n@'+course.courseRoom}}
														</block>
													</text>
												  </view> 
											  </block>
										  </view>
										  
										  <view>
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 3 && course.courseXq == item"
														:style="{'background-color':course.bg}"
														style="width: 90upx;"
														 @click="getCourseDetail(course)"	
												  >
													 <text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														 {{'\n@'+course.courseRoom}}
														</block>
													 </text>
												  </view> 
											  </block>
										  </view>
										  
										  <view>
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 4 && course.courseXq == item"
														:style="{'background-color':course.bg}"
														 @click="getCourseDetail(course)"	
												  >
													<text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														 {{'\n@'+course.courseRoom}}
														</block>
													</text>
												  </view> 
											  </block>  
										 </view>
										 
										  <view>
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 5 && course.courseXq == item"
														:style="{'background-color':course.bg}"
														 @click="getCourseDetail(course)"	
												  >
													<text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														 {{'\n@'+course.courseRoom}}
														</block>
													</text>
												  </view> 
											  </block>
										  </view>
										  
										  <view>
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 6 && course.courseXq == item"
														:style="{'background-color':course.bg}"
														 @click="getCourseDetail(course)"	
												  >
													<text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														 {{'\n@'+course.courseRoom}}
														</block>
													</text>
												  </view> 
											  </block>
										  </view>
										  
										 <view>
											  <block v-for="(course,index2) in removeOverlapCourse " :key="index2">
												  <view plain  v-if="course.courseJc == 7 && course.courseXq == item"
														:style="{'background-color':course.bg}"
														 @click="getCourseDetail(course)"	
												  >
													<text>
														{{course.courseName}}
														<block v-if="course.courseName != '体育1' && course.courseName != '体育2' && course.courseName != '体育3' && course.courseName != '体育4' && course.courseName != '三年级体育专项' ">
														{{'\n@'+course.courseRoom}}
														</block>
													</text>
												  </view> 
											  </block>
										 </view>
											 
									 </view> 
								   </block>
							   </block> 
							   
							   <block v-else>
								   <text>
									   1、无本学期课表信息
									   2、尚未评教
									   尚未评教可复制链接到浏览器打开进行评教
									   ps: mac使用Safari浏览器 window使用IE浏览器
								   </text>
									<text selectable="true">
										http://jwgl.just.edu.cn:8080/jsxsd/
									</text>
							   </block>
							 
							   <!-- 底部备注信息 -->
							   <view class="main-center-course-note">
							      <textarea disabled="true">
							   	     {{note}}
							      </textarea>
							   </view>	 	   
						</view> 
					  </block>
					  
					  <block v-else>
						<view class="main-teacher-info">
							<block v-if="user.isAssistant == 1">
								您是学业导师或者辅导员的身份,
								无课表信息查询您专业学生成绩
								情况可以到服务处。
							</block>	
						</view>
					  </block>
						
					</view>
				
				 </view>
				 
				 <view class="footer"></view>
			 </view>	
	</scroll-view>
</template>

<script>
	const app = getApp();
	var _this;
	import mLeft from './left.vue';   //自定义组件
	import {queryCourse} from '@/static/js/API.js'  
	export default {
		data() {
			return {
				user:{},         
				course:[],       //api获取的原课表数组
				recordNowWeek:0,   //,api获取的真实的周数
				nowWeek:-1,       //用户可切换的周次
				nowTerm:'',
				
				paraseZcCourse:[],        //解析了周次的课表数组
				colorCourse:[] ,          //上色后的课表
				removeOverlapCourse:[] ,  //去重后的课表
				note:'',                  //课程表的备注信息
				
				xqArray:[1,2,3,4,5],      //遍历课表的行数
				
				
				dayArrayList:[],  //遍历日期还有月份
				month:'',         //当前月
			    weekList:[
				    { text: '第1周', value: 1 },
					{ text: '第2周', value: 2 },
					{ text: '第3周', value: 3 },
					{ text: '第4周', value: 4 },
					{ text: '第5周', value: 5 },
					{ text: '第6周', value: 6 },
					{ text: '第7周', value: 7 },
					{ text: '第8周', value: 8 },
					{ text: '第9周', value: 9 },
					{ text: '第10周', value: 10 },
					{ text: '第11周', value: 11 },
					{ text: '第12周', value: 12 },
					{ text: '第13周', value: 13 },
					{ text: '第14周', value: 14 },
					{ text: '第15周', value: 15 },
					{ text: '第16周', value: 16 },
					{ text: '第17周', value: 17 },
					{ text: '第18周', value: 18 },
					{ text: '第19周', value: 19 },
					{ text: '第20周(假期)', value: 20 },
			    ],
				termList:[
					{ text: '2020-2021-1', value: '2020-2021-1' },
					{ text: '2019-2020-2', value: '2019-2020-2' },
					{ text: '2019-2020-1', value: '2019-2020-1' },
					{ text: '2018-2019-2', value: '2018-2019-2' },
					{ text: '2018-2019-1', value: '2018-2019-1' },
					{ text: '2017-2018-2', value: '2017-2018-2' },
					{ text: '2017-2018-1', value: '2017-2018-1' },
				],
				
				//课表背景颜色，第一个为灰色
			    courseColorList:[ '#ffcc33','#ff9933',
				                  '#ff6633','#ff9999','#48D1CC',
								  '#96CDCD','	#ADD8E6','#cc99cc',
								  '#cc66cc','#FF83FA',"#66ff99",
								  '#66ccff','#FFB90F','#FF6A6A',
								  '#C71585','#FFD39B','#5F9EA0',
								  '#8B4726','#DB7093'],
				defaultColor:'#D3D3D3	'  //不是本周课程显示的颜色						 
			}
		},
		components:{
			mLeft,     //自定义的组件
		},
		onLoad() {    
			_this = this;
			_this.getInfo()  
			.then(res =>{
				_this.getDateTime(new Date())
				_this.doWithCourseZc()   //里面嵌套调用其他函数
			})
			.catch(Error =>{
				console.log("获取课表错误")
			})
		},
		methods: {
			
			//获取用户的基本信息、课表、周次的函数,做同步控制
			getInfo:function(){
				_this = this;
				return new Promise((resolver,reject) => {
					uni.getStorage({
						key:"user",
						success:(res)=>{
							_this.user = res.data
							if(res.data.isAssistant == 0){ 
								uni.getStorage({
									key:"course",
									success:(res2)=>{
										_this.course = res2.data
										uni.getStorage({ 
											key:"nowWeek",
											success:(res3)=>{ 
												_this.nowWeek = res3.data
												_this.recordNowWeek = res3.data
												uni.getStorage({
													key:"nowTerm",
													success:(res4)=>{
														_this.nowTerm = res4.data
														resolver()
													}
												})
											}
										})
									}
								})
							}else{
								resolver()
							}
						},
						fail() {
							uni.reLaunch({
								url:'/pages/login/login'
							})
						}
					 })
				})
			},
			
			//1 对课表进行zc解析
			doWithCourseZc:function(){
				_this = this;
			   	let course =  _this.course
				let nowWeek = _this.nowWeek
				let afterDetailCourse = []
			 
				//对周进行分割,并生成每个单周的zcString字符串 类似于 1,2,4,5,6
				for(let i = 0 ; i < course.length ; i++){
				    let zcString = '';        //周次的string
					if(course[i].courseZc.indexOf(',') != -1){  //是否包含,
						let splitCourse = course[i].courseZc.split(',')
						for(let j = 0; j < splitCourse.length; j++){
							if(splitCourse[j].indexOf('-') != -1){  //是否包含-
							  let splitCourse2 = splitCourse[j].split('-')
							  let lastNumber = parseInt(splitCourse2[splitCourse2.length - 1]);  //去除（周）
							  let zcNumber = ''
								  for(let k = parseInt(splitCourse2[0]);k <= lastNumber; k++){
									  if(k == lastNumber){
										  zcNumber = zcNumber + k
									  }else{
										  zcNumber = zcNumber + k + ','
									  }
								  }
								  zcString = zcString + zcNumber + ',';
							  }else{ //不包含-
							      zcString = zcString + parseInt(splitCourse[j]) + ',';
							  }
						} 
					}else{ //不包含,
					    if(course[i].courseZc.indexOf('-') != -1){
							let splitCourse = course[i].courseZc.split('-')
							let lastNumber = parseInt(splitCourse[splitCourse.length - 1])   //去除（周）
							let zcNumber = '';
							for(let j = parseInt(splitCourse[0]); j<= lastNumber; j++){
								if(j == lastNumber){
								   zcNumber = zcNumber + j
								}else{
									zcNumber = zcNumber + j + ','
								}
							}
							zcString = zcString + zcNumber + ',';
						}else{
						   let zcNumber = parseInt(course[i].courseZc);
						   zcString = zcString + zcNumber + ',';
						}
					}
					
					console.log("周次字符串",zcString)
					let newCourse = {
						...course[i],
					}
					newCourse.courseZc = zcString.substring(0,zcString.length -1)
					afterDetailCourse.push(newCourse)
				}
				console.log("afterCourse",afterDetailCourse)
				_this.paraseZcCourse = afterDetailCourse;
				_this.doWithCourseColor();
			},
			
			
			//2 对课表进行上色处理，相同的课程用同色，不同的课程不同的色
			doWithCourseColor:function(){
				_this = this;
			    let course = _this.paraseZcCourse;
				for(let i = 0 ; i < course.length ;i++){
					if(course[i].courseZc.indexOf(',') == -1 ){  //无,		
					console.log('进来无,周次:',course[i].courseZc)  //一个数		
						if(parseInt(course[i].courseZc) == _this.nowWeek){
							
						   //交换算法,对课程进行随机取色，并且不会取到重复的,每次取数组都会减短
						   if( i == 0){
							   let  colorIndex = Math.floor(Math.random()*(_this.courseColorList.length - 1))
							   console.log("颜色的下标",colorIndex)
							   let  color = _this.courseColorList[colorIndex]
							   _this.courseColorList[colorIndex] = _this.courseColorList[_this.courseColorList.length - 1]
							   _this.courseColorList = _this.courseColorList.slice(0,_this.courseColorList.length - 1)
							   course[i].bg = color
						   }
						   let flag = false
						   for(let k = i - 1  ; k >= 0 ;k--){
							   if(course[k].courseName == course[i].courseName && course[k].bg != _this.defaultColor){
								   course[i].bg = course[k].bg
								   flag = true
								   break;
							   }
						   }
						   if(!flag){
							   let  colorIndex = Math.floor(Math.random()*(_this.courseColorList.length - 1))
							   let  color = _this.courseColorList[colorIndex]
							   console.log("颜色的下标",colorIndex)
							   _this.courseColorList[colorIndex] = _this.courseColorList[_this.courseColorList.length - 1]
							   _this.courseColorList = _this.courseColorList.slice(0,_this.courseColorList.length - 1)
							   course[i].bg = color
						   }
						}else{
						   course[i].bg = _this.defaultColor
						}
					}else{   //有,
						let splitArray = course[i].courseZc.split(',')
						console.log('进来有,周次:',course[i].courseZc)
						if(splitArray.indexOf(String(_this.nowWeek)) != -1){
						   //交换算法,对课程进行随机取色，并且不会取到重复的,每次取数组都会减短
						   if( i == 0){
							   let  colorIndex = Math.floor(Math.random()*(_this.courseColorList.length - 1))
							   console.log("颜色的下标",colorIndex)
							   let  color = _this.courseColorList[colorIndex]
							   _this.courseColorList[colorIndex] = _this.courseColorList[_this.courseColorList.length - 1]
							   _this.courseColorList = _this.courseColorList.slice(0,_this.courseColorList.length - 1)
							   course[i].bg = color
						   }
						   let flag = false 
						   for(let k = i - 1  ; k >= 0 ;k--){
							   if(course[k].courseName == course[i].courseName && course[k].bg != _this.defaultColor){
								   course[i].bg = course[k].bg
								   flag = true
								   break;
							   }
						   }
						   if(!flag){
							   let  colorIndex = Math.floor(Math.random()*(_this.courseColorList.length - 1))
							   let  color = _this.courseColorList[colorIndex]
							   console.log("颜色的下标",colorIndex)
							   _this.courseColorList[colorIndex] = _this.courseColorList[_this.courseColorList.length - 1]
							   _this.courseColorList = _this.courseColorList.slice(0,_this.courseColorList.length - 1)
							   course[i].bg = color
						   }
						}else{
						   course[i].bg = _this.defaultColor
						}
					}
				}

				_this.colorCourse = course				
				console.log("-----------------------")
				// for(let i = 0; i < course.length ;i++){
				// 	console.log(course[i].courseName,course[i].bg)
				// }
				_this.doWithCourseRemoveOverlap();
			},
			
		    //当xq和jc都相等只是Zc不同的时候,优先选取有色的,如果都为非本周，即选最先的.
		    doWithCourseRemoveOverlap:function(){
				_this = this
				let course = _this.colorCourse
				let showCourse = []
				for(let i = 0; i < course.length ;i++){
				  let flag = false
				  
				  for(let j = 0; j < showCourse.length ;j++){
					  if(course[i].courseXq == showCourse[j].courseXq 
					  && course[i].courseJc == showCourse[j].courseJc)
					  {
						  flag = true 
						  if(course[i].bg != _this.defaultColor && showCourse[j].bg == _this.defaultColor ){
							  showCourse[j] = course[i]   //除非存在的非本周,而不存在的为本周才进行替换
							  continue; 
						  }else if(course[i].bg == _this.defaultColor && showCourse[j].bg == _this.defaultColor){
							      console.log("进来重叠并且都为非本周",course[i])
								  if(course[i].courseZc.indexOf(',')!=-1 && showCourse[j].courseZc.indexOf(',') != -1){
									  
									  let splitStringArray1 = course[i].courseZc.split(',')
									  let splitStringArray2 = showCourse[j].courseZc.split(',')
									  let splitIntArray1 = [];      //记录跟现在周数的差值的绝对值
									  let splitIntArray2 = [];
									  for(let k = 0 ; k < splitStringArray1.length ;k++){
										  let difference = Math.abs(_this.nowWeek - parseInt(splitStringArray1[k]))
										  splitIntArray1.push(difference)
									  }
									  for(let k = 0 ; k < splitStringArray2.length ;k++){
										  let difference = Math.abs(_this.nowWeek - parseInt(splitStringArray2[k]))
										  splitIntArray2.push(difference)
									  }
									  let min1 = Math.min.apply(null,splitIntArray1)
									  let min2 = Math.min.apply(null,splitIntArray1)
									  if(min1 < min2){
										  showCourse[j] = course[i]
									  }
								  }else if(course[i].courseZc.indexOf(',') !=-1 && showCourse[j].courseZc.indexOf(',') == -1){
									  let splitStringArray = course[i].courseZc.split(',')
									  let splitIntArray = [];      //记录跟现在周数的差值的绝对值
									  for(let k = 0 ; k < splitStringArray.length ;k++){
										  let difference = Math.abs(_this.nowWeek - parseInt(splitStringArray[k]))
										  splitIntArray.push(difference)
									  }
									  console.log(splitIntArray)
									  let min = Math.min.apply(null,splitIntArray)
									  let min2 = Math.abs(_this.nowWeek - parseInt(showCourse[j].courseZc))
									  console.log(min,min2)
									  if(min2 > min){
										  showCourse[j] = course[i]
									  }
								  }else if(course[i].courseZc.indexOf(',') == -1 && showCourse[j].courseZc.indexOf(',') != -1){
									  let splitStringArray = showCourse[j].courseZc.split(',')
									  let splitIntArray = [];      //记录跟现在周数的差值的绝对值
									  for(let k = 0 ; k < splitStringArray.length ;k++){
										  let difference = Math.abs(_this.nowWeek - parseInt(splitStringArray[k]))
										  splitIntArray.push(difference)
									  }
									  let min = Math.min.apply(null,splitIntArray)
									  let min2 = Math.abs(_this.nowWeek - parseInt(course[i].courseZc))
									  if(min > min2){
									  	 showCourse[j] = course[i]
									  }
								  }else {
									   let min1 = Math.abs(_this.nowWeek - parseInt(course[i].courseZc))
									   let min2 = Math.abs(_this.nowWeek - parseInt(showCourse[j].courseZc))
									   if(min2 > min1){
										   showCourse[j] = course[i]
									   }
								  }
						  }else if(course[i].bg != _this.defaultColor && showCourse[j].bg != _this.defaultColor){  
							  //进来重叠并且都为本周,特殊情况选课的时候,选择进行叠加
							  flag = false
						  }
					  }else{
						  flag = false; 
					  }
				  }
				   
				  if(!flag){
					  showCourse.push(course[i])
				  }
				} 
				
				_this.removeOverlapCourse = showCourse
				if(showCourse.length != 0){
				   	_this.note = showCourse[0].note	
				}
				console.log("用来遍历的课程",showCourse)
 			},
			
			
			
			
			//获取当前时间,并且对时间展示栏进行展示
			getDateTime:function(nowDate){
				_this = this
				let now = new Date(nowDate)
				let month = now.getMonth() + 1
				let day = now.getDay()
				let date = now.getDate() 
				let array = new Array('7','1','2','3','4','5','6')    //星期几
				let nowWeekDay = array[day]
				console.log(nowWeekDay)
				_this.month = month	
				
				// let nowTrueDateTime = now.getTime();
				let dayArrayList = []
				for(let i = 1; i <= 7 ;i++){
					let dayObject = {}
					if(i == parseInt(nowWeekDay)){            // i 等于周几的时候
						dayObject.bg = '#ADB2B8'
						dayObject.showMonthAndAay = month + '/' + date
					}else{
						// dayObject.bg = '#FFFFFF'    //没有直接用默认的颜色
						let   difference = i - parseInt(nowWeekDay)   //计算相差多少天
						if( difference > 0){
							let date2 = new Date(nowDate)
							date2 =  date2.setDate(date2.getDate() + difference)     //加上天数
						    date2 = new Date(date2)
							dayObject.showMonthAndAay = (date2.getMonth() + 1) + '/' + date2.getDate()
						}else{
							let date2 = new Date(nowDate)
							date2 =  date2.setDate(date2.getDate() - Math.abs(difference))     //减去天数
							console.log(date2)
							date2 = new Date(date2)
							dayObject.showMonthAndAay = (date2.getMonth() + 1) + '/' + date2.getDate() 
						}
					}
					switch(i){
					   case 1 :
					     dayObject.nowWeekDayValue = '周一'
						  break;
					   case 2 :
					     dayObject.nowWeekDayValue = '周二'
					   	  break;
						case 3 :
						  dayObject.nowWeekDayValue = '周三'
						   break;
						case 4 :
						  dayObject.nowWeekDayValue = '周四'
						   break;
						case 5:
						   dayObject.nowWeekDayValue = '周五'
						   break;
						case 6:
						    dayObject.nowWeekDayValue = '周六'
						    break;
						case 7:
						   dayObject.nowWeekDayValue = '周天'
						   break;
						default:
						   break;
					} 
					dayArrayList.push(dayObject)
				}
				console.log(dayArrayList)
				_this.dayArrayList = dayArrayList
			},
			
			//展示课程的具体信息,当有同时两节课都本周同节次的时候，也展示另外一个
			getCourseDetail:function(e){
				//console.log(e)
				let paraseZcCourse = _this.paraseZcCourse;
				let nowWeek = _this.nowWeek;
		        let number = e.courseNumber
				let name = e.courseName
				let teacher = e.courseTeacher
				let room = e.courseRoom
				let zc = e.courseZc
				uni.showModal({
					title:"课程信息",
					content: `课程号：${number}\r\n名称：${name}\r\n 老师:${teacher}\r\n教室:${room} \r\n周次:${zc}`,
					showCancel:false,
					confirmColor:'#33ff33'
				})
			},
			
			//切换周次信息
			changeNowWeek:function({detail}){
		        _this = this

				//颜色要重置,交换算法会减去颜色
				_this.courseColorList = [ '#ffcc33','#ff9933',
				                  '#ff6633','#ff9999','#48D1CC',
								  '#96CDCD','	#ADD8E6','#cc99cc',
								  '#cc66cc','#FF83FA',"#66ff99",
								  '#66ccff','#FFB90F','#FF6A6A',
								  '#C71585','#FFD39B','#5F9EA0',
								  '#8B4726','#DB7093']
				let changeWeek = detail
				let differenceDate = _this.recordNowWeek - changeWeek   //拿现在的记录的真实的周数的差比计算时间
				console.log(differenceDate)
				let date = new Date()
				_this.nowWeek = changeWeek
				if(differenceDate > 0){
					date.setDate(date.getDate() - (differenceDate*7))
					date = new Date(date)
				}else{
					date.setDate(date.getDate() + Math.abs(differenceDate*7))
					date = new Date(date)
				}
				console.log(date.getMonth()+1,date.getDate())
				_this.getDateTime(date)
				_this.doWithCourseZc() 
			},
			
			
			//切换学期信息,记得更新颜色 
			changeNowTerm:function({detail}){
				_this = this;
				_this.courseColorList = [ '#ffcc33','#ff9933',
				                  '#ff6633','#ff9999','#48D1CC',
								  '#96CDCD','#ADD8E6','#cc99cc',
								  '#cc66cc','#FF83FA',"#66ff99",
								  '#66ccff','#FFB90F','#FF6A6A',
								  '#C71585','#FFD39B','#5F9EA0',
								  '#8B4726','#DB7093']
								
				_this.nowTerm = detail
				let username = _this.user.username
				let url = `${queryCourse}?term=${detail}&studentUsername=${username}`;
				uni.showLoading({
					title:"查询中",
					success:()=>{
						uni.request({
							method:"GET",
							url:url
						})
						.then(res =>{
		                    console.log("res",res)
							if(res[1].statusCode == 200 && res[1].data.data != null){
							   _this.course = res[1].data.data	
							   _this.doWithCourseZc()
							}else{    
								_this.course = []
								_this.paraseZcCourse = []
								_this.colorCourse = []
								_this.removeOverlapCourse = []
								_this.note = ''
							}
							uni.hideLoading();
						})
						.catch(Error =>{ 
							uni.hideLoading()
							console.log("改变课表时网络错误信息",Error)
							uni.showToast({
								title:"网络错误",
								icon:"loading",
								duration:1000
							})
						})
					}
				})
			}

		},

	}
</script>

<style scoped>	
 @import url("./css/main.css");

</style>
