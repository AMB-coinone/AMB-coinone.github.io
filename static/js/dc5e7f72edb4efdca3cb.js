(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-default-start"],{"6f24":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a,s=r(n("1da1")),u=r(n("5530")),c=n("2f62"),i={data:function(){return{regisged:!1,sign:null,message:"Welcome to AMB智筹"}},methods:(0,u.default)((0,u.default)((0,u.default)((0,u.default)({},(0,c.mapActions)("dapp",["registerWeb3","getContract","updateCoinBase"])),(0,c.mapMutations)("system",["setLoad"])),(0,c.mapActions)("amb",["checkRegistered","register"])),{},{checkRegister:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkRegistered({address:e.web3.coinbase});case 2:if(e.regisged=t.sent,!e.regisged.regisged){t.next=8;break}return e.$u.route({type:"reLaunch",url:"pages/default/login"}),t.abrupt("return");case 8:return e.$u.route({type:"reLaunch",url:"pages/default/register"}),t.abrupt("return");case 10:n=(new Date).getTime(),setTimeout((function(){e.$u.route({type:"reLaunch",url:"pages/amb/home/index"})}),3400-(n-a));case 12:case"end":return t.stop()}}),t)})))()}}),computed:(0,u.default)({},(0,c.mapGetters)("dapp",["web3"])),onLoad:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setLoad(),console.log("1"),t.prev=2,a=(new Date).getTime(),t.next=6,e.registerWeb3();case 6:window.imToken?imToken.callAPI("user.showAccountSwitch",{chainType:"ETHEREUM"},(function(t,n){if(t)throw new Error(t.message);e.updateCoinBase(n),e.checkRegister()})):window.ethereum&&e.checkRegister(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),e.$msgBox.show({show:!0,content:t.t0.message,icon:"prohibit",maskCloseAble:!1});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()}};t.default=i},"8eb6":function(e,t,n){"use strict";var r=n("f4c5"),a=n.n(r);a.a},9576:function(e,t,n){"use strict";n.r(t);var r=n("6f24"),a=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},"9c47":function(e,t,n){var r=n("4bad");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 信息弹窗相关 */.graph_view[data-v-6ca7e274]{height:100vh;background-color:#373942}',""]),e.exports=t},b5e9:function(e,t,n){e.exports=n.p+"static/img/load_graph.fae12bd7.gif"},d9b5:function(e,t,n){"use strict";n.r(t);var r=n("e4cc"),a=n("9576");for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("8eb6");var u,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"6ca7e274",null,!1,r["a"],u);t["default"]=i.exports},e4cc:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"graph_view"},[r("v-uni-image",{staticStyle:{width:"750rpx",height:"1334rpx"},attrs:{src:n("b5e9")}})],1)},s=[]},f4c5:function(e,t,n){var r=n("9c47");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("5a6df94c",r,!0,{sourceMap:!1,shadowMode:!1})}}]);