<view class="main-list oBorder"><input class="main-input" type="{{_type}}" maxlength="{{maxlength}}" placeholder="{{placeholder}}" password="{{type==='password'&&!showPassword}}" data-event-opts="{{[['input',[['onInput',['$event']]]]]}}" value="{{value}}" bindinput="__e"/><block wx:if="{{_isShowPass&&type==='password'&&!_isShowCode}}"><image data-event-opts="{{[['tap',[['showPass',['$event']]]]]}}" class="{{['img cuIcon',showPassword?'cuIcon-attention':'cuIcon-attentionforbid']}}" bindtap="__e"></image></block><block wx:if="{{_isShowCode&&!_isShowPass}}"><view data-event-opts="{{[['tap',[['setCode',['$event']]]]]}}" class="{{['vercode',[(second>0)?'vercode-run':'']]}}" bindtap="__e">{{getVerCodeSecond}}</view></block></view>