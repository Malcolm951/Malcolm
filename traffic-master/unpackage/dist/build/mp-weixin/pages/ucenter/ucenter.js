(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/ucenter"],{"3e23":function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(t("a34a")),u=s(t("c5c1")),r=s(t("effa")),c=t("4456");function s(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,o,u,r){try{var c=n[u](r),s=c.value}catch(a){return void t(a)}c.done?e(s):Promise.resolve(s).then(i,o)}function l(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var u=n.apply(e,t);function r(n){a(u,i,o,r,c,"next",n)}function c(n){a(u,i,o,r,c,"throw",n)}r(void 0)}))}}var d=n.database(),f={data:function(){return{gridList:[{text:this.$t("mine.showText"),icon:"chat"},{text:this.$t("mine.showText"),icon:"cloud-upload"},{text:this.$t("mine.showText"),icon:"contact"},{text:this.$t("mine.showText"),icon:"download"}],ucenterList:[[{title:this.$t("mine.signIn"),event:"signIn",icon:"compose"},{title:this.$t("mine.readArticles"),to:"/pages/ucenter/read-news-log/read-news-log",icon:"flag"},{title:this.$t("mine.myScore"),to:"",event:"getScore",icon:"paperplane"}],[{title:this.$t("mine.feedback"),to:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",icon:"help"},{title:this.$t("mine.settings"),to:"/pages/ucenter/settings/settings",icon:"gear"}],[{title:this.$t("mine.about"),to:"/pages/ucenter/about/about",icon:"info"}]],listStyles:{height:"150rpx",width:"150rpx",border:{color:"#eee",width:"1px",style:"solid",radius:"100%"}}}},onLoad:function(){},onShow:function(){},computed:{userInfo:function(){return c.store.userInfo},hasLogin:function(){return c.store.hasLogin},appConfig:function(){return getApp().globalData.config}},methods:{toSettings:function(){i.navigateTo({url:"/pages/ucenter/settings/settings"})},signIn:function(){this.$refs.signIn.open()},signInByAd:function(){this.$refs.signIn.showRewardedVideoAd()},ucenterListClick:function(n){!n.to&&n.event&&this[n.event]()},checkVersion:function(){return l(o.default.mark((function n(){var e;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.default)();case 2:e=n.sent,console.log(e),e.result.code>0?(0,u.default)():i.showToast({title:e.result.message,icon:"none"});case 5:case"end":return n.stop()}}),n)})))()},toUserInfo:function(){i.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"})},tapGrid:function(n){i.showToast({title:this.$t("mine.clicked")+" "+(n+1),icon:"none"})},gotoMarket:function(){},getScore:function(){var n=this;if(!this.userInfo)return i.showToast({title:this.$t("mine.checkScore"),icon:"none"});i.showLoading({mask:!0}),d.collection("uni-id-scores").where('"user_id" == $env.uid').field("score,balance").orderBy("create_date","desc").limit(1).get().then((function(e){console.log(e);var t=e.result.data[0],o="";o=t?n.$t("mine.currentScore")+t.balance:n.$t("mine.noScore"),i.showToast({title:o,icon:"none"})})).finally((function(){i.hideLoading()}))},share:function(){var n=this;return l(o.default.mark((function e(){var t,u,r,c;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.collection("uni-id-users").where("'_id' == $cloudEnv_uid").field("my_invite_code").get();case 2:if(t=e.sent,u=t.result,r=u.data[0].my_invite_code,r){e.next=7;break}return e.abrupt("return",i.showToast({title:"请检查uni-config-center中uni-id配置，是否已启用 autoSetInviteCode",icon:"none"}));case 7:console.log({myInviteCode:r}),c=n.appConfig.about,c.appName,c.logo,c.company,c.slogan;case 9:case"end":return e.stop()}}),e)})))()}}};e.default=f}).call(this,t("a9ff")["default"],t("543d")["default"])},"4f6a":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}));var i={uniSignIn:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in")]).then(t.bind(null,"e2ab"))},cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,"96a1"))},uniGrid:function(){return t.e("uni_modules/uni-grid/components/uni-grid/uni-grid").then(t.bind(null,"5958"))},uniGridItem:function(){return t.e("uni_modules/uni-grid/components/uni-grid-item/uni-grid-item").then(t.bind(null,"4a03"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"1caa"))},uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,"4b28"))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,"9c5a"))}},o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.hasLogin?null:n.$t("mine.notLogged")),i=n.__map(n.ucenterList,(function(e,t){var i=n.__get_orig(e),o=n.__map(e,(function(e,t){var i=n.__get_orig(e),o={type:e.icon,color:"#999"};return{$orig:i,a0:o}}));return{$orig:i,l0:o}}));n.$mp.data=Object.assign({},{$root:{m0:t,l1:i}})},u=[]},5284:function(n,e,t){"use strict";(function(n){t("7482"),t("a9ff");i(t("66fd"));var e=i(t("7f48"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"7f48":function(n,e,t){"use strict";t.r(e);var i=t("4f6a"),o=t("89e5");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("cbb9");var r,c=t("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"77cb1a34",null,!1,i["a"],r);e["default"]=s.exports},"89e5":function(n,e,t){"use strict";t.r(e);var i=t("3e23"),o=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=o.a},cbb9:function(n,e,t){"use strict";var i=t("d443"),o=t.n(i);o.a},d443:function(n,e,t){}},[["5284","common/runtime","common/vendor"]]]);