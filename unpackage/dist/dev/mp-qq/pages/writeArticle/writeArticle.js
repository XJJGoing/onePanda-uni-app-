(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/writeArticle/writeArticle"],{

/***/ 154:
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/main.js?{"page":"pages%2FwriteArticle%2FwriteArticle"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _writeArticle = _interopRequireDefault(__webpack_require__(/*! ./pages/writeArticle/writeArticle.vue */ 155));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_writeArticle.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 155:
/*!****************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeArticle.vue?vue&type=template&id=0202a566& */ 156);
/* harmony import */ var _writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeArticle.vue?vue&type=script&lang=js& */ 158);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeArticle.vue?vue&type=style&index=0&lang=css& */ 160);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["render"],
  _writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/writeArticle/writeArticle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 156:
/*!***********************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=template&id=0202a566& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeArticle.vue?vue&type=template&id=0202a566& */ 157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_template_id_0202a566___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 157:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=template&id=0202a566& ***!
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

/***/ 158:
/*!*****************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeArticle.vue?vue&type=script&lang=js& */ 159);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 159:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=script&lang=js& ***!
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
//
//
//
var _this;var myeditor = function myeditor() {__webpack_require__.e(/*! require.ensure | components/robin-editor/editor */ "components/robin-editor/editor").then((function () {return resolve(__webpack_require__(/*! @/components/robin-editor/editor.vue */ 228));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { data: function data() {return { user: '', //作者的
      author: '', //文章的作者
      title: '', //文章的标题
      articleAbstract: '', //文章的摘要
      articleKind1: '渣男', articleKind2: '渣女', articleContent: '', //html文本
      kinds: ['渣男', '渣女', '吐槽', '表白', '美文', '分享', '日常', '科技', '编程', '运动', '倾述', '恋爱'], index1: 0, index2: 1, fileList: [] //只上传单张目前
    };}, components: { myeditor: myeditor }, onLoad: function onLoad() {this.getUser();}, methods: { //获取用户的信息和上次编辑保存的文章
    getUser: function getUser() {_this = this;uni.getStorage({ key: 'user', success: function success(res) {_this.user = res.data;uni.getStorage({ key: 'saveArticle', success: function success(res) {_this.articleContent = res.data.articleContent;_this.author = res.data.author;_this.title = res.data.title;_this.articleAbstract = res.data.articleAbstract;_this.articleKind1 = res.data.articleKind1;_this.articleKind2 = res.data.articleKind2;_this.index1 = res.data.index1;_this.index2 = res.data.index2;}, fail: function fail() {} });}, fail: function fail() {uni.reLaunch({ url: '/pages/login/login' });} });}, //改变文章的类型
    bindPickerChange1: function bindPickerChange1(e) {var index1 = e.detail.value;this.index1 = index1;this.articleKind1 = this.kinds[parseInt(index1)];}, bindPickerChange2: function bindPickerChange2(e) {var index2 = e.detail.value;this.index2 = index2;this.articleKind2 = this.kinds[parseInt(index2)];}, //输入文章的标题
    inputTitle: function inputTitle(e) {this.title = e.detail;}, //输入作者的名字
    inputAuthor: function inputAuthor(e) {this.author = e.detail;}, //输入摘要
    inputArticleAbstract: function inputArticleAbstract(e) {this.articleAbstract = e.detail;},

    //选择配图
    afterRead: function afterRead(event) {
      var file = {};
      file.url = event.detail.file.path;
      file.name = '配图';
      this.fileList.push(file);
    },

    //删除上传的配图
    deleteLayout: function deleteLayout() {
      this.fileList = [];
    },



    /*文本编译区*/

    //这个cancel用处不大，所以这里用作了发表文章用的函数
    submitArticle: function submitArticle(e) {
      _this = this;
      if (_this.author && _this.title && _this.articleAbstract &&
      _this.articleKind1 && _this.articleKind2 &&
      _this.fileList.length != 0 && _this.articleContent)
      {

        var uploadTask = uni.uploadFile({
          url: _API.articleInsert,
          filePath: _this.fileList[0].url,
          name: 'layouts',
          header: {
            "Content-Type": "multipart/form-data",
            "Referer": '' },

          formData: {
            userId: _this.user.id,
            author: _this.author,
            title: _this.title,
            articleAbstract: _this.articleAbstract,
            articleKind1: _this.articleKind1,
            articleKind2: _this.articleKind2,
            articleContent: _this.articleContent },

          success: function success(res) {
            if (res.statusCode == 200) {
              uni.removeStorage({
                key: 'saveArticle' });

            }
          },
          fail: function fail(Error) {
            console.log("网络错误", Error);
            uni.showToast({
              title: '网络错误，发表失败',
              icon: 'loading',
              duration: 1000 });

          } });


        uploadTask.onProgressUpdate(function (res) {
          var progress = res.progress;
          uni.showLoading({
            title: "\u53D1\u8868\u8FDB\u5EA6:".concat(progress) });

          if (progress == 100) {
            uni.hideLoading();
            uni.showToast({
              title: '发表成功,等待审核人员审核',
              icon: 'success',
              duration: 2000,
              success: function success() {
                _this.author = '';
                _this.title = '';
                _this.articleAbstract = '';
                _this.articleKind1 = '';
                _this.articleKind2 = '';
                _this.articleContent = '';
                _this.fileList = [];
                _this.articleContent = '';

              } });

          }
        });

      } else {
        uni.showToast({
          title: '亲！记得先点击保存再发表哦！还有信息不能为空',
          duration: 2000,
          icon: 'none' });

      }
    },

    //保存文本,并且存放到storage中,下次进行来时候就读取
    saveEditor: function saveEditor(e) {
      var html = e.html;
      console.log("文本编译器", html);
      this.articleContent = html;
      uni.showToast({
        title: '保存成功',
        icon: 'none',
        duration: 500,
        success: function success() {
          uni.setStorage({
            key: 'saveArticle',
            data: {
              articleContent: _this.articleContent,
              author: _this.author,
              title: _this.title,
              articleAbstract: _this.articleAbstract,
              articleKind1: _this.articleKind1,
              articleKind2: _this.articleKind2,
              index1: _this.index1,
              index2: _this.index2,
              fileList: _this.fileList } });


        } });

    },

    //将图片放入存储桶后返回地址
    imageUploader: function imageUploader(img, callback) {
      uni.showLoading({
        title: '录入中' }).

      then(function () {
        var uploadTast = uni.uploadFile({
          url: _API.insertArticleContentImg,
          filePath: img,
          name: 'file',
          header: {
            "Content-Type": "mutipart/form-data",
            "Referer": '' },

          success: function success(res) {
            console.log("返回的地址", res);
            uni.hideLoading();
            if (res.statusCode == 200) {
              var resData = JSON.parse(res.data);
              callback(resData.data);
            }
          },
          fail: function fail(Error) {
            uni.showToast({
              title: '网络错误,选择图片失败',
              icon: 'loading',
              duration: 1000 });

          } });

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 160:
/*!*************************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeArticle.vue?vue&type=style&index=0&lang=css& */ 161);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeArticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 161:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/pages/writeArticle/writeArticle.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[154,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS52dWU/YWJjMiIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS52dWU/MmI1OSIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS52dWU/ZGVlZSIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vcGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS52dWU/ZDJlNyIsInVuaS1hcHA6Ly8vcGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS52dWUiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL3BhZ2VzL3dyaXRlQXJ0aWNsZS93cml0ZUFydGljbGUudnVlPzliYmEiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL3BhZ2VzL3dyaXRlQXJ0aWNsZS93cml0ZUFydGljbGUudnVlP2RhNTAiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLGtIO0FBQ0FBLFVBQVUsQ0FBQ0MscUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Ozs7Ozs7Ozs7QUNBM3NDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvd3JpdGVBcnRpY2xlL3dyaXRlQXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy93cml0ZUFydGljbGUvd3JpdGVBcnRpY2xlLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3dyaXRlQXJ0aWNsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDIwMmE1NjYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93cml0ZUFydGljbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93cml0ZUFydGljbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3dyaXRlQXJ0aWNsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy93cml0ZUFydGljbGUvd3JpdGVBcnRpY2xlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vd3JpdGVBcnRpY2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMjAyYTU2NiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3dyaXRlQXJ0aWNsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vd3JpdGVBcnRpY2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ3cml0ZUFydGljbGVcIj5cblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDx2YW4tY2VsbC1ncm91cD5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8IS0t5q2k5a2X56ym6ZqU56m655SoLS0+XG5cdFx0XHRcdFx0PHZhbi1maWVsZFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9XCJ0cnVlXCJcblx0XHRcdFx0XHQgLz5cblx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdDx2YW4tZmllbGRcblx0XHRcdFx0XHQgIDp2YWx1ZT1cInRpdGxlXCJcblx0XHRcdFx0XHQgIGxhYmVsPVwi5qCH6aKYOlwiXG5cdFx0XHRcdFx0ICBAY2hhbmdlPVwiaW5wdXRUaXRsZVwiXG5cdFx0XHRcdFx0ICBwbGFjZWhvbGRlcj1cIuaWh+eroOeahOagh+mimFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dmFuLWZpZWxkXG5cdFx0XHRcdFx0ICA6dmFsdWU9XCJhdXRob3JcIlxuXHRcdFx0XHRcdCAgQGNoYW5nZT1cImlucHV0QXV0aG9yXCJcblx0XHRcdFx0XHQgIGxhYmVsPVwi5L2c6ICFOlwiXG5cdFx0XHRcdFx0ICBwbGFjZWhvbGRlcj1cIueUqOadpeWxleekuueahOeslOWQjVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0ICAgPHZhbi1maWVsZFxuXHRcdFx0XHRcdDp2YWx1ZT1cImFydGljbGVBYnN0cmFjdFwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImlucHV0QXJ0aWNsZUFic3RyYWN0XCJcblx0XHRcdFx0XHRsYWJlbD1cIuaRmOimgTpcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLmlofnq6DnmoTmkZjopoFcIlxuXHRcdFx0XHRcdGF1dG9zaXplXG5cdFx0XHRcdCAgIC8+XG5cdFx0XHRcdDwvdmFuLWNlbGwtZ3JvdXA+IFxuXHRcdFx0XHRcblx0XHRcdFx0ICA8dmlldyBjbGFzcz1cImhlYWRlci1hcnRpY2xlLWtpbmRcIj5cblx0XHRcdFx0XHQgICA8dmFuLWRpdmlkZXIgLz5cblx0XHRcdFx0XHRcdDxwaWNrZXIgQGNoYW5nZT1cImJpbmRQaWNrZXJDaGFuZ2UxXCIgOnZhbHVlPVwiaW5kZXgxXCIgOnJhbmdlPVwia2luZHNcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktaW5wdXRcIj7mlofnq6DnsbvlnovkuIAgOiB7e2tpbmRzW2luZGV4MV19fTwvdmlldz5cblx0XHRcdFx0XHRcdDwvcGlja2VyPlxuXHRcdFx0XHRcdFx0PHZhbi1kaXZpZGVyIC8+XG5cdFx0XHRcdFx0XHQ8cGlja2VyIEBjaGFuZ2U9XCJiaW5kUGlja2VyQ2hhbmdlMlwiIDp2YWx1ZT1cImluZGV4MlwiIDpyYW5nZT1cImtpbmRzXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWlucHV0XCI+5paH56ug57G75Z6L5LqMIDoge3traW5kc1tpbmRleDJdfX08L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3BpY2tlcj5cblx0XHRcdFx0ICAgPC92aWV3PlxuXHRcdFx0XHQgICBcblx0XHRcdFx0ICA8dmFuLWRpdmlkZXIgY29udGVudC1wb3NpdGlvbj1cImNlbnRlclwiPuaWh+eroOmFjeWbvjwvdmFuLWRpdmlkZXI+ICBcblx0XHRcdFx0ICA8dmlldyBjbGFzcz1cImhlYWRlci1sYXlvdXRcIj5cblx0XHRcdFx0XHQgIDx2YW4tdXBsb2FkZXJcblx0XHRcdFx0XHQgICAgOmZpbGUtbGlzdD1cImZpbGVMaXN0XCJcblx0XHRcdFx0XHQgICAgbWF4LWNvdW50PVwiMVwiXG5cdFx0XHRcdFx0ICAgIEBhZnRlci1yZWFkPVwiYWZ0ZXJSZWFkKClcIlxuXHRcdFx0XHRcdFx0QGRlbGV0ZT1cImRlbGV0ZUxheW91dCgpXCJcblx0XHRcdFx0XHRcdHVwbG9hZC10ZXh0PVwi6YCJ5oup5LiA5byg6YWN5Zu+XCJcblx0XHRcdFx0XHRcdGFjY2VwdD1cImltYWdlXCJcblx0XHRcdFx0XHQgIC8+XG5cdFx0XHRcdCAgPC92aWV3PiAgXG5cdFx0XHRcdCAgPHZhbi1kaXZpZGVyIGNvbnRlbnQtcG9zaXRpb249XCJjZW50ZXJcIj7mlofnq6DkvZPvvIjmnKrlj5HooajliY3kv53lrZjpgIDlh7rkuIvmrKHov5vlhaXkvJrkv53lrZjkuYvliY3nirbmgIHvvIk8L3Zhbi1kaXZpZGVyPiBcblx0XHQgIDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtYWluXCI+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8bXllZGl0b3IgY2xhc3M9XCJlZGl0b3JcIiBcblx0XHRcdFx0XHRAY2FuY2VsPVwic3VibWl0QXJ0aWNsZVwiIFxuXHRcdFx0XHRcdEBzYXZlPVwic2F2ZUVkaXRvclwiICBcblx0XHRcdFx0XHQ6aHRtbD1cImFydGljbGVDb250ZW50XCJcblx0XHRcdFx0XHQ6bXVpbHRJbWFnZT1cInRydWVcIlxuXHRcdFx0XHRcdDppbWFnZVVwbG9hZGVyPVwiaW1hZ2VVcGxvYWRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0PC9teWVkaXRvcj5cblx0XHRcdDwvdmlldz5cdFxuXHRcdFx0XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuICBcbjxzY3JpcHQ+XG5cdHZhciBfdGhpc1xuXHRpbXBvcnQge2FydGljbGVJbnNlcnQsaW5zZXJ0QXJ0aWNsZUNvbnRlbnRJbWd9IGZyb20gJ0Avc3RhdGljL2pzL0FQSS5qcydcblx0aW1wb3J0IG15ZWRpdG9yIGZyb20gXCJAL2NvbXBvbmVudHMvcm9iaW4tZWRpdG9yL2VkaXRvci52dWVcIlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHVzZXI6JycsICAvL+S9nOiAheeahFxuXHRcdFx0XHRhdXRob3I6JycsICAvL+aWh+eroOeahOS9nOiAhVxuXHRcdFx0XHR0aXRsZTonJywgIC8v5paH56ug55qE5qCH6aKYXG5cdFx0XHRcdGFydGljbGVBYnN0cmFjdDonJyAsLy/mlofnq6DnmoTmkZjopoFcblx0XHRcdFx0YXJ0aWNsZUtpbmQxOifmuKPnlLcnLFxuXHRcdFx0XHRhcnRpY2xlS2luZDI6J+a4o+WlsycsXG5cdFx0XHRcdGFydGljbGVDb250ZW50OicnLCAgLy9odG1s5paH5pysXG5cdFx0XHRcdFxuXHRcdFx0ICAgIGtpbmRzOlsn5rij55S3Jywn5rij5aWzJywn5ZCQ5qe9Jywn6KGo55m9Jywn576O5paHJywn5YiG5LqrJywn5pel5bi4Jywn56eR5oqAJywn57yW56iLJywn6L+Q5YqoJywn5YC+6L+wJywn5oGL54ixJ10sXG5cdFx0XHRcdGluZGV4MTowLFxuXHRcdFx0XHRpbmRleDI6MSxcblx0XHRcdFx0ZmlsZUxpc3Q6W10sICAgLy/lj6rkuIrkvKDljZXlvKDnm67liY1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGNvbXBvbmVudHM6eyBcblx0XHRcdG15ZWRpdG9yXG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHR0aGlzLmdldFVzZXIoKVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0XG5cdFx0XHQvL+iOt+WPlueUqOaIt+eahOS/oeaBr+WSjOS4iuasoee8lui+keS/neWtmOeahOaWh+eroFxuXHRcdFx0Z2V0VXNlcigpe1xuXHRcdFx0XHRfdGhpcyA9IHRoaXNcblx0XHRcdCAgdW5pLmdldFN0b3JhZ2Uoe1xuXHRcdFx0ICBcdGtleTondXNlcicsXG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0X3RoaXMudXNlciA9IHJlcy5kYXRhXG5cdFx0XHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0a2V5OidzYXZlQXJ0aWNsZScsXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlcyl7XG5cdFx0XHRcdFx0XHRcdF90aGlzLmFydGljbGVDb250ZW50ID0gcmVzLmRhdGEuYXJ0aWNsZUNvbnRlbnRcblx0XHRcdFx0XHRcdFx0X3RoaXMuYXV0aG9yID0gcmVzLmRhdGEuYXV0aG9yXG5cdFx0XHRcdFx0XHRcdF90aGlzLnRpdGxlID0gcmVzLmRhdGEudGl0bGVcblx0XHRcdFx0XHRcdFx0X3RoaXMuYXJ0aWNsZUFic3RyYWN0ID0gcmVzLmRhdGEuYXJ0aWNsZUFic3RyYWN0XG5cdFx0XHRcdFx0XHRcdF90aGlzLmFydGljbGVLaW5kMSA9IHJlcy5kYXRhLmFydGljbGVLaW5kMVxuXHRcdFx0XHRcdFx0XHRfdGhpcy5hcnRpY2xlS2luZDIgPSByZXMuZGF0YS5hcnRpY2xlS2luZDJcblx0XHRcdFx0XHRcdFx0X3RoaXMuaW5kZXgxID0gcmVzLmRhdGEuaW5kZXgxXG5cdFx0XHRcdFx0XHRcdF90aGlzLmluZGV4MiA9IHJlcy5kYXRhLmluZGV4MlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhaWwoKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWwoKSB7XG5cdFx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcblx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2xvZ2luL2xvZ2luJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdCAgfSlcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly/mlLnlj5jmlofnq6DnmoTnsbvlnotcblx0XHRcdGJpbmRQaWNrZXJDaGFuZ2UxKGUpe1xuXHRcdFx0ICBsZXQgaW5kZXgxID0gZS5kZXRhaWwudmFsdWVcblx0XHRcdCAgdGhpcy5pbmRleDEgPSBpbmRleDFcblx0XHRcdCAgdGhpcy5hcnRpY2xlS2luZDEgPSB0aGlzLmtpbmRzW3BhcnNlSW50KGluZGV4MSldIFxuXHRcdFx0fSxcblx0XHRcdCBcblx0XHRcdGJpbmRQaWNrZXJDaGFuZ2UyKGUpe1xuXHRcdFx0ICAgbGV0IGluZGV4MiA9IGUuZGV0YWlsLnZhbHVlXG5cdFx0XHQgICB0aGlzLmluZGV4MiA9IGluZGV4MlxuXHRcdFx0ICAgdGhpcy5hcnRpY2xlS2luZDIgPSB0aGlzLmtpbmRzW3BhcnNlSW50KGluZGV4MildIFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHQvL+i+k+WFpeaWh+eroOeahOagh+mimFxuXHRcdFx0aW5wdXRUaXRsZShlKXtcblx0XHRcdFx0dGhpcy50aXRsZSA9IGUuZGV0YWlsXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQvL+i+k+WFpeS9nOiAheeahOWQjeWtl1xuXHRcdFx0aW5wdXRBdXRob3IoZSl7XG5cdFx0XHRcdHRoaXMuYXV0aG9yID0gZS5kZXRhaWxcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8v6L6T5YWl5pGY6KaBXG5cdFx0XHRpbnB1dEFydGljbGVBYnN0cmFjdChlKXtcblx0XHRcdCAgIHRoaXMuYXJ0aWNsZUFic3RyYWN0ID0gZS5kZXRhaWxcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly/pgInmi6nphY3lm75cblx0XHRcdGFmdGVyUmVhZChldmVudCl7XG5cdFx0XHRcdGxldCBmaWxlID0ge31cblx0XHRcdFx0ZmlsZS51cmwgPSBldmVudC5kZXRhaWwuZmlsZS5wYXRoXG5cdFx0XHRcdGZpbGUubmFtZSA9ICfphY3lm74nXG5cdFx0XHRcdHRoaXMuZmlsZUxpc3QucHVzaChmaWxlKVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly/liKDpmaTkuIrkvKDnmoTphY3lm75cblx0XHRcdGRlbGV0ZUxheW91dCgpe1xuXHRcdFx0XHR0aGlzLmZpbGVMaXN0ID0gW11cblx0XHRcdH0sXG5cdFx0XHRcblx0XHQgIFxuXHRcdFx0XG5cdFx0XHQvKuaWh+acrOe8luivkeWMuiovXG5cdFx0XHRcblx0XHRcdC8v6L+Z5LiqY2FuY2Vs55So5aSE5LiN5aSn77yM5omA5Lul6L+Z6YeM55So5L2c5LqG5Y+R6KGo5paH56ug55So55qE5Ye95pWwXG5cdFx0XHRzdWJtaXRBcnRpY2xlKGUpe1xuXHRcdFx0XHRfdGhpcyA9IHRoaXNcblx0XHRcdFx0aWYoX3RoaXMuYXV0aG9yICYmIF90aGlzLnRpdGxlICYmIF90aGlzLmFydGljbGVBYnN0cmFjdCBcblx0XHRcdFx0ICAgJiZfdGhpcy5hcnRpY2xlS2luZDEgJiYgX3RoaXMuYXJ0aWNsZUtpbmQyIFxuXHRcdFx0XHQgICAmJiBfdGhpcy5maWxlTGlzdC5sZW5ndGggIT0wICYmIF90aGlzLmFydGljbGVDb250ZW50KVxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgIFxuXHRcdFx0XHQgICBjb25zdCB1cGxvYWRUYXNrID0gdW5pLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRcdCAgIHVybDphcnRpY2xlSW5zZXJ0LFxuXHRcdFx0XHRcdCAgIGZpbGVQYXRoOl90aGlzLmZpbGVMaXN0WzBdLnVybCxcblx0XHRcdFx0XHQgICBuYW1lOidsYXlvdXRzJyxcblx0XHRcdFx0XHQgICBoZWFkZXI6e1xuXHRcdFx0XHRcdFx0ICAgXCJDb250ZW50LVR5cGVcIjpcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdFx0XHRcdCAgIFwiUmVmZXJlclwiOicnXG5cdFx0XHRcdFx0ICAgfSxcblx0XHRcdFx0XHQgICBmb3JtRGF0YTp7XG5cdFx0XHRcdFx0XHQgICB1c2VySWQ6X3RoaXMudXNlci5pZCxcblx0XHRcdFx0XHRcdCAgIGF1dGhvcjpfdGhpcy5hdXRob3IsXG5cdFx0XHRcdFx0XHQgICB0aXRsZTpfdGhpcy50aXRsZSxcblx0XHRcdFx0XHRcdCAgIGFydGljbGVBYnN0cmFjdDpfdGhpcy5hcnRpY2xlQWJzdHJhY3QsXG5cdFx0XHRcdFx0XHQgICBhcnRpY2xlS2luZDE6X3RoaXMuYXJ0aWNsZUtpbmQxLFxuXHRcdFx0XHRcdFx0ICAgYXJ0aWNsZUtpbmQyOl90aGlzLmFydGljbGVLaW5kMixcblx0XHRcdFx0XHRcdCAgIGFydGljbGVDb250ZW50Ol90aGlzLmFydGljbGVDb250ZW50XG5cdFx0XHRcdFx0ICAgfSxcblx0XHRcdFx0XHQgICBzdWNjZXNzOihyZXMpPT57XG5cdFx0XHRcdFx0XHQgICBpZihyZXMuc3RhdHVzQ29kZSA9PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaS5yZW1vdmVTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCAga2V5OidzYXZlQXJ0aWNsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdCAgIH0sXG5cdFx0XHRcdFx0ICAgZmFpbDooRXJyb3IpPT57XG5cdFx0XHRcdFx0XHQgICBjb25zb2xlLmxvZyhcIue9kee7nOmUmeivr1wiLEVycm9yKVxuXHRcdFx0XHRcdFx0ICAgdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6J+e9kee7nOmUmeivr++8jOWPkeihqOWksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjonbG9hZGluZycsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246MTAwMCBcblx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICBcblx0XHRcdFx0IHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKT0+e1xuXHRcdFx0XHRcdCBsZXQgcHJvZ3Jlc3MgPSByZXMucHJvZ3Jlc3Ncblx0XHRcdFx0XHQgdW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0XHQgXHR0aXRsZTpg5Y+R6KGo6L+b5bqmOiR7cHJvZ3Jlc3N9YFxuXHRcdFx0XHRcdCB9KVxuXHRcdFx0XHRcdCBpZihwcm9ncmVzcyA9PSAxMDApe1xuXHRcdFx0XHRcdFx0IHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0XHQgdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHQgXHR0aXRsZTon5Y+R6KGo5oiQ5YqfLOetieW+heWuoeaguOS6uuWRmOWuoeaguCcsXG5cdFx0XHRcdFx0XHRcdGljb246J3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjoyMDAwLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmF1dGhvciA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMudGl0bGUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmFydGljbGVBYnN0cmFjdCA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuYXJ0aWNsZUtpbmQxID0gJydcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5hcnRpY2xlS2luZDIgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmFydGljbGVDb250ZW50ID0gJydcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy5maWxlTGlzdCA9IFtdXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuYXJ0aWNsZUNvbnRlbnQgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQgfSlcblx0XHRcdFx0XHQgfVxuXHRcdFx0XHQgfSlcblx0XHRcdFx0IFxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOifkurLvvIHorrDlvpflhYjngrnlh7vkv53lrZjlho3lj5Hooajlk6bvvIHov5jmnInkv6Hmga/kuI3og73kuLrnqbonLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246MjAwMCxcblx0XHRcdFx0XHRcdGljb246J25vbmUnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly/kv53lrZjmlofmnKws5bm25LiU5a2Y5pS+5Yiwc3RvcmFnZeS4rSzkuIvmrKHov5vooYzmnaXml7blgJnlsLHor7vlj5Zcblx0XHRcdHNhdmVFZGl0b3IoZSl7XG5cdFx0XHRcdGxldCBodG1sID0gZS5odG1sXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5paH5pys57yW6K+R5ZmoXCIsaHRtbClcblx0XHRcdCAgICB0aGlzLmFydGljbGVDb250ZW50ID0gaHRtbCAgXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOifkv53lrZjmiJDlip8nLFxuXHRcdFx0XHRcdGljb246J25vbmUnLFxuXHRcdFx0XHRcdGR1cmF0aW9uOjUwMCxcblx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xuXHRcdFx0XHRcdFx0XHRrZXk6J3NhdmVBcnRpY2xlJyxcblx0XHRcdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZUNvbnRlbnQ6X3RoaXMuYXJ0aWNsZUNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdCAgICBhdXRob3I6X3RoaXMuYXV0aG9yLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOl90aGlzLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdGFydGljbGVBYnN0cmFjdDpfdGhpcy5hcnRpY2xlQWJzdHJhY3QsXG5cdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZUtpbmQxOl90aGlzLmFydGljbGVLaW5kMSxcblx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlS2luZDI6X3RoaXMuYXJ0aWNsZUtpbmQyLFxuXHRcdFx0XHRcdFx0XHRcdGluZGV4MTpfdGhpcy5pbmRleDEsXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXgyOl90aGlzLmluZGV4Mixcblx0XHRcdFx0XHRcdFx0XHRmaWxlTGlzdDpfdGhpcy5maWxlTGlzdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdC8v5bCG5Zu+54mH5pS+5YWl5a2Y5YKo5qG25ZCO6L+U5Zue5Zyw5Z2AXG5cdFx0XHRpbWFnZVVwbG9hZGVyKGltZyxjYWxsYmFjayl7XG5cdFx0XHQgICB1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0ICAgXHQgdGl0bGU6J+W9leWFpeS4rSdcblx0XHRcdCAgIH0pXG5cdFx0XHQgICAudGhlbigoKT0+e1xuXHRcdFx0XHQgIGNvbnN0IHVwbG9hZFRhc3QgPSB1bmkudXBsb2FkRmlsZSh7XG5cdFx0XHRcdFx0ICB1cmw6aW5zZXJ0QXJ0aWNsZUNvbnRlbnRJbWcsXG5cdFx0XHRcdFx0ICBmaWxlUGF0aDppbWcsXG5cdFx0XHRcdFx0ICBuYW1lOidmaWxlJyxcblx0XHRcdFx0XHQgIGhlYWRlcjp7XG5cdFx0XHRcdFx0XHQgIFwiQ29udGVudC1UeXBlXCI6XCJtdXRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdFx0XHRcdCAgXCJSZWZlcmVyXCI6Jydcblx0XHRcdFx0XHQgIH0sXG5cdFx0XHRcdFx0ICBzdWNjZXNzOihyZXMpID0+IHtcblx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coXCLov5Tlm57nmoTlnLDlnYBcIixyZXMpXG5cdFx0XHRcdFx0XHQgIHVuaS5oaWRlTG9hZGluZygpXG5cdFx0XHRcdFx0XHQgIGlmKHJlcy5zdGF0dXNDb2RlID09IDIwMCl7XG5cdFx0XHRcdFx0XHRcdCBsZXQgcmVzRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG5cdFx0XHRcdFx0XHRcdCBjYWxsYmFjayhyZXNEYXRhLmRhdGEpICBcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdCAgfSxcblx0XHRcdFx0XHQgIGZhaWw6IChFcnJvcikgPT4ge1xuXHRcdFx0XHRcdCAgXHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHQgIFx0XHR0aXRsZTon572R57uc6ZSZ6K+vLOmAieaLqeWbvueJh+Wksei0pScsXG5cdFx0XHRcdFx0XHRcdGljb246J2xvYWRpbmcnLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjoxMDAwXG5cdFx0XHRcdFx0ICBcdH0pXG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdCAgIH0pXG5cdFx0XHQgICB9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbkBpbXBvcnQgdXJsKFwiLi9jc3MvbWFpbi5jc3NcIik7XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi93cml0ZUFydGljbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vd3JpdGVBcnRpY2xlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMDUwMjMyNDQ3N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9