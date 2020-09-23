(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/robin-editor/editor"],{

/***/ 228:
/*!***************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.vue?vue&type=template&id=6b230c81&scoped=true& */ 229);
/* harmony import */ var _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.vue?vue&type=script&lang=js& */ 231);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.vue?vue&type=style&index=0&id=6b230c81&lang=scss&scoped=true& */ 233);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b230c81",
  null,
  false,
  _editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/robin-editor/editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 229:
/*!**********************************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=template&id=6b230c81&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editor.vue?vue&type=template&id=6b230c81&scoped=true& */ 230);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_template_id_6b230c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 230:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=template&id=6b230c81&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniPopup: function() {
    return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 247))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 231:
/*!****************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editor.vue?vue&type=script&lang=js& */ 232);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 232:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var colorPicker = function colorPicker() {__webpack_require__.e(/*! require.ensure | components/colorPicker */ "components/colorPicker").then((function () {return resolve(__webpack_require__(/*! @/components/colorPicker.vue */ 254));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 247));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var topbar = function topbar() {__webpack_require__.e(/*! require.ensure | components/robin-editor/header */ "components/robin-editor/header").then((function () {return resolve(__webpack_require__(/*! ./header.vue */ 261));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =













































































{
  components: {
    colorPicker: colorPicker,
    uniPopup: uniPopup,
    topbar: topbar },

  props: {
    html: {
      type: String },

    imageUploader: {
      type: Function },

    muiltImage: {
      type: Boolean,
      default: false },

    compressImage: {
      type: Boolean,
      default: false },

    previewMode: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      show: true,
      readOnly: false,
      formats: {},
      fontColor: "#000000",
      bgColor: "",
      color: "",
      colorPickerName: "",
      showColor: false,
      fontSizeRange: [10, 12, 14, 16, 18, 24, 32],
      showPreview: false,
      htmlData: "" };

  },
  mounted: function mounted() {
    if (this.previewMode) {
      this.previewData(this.html);
    }
  },
  computed: {
    labelConfirm: function labelConfirm() {
      return this.showPreview ? "关闭" : "保存";
    },
    labelCancel: function labelCancel() {
      return this.showPreview ? "" : "发表";
    } },

  methods: {
    openColor: function openColor(e) {
      var name = e.currentTarget.dataset.name;
      var color = this.formats[name];
      this.colorPickerName = name;
      if (name == 'backgroundColor' && !color) {
        color = "#FFFFFF";
      }
      if (name == 'color' && !color) {
        color = "#000000";
      }
      this.color = color;
      this.$refs.popup.open({
        type: "bottom" });

    },
    colorPop: function colorPop(e) {
      this.showColor = e.show;
    },
    colorPopClose: function colorPopClose() {
      this.$refs.popup.close();
    },
    colorChanged: function colorChanged(e) {
      var label = '';
      switch (this.colorPickerName) {
        case 'backgroundColor':
          if (e.color == '#FFFFFF') {
            e.color = '';
          }
          this.bgColor = e.color;
          label = '背景色';
          break;
        case 'color':
          this.fontColor = e.color;
          label = '颜色';
          break;}

      this.colorPopClose();
      this._format(this.colorPickerName, e.color, label + e.color);
    },
    readOnlyChange: function readOnlyChange() {
      this.readOnly = !this.readOnly;
    },
    onEditorReady: function onEditorReady() {var _this = this;
      uni.createSelectorQuery().in(this).select('#editor').context(function (res) {
        _this.editorCtx = res.context;
        if (_this.html) {
          _this.editorCtx.setContents({
            html: _this.html });

        }
      }).exec();
    },
    undo: function undo() {
      this.editorCtx.undo();
      this.toast("撤销");
    },
    redo: function redo() {
      this.editorCtx.redo();
      this.toast("重做");
    },
    format: function format(e) {var _e$target$dataset =




      e.target.dataset,name = _e$target$dataset.name,value = _e$target$dataset.value,label = _e$target$dataset.label;
      if (!name) return;
      this._format(name, value, label);
    },
    _format: function _format(name, value, label) {
      this.editorCtx.format(name, value);
      this.toast(label);
    },
    toast: function toast(label) {
      uni.showToast({
        duration: 600,
        icon: 'none',
        title: label });

    },
    onStatusChange: function onStatusChange(e) {
      var formats = e.detail;
      this.formats = formats;
    },
    insertDivider: function insertDivider() {
      this.editorCtx.insertDivider({
        success: function success() {
          this.toast("插入分割线");
        } });

    },
    clear: function clear() {var _this2 = this;
      this.editorCtx.clear({
        success: function success(res) {
          _this2.toast("清空");
        } });

    },
    removeFormat: function removeFormat() {
      this.editorCtx.removeFormat();
      this.toast("清除格式");
    },
    insertDate: function insertDate() {
      var date = new Date();
      var formatDate = "".concat(date.getFullYear(), "/").concat(date.getMonth() + 1, "/").concat(date.getDate());
      this.editorCtx.insertText({
        text: formatDate });

      this.toast("插入日期");
    },
    insertImage: function insertImage() {var _this3 = this;
      var params = {};
      params.count = this.muiltImage ? 9 : 1;
      params.sizeType = this.compressImage ? ['compressed'] : ['original'];
      uni.chooseImage(_objectSpread({},
      params, {
        success: function success(res) {
          res.tempFilePaths.map(function (path) {
            _this3.imageUploader(path, function (url) {
              _this3.editorCtx.insertImage({
                src: url,
                alt: '图像' });

            });
          });
        } }));

    },
    fontSize: function fontSize(e) {
      var index = e.detail.value;
      var fz = this.fontSizeRange[index] + 'px';
      this._format('fontSize', fz, '字体大小:' + fz);
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    save: function save() {var _this4 = this;
      if (this.showPreview) {
        if (this.previewMode) {
          this.cancel();
        } else {
          this.showPreview = false;
        }
      } else {
        this.editorCtx.getContents({
          success: function success(res) {
            _this4.$emit('save', res);
          } });

      }
    },
    previewData: function previewData(html) {
      this.htmlData = html.replace(/\<img/gi, '<img style="width:100%;height:auto"');
      this.showPreview = true;
    },
    preview: function preview() {var _this5 = this;
      this.editorCtx.getContents({
        success: function success(res) {
          _this5.previewData(res.html);
        } });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 233:
/*!*************************************************************************************************************************************************************!*\
  !*** /Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=style&index=0&id=6b230c81&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editor.vue?vue&type=style&index=0&id=6b230c81&lang=scss&scoped=true& */ 234);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editor_vue_vue_type_style_index_0_id_6b230c81_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 234:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Macintosh HD_data/me/projects/onePanda-uni-app-/components/robin-editor/editor.vue?vue&type=style&index=0&id=6b230c81&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vY29tcG9uZW50cy9yb2Jpbi1lZGl0b3IvZWRpdG9yLnZ1ZT8yNDQ1Iiwid2VicGFjazovLy8vVm9sdW1lcy9NYWNpbnRvc2ggSERfZGF0YS9tZS9wcm9qZWN0cy9vbmVQYW5kYS11bmktYXBwLS9jb21wb25lbnRzL3JvYmluLWVkaXRvci9lZGl0b3IudnVlPzgwZDIiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL2NvbXBvbmVudHMvcm9iaW4tZWRpdG9yL2VkaXRvci52dWU/NTNkMCIsIndlYnBhY2s6Ly8vL1ZvbHVtZXMvTWFjaW50b3NoIEhEX2RhdGEvbWUvcHJvamVjdHMvb25lUGFuZGEtdW5pLWFwcC0vY29tcG9uZW50cy9yb2Jpbi1lZGl0b3IvZWRpdG9yLnZ1ZT84MjZiIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3JvYmluLWVkaXRvci9lZGl0b3IudnVlIiwid2VicGFjazovLy8vVm9sdW1lcy9NYWNpbnRvc2ggSERfZGF0YS9tZS9wcm9qZWN0cy9vbmVQYW5kYS11bmktYXBwLS9jb21wb25lbnRzL3JvYmluLWVkaXRvci9lZGl0b3IudnVlP2VkODkiLCJ3ZWJwYWNrOi8vLy9Wb2x1bWVzL01hY2ludG9zaCBIRF9kYXRhL21lL3Byb2plY3RzL29uZVBhbmRhLXVuaS1hcHAtL2NvbXBvbmVudHMvcm9iaW4tZWRpdG9yL2VkaXRvci52dWU/YjBjNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUNnTjtBQUNoTixnQkFBZ0IsaU5BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLFdBQVcsOExBRU47QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFvMEIsQ0FBZ0Isb3lCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEV4MUI7QUFDQTtBQUNBLDRCQURBO0FBRUEsc0JBRkE7QUFHQSxrQkFIQSxFQURBOztBQU1BO0FBQ0E7QUFDQSxrQkFEQSxFQURBOztBQUlBO0FBQ0Esb0JBREEsRUFKQTs7QUFPQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFQQTs7QUFXQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFYQTs7QUFlQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFmQSxFQU5BOzs7QUEwQkEsTUExQkEsa0JBMEJBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLHFCQUZBO0FBR0EsaUJBSEE7QUFJQSwwQkFKQTtBQUtBLGlCQUxBO0FBTUEsZUFOQTtBQU9BLHlCQVBBO0FBUUEsc0JBUkE7QUFTQSxpREFUQTtBQVVBLHdCQVZBO0FBV0Esa0JBWEE7O0FBYUEsR0F4Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTdDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBLEtBTkEsRUE5Q0E7O0FBc0RBO0FBQ0EsYUFEQSxxQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7O0FBR0EsS0FmQTtBQWdCQSxZQWhCQSxvQkFnQkEsQ0FoQkEsRUFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLGlCQW5CQSwyQkFtQkE7QUFDQTtBQUNBLEtBckJBO0FBc0JBLGdCQXRCQSx3QkFzQkEsQ0F0QkEsRUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFYQTs7QUFhQTtBQUNBO0FBQ0EsS0F2Q0E7QUF3Q0Esa0JBeENBLDRCQXdDQTtBQUNBO0FBQ0EsS0ExQ0E7QUEyQ0EsaUJBM0NBLDJCQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7O0FBR0E7QUFDQSxPQVBBLEVBT0EsSUFQQTtBQVFBLEtBcERBO0FBcURBLFFBckRBLGtCQXFEQTtBQUNBO0FBQ0E7QUFDQSxLQXhEQTtBQXlEQSxRQXpEQSxrQkF5REE7QUFDQTtBQUNBO0FBQ0EsS0E1REE7QUE2REEsVUE3REEsa0JBNkRBLENBN0RBLEVBNkRBOzs7OztBQUtBLHNCQUxBLENBRUEsSUFGQSxxQkFFQSxJQUZBLENBR0EsS0FIQSxxQkFHQSxLQUhBLENBSUEsS0FKQSxxQkFJQSxLQUpBO0FBTUE7QUFDQTtBQUNBLEtBckVBO0FBc0VBLFdBdEVBLG1CQXNFQSxJQXRFQSxFQXNFQSxLQXRFQSxFQXNFQSxLQXRFQSxFQXNFQTtBQUNBO0FBQ0E7QUFDQSxLQXpFQTtBQTBFQSxTQTFFQSxpQkEwRUEsS0ExRUEsRUEwRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTs7QUFLQSxLQWhGQTtBQWlGQSxrQkFqRkEsMEJBaUZBLENBakZBLEVBaUZBO0FBQ0E7QUFDQTtBQUNBLEtBcEZBO0FBcUZBLGlCQXJGQSwyQkFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBLEtBM0ZBO0FBNEZBLFNBNUZBLG1CQTRGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0FsR0E7QUFtR0EsZ0JBbkdBLDBCQW1HQTtBQUNBO0FBQ0E7QUFDQSxLQXRHQTtBQXVHQSxjQXZHQSx3QkF1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLEtBOUdBO0FBK0dBLGVBL0dBLHlCQStHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSx5QkFGQTs7QUFJQSxhQUxBO0FBTUEsV0FQQTtBQVFBLFNBWEE7O0FBYUEsS0FoSUE7QUFpSUEsWUFqSUEsb0JBaUlBLENBaklBLEVBaUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FySUE7QUFzSUEsVUF0SUEsb0JBc0lBO0FBQ0E7QUFDQSxLQXhJQTtBQXlJQSxRQXpJQSxrQkF5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQTs7QUFLQTtBQUNBLEtBdkpBO0FBd0pBO0FBQ0E7QUFDQTtBQUNBLEtBM0pBO0FBNEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7O0FBTUEsS0FuS0EsRUF0REEsRTs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUFxaEQsQ0FBZ0IsczVDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBemlEO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tcG9uZW50cy9yb2Jpbi1lZGl0b3IvZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9lZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiMjMwYzgxJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9lZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmIyMzBjODEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmIyMzBjODFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9yb2Jpbi1lZGl0b3IvZWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjIzMGM4MSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICB1bmlQb3B1cDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwXCIgKi8gXCJAL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9lZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG4gICAgPHZpZXcgY2xhc3M9J3dyYXBwZXInPlxuICAgICAgICA8ZWRpdG9yIHYtaWY9XCIhcHJldmlld01vZGVcIiB2LXNob3c9XCIhc2hvd1ByZXZpZXdcIiBpZD1cImVkaXRvclwiIGNsYXNzPVwicWwtY29udGFpbmVyXCIgcGxhY2Vob2xkZXI9XCLor7fnvJblhpnmlofnq6DkvZMuLi5cIlxuICAgICAgICAgICAgc2hvd0ltZ1NpemUgc2hvd0ltZ1Rvb2xiYXIgc2hvd0ltZ1Jlc2l6ZSBAc3RhdHVzY2hhbmdlPVwib25TdGF0dXNDaGFuZ2VcIiA6cmVhZC1vbmx5PVwicmVhZE9ubHlcIiBAcmVhZHk9XCJvbkVkaXRvclJlYWR5XCI+XG4gICAgICAgIDwvZWRpdG9yPlxuICAgICAgICA8dG9wYmFyIGNsYXNzPVwiaGVhZGVyXCIgQGNhbmNlbD1cImNhbmNlbFwiIEBzYXZlPVwic2F2ZVwiIDpsYWJlbENvbmZpcm09XCJsYWJlbENvbmZpcm1cIiA6bGFiZWxDYW5jZWw9XCJsYWJlbENhbmNlbFwiPjwvdG9wYmFyPlxuICAgICAgICA8dmlldyBjbGFzcz0ndG9vbGJhcicgQHRhcD1cImZvcm1hdFwiIHYtaWY9XCIhc2hvd1ByZXZpZXdcIj5cbiAgICAgICAgICAgIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMuYm9sZCA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24teml0aWppYWN1XCIgZGF0YS1uYW1lPVwiYm9sZFwiIGRhdGEtbGFiZWw9XCLliqDnspdcIj48L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyA6Y2xhc3M9XCJmb3JtYXRzLml0YWxpYyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24teml0aXhpZXRpXCIgZGF0YS1uYW1lPVwiaXRhbGljXCJcbiAgICAgICAgICAgICAgICBkYXRhLWxhYmVsPVwi5pac5L2TXCI+PC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy51bmRlcmxpbmUgPyAncWwtYWN0aXZlJyA6ICcnXCIgY2xhc3M9XCJpY29uZm9udCBpY29uLXppdGl4aWFodWF4aWFuXCIgZGF0YS1uYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICBkYXRhLWxhYmVsPVwi5LiL5ruR57q/XCI+PC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy5zdHJpa2UgPyAncWwtYWN0aXZlJyA6ICcnXCIgY2xhc3M9XCJpY29uZm9udCBpY29uLXppdGlzaGFuY2h1eGlhblwiIGRhdGEtbmFtZT1cInN0cmlrZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1sYWJlbD1cIuWIoOmZpOe6v1wiPjwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IDpjbGFzcz1cIihmb3JtYXRzLmFsaWduID09PSAnbGVmdCcgfHwgIWZvcm1hdHMuYWxpZ24pID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi16dW9kdWlxaVwiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiYWxpZ25cIiBkYXRhLXZhbHVlPVwibGVmdFwiIGRhdGEtbGFiZWw9XCLlsYXlt6ZcIj48L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyA6Y2xhc3M9XCJmb3JtYXRzLmFsaWduID09PSAnY2VudGVyJyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24tanV6aG9uZ2R1aXFpXCIgZGF0YS1uYW1lPVwiYWxpZ25cIlxuICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9XCJjZW50ZXJcIiBkYXRhLWxhYmVsPVwi5bGF5LitXCI+PC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy5hbGlnbiA9PT0gJ3JpZ2h0JyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24teW91ZHVpcWlcIiBkYXRhLW5hbWU9XCJhbGlnblwiXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cInJpZ2h0XCIgZGF0YS1sYWJlbD1cIuWxheWPs1wiPjwvdmlldz5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy5hbGlnbiA9PT0gJ2p1c3RpZnknID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi16dW95b3VkdWlxaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJhbGlnblwiIGRhdGEtdmFsdWU9XCJqdXN0aWZ5XCI+PC92aWV3PiAtLT5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy5saW5lSGVpZ2h0ID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1saW5lLWhlaWdodFwiIGRhdGEtbmFtZT1cImxpbmVIZWlnaHRcIlxuXHRcdFx0XHRcdCBkYXRhLXZhbHVlPVwiMlwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMubGV0dGVyU3BhY2luZyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24tQ2hhcmFjdGVyLVNwYWNpbmdcIiBkYXRhLW5hbWU9XCJsZXR0ZXJTcGFjaW5nXCJcblx0XHRcdFx0XHQgZGF0YS12YWx1ZT1cIjJlbVwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMubWFyZ2luVG9wID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi03MjJiaWFuamlxaV9kdWFucWlhbmp1XCIgZGF0YS1uYW1lPVwibWFyZ2luVG9wXCJcblx0XHRcdFx0XHQgZGF0YS12YWx1ZT1cIjIwcHhcIj48L3ZpZXc+IC0tPlxuICAgICAgICAgICAgPCEtLSA8dmlldyA6Y2xhc3M9XCJmb3JtYXRzLnByZXZpZXdhcmdpbkJvdHRvbSA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24tNzIzYmlhbmppcWlfZHVhbmhvdWp1XCJcblx0XHRcdFx0XHQgZGF0YS1uYW1lPVwibWFyZ2luQm90dG9tXCIgZGF0YS12YWx1ZT1cIjIwcHhcIj48L3ZpZXc+IC0tPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLWNsZWFyZWRmb3JtYXRcIiBAdGFwLnN0b3A9XCJyZW1vdmVGb3JtYXRcIj48L3ZpZXc+XG4gICAgICAgICAgICA8cGlja2VyIGNsYXNzPVwiaWNvbmZvbnRcIiBtb2RlPVwic2VsZWN0b3JcIiA6cmFuZ2U9XCJmb250U2l6ZVJhbmdlXCIgQGNoYW5nZT1cImZvbnRTaXplXCI+XG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uLWZvbnRzaXplXCI+PC92aWV3PlxuICAgICAgICAgICAgPC9waWNrZXI+XG5cbiAgICAgICAgICAgIDx2aWV3IDpzdHlsZT1cImZvbnRDb2xvciE9JyNGRkZGRkYnID8gJ2NvbG9yOicrZm9ybWF0cy5jb2xvciA6ICcnXCIgY2xhc3M9XCJpY29uZm9udCBpY29uLXRleHRfY29sb3JcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cImNvbG9yXCIgQHRhcC5zdG9wPVwib3BlbkNvbG9yXCI+PC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgOnN0eWxlPVwiYmdDb2xvciA/ICdjb2xvcjonK2Zvcm1hdHMuYmFja2dyb3VuZENvbG9yIDogJycgXCIgY2xhc3M9XCJpY29uZm9udCBpY29uLWZvbnRiZ2NvbG9yXCIgZGF0YS1uYW1lPVwiYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgICAgICBAdGFwLnN0b3A9XCJvcGVuQ29sb3JcIj48L3ZpZXc+XG5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLWRhdGVcIiBAdGFwPVwiaW5zZXJ0RGF0ZVwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi0tY2hlY2tsaXN0XCIgZGF0YS1uYW1lPVwibGlzdFwiIGRhdGEtdmFsdWU9XCJjaGVja1wiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMubGlzdCA9PT0gJ29yZGVyZWQnID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi15b3V4dXBhaWxpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJsaXN0XCIgZGF0YS12YWx1ZT1cIm9yZGVyZWRcIj48L3ZpZXc+IC0tPlxuICAgICAgICAgICAgPCEtLSA8dmlldyA6Y2xhc3M9XCJmb3JtYXRzLmxpc3QgPT09ICdidWxsZXQnID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi13dXh1cGFpbGllXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cImxpc3RcIiBkYXRhLXZhbHVlPVwiYnVsbGV0XCI+PC92aWV3PiAtLT5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLXVuZG9cIiBAdGFwPVwidW5kb1wiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1yZWRvXCIgQHRhcD1cInJlZG9cIj48L3ZpZXc+IC0tPlxuXG4gICAgICAgICAgICA8IS0tIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1vdXRkZW50XCIgZGF0YS1uYW1lPVwiaW5kZW50XCIgZGF0YS12YWx1ZT1cIi0xXCI+PC92aWV3PiAtLT5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLWluZGVudFwiIGRhdGEtbmFtZT1cImluZGVudFwiIGRhdGEtdmFsdWU9XCIrMVwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1mZW5nZXhpYW5cIiBAdGFwPVwiaW5zZXJ0RGl2aWRlclwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImljb25mb250IGljb24tY2hhcnV0dXBpYW5cIiBAdGFwLnN0b3A9XCJpbnNlcnRJbWFnZVwiPjwvdmlldz5cbiAgICAgICAgICAgIDwhLS0gPHZpZXcgOmNsYXNzPVwiZm9ybWF0cy5oZWFkZXIgPT09IDEgPyAncWwtYWN0aXZlJyA6ICcnXCIgY2xhc3M9XCJpY29uZm9udCBpY29uLWZvcm1hdC1oZWFkZXItMVwiIGRhdGEtbmFtZT1cImhlYWRlclwiXG5cdFx0XHRcdFx0IDpkYXRhLXZhbHVlPVwiMVwiPjwvdmlldz4gLS0+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMuc2NyaXB0ID09PSAnc3ViJyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24teml0aXhpYWJpYW9cIiBkYXRhLW5hbWU9XCJzY3JpcHRcIlxuXHRcdFx0XHRcdCBkYXRhLXZhbHVlPVwic3ViXCI+PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cImZvcm1hdHMuc2NyaXB0ID09PSAnc3VwZXInID8gJ3FsLWFjdGl2ZScgOiAnJ1wiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi16aXRpc2hhbmdiaWFvXCIgZGF0YS1uYW1lPVwic2NyaXB0XCJcblx0XHRcdFx0XHQgZGF0YS12YWx1ZT1cInN1cGVyXCI+PC92aWV3PiAtLT5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zaGFuY2h1XCIgQHRhcC5zdG9wPVwiY2xlYXJcIj48L3ZpZXc+XG4gICAgICAgICAgICA8IS0tIDx2aWV3IDpjbGFzcz1cImZvcm1hdHMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdxbC1hY3RpdmUnIDogJydcIiBjbGFzcz1cImljb25mb250IGljb24tZGlyZWN0aW9uLXJ0bFwiIGRhdGEtbmFtZT1cImRpcmVjdGlvblwiXG5cdFx0XHRcdFx0IGRhdGEtdmFsdWU9XCJydGxcIj48L3ZpZXc+IC0tPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLXByZXZpZXdcIiBAdGFwLnN0b3A9XCJwcmV2aWV3XCI+PC92aWV3PlxuXG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHVuaS1wb3B1cCByZWY9XCJwb3B1cFwiIHR5cGU9XCJib3R0b21cIiBAdHJhbnNlZD1cImNvbG9yUG9wXCI+XG4gICAgICAgICAgICA8Y29sb3JQaWNrZXIgOmNvbG9yPVwiY29sb3JcIiA6c2hvdz1cInNob3dDb2xvclwiIEBjb25maXJtPVwiY29sb3JDaGFuZ2VkXCIgQGNhbmNlbD1cImNvbG9yUG9wQ2xvc2VcIj48L2NvbG9yUGlja2VyPlxuICAgICAgICA8L3VuaS1wb3B1cD5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwcmV2aWV3XCIgdi1zaG93PVwic2hvd1ByZXZpZXdcIj5cbiAgICAgICAgICAgIDxyaWNoLXRleHQgOm5vZGVzPVwiaHRtbERhdGFcIiBjbGFzcz1cInByZXZpZXdOb2Rlc1wiPjwvcmljaC10ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgY29sb3JQaWNrZXIgZnJvbSAnQC9jb21wb25lbnRzL2NvbG9yUGlja2VyLnZ1ZSdcbiAgICBpbXBvcnQgdW5pUG9wdXAgZnJvbSBcIkAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXG4gICAgaW1wb3J0IHRvcGJhciBmcm9tICcuL2hlYWRlci52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBjb2xvclBpY2tlcixcbiAgICAgICAgICAgIHVuaVBvcHVwLFxuICAgICAgICAgICAgdG9wYmFyXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBodG1sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2VVcGxvYWRlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXVpbHRJbWFnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wcmVzc0ltYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZpZXdNb2RlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JtYXRzOiB7fSxcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgIGJnQ29sb3I6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiXCIsXG4gICAgICAgICAgICAgICAgY29sb3JQaWNrZXJOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNob3dDb2xvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9udFNpemVSYW5nZTogWzEwLCAxMiwgMTQsIDE2LCAxOCwgMjQsIDMyXSxcbiAgICAgICAgICAgICAgICBzaG93UHJldmlldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaHRtbERhdGE6IFwiXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdEYXRhKHRoaXMuaHRtbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGxhYmVsQ29uZmlybTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd1ByZXZpZXcgPyBcIuWFs+mXrVwiIDogXCLkv53lrZhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsQ2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93UHJldmlldyA/IFwiXCIgOiBcIuWPkeihqFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9wZW5Db2xvcihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5mb3JtYXRzW25hbWVdXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBpY2tlck5hbWUgPSBuYW1lXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gJ2JhY2tncm91bmRDb2xvcicgJiYgIWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gJ2NvbG9yJyAmJiAhY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBvcHVwLm9wZW4oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvclBvcChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29sb3IgPSBlLnNob3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvclBvcENsb3NlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucG9wdXAuY2xvc2UoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yQ2hhbmdlZChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gJydcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3JQaWNrZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JhY2tncm91bmRDb2xvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2xvciA9PSAnI0ZGRkZGRicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNvbG9yID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IGUuY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gJ+iDjOaZr+iJsidcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udENvbG9yID0gZS5jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAn6aKc6ImyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBvcENsb3NlKClcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JtYXQodGhpcy5jb2xvclBpY2tlck5hbWUsIGUuY29sb3IsIGxhYmVsICsgZS5jb2xvcilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWFkT25seUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPbmx5ID0gIXRoaXMucmVhZE9ubHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVkaXRvclJlYWR5KCkge1xuICAgICAgICAgICAgICAgIHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcjZWRpdG9yJykuY29udGV4dCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ3R4ID0gcmVzLmNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDdHguc2V0Q29udGVudHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHRoaXMuaHRtbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmV4ZWMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuZG8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDdHgudW5kbygpXG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIuaSpOmUgFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZG8oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDdHgucmVkbygpXG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIumHjeWBmlwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgfSA9IGUudGFyZ2V0LmRhdGFzZXRcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVyblxuICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1hdChuYW1lLCB2YWx1ZSwgbGFiZWwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Zvcm1hdChuYW1lLCB2YWx1ZSwgbGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckN0eC5mb3JtYXQobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdChsYWJlbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2FzdChsYWJlbCkge1xuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBsYWJlbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TdGF0dXNDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHMgPSBlLmRldGFpbFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0cyA9IGZvcm1hdHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnREaXZpZGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ3R4Lmluc2VydERpdmlkZXIoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3QoXCLmj5LlhaXliIblibLnur9cIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDdHguY2xlYXIoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KFwi5riF56m6XCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUZvcm1hdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckN0eC5yZW1vdmVGb3JtYXQoKVxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3QoXCLmuIXpmaTmoLzlvI9cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnREYXRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0vJHtkYXRlLmdldE1vbnRoKCkgKyAxfS8ke2RhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckN0eC5pbnNlcnRUZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZm9ybWF0RGF0ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdChcIuaPkuWFpeaXpeacn1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluc2VydEltYWdlKCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7fVxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb3VudCA9IHRoaXMubXVpbHRJbWFnZSA/IDkgOiAxXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNpemVUeXBlID0gdGhpcy5jb21wcmVzc0ltYWdlID8gWydjb21wcmVzc2VkJ10gOiBbJ29yaWdpbmFsJ11cbiAgICAgICAgICAgICAgICB1bmkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50ZW1wRmlsZVBhdGhzLm1hcChwYXRoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXBsb2FkZXIocGF0aCwgKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckN0eC5pbnNlcnRJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ+WbvuWDjydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9udFNpemUoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICBjb25zdCBmeiA9IHRoaXMuZm9udFNpemVSYW5nZVtpbmRleF0gKyAncHgnXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ybWF0KCdmb250U2l6ZScsIGZ6LCAn5a2X5L2T5aSn5bCPOicgKyBmeilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ3R4LmdldENvbnRlbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2F2ZScsIHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlld0RhdGE6IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxEYXRhID0gaHRtbC5yZXBsYWNlKC9cXDxpbWcvZ2ksICc8aW1nIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0b1wiJylcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3ID0gdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ3R4LmdldENvbnRlbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0RhdGEocmVzLmh0bWwpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIEBpbXBvcnQgXCIuL2VkaXRvci1pY29uLmNzc1wiO1xuXG4gICAgLndyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAvKiAjaWZuZGVmIEg1ICovXG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAvKiAjZW5kaWYgKi9cbiAgICAgICAgICAgIC8qICNpZmRlZiBINSAqL1xuICAgICAgICAgICAgdG9wOiA0NHB4O1xuICAgICAgICAgICAgLyogI2VuZGlmICovXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50b29sYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBsaW5lLWhlaWdodDogNDV1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgIC5pY29uZm9udCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnVweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDUwdXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXVweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnFsLWNvbnRhaW5lciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDI0dXB4IDMwdXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMzB2aDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiA4MHVweDtcbiAgICAgICAgZm9udC1zaXplOiAzMnVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgICB9XG5cbiAgICAucHJldmlldyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHVweDtcblxuICAgICAgICAucHJldmlld05vZGVzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnFsLWFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDZjO1xuICAgIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9lZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmIyMzBjODEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9lZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmIyMzBjODEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwMDUwMjMyNTAyNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/robin-editor/editor-create-component',
    {
        'components/robin-editor/editor-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(228))
        })
    },
    [['components/robin-editor/editor-create-component']]
]);
