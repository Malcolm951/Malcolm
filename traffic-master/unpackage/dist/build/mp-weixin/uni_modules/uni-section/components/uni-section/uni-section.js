(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-section/components/uni-section/uni-section"],{1453:function(t,n,e){"use strict";e.r(n);var i=e("8889"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=u.a},"3bd3":function(t,n,e){"use strict";e.r(n);var i=e("9f76"),u=e("1453");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("a158");var o,a=e("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=c.exports},"72c3":function(t,n,e){},8889:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(n){t.report&&""!==n&&t.report("title",n)}},methods:{onClick:function(){this.$emit("click")}}};n.default=e}).call(this,e("543d")["default"])},"9f76":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},a158:function(t,n,e){"use strict";var i=e("72c3"),u=e.n(i);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-section/components/uni-section/uni-section-create-component',
    {
        'uni_modules/uni-section/components/uni-section/uni-section-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3bd3"))
        })
    },
    [['uni_modules/uni-section/components/uni-section/uni-section-create-component']]
]);