(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-by-email"],{"345e":function(e,n,t){"use strict";t.r(n);var r=t("d25a"),i=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},"4ac8":function(e,n,t){},"4f42":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"a1da"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"5e0c"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"beeb"))},uniIdPagesEmailForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form").then(t.bind(null,"ec87"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"4f3b"))}},i=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusEmail=!1},e.e1=function(n){e.focusNickname=!1},e.e2=function(n){e.focusPassword=!1},e.e3=function(n){e.focusPassword2=!1})},o=[]},"5c62":function(e,n,t){"use strict";t.r(n);var r=t("4f42"),i=t("345e");for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("e690");var u,s=t("f0c5"),a=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=a.exports},d25a:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;u(t("ec98"));var i=u(t("9ef1")),o=(u(t("623d")),u(t("7615")));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=e.importObject("uni-id-co"),l={mixins:[i.default],data:function(){return{formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:a(a({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,n,t,r){return(/^1\d{10}$/.test(n)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n))&&r("昵称不能是：手机号或邮箱"),/^\d+$/.test(n)&&r("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(n)&&r("昵称不能包含中文"),!0}}],label:"昵称"}},o.default.getPwdRules()),{},{code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}}),focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(n){if(e.needAgreements&&!e.agree)return e.$refs.agreements.popup((function(){e.submitForm(n)}));e.submitForm(n)})).catch((function(n){var t=n[0].key;t=t.replace(t[0],t[0].toUpperCase()),console.log(t),e["focus"+t]=!0}))},submitForm:function(e){f.registerUserByEmail(this.formData).then((function(e){console.log(e),r.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(e){console.log(e)}})})).catch((function(e){console.log(e),console.log(e.message)}))},navigateBack:function(){r.navigateBack()},toLogin:function(){r.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName:function(){r.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register"})}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},e690:function(e,n,t){"use strict";var r=t("4ac8"),i=t.n(r);i.a},ff43:function(e,n,t){"use strict";(function(e){t("7482"),t("a9ff");r(t("66fd"));var n=r(t("5c62"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["ff43","common/runtime","common/vendor"]]]);