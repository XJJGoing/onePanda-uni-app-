<view class="login"><view class="content"><view class="header"><image src="{{logoImage}}"></image></view><view class="main"><w-input bind:input="__e" vue-id="1" type="text" maxlength="20" placeholder="学号" value="{{username}}" data-event-opts="{{[['^input',[['__set_model',['','username','$event',[]]]]]]}}" bind:__l="__l"></w-input><w-input bind:input="__e" vue-id="2" type="password" maxlength="50" placeholder="教务密码" value="{{password}}" data-event-opts="{{[['^input',[['__set_model',['','password','$event',[]]]]]]}}" bind:__l="__l"></w-input></view><w-button vue-id="3" text="登 录" rotate="{{isRotate}}" data-event-opts="{{[['tap',[['startLogin']]]]}}" bindtap="__e" bind:__l="__l"></w-button><view class="footer"><navigator url="./teacheLogin" open-type="navigate"><text>教师入口>>>>></text></navigator></view><view class="introduce"><text>copyRight © 2020 OnePanda</text></view></view></view>