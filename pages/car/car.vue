<template>
	<scroll-view class="car">
		<view class="content">
			<view class="header"></view>
			<view class="main">
				<image :src="carImgUrl" @click="preViewCarImg()"/>
			</view>
			<view class="footer"></view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				carImgUrl:'https://one-panda-1257831346.cos.ap-shanghai.myqcloud.com/other/car1.jpg'
			}
		},
		methods: {
			preViewCarImg(){
				let imgList = [this.carImgUrl]
				uni.previewImage({
					urls:imgList
				})
			}
		}
	}
</script>

<style> 
@import url("./css/main.css");
</style>
