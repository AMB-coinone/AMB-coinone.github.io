(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-amb-jackpot-index"],{"0c9c":function(t,a,e){"use strict";e.r(a);var i=e("7f24"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"2f46":function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 信息弹窗相关 */.u-count-num[data-v-d065f1d2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;text-align:center}',""]),t.exports=a},3278:function(t,a,e){"use strict";var i=e("919c"),n=e.n(i);n.a},"3e1f":function(t,a,e){"use strict";e.r(a);var i=e("fe71"),n=e("5f48");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("9f46");var r,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"d7589ed2",null,!1,i["a"],r);a["default"]=c.exports},4890:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-count-num",style:{fontSize:t.fontSize+"rpx",fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(t._s(t.displayValue))])},o=[]},5861:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uIcon:e("f86b").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"u-back-top",class:["u-back-top--mode--"+t.mode],style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.mode?"10000rpx":"8rpx",zIndex:t.uZIndex,opacity:t.opacity},t.customStyle],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.backToTop.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):e("v-uni-view",{staticClass:"u-back-top__content"},[e("u-icon",{attrs:{name:t.icon,"custom-style":t.iconStyle},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.backToTop.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"u-back-top__content__tips"},[t._v(t._s(t.tips))])],1)],2)},o=[]},"5f48":function(t,a,e){"use strict";e.r(a);var i=e("ba07"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"5f77":function(t,a,e){"use strict";var i=e("a451"),n=e.n(i);n.a},"660f":function(t,a,e){"use strict";e.r(a);var i=e("752d"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"752d":function(t,a,e){"use strict";(function(t){var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),o=i(e("5530")),r=e("2f62"),s={data:function(){return{zijinchi:0,pool_data:null}},methods:(0,o.default)((0,o.default)({},(0,r.mapActions)("dapp",["getBalance"])),(0,r.mapActions)("amb",["prizePool"])),computed:(0,o.default)({},(0,r.mapGetters)("dapp",["address"])),onShow:function(){var a=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.address){e.next=3;break}return uni.reLaunch({url:"/pages/default/start"}),e.abrupt("return");case 3:return e.next=5,a.prizePool();case 5:return a.pool_data=e.sent,e.prev=6,e.next=9,a.getBalance({abi:a.$config.contract.abi[a.address.type],address:a.address.address});case 9:a.zijinchi=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](6),t.log(e.t0);case 15:a.zijinchi=a.web3.web3Obj.utils.fromWei(""+a.zijinchi,"mwei");case 16:case"end":return e.stop()}}),e,null,[[6,12]])})))()}};a.default=s}).call(this,e("5a52")["default"])},"7f24":function(t,a,e){"use strict";e("a9e3"),e("b680"),e("acd8"),e("ac1f"),e("5319"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-count-to",props:{startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,a,e,i){return e*(1-Math.pow(2,-10*t/i))*1024/1023+a},requestAnimationFrame:function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-this.lastTime)),i=setTimeout((function(){t(a+e)}),e);return this.lastTime=a+e,i},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var a=t.split("."),e=a[0],i=a.length>1?this.decimal+a[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(n.test(e))e=e.replace(n,"$1"+this.separator+"$2");return e+i},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};a.default=i},"8b33":function(t,a,e){"use strict";e.r(a);var i=e("4890"),n=e("0c9c");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3278");var r,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"d065f1d2",null,!1,i["a"],r);a["default"]=c.exports},"919c":function(t,a,e){var i=e("2f46");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1319cb3e",i,!0,{sourceMap:!1,shadowMode:!1})},9907:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={cloudPage:e("3e1f").default,uCountTo:e("8b33").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("cloudPage",{attrs:{backTop:!0}},[e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"jackpot_box contract flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleNavTo({url:"/pages/amb/jackpot/contractFund"})}}},[e("v-uni-image",{staticClass:"jackpot_icon1",attrs:{src:"/static/amb/jackpot/jackpot_icon1.png"}}),e("v-uni-view",{staticClass:"jackpot_data flex1"},[e("v-uni-view",{staticClass:"data_num"},[e("u-count-to",{attrs:{"start-val":0,"end-val":t.zijinchi,decimals:2,color:"#FFFFFF","font-size":"48"}})],1),e("v-uni-view",{staticClass:"data_name"},[t._v("合约资金池（USDT）")])],1),e("v-uni-image",{staticClass:"tishi",attrs:{src:"/static/amb/jackpot/guanyu1.png"}})],1),e("v-uni-view",{staticClass:"jackpot_box jili flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleNavTo({url:"/pages/amb/jackpot/excitation"})}}},[e("v-uni-image",{staticClass:"jackpot_icon2",attrs:{src:"/static/amb/jackpot/jackpot_icon2.png"}}),e("v-uni-view",{staticClass:"jackpot_data flex1"},[e("v-uni-view",{staticClass:"data_num"},[t._v(t._s(t.pool_data?t.pool_data.incentive_amount:0))]),e("v-uni-view",{staticClass:"data_name"},[t._v("激励池（USDT）")])],1),e("v-uni-image",{staticClass:"tishi",attrs:{src:"/static/amb/jackpot/guanyu2.png"}})],1),e("v-uni-view",{staticClass:"jackpot_box amb flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleNavTo({url:"/pages/amb/jackpot/destruction"})}}},[e("v-uni-image",{staticClass:"jackpot_icon1",attrs:{src:"/static/amb/jackpot/jackpot_icon3.png"}}),e("v-uni-view",{staticClass:"jackpot_data flex1"},[e("v-uni-view",{staticClass:"data_num"},[t._v(t._s(t.pool_data?t.pool_data.ambt_count:0))]),e("v-uni-view",{staticClass:"data_name"},[t._v("已销毁AMBT车后币数量（AMBT）")])],1),e("v-uni-image",{staticClass:"tishi",attrs:{src:"/static/amb/jackpot/guanyu3.png"}})],1),e("v-uni-view",{staticClass:"daretou flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-view",{staticClass:"daretou_title"},[t._v("智筹大乐透")]),e("v-uni-view",{staticClass:"daretou_info"},[t._v("参与人数达到5000人时开放")])],1),e("v-uni-button",{staticClass:"daletou_btn"},[t._v("我要参与")])],1)],1)],1)],1)},o=[]},"9f46":function(t,a,e){"use strict";var i=e("b90d"),n=e.n(i);n.a},a451:function(t,a,e){var i=e("b771");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("389b14be",i,!0,{sourceMap:!1,shadowMode:!1})},b771:function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 信息弹窗相关 */.u-back-top[data-v-f47233f4]{width:%?80?%;height:%?80?%;position:fixed;z-index:9;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#e1e1e1;color:#606266;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:opacity .4s;transition:opacity .4s}.u-back-top__content[data-v-f47233f4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-top__content__tips[data-v-f47233f4]{font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);line-height:1}',""]),t.exports=a},b90d:function(t,a,e){var i=e("cb67");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0f144e1a",i,!0,{sourceMap:!1,shadowMode:!1})},ba07:function(t,a,e){"use strict";var i=e("4ea4");e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),o=i(e("5530")),r=e("2f62"),s={props:{backTop:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20},rbIndex:{type:Number,default:1},loadingBG:{type:String,default:"rgba(255,255,255, 0.7)"},isLoading:{type:Boolean,default:!1},loadingPointBg:{type:String,default:"#3688FF"}},data:function(){return{innerLoading:!1,scrollTop:0}},computed:(0,o.default)({},(0,r.mapGetters)("dapp",["web3"])),methods:(0,o.default)((0,o.default)({},(0,r.mapActions)("dapp",["registerWeb3"])),{},{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:100})}}),created:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.web3.coinbase){a.next=6;break}return t.innerLoading=!0,a.next=4,t.registerWeb3().catch((function(a){t.$msgBox.show({show:!0,content:a.message,icon:"prohibit",maskCloseAble:!1})}));case 4:t.innerLoading=!1,"function"==typeof t.$parent.loadingCompleted&&t.$parent.loadingCompleted();case 6:case"end":return a.stop()}}),a)})))()},pageEvent:{onPageScroll:function(t){this.scrollTop=t.scrollTop}}};a.default=s},be25:function(t,a,e){"use strict";var i=e("fb79"),n=e.n(i);n.a},c761:function(t,a,e){"use strict";e.r(a);var i=e("e727"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},c863:function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,".container[data-v-3f65a9cd]{padding:%?72?% %?40?%;width:100%}.jackpot_box[data-v-3f65a9cd]{margin-bottom:%?20?%;width:100%;height:%?172?%;border-radius:%?20?%;box-sizing:border-box;padding:0 %?54?% 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.contract[data-v-3f65a9cd]{background:-webkit-linear-gradient(left,#6a14d1,#c82090);background:linear-gradient(90deg,#6a14d1,#c82090)}.jili[data-v-3f65a9cd]{background:-webkit-linear-gradient(left,#ff5a00,#feba59);background:linear-gradient(90deg,#ff5a00,#feba59)}.amb[data-v-3f65a9cd]{background:-webkit-linear-gradient(left,#0c60fc,#1dd5e6);background:linear-gradient(90deg,#0c60fc,#1dd5e6)}.daretou[data-v-3f65a9cd]{width:100%;height:%?172?%;background-image:url(/static/amb/jackpot/daletou.png);background-size:100% 100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?130?%;padding-right:%?34?%;box-sizing:border-box}.jackpot_icon1[data-v-3f65a9cd]{width:%?60?%;height:%?60?%;margin-right:%?35?%}.jackpot_icon2[data-v-3f65a9cd]{width:%?44?%;height:%?49?%;margin-right:%?44?%}.data_num[data-v-3f65a9cd]{font-size:%?48?%;font-family:DIN;font-weight:400;color:#e5f8fc}.data_name[data-v-3f65a9cd]{font-size:%?26?%;font-family:PingFang SC;font-weight:300;color:#e5f8fc}.tishi[data-v-3f65a9cd]{width:%?40?%;height:%?40?%}.daretou_title[data-v-3f65a9cd]{font-size:%?36?%;font-family:PingFang SC;font-weight:300;color:#e5f8fc;margin-bottom:%?10?%}.daretou_info[data-v-3f65a9cd]{font-size:%?22?%;font-family:PingFang SC;font-weight:300;color:#e5f8fc}.daletou_btn[data-v-3f65a9cd]{width:%?142?%;height:%?62?%;background:#fff;border-radius:%?31?%;padding:0;font-size:%?26?%;font-family:PingFang SC;font-weight:300;color:#ff5b00;line-height:%?62?%}",""]),t.exports=a},cb67:function(t,a,e){var i=e("4bad");a=i(!1),a.push([t.i,".grace-sbody[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;min-height:100%}.grace-page-body[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}.gui-page-rb-area[data-v-d7589ed2]{position:fixed;right:%?20?%;bottom:%?100?%;z-index:1;width:%?100?%}.grace-page-loading[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;left:0;top:0;bottom:0;z-index:9999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:100%;background:hsla(0,0%,100%,.1)}.grace-page-loading-point[data-v-d7589ed2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.grace-page-loading-points[data-v-d7589ed2]{margin:%?10?%;border-radius:%?50?%;width:%?20?%;height:%?20?%;background-color:#3688ff;opacity:.5}@-webkit-keyframes pageLoading1-data-v-d7589ed2{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading1-data-v-d7589ed2{0%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}40%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}60%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading2-data-v-d7589ed2{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading2-data-v-d7589ed2{20%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}60%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}80%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes pageLoading3-data-v-d7589ed2{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}@keyframes pageLoading3-data-v-d7589ed2{40%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}80%{opacity:1;-webkit-transform:scale(1.5);transform:scale(1.5)}100%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}}.animate1[data-v-d7589ed2]{-webkit-animation:pageLoading1-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading1-data-v-d7589ed2 1.2s infinite linear}.animate2[data-v-d7589ed2]{-webkit-animation:pageLoading2-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading2-data-v-d7589ed2 1.2s infinite linear}.animate3[data-v-d7589ed2]{-webkit-animation:pageLoading3-data-v-d7589ed2 1.2s infinite linear;animation:pageLoading3-data-v-d7589ed2 1.2s infinite linear}",""]),t.exports=a},d329:function(t,a,e){"use strict";e.r(a);var i=e("9907"),n=e("660f");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("be25");var r,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3f65a9cd",null,!1,i["a"],r);a["default"]=c.exports},e3c9:function(t,a,e){"use strict";e.r(a);var i=e("5861"),n=e("c761");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("5f77");var r,s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"f47233f4",null,!1,i["a"],r);a["default"]=c.exports},e727:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:function(){return{color:"#909399",fontSize:"38rpx"}}},customStyle:{type:Object,default:function(){return{}}}},watch:{showBackTop:function(t,a){t?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop:function(){return this.scrollTop>uni.upx2px(this.top)}},data:function(){return{opacity:0,uZIndex:-1}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};a.default=i},fb79:function(t,a,e){var i=e("c863");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("45793ea9",i,!0,{sourceMap:!1,shadowMode:!1})},fe71:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uBackTop:e("e3c9").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"grace-sbody"},[e("v-uni-view",{staticClass:"grace-page-body"},[t.web3.coinbase?t._t("gBody"):t._e()],2),t.backTop?e("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:t.rbRight+"rpx",bottom:t.rbBottom+"rpx",width:t.rbWidth+"rpx",zIndex:t.rbIndex}},[t._t("gRTArea",[e("u-back-top",{attrs:{"scroll-top":t.scrollTop,icon:"arrow-up",mode:"square",customStyle:{background:"#FDE4A3","border-radius":"16rpx","box-shadow":"0px 0px 10px 0px rgba(0, 0, 0, 0.25)"},iconStyle:{color:"#333333","font-size":"40rpx"}}})])],2):t._e(),t.isLoading||t.innerLoading?e("v-uni-view",{staticClass:"grace-page-loading",style:{background:t.loadingBG},on:{touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a)}}},[e("v-uni-view",{staticClass:"grace-page-loading-point"},[e("v-uni-view",{staticClass:"grace-page-loading-points animate1",style:{background:t.loadingPointBg}}),e("v-uni-view",{staticClass:"grace-page-loading-points animate2",style:{background:t.loadingPointBg}}),e("v-uni-view",{staticClass:"grace-page-loading-points animate3",style:{background:t.loadingPointBg}})],1)],1):t._e()],1)},o=[]}}]);