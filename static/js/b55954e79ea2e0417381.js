(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-amb-wallet-transfer"],{"0034":function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 信息弹窗相关 */.u-btn[data-v-2d78619c]::after{border:none}.u-btn[data-v-2d78619c]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-2d78619c]{border:1px solid #fff}.u-btn--default[data-v-2d78619c]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-2d78619c]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-2d78619c]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-2d78619c]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-2d78619c]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-2d78619c]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-2d78619c]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-2d78619c]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-2d78619c]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-2d78619c]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-2d78619c]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-2d78619c]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-2d78619c]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-2d78619c]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-2d78619c]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-2d78619c]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-2d78619c]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-2d78619c]{border-radius:%?100?%}.u-round-circle[data-v-2d78619c]::after{border-radius:%?100?%}.u-loading[data-v-2d78619c]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-2d78619c]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-2d78619c]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-2d78619c]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-2d78619c]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-2d78619c]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-2d78619c]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-2d78619c]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-2d78619c]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-2d78619c]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-2d78619c]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-2d78619c]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-2d78619c]{background:#18b566!important;color:#fff}.u-info-hover[data-v-2d78619c]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-2d78619c]{background:#f29100!important;color:#fff}.u-error-hover[data-v-2d78619c]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"0158":function(t,e,a){"use strict";a.r(e);var n=a("0247"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"0247":function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var n=a[0];if(n.width&&n.width&&(n.targetWidth=n.height>n.width?n.height:n.width,n.targetWidth)){e.fields=n;var i="",o="";i=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-n.top-n.targetWidth/2,e.rippleLeft=i-n.left-n.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=n},"0ad9":function(t,e,a){"use strict";a.r(e);var n=a("a233"),i=a("f588");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("0b52");var r,d=a("f0c5"),c=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"13ba87fa",null,!1,n["a"],r);e["default"]=c.exports},"0b52":function(t,e,a){"use strict";var n=a("98f7"),i=a.n(n);i.a},"0fde":function(t,e,a){"use strict";var n=a("ab82"),i=a.n(n);i.a},"3e1f":function(t,e,a){"use strict";a.r(e);var n=a("fe71"),i=a("5f48");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("9f46");var r,d=a("f0c5"),c=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"d7589ed2",null,!1,n["a"],r);e["default"]=c.exports},5861:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uIcon:a("f86b").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-back-top",class:["u-back-top--mode--"+t.mode],style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.mode?"10000rpx":"8rpx",zIndex:t.uZIndex,opacity:t.opacity},t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):a("v-uni-view",{staticClass:"u-back-top__content"},[a("u-icon",{attrs:{name:t.icon,"custom-style":t.iconStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"u-back-top__content__tips"},[t._v(t._s(t.tips))])],1)],2)},o=[]},"5f48":function(t,e,a){"use strict";a.r(e);var n=a("ba07"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"5f77":function(t,e,a){"use strict";var n=a("a451"),i=a.n(n);i.a},"75b6":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),o=n(a("5530")),r=a("2f62"),d={data:function(){return{number:null,address:null,loading:!1}},methods:(0,o.default)((0,o.default)({},(0,r.mapActions)("wallet",["loadAssets","transferById"])),{},{all:function(){this.number=this.assets.balance},transfer:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(t.address){e.next=5;break}return t.makeToast({content:"转账id不能为空"}),e.abrupt("return");case 5:if(t.number){e.next=8;break}return t.makeToast({content:"请输入正确的互转数量"}),e.abrupt("return");case 8:if(!(t.number<10)){e.next=11;break}return t.makeToast({content:"互转数量需大于10U"}),e.abrupt("return");case 11:return t.loading=!0,e.prev=12,e.next=15,t.transferById({to:t.address,symbol:"USDT",num:t.number});case 15:t.makeToast({content:"转账成功"}),t.loading=!1,e.next=24;break;case 19:e.prev=19,e.t0=e["catch"](12),console.log(e.t0),t.makeToast({content:e.t0.response.data.message}),t.loading=!1;case 24:t.assets.balance=t.assets.balance-t.number,t.number=null,t.address=null,t.loading=!1;case 28:case"end":return e.stop()}}),e,null,[[12,19]])})))()}}),onLoad:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadAssets();case 2:case"end":return e.stop()}}),e)})))()},computed:(0,o.default)({},(0,r.mapGetters)("wallet",["assets"]))};e.default=d},"8cff":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[]},"98f7":function(t,e,a){var n=a("ea90");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("90ffa504",n,!0,{sourceMap:!1,shadowMode:!1})},"9f46":function(t,e,a){"use strict";var n=a("b90d"),i=a.n(n);i.a},a233:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={cloudPage:a("3e1f").default,uButton:a("d9ad").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cloudPage",{attrs:{backTop:!0}},[a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"coin_address flex"},[a("v-uni-view",{staticClass:"flex1"},[t._v("USDT")]),a("v-uni-view",{staticClass:"type"},[t._v("ERC20")])],1),a("v-uni-view",{staticClass:"recharge_box"},[a("v-uni-view",{staticClass:"recharge_title"},[t._v("转账ID")]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-input",{staticClass:"flex1 transfer_input",attrs:{type:"number","placeholder-style":"color: #6C728C",placeholder:"请输入用户ID"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("v-uni-view",{staticClass:"recharge_num_box"},[a("v-uni-view",{staticClass:"recharge_num_title"},[t._v("互转数量")]),a("v-uni-view",{staticClass:"flex",staticStyle:{"align-items":"center"}},[a("v-uni-input",{staticClass:"recharge_input",attrs:{type:"digit",placeholder:"互转数量最少为10U","placeholder-style":"color: #6c728c;"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),a("v-uni-view",{staticStyle:{color:"#6c728c","margin-right":"30rpx"}},[t._v("USDT")]),a("v-uni-view",{staticStyle:{color:"#1dd5e6"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.all.apply(void 0,arguments)}}},[t._v("全部")])],1),a("v-uni-view",{staticClass:"explain"},[t._v("可用"),a("v-uni-text",{staticStyle:{color:"#397eff"}},[t._v(t._s(t.assets?t.assets.balance:0))]),t._v("USDT")],1)],1)],1),a("v-uni-view",{staticClass:"explian"},[t._v("重要提醒：互转功能仅支持已在AMB智筹内部注册的帐户之间互转，如资产转错，后果自负。")]),a("u-button",{staticClass:"recharge_btn",attrs:{loading:t.loading,ripple:!0},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.transfer.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},o=[]},a451:function(t,e,a){var n=a("b771");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("389b14be",n,!0,{sourceMap:!1,shadowMode:!1})},ab82:function(t,e,a){var n=a("0034");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("00a119a3",n,!0,{sourceMap:!1,shadowMode:!1})},b771:function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 信息弹窗相关 */.u-back-top[data-v-f47233f4]{width:%?80?%;height:%?80?%;position:fixed;z-index:9;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#e1e1e1;color:#606266;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:opacity .4s;transition:opacity .4s}.u-back-top__content[data-v-f47233f4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-top__content__tips[data-v-f47233f4]{font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);line-height:1}',""]),t.exports=e},b90d:function(t,e,a){var n=a("cb67");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0f144e1a",n,!0,{sourceMap:!1,shadowMode:!1})},ba07:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),o=n(a("5530")),r=a("2f62"),d={props:{backTop:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20},rbIndex:{type:Number,default:1},loadingBG:{type:String,default:"rgba(255,255,255, 0.7)"},isLoading:{type:Boolean,default:!1},loadingPointBg:{type:String,default:"#3688FF"}},data:function(){return{innerLoading:!1,scrollTop:0}},computed:(0,o.default)({},(0,r.mapGetters)("dapp",["web3"])),methods:(0,o.default)((0,o.default)({},(0,r.mapActions)("dapp",["registerWeb3"])),{},{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:100})}}),created:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.web3.coinbase){e.next=6;break}return t.innerLoading=!0,e.next=4,t.registerWeb3().catch((function(e){t.$msgBox.show({show:!0,content:e.message,icon:"prohibit",maskCloseAble:!1})}));case 4:t.innerLoading=!1,"function"==typeof t.$parent.loadingCompleted&&t.$parent.loadingCompleted();case 6:case"end":return e.stop()}}),e)})))()},pageEvent:{onPageScroll:function(t){this.scrollTop=t.scrollTop}}};e.default=d},c761:function(t,e,a){"use strict";a.r(e);var n=a("e727"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},cb67:function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,".grace-sbody[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;min-height:100%}.grace-page-body[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}.gui-page-rb-area[data-v-d7589ed2]{position:fixed;right:%?20?%;bottom:%?100?%;z-index:1;width:%?100?%}.grace-page-loading[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;left:0;top:0;bottom:0;z-index:9999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:100%;background:hsla(0,0%,100%,.1)}.grace-page-loading-point[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-page-loading-points[data-v-d7589ed2]{margin:%?10?%;border-radius:%?50?%;width:%?20?%;height:%?20?%;background-color:#3688ff;opacity:.5}@-webkit-keyframes pageLoading1-data-v-d7589ed2{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading1-data-v-d7589ed2{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading2-data-v-d7589ed2{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading2-data-v-d7589ed2{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading3-data-v-d7589ed2{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading3-data-v-d7589ed2{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}.animate1[data-v-d7589ed2]{-webkit-animation:pageLoading1-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading1-data-v-d7589ed2 1.2s infinite linear}.animate2[data-v-d7589ed2]{-webkit-animation:pageLoading2-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading2-data-v-d7589ed2 1.2s infinite linear}.animate3[data-v-d7589ed2]{-webkit-animation:pageLoading3-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading3-data-v-d7589ed2 1.2s infinite linear}",""]),t.exports=e},d9ad:function(t,e,a){"use strict";a.r(e);var n=a("8cff"),i=a("0158");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("0fde");var r,d=a("f0c5"),c=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"2d78619c",null,!1,n["a"],r);e["default"]=c.exports},e3c9:function(t,e,a){"use strict";a.r(e);var n=a("5861"),i=a("c761");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("5f77");var r,d=a("f0c5"),c=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"f47233f4",null,!1,n["a"],r);e["default"]=c.exports},e727:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:function(){return{color:"#909399",fontSize:"38rpx"}}},customStyle:{type:Object,default:function(){return{}}}},watch:{showBackTop:function(t,e){t?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop:function(){return this.scrollTop>uni.upx2px(this.top)}},data:function(){return{opacity:0,uZIndex:-1}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};e.default=n},ea90:function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,".container[data-v-13ba87fa]{width:100%;padding:%?30?%;box-sizing:border-box}.coin_address[data-v-13ba87fa]{width:100%;height:%?88?%;background:#121a33;border-radius:%?20?%;padding:0 %?30?%;line-height:%?88?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#b0b7d1;margin-bottom:%?30?%}.type[data-v-13ba87fa]{color:#6c728c}.recharge_box[data-v-13ba87fa]{width:100%;height:%?408?%;background:#121a33;border-radius:%?20?%;padding:%?30?%;box-sizing:border-box;margin-bottom:%?30?%}.recharge_title[data-v-13ba87fa]{font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#b0b7d1}.recharge_address[data-v-13ba87fa]{height:%?74?%;line-height:%?74?%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:hsla(0,0%,100%,.8)}.recharge_num_box[data-v-13ba87fa]{width:100%;height:%?154?%;border-top:1px solid rgba(79,85,112,.3);border-bottom:1px solid rgba(79,85,112,.3);padding-top:%?30?%;margin-bottom:%?110?%}.recharge_num_title[data-v-13ba87fa]{height:%?40?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#b0b7d1;line-height:%?40?%}.recharge_input[data-v-13ba87fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?84?%;font-size:%?26?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:84px}.explain[data-v-13ba87fa]{height:%?82?%;line-height:%?82?%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#6c728c}.recharge_btn[data-v-13ba87fa]{width:100%;height:%?88?%;background:-webkit-linear-gradient(left,#1dd5e6,#397eff);background:linear-gradient(90deg,#1dd5e6,#397eff);border-radius:%?44?%;line-height:%?88?%;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#113b7a;margin-bottom:%?40?%}.zhuyi[data-v-13ba87fa]{height:%?88?%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#6c728c;line-height:%?44?%}.arrive_box[data-v-13ba87fa]{font-size:%?26?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#6c728c}.arrice_title[data-v-13ba87fa]{height:%?40?%;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#b0b7d1;line-height:%?40?%;margin-bottom:%?18?%}.transfer_input[data-v-13ba87fa]{height:%?84?%;line-height:%?84?%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}.scan_icon[data-v-13ba87fa]{width:%?32?%;height:%?32?%;margin-right:%?28?%}.explian[data-v-13ba87fa]{height:%?72?%;font-size:%?24?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#b0b7d1;line-height:%?36?%;margin-bottom:%?150?%}",""]),t.exports=e},f588:function(t,e,a){"use strict";a.r(e);var n=a("75b6"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},fe71:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uBackTop:a("e3c9").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"grace-sbody"},[a("v-uni-view",{staticClass:"grace-page-body"},[t.web3.coinbase?t._t("gBody"):t._e()],2),t.backTop?a("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:t.rbRight+"rpx",bottom:t.rbBottom+"rpx",width:t.rbWidth+"rpx",zIndex:t.rbIndex}},[t._t("gRTArea",[a("u-back-top",{attrs:{"scroll-top":t.scrollTop,icon:"arrow-up",mode:"square",customStyle:{background:"#FDE4A3","border-radius":"16rpx","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.25)"},iconStyle:{color:"#333333","font-size":"40rpx"}}})])],2):t._e(),t.isLoading||t.innerLoading?a("v-uni-view",{staticClass:"grace-page-loading",style:{background:t.loadingBG},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"grace-page-loading-point"},[a("v-uni-view",{staticClass:"grace-page-loading-points animate1",style:{background:t.loadingPointBg}}),a("v-uni-view",{staticClass:"grace-page-loading-points animate2",style:{background:t.loadingPointBg}}),a("v-uni-view",{staticClass:"grace-page-loading-points animate3",style:{background:t.loadingPointBg}})],1)],1):t._e()],1)},o=[]}}]);