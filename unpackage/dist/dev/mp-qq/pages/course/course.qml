<scroll-view class="course data-v-b1db4d34"><view class="content data-v-b1db4d34"><view class="title data-v-b1db4d34"><van-dropdown-menu vue-id="b1db74a0-1" data-com-type="wx" class="data-v-b1db4d34" bind:__l="__l" vue-slots="{{['default']}}"><van-dropdown-item vue-id="{{('b1db74a0-2')+','+('b1db74a0-1')}}" value="{{nowWeek}}" options="{{weekList}}" data-event-opts="{{[['^change',[['changeNowWeek']]]]}}" data-com-type="wx" bind:change="__e" class="data-v-b1db4d34" bind:__l="__l"></van-dropdown-item><van-dropdown-item vue-id="{{('b1db74a0-3')+','+('b1db74a0-1')}}" value="{{nowTerm}}" options="{{termList}}" data-event-opts="{{[['^change',[['changeNowTerm']]]]}}" data-com-type="wx" bind:change="__e" class="data-v-b1db4d34" bind:__l="__l"></van-dropdown-item></van-dropdown-menu></view><view class="main data-v-b1db4d34"><view class="main-header data-v-b1db4d34"><view class="main-header-month data-v-b1db4d34"><text class="data-v-b1db4d34">{{month}}</text><text class="data-v-b1db4d34">月</text></view><block qq:for="{{dayArrayList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block class="data-v-b1db4d34"><view style="{{'background-color:'+(item.bg)+';'}}" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{item.nowWeekDayValue}}</text><text class="data-v-b1db4d34">{{item.showMonthAndAay}}</text></view></block></block></view><view class="main-center data-v-b1db4d34"><view class="data-v-b1db4d34"><m-left vue-id="b1db74a0-4" class="data-v-b1db4d34" bind:__l="__l"></m-left></view><block qq:if="{{user.isAssistant==0}}"><block class="data-v-b1db4d34"><view class="main-center-content data-v-b1db4d34"><block qq:if="{{course.length!=0}}"><block class="data-v-b1db4d34"><block qq:for="{{xqArray}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block class="data-v-b1db4d34"><view class="data-v-b1db4d34"><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==1&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="true" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==2&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==3&&course.courseXq==item}}"><view style="{{'width:90rpx;'+('background-color:'+(course.bg)+';')}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==4&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==5&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==6&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view><view class="data-v-b1db4d34"><block qq:for="{{removeOverlapCourse}}" qq:for-item="course" qq:for-index="index2" qq:key="index2"><block class="data-v-b1db4d34"><block qq:if="{{course.courseJc==7&&course.courseXq==item}}"><view style="{{'background-color:'+(course.bg)+';'}}" plain="{{true}}" data-event-opts="{{[['tap',[['getCourseDetail',['$0'],[[['removeOverlapCourse','',index2]]]]]]]}}" bindtap="__e" class="data-v-b1db4d34"><text class="data-v-b1db4d34">{{''+course.courseName+''}}<block qq:if="{{course.courseName!='体育1'&&course.courseName!='体育2'&&course.courseName!='体育3'&&course.courseName!='体育4'&&course.courseName!='三年级体育专项'}}"><block class="data-v-b1db4d34">{{''+('\\n@'+course.courseRoom)+''}}</block></block></text></view></block></block></block></view></view></block></block></block></block><block qq:else><block class="data-v-b1db4d34"><text class="data-v-b1db4d34">1、无本学期课表信息
								   2、尚未评教
								   尚未评教可复制链接到浏览器打开进行评教
								   ps: mac使用Safari浏览器 window使用IE浏览器</text><text selectable="true" class="data-v-b1db4d34">http://jwgl.just.edu.cn:8080/jsxsd/</text></block></block><view class="main-center-course-note data-v-b1db4d34"><textarea disabled="true" class="data-v-b1db4d34">{{''+note+''}}</textarea></view></view></block></block><block qq:else><block class="data-v-b1db4d34"><view class="main-teacher-info data-v-b1db4d34"><block qq:if="{{user.isAssistant==1}}"><block class="data-v-b1db4d34">您是学业导师或者辅导员的身份,
							无课表信息查询您专业学生成绩
							情况可以到服务处。</block></block></view></block></block></view></view><view class="footer data-v-b1db4d34"></view></view></scroll-view>