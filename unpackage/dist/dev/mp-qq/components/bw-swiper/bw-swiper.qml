<view class="swiperContent"><swiper class="{{['screen-swiper',swiperType&&displayMultipleItems==1&&!vertical&&!fullScreen?'cardSwiper':'']}}" style="{{'height:'+(swiperHeight+'px')+';'}}" indicator-dots="{{indicatorDots}}" indicator-active-color="{{indicatorActiveColor}}" indicator-color="{{indicatorColor}}" autoplay="{{autoplay&&flag}}" current="{{current}}" interval="{{interval}}" duration="{{duration}}" circular="{{circular}}" vertical="{{vertical}}" previous-margin="{{previousMargin}}" next-margin="{{nextMargin}}" display-multiple-items="{{displayMultipleItems}}" skip-hidden-item-layout="{{skipHiddenItemLayout}}" data-event-opts="{{[['change',[['change',['$event']]]],['animationfinish',[['animationfinish',['$event']]]]]}}" bindchange="__e" bindanimationfinish="__e"><block qq:for="{{swiperList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><swiper-item data-event-opts="{{[['tap',[['clickItem',[index]]]]]}}" class="{{['swiper-item',cardCur==index&&displayMultipleItems==1&&!vertical&&!fullScreen?'cur':'']}}" bindtap="__e"><block qq:if="{{item[imageKey]&&!item[videoKey]}}"><view><image style="{{'height:'+(swiperHeight+'px')+';'}}" src="{{item[imageKey]}}"></image><block qq:if="{{textTip}}"><text class="swiperText" style="{{'bottom:'+((swiperType?textStyleBottom+12:textStyleBottom)+'%')+';'+('right:'+(textStyleRight+'%')+';')+('color:'+(textStyleColor)+';')+('background:'+(textStyleBgcolor)+';')+('font-size:'+(textStyleSize+'upx')+';')}}">{{item[textKey]}}</text></block></view></block><block qq:if="{{item[videoKey]}}"><view><video style="{{'height:'+(swiperHeight+'px')+';'}}" src="{{item[videoKey]}}" autoplay="{{videoAutoplay}}" loop="{{true}}" objectFit="cover" data-event-opts="{{[['play',[['play',['$event']]]],['pause',[['pause',['$event']]]]]}}" muted="{{true}}" bindplay="__e" bindpause="__e"></video></view></block></swiper-item></block></swiper></view>