(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/studentGrade/studentGrade"],{

/***/ 61:
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/main.js?{"page":"pages%2FstudentGrade%2FstudentGrade"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _studentGrade = _interopRequireDefault(__webpack_require__(/*! ./pages/studentGrade/studentGrade.vue */ 62));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_studentGrade.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 62:
/*!****************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentGrade.vue?vue&type=template&id=5068ad86& */ 63);
/* harmony import */ var _studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentGrade.vue?vue&type=script&lang=js& */ 65);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentGrade.vue?vue&type=style&index=0&lang=css& */ 67);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/studentGrade/studentGrade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/*!***********************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=template&id=5068ad86& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./studentGrade.vue?vue&type=template&id=5068ad86& */ 64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_template_id_5068ad86___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 64:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=template&id=5068ad86& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 65:
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./studentGrade.vue?vue&type=script&lang=js& */ 66);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































var _API = __webpack_require__(/*! @/static/js/API.js */ 8); //
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
var _this;var _default = { data: function data() {return { user: {}, nowTerm: '2019-2020-1', termList: [{ text: '2019-2020-2', value: '2019-2020-2' }, { text: '2019-2020-1', value: '2019-2020-1' }, { text: '2018-2019-2', value: '2018-2019-2' }, { text: '2018-2019-1', value: '2018-2019-1' }, { text: '2017-2018-2', value: '2017-2018-2' }, { text: '2017-2018-1', value: '2017-2018-1' }], gradeList: [], //用来遍历展示的
      activeNumber: '', //默认展开的折叠面板
      termGradePoint: '', //学期绩点
      yearGradePoint: '' //学年绩点
    };}, onLoad: function onLoad() {_this = this;_this.getUserAndTerm().then(function () {_this.getStudentGrade(_this.nowTerm);}).catch(function (Error) {console.log("获取失败");});}, methods: { //获取学生的信息
    getUserAndTerm: function getUserAndTerm() {_this = this;return new Promise(function (resolver, reject) {uni.getStorage({
          key: "user",
          success: function success(res) {
            _this.user = res.data;
            uni.getStorage({
              key: "nowTerm",
              success: function success(res) {
                _this.nowTerm = res.data;
                resolver();
              } });

          },
          fail: function fail() {
            uni.reLaunch({
              url: '/pages/login/login' });

            reject();
          } });

      });
    },


    //根据学期查询学生的成绩,并且调用获取同学年另外一个学期的函数
    getStudentGrade: function getStudentGrade(term) {
      _this = this;
      var username = _this.user.username;
      var url = "".concat(_API.queryGrade, "?studentUsername=").concat(username, "&term=").concat(term);
      uni.showLoading({
        title: "查询中",
        success: function success() {
          uni.request({
            url: url,
            method: 'GET' }).

          then(function (res) {

            //这里我也不知道为什么会查某个学期会得到整年的，但是计算某个学期又是对的，可能是组件的原因
            console.log("查询到的成绩的格式", res);
            uni.hideLoading();
            if (res[1].statusCode == 200) {
              var gradeList = res[1].data.data;
              _this.gradeList = gradeList;
              console.log(gradeList);
              _this.calculate(gradeList).
              then(function (res1) {
                if (res1 == "NaN") {
                  _this.termGradePoint = '本学期暂无成绩或未评教';
                } else {
                  _this.termGradePoint = res1;
                  _this.getOtherTerm(term);
                }
              }).
              catch(function (Error) {
                console.log(Error.message);
              });
            }
          }).
          catch(function (Error) {
            console.log(Error.message);
            uni.showToast({
              title: "后台出现错误",
              icon: "loading",
              duration: 1000 });

          });
        } });

    },


    //改变学期
    changeTerm: function changeTerm(event) {
      _this = this;
      var nowTerm = event.detail;
      _this.nowTerm = nowTerm;
      _this.getStudentGrade(nowTerm);
    },




    //改变折叠面板
    onChange: function onChange(_ref) {var detail = _ref.detail;
      _this = this;
      _this.activeNumber = detail;
    },

    //获取学年的另一个学期
    getOtherTerm: function getOtherTerm(term) {
      _this = this;
      var nowTerm = term;
      var studentUsername = _this.user.username;
      var splitArray = nowTerm.split('-');
      var requestTerm = '';
      if (splitArray[splitArray.length - 1] == '1') {
        requestTerm = splitArray[0] + "-" + splitArray[1] + "-" + '2';
      } else {
        requestTerm = splitArray[0] + "-" + splitArray[1] + "-" + '1';
      }
      var url = "".concat(_API.queryGrade, "?studentUsername=").concat(studentUsername, "&term=").concat(requestTerm);
      uni.request({
        url: url,
        method: 'GET' }).

      then(function (res) {
        console.log("查询到的学年的另一个学期的成绩", res[1].data.data);
        if (res[1].statusCode == 200) {
          var list = [];
          for (var i = 0; i < res[1].data.data.length; i++) {
            list.push(res[1].data.data[i]);
          }
          var calculateList = list.concat(_this.gradeList);
          console.log("calculateList", calculateList);
          _this.calculate(calculateList).
          then(function (res1) {
            _this.yearGradePoint = res1;
          }).
          catch(function (Error) {
            console.log("计算错误");
          });
        }
      }).
      catch(function (Error) {
        console.log(Error.message);
        uni.showLoading({
          title: "后台错误",
          icon: "loading",
          duration: 1000 });

      });
    },



    //计算绩点并且返回值
    calculate: function calculate(gradeList) {
      return new Promise(function (resolver, reject) {
        var afterGradeList = []; //除去体育课任选
        for (var i = 0; i < gradeList.length; i++) {
          if (gradeList[i].gradeName == '体育1' || gradeList[i].gradeName == '体育2' ||
          gradeList[i].gradeName == '体育3' || gradeList[i].gradeName == '体育4' ||
          gradeList[i].gradeKind == '任选' || gradeList[i].gradeName == '三年级体育专项')
          {

          } else {
            switch (gradeList[i].score) {
              case '优':
                gradeList[i].score = 95;
                break;
              case '良':
                gradeList[i].score = 85;
                break;
              case '中':
                gradeList[i].score = 75;
                break;
              case '及格':
                gradeList[i].score = 65;
                break;
              case '不及格':
                gradeList[i].score = 0;
                break;
              case '通过':
                gradeList[i].score = 75;
                break;
              case '不通过':
                gradeList[i].score = 0;
                break;
              default:
                break;}

            if (gradeList[i].score >= 60) {
              afterGradeList.push(gradeList[i]);
            }
          }
        }

        var allMolecule = 0.0; //分子上的总合
        var allDenominator = 0.0; //分母上的总合
        for (var _i = 0; _i < afterGradeList.length; _i++) {
          var credit = parseFloat(afterGradeList[_i].gradeCredit);
          var grade = parseFloat(afterGradeList[_i].score) / 10.0 - 5.0;
          allMolecule = allMolecule + credit * grade;
          allDenominator = allDenominator + credit;
        }
        var gradePoint = (allMolecule / allDenominator).toFixed(2);
        resolver(gradePoint);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 67:
/*!*************************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./studentGrade.vue?vue&type=style&index=0&lang=css& */ 68);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_studentGrade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/studentGrade/studentGrade.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[61,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS52dWU/OGE3MyIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS52dWU/ZjY2MiIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS52dWU/YjVkMiIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS52dWU/ZTRmZSIsInVuaS1hcHA6Ly8vcGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS52dWUiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL3BhZ2VzL3N0dWRlbnRHcmFkZS9zdHVkZW50R3JhZGUudnVlPzY0ZGMiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL3BhZ2VzL3N0dWRlbnRHcmFkZS9zdHVkZW50R3JhZGUudnVlP2Y4ODciXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLGlIO0FBQ0FBLFVBQVUsQ0FBQ0MscUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlIO0FBQ3pIO0FBQ2dFO0FBQ0w7QUFDYTs7O0FBR3hFO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBMDBCLENBQWdCLDB5QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29DOTFCLDREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsVSxlQUVBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsUUFEQSxFQUVBLHNCQUZBLEVBR0EsV0FDQSw2Q0FEQSxFQUVBLDZDQUZBLEVBR0EsNkNBSEEsRUFJQSw2Q0FKQSxFQUtBLDZDQUxBLEVBTUEsNkNBTkEsQ0FIQSxFQVdBLGFBWEEsRUFXQTtBQUNBLHNCQVpBLEVBWUE7QUFDQSx3QkFiQSxFQWFBO0FBQ0Esd0JBZEEsQ0FjQTtBQWRBLE1BbUJBLENBckJBLEVBc0JBLE1BdEJBLG9CQXNCQSxDQUNBLGFBQ0EsdUJBQ0EsSUFEQSxDQUNBLGFBQ0EscUNBQ0EsQ0FIQSxFQUlBLEtBSkEsQ0FJQSxrQkFDQSxvQkFDQSxDQU5BLEVBT0EsQ0EvQkEsRUFnQ0EsV0FFQTtBQUNBLGtCQUhBLDRCQUdBLENBQ0EsYUFDQSxnREFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUxBOztBQU9BLFdBWEE7QUFZQTtBQUNBO0FBQ0EsdUNBREE7O0FBR0E7QUFDQSxXQWpCQTs7QUFtQkEsT0FwQkE7QUFxQkEsS0ExQkE7OztBQTZCQTtBQUNBLG1CQTlCQSwyQkE4QkEsSUE5QkEsRUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEseUJBRkE7O0FBSUEsY0FKQSxDQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQVJBO0FBU0EsbUJBVEEsQ0FTQTtBQUNBO0FBQ0EsZUFYQTtBQVlBO0FBQ0EsV0ExQkE7QUEyQkEsZUEzQkEsQ0EyQkE7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSw2QkFGQTtBQUdBLDRCQUhBOztBQUtBLFdBbENBO0FBbUNBLFNBdENBOztBQXdDQSxLQTFFQTs7O0FBNkVBO0FBQ0EsY0E5RUEsc0JBOEVBLEtBOUVBLEVBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5GQTs7Ozs7QUF3RkE7QUFDQSxZQXpGQSwwQkF5RkE7QUFDQTtBQUNBO0FBQ0EsS0E1RkE7O0FBOEZBO0FBQ0EsZ0JBL0ZBLHdCQStGQSxJQS9GQSxFQStGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHFCQUZBOztBQUlBLFVBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBREEsQ0FDQTtBQUNBO0FBQ0EsV0FIQTtBQUlBLGVBSkEsQ0FJQTtBQUNBO0FBQ0EsV0FOQTtBQU9BO0FBQ0EsT0FyQkE7QUFzQkEsV0F0QkEsQ0FzQkE7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx5QkFGQTtBQUdBLHdCQUhBOztBQUtBLE9BN0JBO0FBOEJBLEtBeklBOzs7O0FBNklBO0FBQ0EsYUE5SUEscUJBOElBLFNBOUlBLEVBOElBO0FBQ0E7QUFDQSxnQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBLElBQ0EsK0JBREE7QUFFQSx3Q0FGQSxJQUVBLG1DQUZBO0FBR0E7O0FBRUEsV0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQXZCQTs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkF4Q0EsQ0F3Q0E7QUFDQSxpQ0F6Q0EsQ0F5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FsREE7QUFtREEsS0FsTUEsRUFoQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUF1ckMsQ0FBZ0IsdW1DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBM3NDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvc3R1ZGVudEdyYWRlL3N0dWRlbnRHcmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9zdHVkZW50R3JhZGUvc3R1ZGVudEdyYWRlLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0dWRlbnRHcmFkZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OGFkODYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zdHVkZW50R3JhZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdHVkZW50R3JhZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3N0dWRlbnRHcmFkZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zdHVkZW50R3JhZGUvc3R1ZGVudEdyYWRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc3R1ZGVudEdyYWRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY4YWQ4NiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3N0dWRlbnRHcmFkZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc3R1ZGVudEdyYWRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHNjcm9sbC12aWV3IGNsYXNzPVwic3R1ZGVudEdyYWRlXCI+XG5cdFx0IDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0IDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG5cdFx0XHRcdCA8dmFuLWRyb3Bkb3duLW1lbnUgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMzlCNTRBO1wiPlxuXHRcdFx0XHQgICA8dmFuLWRyb3Bkb3duLWl0ZW0gQGNoYW5nZT1cImNoYW5nZVRlcm0oKVwiIDp2YWx1ZT1cIm5vd1Rlcm1cIiA6b3B0aW9ucz1cInRlcm1MaXN0XCIgLz5cblx0XHRcdFx0IDwvdmFuLWRyb3Bkb3duLW1lbnU+XG5cdFx0XHQgPC92aWV3PlxuXHRcdFx0IDx2aWV3IGNsYXNzPVwibWFpblwiPlxuXHRcdFx0XHQgPHZpZXcgY2xhc3M9XCJtYWluLWhlYWRlclwiPlxuXHRcdFx0XHRcdCA8dGV4dD7lrabmnJ/nu6nngrkgOiB7e3Rlcm1HcmFkZVBvaW50fX08L3RleHQ+XG5cdFx0XHRcdFx0IDx0ZXh0PuWtpuW5tOe7qeeCuSA6IHt7eWVhckdyYWRlUG9pbnR9fTwvdGV4dD5cblx0XHRcdFx0IDwvdmlldz4gXG5cdFx0XHRcdCA8dmlldyBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHRcdCA8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBncmFkZUxpc3RcIiA6a2V5ID0gXCJpbmRleFwiPlxuXHRcdFx0XHRcdFx0IDx2YW4tY29sbGFwc2UgOnZhbHVlPVwiYWN0aXZlTnVtYmVyXCIgQGNoYW5nZT1cIm9uQ2hhbmdlKClcIiBhY2NvcmRpb24+XG5cdFx0XHRcdFx0XHQgICAgICAgPHZhbi1jb2xsYXBzZS1pdGVtIDp0aXRsZT1cIml0ZW0uZ3JhZGVOYW1lXCIgOnZhbHVlPVwiaXRlbS5zY29yZVwiIDpuYW1lPVwiaXRlbS5ncmFkZU51bWJlclwiPlxuXHRcdFx0XHRcdFx0ICAgICAgICAgPHZpZXc+6K++56iL5Y+3Ont7aXRlbS5ncmFkZU51bWJlcn19PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdCA8dmlldz7ogIPmoLjmlrnlvI86e3tpdGVtLmV4YW1NZXRob2R9fTwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQgPHZpZXc+6K++56iL57G75Z6LOnt7aXRlbS5ncmFkZUtpbmR9fTwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQgPHZpZXc+5a2m5YiGOnt7aXRlbS5ncmFkZUNyZWRpdH19PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdCA8dmlldz7lrabml7Y6e3tpdGVtLmdyYWRlVGltZX19PC92aWV3PlxuXHRcdFx0XHRcdFx0ICAgICAgIDwvdmFuLWNvbGxhcHNlLWl0ZW0+XG5cdFx0XHRcdFx0XHQgPC92YW4tY29sbGFwc2U+XG5cdFx0XHRcdFx0IDwvdmlldz5cblx0XHRcdFx0IDwvdmlldz5cdCBcblx0XHRcdCA8L3ZpZXc+XG5cdFx0XHQgPHZpZXcgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdFx0XG5cdFx0XHQgPC92aWV3PlxuXHRcdCA8L3ZpZXc+XG5cdDwvc2Nyb2xsLXZpZXc+XHRcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBfdGhpc1xuXHRpbXBvcnQge3F1ZXJ5R3JhZGV9IGZyb20gJ0Avc3RhdGljL2pzL0FQSS5qcydcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR1c2VyOnt9LFxuXHRcdFx0XHRub3dUZXJtOicyMDE5LTIwMjAtMScsXG5cdFx0XHRcdHRlcm1MaXN0Oltcblx0XHRcdFx0XHR7IHRleHQ6ICcyMDE5LTIwMjAtMicsIHZhbHVlOiAnMjAxOS0yMDIwLTInIH0sXG5cdFx0XHRcdFx0eyB0ZXh0OiAnMjAxOS0yMDIwLTEnLCB2YWx1ZTogJzIwMTktMjAyMC0xJyB9LFxuXHRcdFx0XHRcdHsgdGV4dDogJzIwMTgtMjAxOS0yJywgdmFsdWU6ICcyMDE4LTIwMTktMicgfSxcblx0XHRcdFx0XHR7IHRleHQ6ICcyMDE4LTIwMTktMScsIHZhbHVlOiAnMjAxOC0yMDE5LTEnIH0sXG5cdFx0XHRcdFx0eyB0ZXh0OiAnMjAxNy0yMDE4LTInLCB2YWx1ZTogJzIwMTctMjAxOC0yJyB9LFxuXHRcdFx0XHRcdHsgdGV4dDogJzIwMTctMjAxOC0xJywgdmFsdWU6ICcyMDE3LTIwMTgtMScgfSxcblx0XHRcdFx0XSxcblx0XHRcdFx0Z3JhZGVMaXN0OltdLCAgICAgICAgLy/nlKjmnaXpgY3ljoblsZXnpLrnmoRcblx0XHRcdFx0YWN0aXZlTnVtYmVyOicnLCAgICAvL+m7mOiupOWxleW8gOeahOaKmOWPoOmdouadv1xuXHRcdFx0ICAgIHRlcm1HcmFkZVBvaW50OicnLCAgICAgLy/lrabmnJ/nu6nngrlcblx0XHQgICAgICAgIHllYXJHcmFkZVBvaW50OicnICAgICAgLC8v5a2m5bm057up54K5XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHRfdGhpcyA9IHRoaXNcblx0XHRcdF90aGlzLmdldFVzZXJBbmRUZXJtKClcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHQgICBfdGhpcy5nZXRTdHVkZW50R3JhZGUoX3RoaXMubm93VGVybSlcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goRXJyb3IgPT57XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6I635Y+W5aSx6LSlXCIpXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0XG5cdFx0XHQvL+iOt+WPluWtpueUn+eahOS/oeaBr1xuXHRcdFx0Z2V0VXNlckFuZFRlcm0oKXtcblx0XHRcdFx0X3RoaXMgPSB0aGlzXG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZXIscmVqZWN0KT0+e1xuXHRcdFx0XHRcdHVuaS5nZXRTdG9yYWdlKHtcblx0XHRcdFx0XHRcdGtleTpcInVzZXJcIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6KHJlcyk9Pntcblx0XHRcdFx0XHRcdFx0X3RoaXMudXNlciA9IHJlcy5kYXRhXG5cdFx0XHRcdFx0XHQgICB1bmkuZ2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0XHQgICBcdCAga2V5Olwibm93VGVybVwiLFxuXHRcdFx0XHRcdFx0XHQgIHN1Y2Nlc3M6KHJlcykgPT57XG5cdFx0XHRcdFx0XHRcdCAgXHRfdGhpcy5ub3dUZXJtID0gcmVzLmRhdGEgXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZXIoKVxuXHRcdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZmFpbDooKT0+e1xuXHRcdFx0XHRcdFx0XHR1bmkucmVMYXVuY2goe1xuXHRcdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8v5qC55o2u5a2m5pyf5p+l6K+i5a2m55Sf55qE5oiQ57upLOW5tuS4lOiwg+eUqOiOt+WPluWQjOWtpuW5tOWPpuWkluS4gOS4quWtpuacn+eahOWHveaVsFxuXHRcdFx0Z2V0U3R1ZGVudEdyYWRlKHRlcm0pe1xuXHRcdFx0XHRcdF90aGlzID0gdGhpc1xuXHRcdFx0XHRcdGxldCB1c2VybmFtZSA9IF90aGlzLnVzZXIudXNlcm5hbWVcblx0XHRcdFx0XHRsZXQgdXJsID0gYCR7cXVlcnlHcmFkZX0/c3R1ZGVudFVzZXJuYW1lPSR7dXNlcm5hbWV9JnRlcm09JHt0ZXJtfWBcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0dGl0bGU6XCLmn6Xor6LkuK1cIixcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOnVybCxcblx0XHRcdFx0XHRcdFx0XHRtZXRob2Q6J0dFVCdcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHQvL+i/memHjOaIkeS5n+S4jeefpemBk+S4uuS7gOS5iOS8muafpeafkOS4quWtpuacn+S8muW+l+WIsOaVtOW5tOeahO+8jOS9huaYr+iuoeeul+afkOS4quWtpuacn+WPiOaYr+WvueeahO+8jOWPr+iDveaYr+e7hOS7tueahOWOn+WboFxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5p+l6K+i5Yiw55qE5oiQ57up55qE5qC85byPXCIscmVzKVxuXHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0XHRcdFx0aWYocmVzWzFdLnN0YXR1c0NvZGUgPT0gMjAwICl7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgZ3JhZGVMaXN0ID0gcmVzWzFdLmRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5ncmFkZUxpc3QgPSBncmFkZUxpc3Rcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjb25zb2xlLmxvZyhncmFkZUxpc3QpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmNhbGN1bGF0ZShncmFkZUxpc3QpICAgICBcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzMSA9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihyZXMxID09IFwiTmFOXCIpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMudGVybUdyYWRlUG9pbnQgPSAn5pys5a2m5pyf5pqC5peg5oiQ57up5oiW5pyq6K+E5pWZJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIF90aGlzLnRlcm1HcmFkZVBvaW50ID0gcmVzMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIF90aGlzLmdldE90aGVyVGVybSh0ZXJtKVx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuY2F0Y2goRXJyb3I9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhFcnJvci5tZXNzYWdlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNhdGNoKEVycm9yID0+e1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEVycm9yLm1lc3NhZ2UpXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIuWQjuWPsOWHuueOsOmUmeivr1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjpcImxvYWRpbmdcIixcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOjEwMDBcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRcblx0ICAgICAgICAvL+aUueWPmOWtpuacn1xuXHRcdFx0Y2hhbmdlVGVybShldmVudCl7XG5cdFx0XHRcdF90aGlzID0gdGhpc1xuXHRcdFx0XHRsZXQgbm93VGVybSA9IGV2ZW50LmRldGFpbFxuXHRcdFx0XHRfdGhpcy5ub3dUZXJtID0gbm93VGVybVxuXHRcdFx0XHRfdGhpcy5nZXRTdHVkZW50R3JhZGUobm93VGVybSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8v5pS55Y+Y5oqY5Y+g6Z2i5p2/XG5cdFx0XHRvbkNoYW5nZSh7ZGV0YWlsfSl7XG5cdFx0XHRcdF90aGlzID0gdGhpc1xuXHRcdFx0XHRfdGhpcy5hY3RpdmVOdW1iZXIgPSBkZXRhaWxcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8v6I635Y+W5a2m5bm055qE5Y+m5LiA5Liq5a2m5pyfXG5cdFx0XHRnZXRPdGhlclRlcm0odGVybSl7XG5cdFx0XHRcdF90aGlzID0gdGhpc1xuXHRcdFx0ICAgIGxldCBub3dUZXJtID0gdGVybVxuXHRcdFx0XHRsZXQgc3R1ZGVudFVzZXJuYW1lID0gX3RoaXMudXNlci51c2VybmFtZVxuXHRcdFx0XHRsZXQgc3BsaXRBcnJheSA9IG5vd1Rlcm0uc3BsaXQoJy0nKVxuXHRcdFx0XHRsZXQgcmVxdWVzdFRlcm0gPSAnJ1xuXHRcdFx0XHRpZihzcGxpdEFycmF5W3NwbGl0QXJyYXkubGVuZ3RoIC0xXSA9PSAnMScpe1xuXHRcdFx0XHRcdHJlcXVlc3RUZXJtID0gc3BsaXRBcnJheVswXSArIFwiLVwiICsgc3BsaXRBcnJheVsxXSArIFwiLVwiICsgJzInXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHJlcXVlc3RUZXJtID0gc3BsaXRBcnJheVswXSArIFwiLVwiICsgc3BsaXRBcnJheVsxXSArIFwiLVwiICsgJzEnXG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHVybCA9IGAke3F1ZXJ5R3JhZGV9P3N0dWRlbnRVc2VybmFtZT0ke3N0dWRlbnRVc2VybmFtZX0mdGVybT0ke3JlcXVlc3RUZXJtfWBcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDp1cmwsXG5cdFx0XHRcdFx0bWV0aG9kOidHRVQnXG5cdFx0XHRcdH0pIFxuXHRcdFx0XHQudGhlbihyZXMgPT57XG5cdFx0XHRcdCAgICBjb25zb2xlLmxvZyhcIuafpeivouWIsOeahOWtpuW5tOeahOWPpuS4gOS4quWtpuacn+eahOaIkOe7qVwiLHJlc1sxXS5kYXRhLmRhdGEpXG5cdFx0XHRcdFx0aWYocmVzWzFdLnN0YXR1c0NvZGUgPT0gMjAwKXtcblx0XHRcdFx0XHRcdGxldCBsaXN0ID0gW11cblx0XHRcdFx0XHQgICAgZm9yKGxldCBpID0gMDtpIDwgcmVzWzFdLmRhdGEuZGF0YS5sZW5ndGg7aSsrKXtcblx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKHJlc1sxXS5kYXRhLmRhdGFbaV0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgY2FsY3VsYXRlTGlzdCA9IGxpc3QuY29uY2F0KF90aGlzLmdyYWRlTGlzdCk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNhbGN1bGF0ZUxpc3RcIixjYWxjdWxhdGVMaXN0KVxuXHRcdFx0XHRcdFx0X3RoaXMuY2FsY3VsYXRlKGNhbGN1bGF0ZUxpc3QpXG5cdFx0XHRcdFx0XHQudGhlbihyZXMxID0+e1xuXHRcdFx0XHRcdFx0XHRfdGhpcy55ZWFyR3JhZGVQb2ludCA9IHJlczFcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuY2F0Y2goRXJyb3IgPT57XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6K6h566X6ZSZ6K+vXCIpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChFcnJvciA9Pntcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhFcnJvci5tZXNzYWdlKVxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0XHR0aXRsZTpcIuWQjuWPsOmUmeivr1wiLFxuXHRcdFx0XHRcdFx0aWNvbjpcImxvYWRpbmdcIixcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjEwMDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdC8v6K6h566X57up54K55bm25LiU6L+U5Zue5YC8XG5cdFx0XHRjYWxjdWxhdGUoZ3JhZGVMaXN0KXtcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlcixyZWplY3QpID0+IHtcblx0XHRcdFx0XHRsZXQgYWZ0ZXJHcmFkZUxpc3QgPSBbXSAgICAgIC8v6Zmk5Y675L2T6IKy6K++5Lu76YCJXG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMCA7IGkgPCBncmFkZUxpc3QubGVuZ3RoIDtpKysgKXtcblx0XHRcdFx0XHQgICBpZihncmFkZUxpc3RbaV0uZ3JhZGVOYW1lID09ICfkvZPogrIxJyB8fCBncmFkZUxpc3RbaV0uZ3JhZGVOYW1lID09ICfkvZPogrIyJ1xuXHRcdFx0XHRcdCAgICAgIHx8Z3JhZGVMaXN0W2ldLmdyYWRlTmFtZSA9PSAn5L2T6IKyMycgfHwgZ3JhZGVMaXN0W2ldLmdyYWRlTmFtZSA9PSAn5L2T6IKyNCdcblx0XHRcdFx0XHRcdCAgfHxncmFkZUxpc3RbaV0uZ3JhZGVLaW5kID09ICfku7vpgIknIHx8IGdyYWRlTGlzdFtpXS5ncmFkZU5hbWUgPT0gJ+S4ieW5tOe6p+S9k+iCsuS4k+mhuSdcblx0XHRcdFx0XHQgICApe1xuXHRcdFx0XHRcdFx0ICAgICBcblx0XHRcdFx0XHQgICB9ZWxzZXtcblx0XHRcdFx0XHRcdCAgIHN3aXRjaChncmFkZUxpc3RbaV0uc2NvcmUpe1xuXHRcdFx0XHRcdFx0XHQgICBjYXNlICfkvJgnOlxuXHRcdFx0XHRcdFx0XHQgICBncmFkZUxpc3RbaV0uc2NvcmUgPSA5NVxuXHRcdFx0XHRcdFx0XHQgICAgIGJyZWFrO1xuXHRcdFx0XHRcdFx0XHQgICBjYXNlICfoia8nOlxuXHRcdFx0XHRcdFx0XHQgICAgIGdyYWRlTGlzdFtpXS5zY29yZSA9IDg1IFxuXHRcdFx0XHRcdFx0XHQgICAgICBicmVhaztcblx0XHRcdFx0XHRcdFx0ICAgY2FzZSAn5LitJzpcblx0XHRcdFx0XHRcdFx0ICAgICAgZ3JhZGVMaXN0W2ldLnNjb3JlID0gNzVcblx0XHRcdFx0XHRcdFx0XHQgICBicmVhaztcblx0XHRcdFx0XHRcdFx0ICAgY2FzZSAn5Y+K5qC8Jzpcblx0XHRcdFx0XHRcdFx0ICAgICAgZ3JhZGVMaXN0W2ldLnNjb3JlID0gNjVcblx0XHRcdFx0XHRcdFx0XHQgICBicmVhaztcblx0XHRcdFx0XHRcdFx0ICAgY2FzZSAn5LiN5Y+K5qC8Jzpcblx0XHRcdFx0XHRcdFx0ICAgICAgIGdyYWRlTGlzdFtpXS5zY29yZSA9IDBcblx0XHRcdFx0XHRcdFx0XHQgICBicmVhaztcblx0XHRcdFx0XHRcdFx0ICAgY2FzZSAn6YCa6L+HJzpcblx0XHRcdFx0XHRcdFx0ICAgICAgIGdyYWRlTGlzdFtpXS5zY29yZSA9IDc1XG5cdFx0XHRcdFx0XHRcdFx0ICAgYnJlYWs7XG5cdFx0XHRcdFx0XHRcdCAgIGNhc2UgICfkuI3pgJrov4cnOlxuXHRcdFx0XHRcdFx0XHQgICAgICAgZ3JhZGVMaXN0W2ldLnNjb3JlID0gMFxuXHRcdFx0XHRcdFx0XHRcdCAgIGJyZWFrO1xuXHRcdFx0XHRcdFx0XHQgICBkZWZhdWx0OiBcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrOyAgXG5cdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0XHQgICBpZihncmFkZUxpc3RbaV0uc2NvcmUgPj0gNjApe1xuXHRcdFx0XHRcdFx0XHQgICAgYWZ0ZXJHcmFkZUxpc3QucHVzaChncmFkZUxpc3RbaV0pICAgIFxuXHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGV0IGFsbE1vbGVjdWxlID0gMC4wICAgIC8v5YiG5a2Q5LiK55qE5oC75ZCIXG5cdFx0XHRcdFx0bGV0IGFsbERlbm9taW5hdG9yID0gMC4wICAvL+WIhuavjeS4iueahOaAu+WQiFxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDAgOyBpIDwgYWZ0ZXJHcmFkZUxpc3QubGVuZ3RoIDtpKyspe1xuXHRcdFx0XHRcdCAgIGxldCBjcmVkaXQgPSBwYXJzZUZsb2F0KGFmdGVyR3JhZGVMaXN0W2ldLmdyYWRlQ3JlZGl0KVxuXHRcdFx0XHRcdCAgIGxldCBncmFkZSA9IChwYXJzZUZsb2F0KGFmdGVyR3JhZGVMaXN0W2ldLnNjb3JlKS8xMC4wKSAtIDUuMFxuXHRcdFx0XHRcdCAgIGFsbE1vbGVjdWxlID0gYWxsTW9sZWN1bGUgKyAoY3JlZGl0ICogZ3JhZGUpXG5cdFx0XHRcdFx0ICAgYWxsRGVub21pbmF0b3IgPSBhbGxEZW5vbWluYXRvciArIGNyZWRpdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgZ3JhZGVQb2ludCA9IChhbGxNb2xlY3VsZS9hbGxEZW5vbWluYXRvcikudG9GaXhlZCgyKVxuXHRcdFx0XHRcdHJlc29sdmVyKGdyYWRlUG9pbnQpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0IHVybChcIi4vY3NzL21haW4uY3NzXCIpO1xuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vc3R1ZGVudEdyYWRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3N0dWRlbnRHcmFkZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDA1MDIzMjQ0MzFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==