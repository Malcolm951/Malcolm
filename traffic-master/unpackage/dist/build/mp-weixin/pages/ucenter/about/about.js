(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/about/about"],{"03cf":function(e,t,n){"use strict";(function(e){n("7482"),n("a9ff");o(n("66fd"));var t=o(n("7d6d"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"320d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("623d"));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode")]).then(function(){return resolve(n("5ad3"))}.bind(null,n)).catch(n.oe)},u={components:{uqrcode:r},onLoad:function(){},computed:{uniStarterConfig:function(){return console.log(getApp()),getApp().globalData.config},agreements:function(){if(!o.default.agreements)return[];var e=o.default.agreements,t=e.serviceUrl,n=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]}},data:function(){return{version:"V1.0.0",year:"2020",about:{}}},created:function(){this.about=this.uniStarterConfig.about,e.setNavigationBarTitle({title:this.$t("about.about")+" "+this.about.appName}),this.year=(new Date).getFullYear()},onNavigationBarButtonTap:function(){var e=this.about,t=e.download,n=e.appName,o=e.slogan,a=e.logo;uniShare.show({content:{type:0,href:t,title:n,summary:o,imageUrl:a+"?x-oss-process=image/resize,m_fill,h_100,w_100"},menus:[{img:"/static/app-plus/sharemenu/wechatfriend.png",text:this.$t("common.wechatFriends"),share:{provider:"weixin",scene:"WXSceneSession"}},{img:"/static/app-plus/sharemenu/wechatmoments.png",text:this.$t("common.wechatBbs"),share:{provider:"weixin",scene:"WXSceneTimeline"}},{img:"/static/app-plus/sharemenu/weibo.png",text:this.$t("common.weibo"),share:{provider:"sinaweibo"}},{img:"/static/app-plus/sharemenu/qq.png",text:"QQ",share:{provider:"qq"}},{img:"/static/app-plus/sharemenu/copyurl.png",text:this.$t("common.copy"),share:"copyurl"},{img:"/static/app-plus/sharemenu/more.png",text:this.$t("common.more"),share:"shareSystem"}],cancelText:this.$t("common.cancelShare")},(function(e){console.log(e)}))},methods:{navigateTo:function(t){var n=t.url,o=t.title;e.navigateTo({url:"/pages/common/webview/webview?url="+n+"&title="+o,success:function(e){},fail:function(){},complete:function(){}})}}};t.default=u}).call(this,n("543d")["default"])},"3db3":function(e,t,n){"use strict";var o=n("dd7d"),a=n.n(o);a.a},"7d6d":function(e,t,n){"use strict";n.r(t);var o=n("e2cb"),a=n("8b99");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("3db3");var u,i=n("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"46865f7d",null,!1,o["a"],u);t["default"]=c.exports},"8b99":function(e,t,n){"use strict";n.r(t);var o=n("320d"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},dd7d:function(e,t,n){},e2cb:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uqrcode:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/Sansnn-uQRCode/components/uqrcode/uqrcode")]).then(n.bind(null,"5ad3"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t("about.sacnQR")),o=e.$t("about.client"),a=e.__map(e.agreements,(function(t,n){var o=e.__get_orig(t),a=e.agreements.length-1>n?e.$t("about.and"):null;return{$orig:o,m2:a}}));e.$mp.data=Object.assign({},{$root:{m0:n,m1:o,l0:a}})},r=[]}},[["03cf","common/runtime","common/vendor"]]]);