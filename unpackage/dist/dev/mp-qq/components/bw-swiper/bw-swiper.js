(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/bw-swiper/bw-swiper"],{

/***/ 206:
/*!***************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bw-swiper.vue?vue&type=template&id=995cc1b4& */ 207);
/* harmony import */ var _bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bw-swiper.vue?vue&type=script&lang=js& */ 209);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bw-swiper.vue?vue&type=style&index=0&lang=css& */ 211);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/bw-swiper/bw-swiper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 207:
/*!**********************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=template&id=995cc1b4& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=template&id=995cc1b4& */ 208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_template_id_995cc1b4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 208:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=template&id=995cc1b4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 209:
/*!****************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=script&lang=js& */ 210);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 =
{
  name: 'bw-swiper',
  created: function created() {
    var that = this;
    if (this.fullScreen) {
      uni.getSystemInfo({
        success: function success(e) {
          that.swiperHeight = e.screenHeight - 44;
        } });
    }
  },
  mounted: function mounted() {var _this = this;
    if (!this.fullScreen) {
      var query = uni.createSelectorQuery().in(this);
      query.select('.swiper-item').boundingClientRect(function (data) {
        _this.swiperHeight = data.width / _this.w_h;
      }).exec();
    }
  },
  props: {
    fullScreen: { // 是否全屏
      type: Boolean,
      default: false },

    swiperList: { // 滑块视图容器数据
      type: Array,
      default: function _default() {
        return [];
      } },

    swiperType: { // false => 全屏限高轮播图 true => 卡塔式轮播图
      type: Boolean,
      default: false },

    videoAutoplay: { // true =>自动播放
      type: Boolean,
      default: false },

    videoKey: { // 视频映射的键
      type: String,
      default: 'src' },

    imageKey: { //  图片映射的键
      type: String,
      default: 'img' },

    textKey: { //   文字说明映射的键
      type: String,
      default: 'text' },

    textTip: { // 图片文字说明 false => 隐藏
      type: Boolean,
      default: false },

    textStyleSize: { // 图片文字大小
      type: Number,
      default: 24 },

    textStyleBottom: { // 图片文字位置
      type: Number,
      default: 5 },

    textStyleRight: { // 图片文字位置
      type: Number,
      default: 5 },

    textStyleColor: { // 图片文字颜色
      type: String,
      default: '#ffffff' },

    textStyleBgcolor: { // 图片文字背景色
      type: String,
      default: 'transparent' },

    w_h: { //宽高比 推荐 w/h => 2
      type: Number,
      default: 2 },

    skipHiddenItemLayout: { //是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 
      type: Boolean,
      default: false },

    displayMultipleItems: { //同时显示的滑块数量
      type: Number,
      default: 1 },

    nextMargin: { // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 头条小程序不支持
      type: String,
      default: '0px' },

    previousMargin: { //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值头条小程序不支持
      type: String,
      default: '0px' },

    vertical: { //滑动方向是否为纵向 卡牌  不支持纵向以及同时显示的2块以上滑块数量
      type: Boolean,
      default: false },

    circular: { // 是否采用衔接滑动
      type: Boolean,
      default: true },

    duration: { // 滑动动画时长
      type: Number,
      default: 400 },

    interval: { // 自动切换时间间隔
      type: Number,
      default: 2500 },

    current: { // 当前所在滑块的 index
      type: Number,
      default: 0 },

    autoplay: { // 是否自动切换
      type: Boolean,
      default: true },

    indicatorColor: { // 指示点颜色
      type: String,
      default: '#CCCCCC' },

    indicatorActiveColor: { // 当前选中的指示点颜色
      type: String,
      default: '#ffffff' },

    indicatorDots: { // 是否显示面板指示点
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      flag: true,
      cardCur: 0,
      swiperHeight: 300 };

  },
  computed: {},


  methods: {
    play: function play() {
      this.flag = false;
    },
    pause: function pause() {
      this.flag = true;
    },
    clickItem: function clickItem(index) {
      if (this.swiperList.length > 0) {
        this.$emit('clickItem', this.swiperList[index]);
      }
    },
    change: function change(e) {
      this.$emit('change', e);
    },
    animationfinish: function animationfinish(e) {
      this.cardCur = e.detail.current;
      this.$emit('animationfinish', e);
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 211:
/*!************************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=style&index=0&lang=css& */ 212);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bw_swiper_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/bw-swiper/bw-swiper.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vY29tcG9uZW50cy9idy1zd2lwZXIvYnctc3dpcGVyLnZ1ZT83NTcxIiwid2VicGFjazovLy8vVm9sdW1lcy9NYWNpbnRvc2ggSERfZGF0YS9tZS9wcm9qZWN0cy9vbmVQYW5kYS11bmktYXBwLS9jb21wb25lbnRzL2J3LXN3aXBlci9idy1zd2lwZXIudnVlPzYxOWQiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL2NvbXBvbmVudHMvYnctc3dpcGVyL2J3LXN3aXBlci52dWU/OGViYyIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vY29tcG9uZW50cy9idy1zd2lwZXIvYnctc3dpcGVyLnZ1ZT8xNjM4IiwidW5pLWFwcDovLy9jb21wb25lbnRzL2J3LXN3aXBlci9idy1zd2lwZXIudnVlIiwid2VicGFjazovLy8vVm9sdW1lcy9NYWNpbnRvc2ggSERfZGF0YS9tZS9wcm9qZWN0cy9vbmVQYW5kYS11bmktYXBwLS9jb21wb25lbnRzL2J3LXN3aXBlci9idy1zd2lwZXIudnVlP2Q5YWEiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL2NvbXBvbmVudHMvYnctc3dpcGVyL2J3LXN3aXBlci52dWU/M2YxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYTs7O0FBR3JFO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUs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ImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYnctc3dpcGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OTVjYzFiNCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2J3LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2J3LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnctc3dpcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnctc3dpcGVyL2J3LXN3aXBlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2J3LXN3aXBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTk1Y2MxYjQmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9idy1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2J3LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwic3dpcGVyQ29udGVudFwiPlxuXHRcdDxzd2lwZXIgIEBjaGFuZ2U9XCJjaGFuZ2VcIlxuXHRcdEBhbmltYXRpb25maW5pc2g9XCJhbmltYXRpb25maW5pc2hcIlxuXHRcdDppbmRpY2F0b3ItZG90cz1cImluZGljYXRvckRvdHNcIlxuXHRcdDppbmRpY2F0b3ItYWN0aXZlLWNvbG9yPVwiaW5kaWNhdG9yQWN0aXZlQ29sb3JcIlxuXHRcdDppbmRpY2F0b3ItY29sb3I9XCJpbmRpY2F0b3JDb2xvclwiXG5cdFx0OmF1dG9wbGF5PVwiKGF1dG9wbGF5ICYmIGZsYWcpXCJcblx0XHQ6Y3VycmVudD1cImN1cnJlbnRcIlxuXHRcdDppbnRlcnZhbD1cImludGVydmFsXCJcblx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiXG5cdFx0OmNpcmN1bGFyPVwiY2lyY3VsYXJcIlxuXHRcdDp2ZXJ0aWNhbD1cInZlcnRpY2FsXCJcblx0XHQ6cHJldmlvdXMtbWFyZ2luPVwicHJldmlvdXNNYXJnaW5cIlxuXHRcdDpuZXh0LW1hcmdpbj1cIm5leHRNYXJnaW5cIlxuXHRcdDpkaXNwbGF5LW11bHRpcGxlLWl0ZW1zPVwiZGlzcGxheU11bHRpcGxlSXRlbXNcIlxuXHRcdDpza2lwLWhpZGRlbi1pdGVtLWxheW91dD1cInNraXBIaWRkZW5JdGVtTGF5b3V0XCJcblx0XHQ6c3R5bGU9XCJ7J2hlaWdodCc6c3dpcGVySGVpZ2h0KydweCd9XCJcblx0XHQ6Y2xhc3M9XCIoc3dpcGVyVHlwZSAmJiBkaXNwbGF5TXVsdGlwbGVJdGVtcyA9PTEgJiYgIXZlcnRpY2FsICYmICFmdWxsU2NyZWVuKT8nY2FyZFN3aXBlcic6JycgXCJcblx0XHRjbGFzcz1cInNjcmVlbi1zd2lwZXJcIlxuXHRcdD5cblx0XHRcdDxzd2lwZXItaXRlbSBjbGFzcz1cInN3aXBlci1pdGVtXCIgIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHN3aXBlckxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6Y2xhc3M9XCIoY2FyZEN1cj09aW5kZXggJiYgZGlzcGxheU11bHRpcGxlSXRlbXMgPT0xICYmICF2ZXJ0aWNhbCAmJiAgIWZ1bGxTY3JlZW4pPydjdXInOicnXCIgIEB0YXA9XCJjbGlja0l0ZW0oaW5kZXgpXCI+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtW2ltYWdlS2V5XSAmJiAhaXRlbVt2aWRlb0tleV1cIj5cblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW1baW1hZ2VLZXldXCIgIDpzdHlsZT1cInsnaGVpZ2h0Jzpzd2lwZXJIZWlnaHQrJ3B4J31cIj48L2ltYWdlPlxuXHRcdFx0XHQgICAgPHRleHQgdi1pZj1cInRleHRUaXBcIiBjbGFzcz1cInN3aXBlclRleHRcIiA6c3R5bGU9XCJ7XG5cdFx0XHRcdFx0XHQnYm90dG9tJzooc3dpcGVyVHlwZT8odGV4dFN0eWxlQm90dG9tKzEyKTp0ZXh0U3R5bGVCb3R0b20pKyclJyxcblx0XHRcdFx0XHRcdCdyaWdodCc6dGV4dFN0eWxlUmlnaHQrJyUnLFxuXHRcdFx0XHRcdFx0J2NvbG9yJzp0ZXh0U3R5bGVDb2xvcixcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kJzp0ZXh0U3R5bGVCZ2NvbG9yLFxuXHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6dGV4dFN0eWxlU2l6ZSsndXB4J1xuXHRcdFx0XHRcdH1cIj57e2l0ZW1bdGV4dEtleV19fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbVt2aWRlb0tleV1cIj5cblx0XHRcdFx0PHZpZGVvIDpzcmM9XCJpdGVtW3ZpZGVvS2V5XVwiIEBwbGF5PVwicGxheVwiIEBwYXVzZT1cInBhdXNlXCIgOnN0eWxlPVwieydoZWlnaHQnOnN3aXBlckhlaWdodCsncHgnfVwiIGF1dG9wbGF5IGxvb3AgbXV0ZWQgOmF1dG9wbGF5PVwidmlkZW9BdXRvcGxheVwiIG9iamVjdEZpdD1cImNvdmVyXCI+PC92aWRlbz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC9zd2lwZXItaXRlbT5cblx0XHQ8L3N3aXBlcj5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6J2J3LXN3aXBlcicsXG5cdFx0Y3JlYXRlZDpmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0aWYodGhpcy5mdWxsU2NyZWVuKXtcblx0XHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0dGhhdC5zd2lwZXJIZWlnaHQgPSBlLnNjcmVlbkhlaWdodCAtNDRcblx0XHRcdFx0fX0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkOmZ1bmN0aW9uKCl7XG5cdFx0XHRpZighdGhpcy5mdWxsU2NyZWVuKXtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xuXHRcdFx0XHRxdWVyeS5zZWxlY3QoJy5zd2lwZXItaXRlbScpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcblx0XHRcdFx0XHR0aGlzLnN3aXBlckhlaWdodCA9IGRhdGEud2lkdGgvdGhpcy53X2g7XG5cdFx0XHRcdH0pLmV4ZWMoKTtcblx0XHRcdH1cdFxuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZ1bGxTY3JlZW46eyAvLyDmmK/lkKblhajlsY9cblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0c3dpcGVyTGlzdDp7IC8vIOa7keWdl+inhuWbvuWuueWZqOaVsOaNrlxuXHRcdFx0XHR0eXBlOkFycmF5LFxuXHRcdFx0XHRkZWZhdWx0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIFtdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzd2lwZXJUeXBlOnsgIC8vIGZhbHNlID0+IOWFqOWxj+mZkOmrmOi9ruaSreWbviB0cnVlID0+IOWNoeWhlOW8j+i9ruaSreWbvlxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0F1dG9wbGF5OnsgLy8gdHJ1ZSA9PuiHquWKqOaSreaUvlxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR2aWRlb0tleTp7ICAvLyDop4bpopHmmKDlsITnmoTplK5cblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J3NyYydcblx0XHRcdH0sXG5cdFx0XHRpbWFnZUtleTp7IC8vICDlm77niYfmmKDlsITnmoTplK5cblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J2ltZydcblx0XHRcdH0sXG5cdFx0XHR0ZXh0S2V5OnsgLy8gICDmloflrZfor7TmmI7mmKDlsITnmoTplK5cblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J3RleHQnXG5cdFx0XHR9LFxuXHRcdFx0dGV4dFRpcDp7IC8vIOWbvueJh+aWh+Wtl+ivtOaYjiBmYWxzZSA9PiDpmpDol49cblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0dGV4dFN0eWxlU2l6ZTp7IC8vIOWbvueJh+aWh+Wtl+Wkp+Wwj1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDoyNFxuXHRcdFx0fSxcblx0XHRcdHRleHRTdHlsZUJvdHRvbTp7IC8vIOWbvueJh+aWh+Wtl+S9jee9rlxuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDo1XG5cdFx0XHR9LFxuXHRcdFx0dGV4dFN0eWxlUmlnaHQ6eyAvLyDlm77niYfmloflrZfkvY3nva5cblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6NVxuXHRcdFx0fSxcblx0XHRcdHRleHRTdHlsZUNvbG9yOnsgLy8g5Zu+54mH5paH5a2X6aKc6ImyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicjZmZmZmZmJ1xuXHRcdFx0fSxcblx0XHRcdHRleHRTdHlsZUJnY29sb3I6eyAvLyDlm77niYfmloflrZfog4zmma/oibJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J3RyYW5zcGFyZW50J1xuXHRcdFx0fSxcblx0XHRcdHdfaDp7ICAvL+WuvemrmOavlCDmjqjojZAgdy9oID0+IDJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6MlxuXHRcdFx0fSxcblx0XHRcdHNraXBIaWRkZW5JdGVtTGF5b3V0OnsgLy/mmK/lkKbot7Pov4fmnKrmmL7npLrnmoTmu5HlnZfluIPlsYDvvIzorr7kuLogdHJ1ZSDlj6/kvJjljJblpI3mnYLmg4XlhrXkuIvnmoTmu5HliqjmgKfog73vvIzkvYbkvJrkuKLlpLHpmpDol4/nirbmgIHmu5HlnZfnmoTluIPlsYDkv6Hmga8gXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGRpc3BsYXlNdWx0aXBsZUl0ZW1zOnsgLy/lkIzml7bmmL7npLrnmoTmu5HlnZfmlbDph49cblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6MVxuXHRcdFx0fSxcblx0XHRcdG5leHRNYXJnaW46eyAvLyDlkI7ovrnot53vvIzlj6/nlKjkuo7pnLLlh7rlkI7kuIDpobnnmoTkuIDlsI/pg6jliIbvvIzmjqXlj5cgcHgg5ZKMIHJweCDlgLwg5aS05p2h5bCP56iL5bqP5LiN5pSv5oyBXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicwcHgnXG5cdFx0XHR9LFxuXHRcdFx0cHJldmlvdXNNYXJnaW46ey8v5YmN6L656Led77yM5Y+v55So5LqO6Zyy5Ye65YmN5LiA6aG555qE5LiA5bCP6YOo5YiG77yM5o6l5Y+XIHB4IOWSjCBycHgg5YC85aS05p2h5bCP56iL5bqP5LiN5pSv5oyBXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicwcHgnXG5cdFx0XHR9LFxuXHRcdFx0dmVydGljYWw6eyAvL+a7keWKqOaWueWQkeaYr+WQpuS4uue6teWQkSDljaHniYwgIOS4jeaUr+aMgee6teWQkeS7peWPiuWQjOaXtuaYvuekuueahDLlnZfku6XkuIrmu5HlnZfmlbDph49cblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Y2lyY3VsYXI6eyAvLyDmmK/lkKbph4fnlKjooZTmjqXmu5Hliqhcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OnRydWVcblx0XHRcdH0sXG5cdFx0XHRkdXJhdGlvbjp7IC8vIOa7keWKqOWKqOeUu+aXtumVv1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDo0MDBcblx0XHRcdH0sXG5cdFx0XHRpbnRlcnZhbDp7IC8vIOiHquWKqOWIh+aNouaXtumXtOmXtOmalFxuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDoyNTAwXG5cdFx0XHR9LFxuXHRcdFx0Y3VycmVudDp7IC8vIOW9k+WJjeaJgOWcqOa7keWdl+eahCBpbmRleFxuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDowXG5cdFx0XHR9LFxuXHRcdFx0YXV0b3BsYXk6eyAvLyDmmK/lkKboh6rliqjliIfmjaJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OnRydWVcblx0XHRcdH0sXG5cdFx0XHRpbmRpY2F0b3JDb2xvcjp7IC8vIOaMh+ekuueCueminOiJslxuXHRcdFx0XHR0eXBlOlN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDonI0NDQ0NDQydcblx0XHRcdH0sXG5cdFx0XHRpbmRpY2F0b3JBY3RpdmVDb2xvcjogeyAvLyDlvZPliY3pgInkuK3nmoTmjIfnpLrngrnpopzoibJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcblx0XHRcdH0sXG5cdFx0XHRpbmRpY2F0b3JEb3RzOiB7IC8vIOaYr+WQpuaYvuekuumdouadv+aMh+ekuueCuVxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmxhZzp0cnVlLFxuXHRcdFx0XHRjYXJkQ3VyOjAsXG5cdFx0XHRcdHN3aXBlckhlaWdodDozMDBcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXB1dGVkOntcblx0XHRcdFxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cGxheTpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmZsYWcgPSBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHBhdXNlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuZmxhZyA9IHRydWVcblx0XHRcdH0sXG5cdFx0XHRjbGlja0l0ZW06ZnVuY3Rpb24oaW5kZXgpe1xuXHRcdFx0XHRpZih0aGlzLnN3aXBlckxpc3QubGVuZ3RoPjApe1xuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrSXRlbScsdGhpcy5zd2lwZXJMaXN0W2luZGV4XSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGNoYW5nZTpmdW5jdGlvbihlKXtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJyxlKVxuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbmZpbmlzaDpmdW5jdGlvbihlKXtcblx0XHRcdFx0dGhpcy5jYXJkQ3VyID0gZS5kZXRhaWwuY3VycmVudDtcblx0XHRcdFx0dGhpcy4kZW1pdCgnYW5pbWF0aW9uZmluaXNoJyxlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jYXJkU3dpcGVyIC5zd2lwZXItaXRlbXtcblx0d2lkdGg6ODYlIWltcG9ydGFudDsgXG5cdG92ZXJmbG93OiBpbml0aWFsO1xufVxuLmNhcmRTd2lwZXIgLnN3aXBlci1pdGVtIHZpZXd7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiAxMHVweDtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjkzLDAuOCk7XG5cdG9wYWNpdHk6IDAuNztcblx0dHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbiAwcztcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luLWxlZnQ6OC4xJTtcbn1cbi5jYXJkU3dpcGVyIC5jdXIgIHZpZXd7XG5cdHRyYW5zZm9ybTogIGluaXRpYWw7XG5cdG9wYWNpdHk6IDE7XG5cdHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4gMHM7XG59XG4uc3dpcGVyLWl0ZW0gdmlld3tcblx0aGVpZ2h0OjEwMCU7XG5cdHdpZHRoOjEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXJUZXh0e1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdHotaW5kZXg6Mjtcblx0Ym9yZGVyLXJhZGl1czogNHVweDtcblx0cGFkZGluZzowIDR1cHg7XG59XG4uc2NyZWVuLXN3aXBlciBpbWFnZXtcblx0d2lkdGg6MTAwJTtcbn1cbi5zY3JlZW4tc3dpcGVyIHZpZGVvLFxuLnN3aXBlci1pdGVtIHZpZGVvIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDEwMCU7XG59IFxuLnN3aXBlckNvbnRlbnR7XG5cdHdpZHRoOjEwMCU7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9idy1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYnctc3dpcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMDUwMjMyMzA5M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bw-swiper/bw-swiper-create-component',
    {
        'components/bw-swiper/bw-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(206))
        })
    },
    [['components/bw-swiper/bw-swiper-create-component']]
]);
