(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile"],{5149:function(e,n,t){},"754a":function(e,n,t){"use strict";(function(e,u){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,u,o,r,a){try{var i=e[r](a),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(u,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,o){var r=e.apply(n,t);function i(e){a(r,u,o,i,c,"next",e)}function c(e){a(r,u,o,i,c,"throw",e)}i(void 0)}))}}var c=e.database(),s=c.collection("uni-id-users"),f="",l={emits:["next"],data:function(){return{}},methods:{open:function(e){var n=this;return i(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:f=e,n.$refs.popup.open();case 2:case"end":return t.stop()}}),t)})))()},getUserProfile:function(){var n=this;return i(o.default.mark((function t(){var r,a,i,c,s,l,d,p,v;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u.showLoading(),t.next=3,new Promise((function(e){u.getUserProfile({desc:"用于设置账户昵称和头像",complete:function(n){console.log("getUserProfile:",n),e(n)}})}));case 3:if(r=t.sent,"getUserProfile:ok"==r.errMsg){t.next=6;break}return t.abrupt("return",n.closeMe());case 6:return a=r.userInfo,i=a.avatarUrl,c=a.nickName,t.next=9,new Promise((function(e){u.downloadFile({url:i,success:function(n){200===n.statusCode&&e(n.tempFilePath),e()},fail:function(e){console.error(e)},complete:function(e){}})}));case 9:return s=t.sent,l=s.split(".").pop()||"jpg",d="user/avatar/"+f+"/"+Date.now()+"-avatar."+l,t.next=14,e.uploadFile({filePath:s,cloudPath:d,fileType:"image"});case 14:p=t.sent,v={nickname:c,avatar_file:{name:d,extname:"jpg",url:p.fileID}},n.doUpdate(v,(function(){n.$refs.popup.close()}));case 17:case"end":return t.stop()}}),t)})))()},closeMe:function(e){var n=this;u.showLoading(),this.doUpdate({nickname:"匿名微信用户"},(function(){u.hideLoading(),n.$refs.popup.close()}))},doUpdate:function(e,n){var t=this;s.where("_id==$env.uid").update(e).then((function(e){n(e)})).catch((function(e){u.showModal({content:e.message||"请求服务失败",showCancel:!1}),n(e)})).finally((function(){t.$emit("next"),u.hideLoading()}))}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},a69c:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return u}));var u={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"1aeb"))}},o=function(){var e=this,n=e.$createElement;e._self._c},r=[]},b852:function(e,n,t){"use strict";var u=t("5149"),o=t.n(u);o.a},cac5:function(e,n,t){"use strict";t.r(n);var u=t("754a"),o=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=o.a},d842:function(e,n,t){"use strict";t.r(n);var u=t("a69c"),o=t("cac5");for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("b852");var a,i=t("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,"82c142d0",null,!1,u["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d842"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component']]
]);