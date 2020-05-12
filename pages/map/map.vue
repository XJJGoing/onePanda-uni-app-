<template>
	<scroll-view class="map">
		<view class="content">
			<view class="header"></view>
			<view class="main">
				<!-- <view class="page-section page-section-gap">
				<map style="width: 100%; height: 800px;" 
				     :latitude="latitude" 
					 :longitude="longitude" 
					 :markers="covers"
			    >
				</map>
				 </view> -->
			</view>
			<view class="footer"></view>
		</view>
	</scroll-view>
</template>

<script>
	var _this
	export default {
		onLoad() {
			// this.getLocation()
		},
		data() {
			return {
			    id:0, // 使用 marker点击事件 需要填写id 119.369739,32.117438
				title: 'map',
				latitude: 32.117438,
				longitude: 119.369739, 
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}]
			}
		},
		methods: {
			//获取新校区地图定位
			getLocation(){
				_this = this
				uni.getLocation({
					type:'gcj02',
					success(res) {
					   let latitude = res.latitude
					   let longitude = res.longitude
					   uni.openLocation({
					   	  latitude:latitude,
						  longitude:longitude,
						  name:'江苏科技大学新校区',
						  scale:28
					   })
					}
				})
			}
		}
	}
</script>

<style>
@import url("./css/main.css");
</style>
