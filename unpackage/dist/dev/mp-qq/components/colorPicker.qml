<view class="content data-v-06a86766"><topbar class="head data-v-06a86766" bind:cancel="__e" bind:save="__e" vue-id="06a853b0-1" data-event-opts="{{[['^cancel',[['cancel']]],['^save',[['confirm']]]]}}" bind:__l="__l"></topbar><view class="color-picker data-v-06a86766"><view class="color-name data-v-06a86766">{{colorName}}</view><view class="show-view data-v-06a86766" style="{{'background:'+(colorName)+';'}}"></view><view data-event-opts="{{[['touchstart',[['pickHue',['$event']]]],['touchmove',[['pickHue',['$event']]]]]}}" class="hue-view data-v-06a86766" bindtouchstart="__e" bindtouchmove="__e"><text class="anchor data-v-06a86766" style="{{'left:'+(hueView.anchorLeft+'px')+';'}}"></text></view><view data-event-opts="{{[['touchstart',[['pickColor',['$event']]]],['touchmove',[['pickColor',['$event']]]]]}}" class="color-view data-v-06a86766" style="{{'background-color:'+('hsl('+hueView.H+', 100%, 50%)')+';'}}" bindtouchstart="__e" bindtouchmove="__e"><text class="anchor data-v-06a86766" style="{{'top:'+(colorView.anchorTop+'px')+';'+('left:'+(colorView.anchorLeft+'px')+';')}}"></text></view></view></view>