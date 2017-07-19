/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

window.$ = window.jQuery = __webpack_require__(4);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(34);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

﻿/**
 * jQuery EasyUI 1.5
 * 
 * Copyright (c) 2009-2016 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
$.easyui={indexOfArray:function(a,o,id){
for(var i=0,_1=a.length;i<_1;i++){
if(id==undefined){
if(a[i]==o){
return i;
}
}else{
if(a[i][o]==id){
return i;
}
}
}
return -1;
},removeArrayItem:function(a,o,id){
if(typeof o=="string"){
for(var i=0,_2=a.length;i<_2;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _3=this.indexOfArray(a,o);
if(_3!=-1){
a.splice(_3,1);
}
}
},addArrayItem:function(a,o,r){
var _4=this.indexOfArray(a,o,r?r[o]:undefined);
if(_4==-1){
a.push(r?r:o);
}else{
a[_4]=r?r:o;
}
},getArrayItem:function(a,o,id){
var _5=this.indexOfArray(a,o,id);
return _5==-1?null:a[_5];
},forEach:function(_6,_7,_8){
var _9=[];
for(var i=0;i<_6.length;i++){
_9.push(_6[i]);
}
while(_9.length){
var _a=_9.shift();
if(_8(_a)==false){
return;
}
if(_7&&_a.children){
for(var i=_a.children.length-1;i>=0;i--){
_9.unshift(_a.children[i]);
}
}
}
}};
$.parser={auto:true,onComplete:function(_b){
},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","switchbutton","progressbar","tree","textbox","passwordbox","filebox","combo","combobox","combotree","combogrid","combotreegrid","numberbox","validatebox","searchbox","spinner","numberspinner","timespinner","datetimespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","datalist","tabs","accordion","window","dialog","form"],parse:function(_c){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _d=$.parser.plugins[i];
var r=$(".easyui-"+_d,_c);
if(r.length){
if(r[_d]){
r.each(function(){
$(this)[_d]($.data(this,"options")||{});
});
}else{
aa.push({name:_d,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _e=[];
for(var i=0;i<aa.length;i++){
_e.push(aa[i].name);
}
easyloader.load(_e,function(){
for(var i=0;i<aa.length;i++){
var _f=aa[i].name;
var jq=aa[i].jq;
jq.each(function(){
$(this)[_f]($.data(this,"options")||{});
});
}
$.parser.onComplete.call($.parser,_c);
});
}else{
$.parser.onComplete.call($.parser,_c);
}
},parseValue:function(_10,_11,_12,_13){
_13=_13||0;
var v=$.trim(String(_11||""));
var _14=v.substr(v.length-1,1);
if(_14=="%"){
v=parseInt(v.substr(0,v.length-1));
if(_10.toLowerCase().indexOf("width")>=0){
v=Math.floor((_12.width()-_13)*v/100);
}else{
v=Math.floor((_12.height()-_13)*v/100);
}
}else{
v=parseInt(v)||undefined;
}
return v;
},parseOptions:function(_15,_16){
var t=$(_15);
var _17={};
var s=$.trim(t.attr("data-options"));
if(s){
if(s.substring(0,1)!="{"){
s="{"+s+"}";
}
_17=(new Function("return "+s))();
}
$.map(["width","height","left","top","minWidth","maxWidth","minHeight","maxHeight"],function(p){
var pv=$.trim(_15.style[p]||"");
if(pv){
if(pv.indexOf("%")==-1){
pv=parseInt(pv);
if(isNaN(pv)){
pv=undefined;
}
}
_17[p]=pv;
}
});
if(_16){
var _18={};
for(var i=0;i<_16.length;i++){
var pp=_16[i];
if(typeof pp=="string"){
_18[pp]=t.attr(pp);
}else{
for(var _19 in pp){
var _1a=pp[_19];
if(_1a=="boolean"){
_18[_19]=t.attr(_19)?(t.attr(_19)=="true"):undefined;
}else{
if(_1a=="number"){
_18[_19]=t.attr(_19)=="0"?0:parseFloat(t.attr(_19))||undefined;
}
}
}
}
}
$.extend(_17,_18);
}
return _17;
}};
$(function(){
var d=$("<div style=\"position:absolute;top:-1000px;width:100px;height:100px;padding:5px\"></div>").appendTo("body");
$._boxModel=d.outerWidth()!=100;
d.remove();
d=$("<div style=\"position:fixed\"></div>").appendTo("body");
$._positionFixed=(d.css("position")=="fixed");
d.remove();
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_1b){
if(_1b==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this._size("width",_1b);
};
$.fn._outerHeight=function(_1c){
if(_1c==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this._size("height",_1c);
};
$.fn._scrollLeft=function(_1d){
if(_1d==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_1d);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._size=function(_1e,_1f){
if(typeof _1e=="string"){
if(_1e=="clear"){
return this.each(function(){
$(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""});
});
}else{
if(_1e=="fit"){
return this.each(function(){
_20(this,this.tagName=="BODY"?$("body"):$(this).parent(),true);
});
}else{
if(_1e=="unfit"){
return this.each(function(){
_20(this,$(this).parent(),false);
});
}else{
if(_1f==undefined){
return _21(this[0],_1e);
}else{
return this.each(function(){
_21(this,_1e,_1f);
});
}
}
}
}
}else{
return this.each(function(){
_1f=_1f||$(this).parent();
$.extend(_1e,_20(this,_1f,_1e.fit)||{});
var r1=_22(this,"width",_1f,_1e);
var r2=_22(this,"height",_1f,_1e);
if(r1||r2){
$(this).addClass("easyui-fluid");
}else{
$(this).removeClass("easyui-fluid");
}
});
}
function _20(_23,_24,fit){
if(!_24.length){
return false;
}
var t=$(_23)[0];
var p=_24[0];
var _25=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_25+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
return {width:($(p).width()||1),height:($(p).height()||1)};
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_25-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
return false;
}
};
function _22(_26,_27,_28,_29){
var t=$(_26);
var p=_27;
var p1=p.substr(0,1).toUpperCase()+p.substr(1);
var min=$.parser.parseValue("min"+p1,_29["min"+p1],_28);
var max=$.parser.parseValue("max"+p1,_29["max"+p1],_28);
var val=$.parser.parseValue(p,_29[p],_28);
var _2a=(String(_29[p]||"").indexOf("%")>=0?true:false);
if(!isNaN(val)){
var v=Math.min(Math.max(val,min||0),max||99999);
if(!_2a){
_29[p]=v;
}
t._size("min"+p1,"");
t._size("max"+p1,"");
t._size(p,v);
}else{
t._size(p,"");
t._size("min"+p1,min);
t._size("max"+p1,max);
}
return _2a||_29.fit;
};
function _21(_2b,_2c,_2d){
var t=$(_2b);
if(_2d==undefined){
_2d=parseInt(_2b.style[_2c]);
if(isNaN(_2d)){
return undefined;
}
if($._boxModel){
_2d+=_2e();
}
return _2d;
}else{
if(_2d===""){
t.css(_2c,"");
}else{
if($._boxModel){
_2d-=_2e();
if(_2d<0){
_2d=0;
}
}
t.css(_2c,_2d+"px");
}
}
function _2e(){
if(_2c.toLowerCase().indexOf("width")>=0){
return t.outerWidth()-t.width();
}else{
return t.outerHeight()-t.height();
}
};
};
};
})(jQuery);
(function($){
var _2f=null;
var _30=null;
var _31=false;
function _32(e){
if(e.touches.length!=1){
return;
}
if(!_31){
_31=true;
dblClickTimer=setTimeout(function(){
_31=false;
},500);
}else{
clearTimeout(dblClickTimer);
_31=false;
_33(e,"dblclick");
}
_2f=setTimeout(function(){
_33(e,"contextmenu",3);
},1000);
_33(e,"mousedown");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _34(e){
if(e.touches.length!=1){
return;
}
if(_2f){
clearTimeout(_2f);
}
_33(e,"mousemove");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _35(e){
if(_2f){
clearTimeout(_2f);
}
_33(e,"mouseup");
if($.fn.draggable.isDragging||$.fn.resizable.isResizing){
e.preventDefault();
}
};
function _33(e,_36,_37){
var _38=new $.Event(_36);
_38.pageX=e.changedTouches[0].pageX;
_38.pageY=e.changedTouches[0].pageY;
_38.which=_37||1;
$(e.target).trigger(_38);
};
if(document.addEventListener){
document.addEventListener("touchstart",_32,true);
document.addEventListener("touchmove",_34,true);
document.addEventListener("touchend",_35,true);
}
})(jQuery);
(function($){
function _39(e){
var _3a=$.data(e.data.target,"draggable");
var _3b=_3a.options;
var _3c=_3a.proxy;
var _3d=e.data;
var _3e=_3d.startLeft+e.pageX-_3d.startX;
var top=_3d.startTop+e.pageY-_3d.startY;
if(_3c){
if(_3c.parent()[0]==document.body){
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e=e.pageX+_3b.deltaX;
}else{
_3e=e.pageX-e.data.offsetWidth;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top=e.pageY+_3b.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_3b.deltaX!=null&&_3b.deltaX!=undefined){
_3e+=e.data.offsetWidth+_3b.deltaX;
}
if(_3b.deltaY!=null&&_3b.deltaY!=undefined){
top+=e.data.offsetHeight+_3b.deltaY;
}
}
}
if(e.data.parent!=document.body){
_3e+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_3b.axis=="h"){
_3d.left=_3e;
}else{
if(_3b.axis=="v"){
_3d.top=top;
}else{
_3d.left=_3e;
_3d.top=top;
}
}
};
function _3f(e){
var _40=$.data(e.data.target,"draggable");
var _41=_40.options;
var _42=_40.proxy;
if(!_42){
_42=$(e.data.target);
}
_42.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_41.cursor);
};
function _43(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _44=$.data(e.data.target,"draggable");
var _45=_44.options;
var _46=$(".droppable:visible").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _47=$.data(this,"droppable").options.accept;
if(_47){
return $(_47).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_44.droppables=_46;
var _48=_44.proxy;
if(!_48){
if(_45.proxy){
if(_45.proxy=="clone"){
_48=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_48=_45.proxy.call(e.data.target,e.data.target);
}
_44.proxy=_48;
}else{
_48=$(e.data.target);
}
}
_48.css("position","absolute");
_39(e);
_3f(e);
_45.onStartDrag.call(e.data.target,e);
return false;
};
function _49(e){
if(!$.fn.draggable.isDragging){
return false;
}
var _4a=$.data(e.data.target,"draggable");
_39(e);
if(_4a.options.onDrag.call(e.data.target,e)!=false){
_3f(e);
}
var _4b=e.data.target;
_4a.droppables.each(function(){
var _4c=$(this);
if(_4c.droppable("options").disabled){
return;
}
var p2=_4c.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_4c.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_4c.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_4b]);
this.entered=true;
}
$(this).trigger("_dragover",[_4b]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_4b]);
this.entered=false;
}
}
});
return false;
};
function _4d(e){
if(!$.fn.draggable.isDragging){
_4e();
return false;
}
_49(e);
var _4f=$.data(e.data.target,"draggable");
var _50=_4f.proxy;
var _51=_4f.options;
if(_51.revert){
if(_52()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_50){
var _53,top;
if(_50.parent()[0]==document.body){
_53=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_53=e.data.startLeft;
top=e.data.startTop;
}
_50.animate({left:_53,top:top},function(){
_54();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_52();
}
_51.onStopDrag.call(e.data.target,e);
_4e();
function _54(){
if(_50){
_50.remove();
}
_4f.proxy=null;
};
function _52(){
var _55=false;
_4f.droppables.each(function(){
var _56=$(this);
if(_56.droppable("options").disabled){
return;
}
var p2=_56.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_56.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_56.outerHeight()){
if(_51.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
$(this).trigger("_drop",[e.data.target]);
_54();
_55=true;
this.entered=false;
return false;
}
});
if(!_55&&!_51.revert){
_54();
}
return _55;
};
return false;
};
function _4e(){
if($.fn.draggable.timer){
clearTimeout($.fn.draggable.timer);
$.fn.draggable.timer=undefined;
}
$(document).unbind(".draggable");
$.fn.draggable.isDragging=false;
setTimeout(function(){
$("body").css("cursor","");
},100);
};
$.fn.draggable=function(_57,_58){
if(typeof _57=="string"){
return $.fn.draggable.methods[_57](this,_58);
}
return this.each(function(){
var _59;
var _5a=$.data(this,"draggable");
if(_5a){
_5a.handle.unbind(".draggable");
_59=$.extend(_5a.options,_57);
}else{
_59=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_57||{});
}
var _5b=_59.handle?(typeof _59.handle=="string"?$(_59.handle,this):_59.handle):$(this);
$.data(this,"draggable",{options:_59,handle:_5b});
if(_59.disabled){
$(this).css("cursor","");
return;
}
_5b.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if($.fn.draggable.isDragging){
return;
}
var _5c=$.data(e.data.target,"draggable").options;
if(_5d(e)){
$(this).css("cursor",_5c.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_5d(e)==false){
return;
}
$(this).css("cursor","");
var _5e=$(e.data.target).position();
var _5f=$(e.data.target).offset();
var _60={startPosition:$(e.data.target).css("position"),startLeft:_5e.left,startTop:_5e.top,left:_5e.left,top:_5e.top,startX:e.pageX,startY:e.pageY,width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),offsetWidth:(e.pageX-_5f.left),offsetHeight:(e.pageY-_5f.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_60);
var _61=$.data(e.data.target,"draggable").options;
if(_61.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_43);
$(document).bind("mousemove.draggable",e.data,_49);
$(document).bind("mouseup.draggable",e.data,_4d);
$.fn.draggable.timer=setTimeout(function(){
$.fn.draggable.isDragging=true;
_43(e);
},_61.delay);
return false;
});
function _5d(e){
var _62=$.data(e.data.target,"draggable");
var _63=_62.handle;
var _64=$(_63).offset();
var _65=$(_63).outerWidth();
var _66=$(_63).outerHeight();
var t=e.pageY-_64.top;
var r=_64.left+_65-e.pageX;
var b=_64.top+_66-e.pageY;
var l=e.pageX-_64.left;
return Math.min(t,r,b,l)>_62.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_67){
var t=$(_67);
return $.extend({},$.parser.parseOptions(_67,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number","delay":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,delay:100,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onStopDrag:function(e){
}};
$.fn.draggable.isDragging=false;
})(jQuery);
(function($){
function _68(_69){
$(_69).addClass("droppable");
$(_69).bind("_dragenter",function(e,_6a){
$.data(_69,"droppable").options.onDragEnter.apply(_69,[e,_6a]);
});
$(_69).bind("_dragleave",function(e,_6b){
$.data(_69,"droppable").options.onDragLeave.apply(_69,[e,_6b]);
});
$(_69).bind("_dragover",function(e,_6c){
$.data(_69,"droppable").options.onDragOver.apply(_69,[e,_6c]);
});
$(_69).bind("_drop",function(e,_6d){
$.data(_69,"droppable").options.onDrop.apply(_69,[e,_6d]);
});
};
$.fn.droppable=function(_6e,_6f){
if(typeof _6e=="string"){
return $.fn.droppable.methods[_6e](this,_6f);
}
_6e=_6e||{};
return this.each(function(){
var _70=$.data(this,"droppable");
if(_70){
$.extend(_70.options,_6e);
}else{
_68(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_6e)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_71){
var t=$(_71);
return $.extend({},$.parser.parseOptions(_71,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_72){
},onDragOver:function(e,_73){
},onDragLeave:function(e,_74){
},onDrop:function(e,_75){
}};
})(jQuery);
(function($){
$.fn.resizable=function(_76,_77){
if(typeof _76=="string"){
return $.fn.resizable.methods[_76](this,_77);
}
function _78(e){
var _79=e.data;
var _7a=$.data(_79.target,"resizable").options;
if(_79.dir.indexOf("e")!=-1){
var _7b=_79.startWidth+e.pageX-_79.startX;
_7b=Math.min(Math.max(_7b,_7a.minWidth),_7a.maxWidth);
_79.width=_7b;
}
if(_79.dir.indexOf("s")!=-1){
var _7c=_79.startHeight+e.pageY-_79.startY;
_7c=Math.min(Math.max(_7c,_7a.minHeight),_7a.maxHeight);
_79.height=_7c;
}
if(_79.dir.indexOf("w")!=-1){
var _7b=_79.startWidth-e.pageX+_79.startX;
_7b=Math.min(Math.max(_7b,_7a.minWidth),_7a.maxWidth);
_79.width=_7b;
_79.left=_79.startLeft+_79.startWidth-_79.width;
}
if(_79.dir.indexOf("n")!=-1){
var _7c=_79.startHeight-e.pageY+_79.startY;
_7c=Math.min(Math.max(_7c,_7a.minHeight),_7a.maxHeight);
_79.height=_7c;
_79.top=_79.startTop+_79.startHeight-_79.height;
}
};
function _7d(e){
var _7e=e.data;
var t=$(_7e.target);
t.css({left:_7e.left,top:_7e.top});
if(t.outerWidth()!=_7e.width){
t._outerWidth(_7e.width);
}
if(t.outerHeight()!=_7e.height){
t._outerHeight(_7e.height);
}
};
function _7f(e){
$.fn.resizable.isResizing=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _80(e){
_78(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_7d(e);
}
return false;
};
function _81(e){
$.fn.resizable.isResizing=false;
_78(e,true);
_7d(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
return this.each(function(){
var _82=null;
var _83=$.data(this,"resizable");
if(_83){
$(this).unbind(".resizable");
_82=$.extend(_83.options,_76||{});
}else{
_82=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_76||{});
$.data(this,"resizable",{options:_82});
}
if(_82.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if($.fn.resizable.isResizing){
return;
}
var dir=_84(e);
if(dir==""){
$(e.data.target).css("cursor","");
}else{
$(e.data.target).css("cursor",dir+"-resize");
}
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_84(e);
if(dir==""){
return;
}
function _85(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _86={target:e.data.target,dir:dir,startLeft:_85("left"),startTop:_85("top"),left:_85("left"),top:_85("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_86,_7f);
$(document).bind("mousemove.resizable",_86,_80);
$(document).bind("mouseup.resizable",_86,_81);
$("body").css("cursor",dir+"-resize");
});
function _84(e){
var tt=$(e.data.target);
var dir="";
var _87=tt.offset();
var _88=tt.outerWidth();
var _89=tt.outerHeight();
var _8a=_82.edge;
if(e.pageY>_87.top&&e.pageY<_87.top+_8a){
dir+="n";
}else{
if(e.pageY<_87.top+_89&&e.pageY>_87.top+_89-_8a){
dir+="s";
}
}
if(e.pageX>_87.left&&e.pageX<_87.left+_8a){
dir+="w";
}else{
if(e.pageX<_87.left+_88&&e.pageX>_87.left+_88-_8a){
dir+="e";
}
}
var _8b=_82.handles.split(",");
for(var i=0;i<_8b.length;i++){
var _8c=_8b[i].replace(/(^\s*)|(\s*$)/g,"");
if(_8c=="all"||_8c==dir){
return dir;
}
}
return "";
};
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_8d){
var t=$(_8d);
return $.extend({},$.parser.parseOptions(_8d,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
$.fn.resizable.isResizing=false;
})(jQuery);
(function($){
function _8e(_8f,_90){
var _91=$.data(_8f,"linkbutton").options;
if(_90){
$.extend(_91,_90);
}
if(_91.width||_91.height||_91.fit){
var btn=$(_8f);
var _92=btn.parent();
var _93=btn.is(":visible");
if(!_93){
var _94=$("<div style=\"display:none\"></div>").insertBefore(_8f);
var _95={position:btn.css("position"),display:btn.css("display"),left:btn.css("left")};
btn.appendTo("body");
btn.css({position:"absolute",display:"inline-block",left:-20000});
}
btn._size(_91,_92);
var _96=btn.find(".l-btn-left");
_96.css("margin-top",0);
_96.css("margin-top",parseInt((btn.height()-_96.height())/2)+"px");
if(!_93){
btn.insertAfter(_94);
btn.css(_95);
_94.remove();
}
}
};
function _97(_98){
var _99=$.data(_98,"linkbutton").options;
var t=$(_98).empty();
t.addClass("l-btn").removeClass("l-btn-plain l-btn-selected l-btn-plain-selected l-btn-outline");
t.removeClass("l-btn-small l-btn-medium l-btn-large").addClass("l-btn-"+_99.size);
if(_99.plain){
t.addClass("l-btn-plain");
}
if(_99.outline){
t.addClass("l-btn-outline");
}
if(_99.selected){
t.addClass(_99.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
}
t.attr("group",_99.group||"");
t.attr("id",_99.id||"");
var _9a=$("<span class=\"l-btn-left\"></span>").appendTo(t);
if(_99.text){
$("<span class=\"l-btn-text\"></span>").html(_99.text).appendTo(_9a);
}else{
$("<span class=\"l-btn-text l-btn-empty\">&nbsp;</span>").appendTo(_9a);
}
if(_99.iconCls){
$("<span class=\"l-btn-icon\">&nbsp;</span>").addClass(_99.iconCls).appendTo(_9a);
_9a.addClass("l-btn-icon-"+_99.iconAlign);
}
t.unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_99.disabled){
$(this).addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).removeClass("l-btn-focus");
}).bind("click.linkbutton",function(){
if(!_99.disabled){
if(_99.toggle){
if(_99.selected){
$(this).linkbutton("unselect");
}else{
$(this).linkbutton("select");
}
}
_99.onClick.call(this);
}
});
_9b(_98,_99.selected);
_9c(_98,_99.disabled);
};
function _9b(_9d,_9e){
var _9f=$.data(_9d,"linkbutton").options;
if(_9e){
if(_9f.group){
$("a.l-btn[group=\""+_9f.group+"\"]").each(function(){
var o=$(this).linkbutton("options");
if(o.toggle){
$(this).removeClass("l-btn-selected l-btn-plain-selected");
o.selected=false;
}
});
}
$(_9d).addClass(_9f.plain?"l-btn-selected l-btn-plain-selected":"l-btn-selected");
_9f.selected=true;
}else{
if(!_9f.group){
$(_9d).removeClass("l-btn-selected l-btn-plain-selected");
_9f.selected=false;
}
}
};
function _9c(_a0,_a1){
var _a2=$.data(_a0,"linkbutton");
var _a3=_a2.options;
$(_a0).removeClass("l-btn-disabled l-btn-plain-disabled");
if(_a1){
_a3.disabled=true;
var _a4=$(_a0).attr("href");
if(_a4){
_a2.href=_a4;
$(_a0).attr("href","javascript:void(0)");
}
if(_a0.onclick){
_a2.onclick=_a0.onclick;
_a0.onclick=null;
}
_a3.plain?$(_a0).addClass("l-btn-disabled l-btn-plain-disabled"):$(_a0).addClass("l-btn-disabled");
}else{
_a3.disabled=false;
if(_a2.href){
$(_a0).attr("href",_a2.href);
}
if(_a2.onclick){
_a0.onclick=_a2.onclick;
}
}
};
$.fn.linkbutton=function(_a5,_a6){
if(typeof _a5=="string"){
return $.fn.linkbutton.methods[_a5](this,_a6);
}
_a5=_a5||{};
return this.each(function(){
var _a7=$.data(this,"linkbutton");
if(_a7){
$.extend(_a7.options,_a5);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_a5)});
$(this).removeAttr("disabled");
$(this).bind("_resize",function(e,_a8){
if($(this).hasClass("easyui-fluid")||_a8){
_8e(this);
}
return false;
});
}
_97(this);
_8e(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},resize:function(jq,_a9){
return jq.each(function(){
_8e(this,_a9);
});
},enable:function(jq){
return jq.each(function(){
_9c(this,false);
});
},disable:function(jq){
return jq.each(function(){
_9c(this,true);
});
},select:function(jq){
return jq.each(function(){
_9b(this,true);
});
},unselect:function(jq){
return jq.each(function(){
_9b(this,false);
});
}};
$.fn.linkbutton.parseOptions=function(_aa){
var t=$(_aa);
return $.extend({},$.parser.parseOptions(_aa,["id","iconCls","iconAlign","group","size","text",{plain:"boolean",toggle:"boolean",selected:"boolean",outline:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:($.trim(t.html())||undefined),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,toggle:false,selected:false,outline:false,group:null,plain:false,text:"",iconCls:null,iconAlign:"left",size:"small",onClick:function(){
}};
})(jQuery);
(function($){
function _ab(_ac){
var _ad=$.data(_ac,"pagination");
var _ae=_ad.options;
var bb=_ad.bb={};
var _af=$(_ac).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_af.find("tr");
var aa=$.extend([],_ae.layout);
if(!_ae.showPageList){
_b0(aa,"list");
}
if(!_ae.showRefresh){
_b0(aa,"refresh");
}
if(aa[0]=="sep"){
aa.shift();
}
if(aa[aa.length-1]=="sep"){
aa.pop();
}
for(var _b1=0;_b1<aa.length;_b1++){
var _b2=aa[_b1];
if(_b2=="list"){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_ae.pageSize=parseInt($(this).val());
_ae.onChangePageSize.call(_ac,_ae.pageSize);
_b8(_ac,_ae.pageNumber);
});
for(var i=0;i<_ae.pageList.length;i++){
$("<option></option>").text(_ae.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
}else{
if(_b2=="sep"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
if(_b2=="first"){
bb.first=_b3("first");
}else{
if(_b2=="prev"){
bb.prev=_b3("prev");
}else{
if(_b2=="next"){
bb.next=_b3("next");
}else{
if(_b2=="last"){
bb.last=_b3("last");
}else{
if(_b2=="manual"){
$("<span style=\"padding-left:6px;\"></span>").html(_ae.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _b4=parseInt($(this).val())||1;
_b8(_ac,_b4);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
}else{
if(_b2=="refresh"){
bb.refresh=_b3("refresh");
}else{
if(_b2=="links"){
$("<td class=\"pagination-links\"></td>").appendTo(tr);
}
}
}
}
}
}
}
}
}
}
if(_ae.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
if($.isArray(_ae.buttons)){
for(var i=0;i<_ae.buttons.length;i++){
var btn=_ae.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
a[0].onclick=eval(btn.handler||function(){
});
a.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
var td=$("<td></td>").appendTo(tr);
$(_ae.buttons).appendTo(td).show();
}
}
$("<div class=\"pagination-info\"></div>").appendTo(_af);
$("<div style=\"clear:both;\"></div>").appendTo(_af);
function _b3(_b5){
var btn=_ae.nav[_b5];
var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_ac);
});
return a;
};
function _b0(aa,_b6){
var _b7=$.inArray(_b6,aa);
if(_b7>=0){
aa.splice(_b7,1);
}
return aa;
};
};
function _b8(_b9,_ba){
var _bb=$.data(_b9,"pagination").options;
_bc(_b9,{pageNumber:_ba});
_bb.onSelectPage.call(_b9,_bb.pageNumber,_bb.pageSize);
};
function _bc(_bd,_be){
var _bf=$.data(_bd,"pagination");
var _c0=_bf.options;
var bb=_bf.bb;
$.extend(_c0,_be||{});
var ps=$(_bd).find("select.pagination-page-list");
if(ps.length){
ps.val(_c0.pageSize+"");
_c0.pageSize=parseInt(ps.val());
}
var _c1=Math.ceil(_c0.total/_c0.pageSize)||1;
if(_c0.pageNumber<1){
_c0.pageNumber=1;
}
if(_c0.pageNumber>_c1){
_c0.pageNumber=_c1;
}
if(_c0.total==0){
_c0.pageNumber=0;
_c1=0;
}
if(bb.num){
bb.num.val(_c0.pageNumber);
}
if(bb.after){
bb.after.html(_c0.afterPageText.replace(/{pages}/,_c1));
}
var td=$(_bd).find("td.pagination-links");
if(td.length){
td.empty();
var _c2=_c0.pageNumber-Math.floor(_c0.links/2);
if(_c2<1){
_c2=1;
}
var _c3=_c2+_c0.links-1;
if(_c3>_c1){
_c3=_c1;
}
_c2=_c3-_c0.links+1;
if(_c2<1){
_c2=1;
}
for(var i=_c2;i<=_c3;i++){
var a=$("<a class=\"pagination-link\" href=\"javascript:void(0)\"></a>").appendTo(td);
a.linkbutton({plain:true,text:i});
if(i==_c0.pageNumber){
a.linkbutton("select");
}else{
a.unbind(".pagination").bind("click.pagination",{pageNumber:i},function(e){
_b8(_bd,e.data.pageNumber);
});
}
}
}
var _c4=_c0.displayMsg;
_c4=_c4.replace(/{from}/,_c0.total==0?0:_c0.pageSize*(_c0.pageNumber-1)+1);
_c4=_c4.replace(/{to}/,Math.min(_c0.pageSize*(_c0.pageNumber),_c0.total));
_c4=_c4.replace(/{total}/,_c0.total);
$(_bd).find("div.pagination-info").html(_c4);
if(bb.first){
bb.first.linkbutton({disabled:((!_c0.total)||_c0.pageNumber==1)});
}
if(bb.prev){
bb.prev.linkbutton({disabled:((!_c0.total)||_c0.pageNumber==1)});
}
if(bb.next){
bb.next.linkbutton({disabled:(_c0.pageNumber==_c1)});
}
if(bb.last){
bb.last.linkbutton({disabled:(_c0.pageNumber==_c1)});
}
_c5(_bd,_c0.loading);
};
function _c5(_c6,_c7){
var _c8=$.data(_c6,"pagination");
var _c9=_c8.options;
_c9.loading=_c7;
if(_c9.showRefresh&&_c8.bb.refresh){
_c8.bb.refresh.linkbutton({iconCls:(_c9.loading?"pagination-loading":"pagination-load")});
}
};
$.fn.pagination=function(_ca,_cb){
if(typeof _ca=="string"){
return $.fn.pagination.methods[_ca](this,_cb);
}
_ca=_ca||{};
return this.each(function(){
var _cc;
var _cd=$.data(this,"pagination");
if(_cd){
_cc=$.extend(_cd.options,_ca);
}else{
_cc=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_ca);
$.data(this,"pagination",{options:_cc});
}
_ab(this);
_bc(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_c5(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_c5(this,false);
});
},refresh:function(jq,_ce){
return jq.each(function(){
_bc(this,_ce);
});
},select:function(jq,_cf){
return jq.each(function(){
_b8(this,_cf);
});
}};
$.fn.pagination.parseOptions=function(_d0){
var t=$(_d0);
return $.extend({},$.parser.parseOptions(_d0,[{total:"number",pageSize:"number",pageNumber:"number",links:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showRefresh:true,links:10,layout:["list","sep","first","prev","sep","manual","sep","next","last","sep","refresh"],onSelectPage:function(_d1,_d2){
},onBeforeRefresh:function(_d3,_d4){
},onRefresh:function(_d5,_d6){
},onChangePageSize:function(_d7){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _d8=$(this).pagination("options");
if(_d8.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _d9=$(this).pagination("options");
if(_d9.pageNumber>1){
$(this).pagination("select",_d9.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _da=$(this).pagination("options");
var _db=Math.ceil(_da.total/_da.pageSize);
if(_da.pageNumber<_db){
$(this).pagination("select",_da.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _dc=$(this).pagination("options");
var _dd=Math.ceil(_dc.total/_dc.pageSize);
if(_dc.pageNumber<_dd){
$(this).pagination("select",_dd);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _de=$(this).pagination("options");
if(_de.onBeforeRefresh.call(this,_de.pageNumber,_de.pageSize)!=false){
$(this).pagination("select",_de.pageNumber);
_de.onRefresh.call(this,_de.pageNumber,_de.pageSize);
}
}}}};
})(jQuery);
(function($){
function _df(_e0){
var _e1=$(_e0);
_e1.addClass("tree");
return _e1;
};
function _e2(_e3){
var _e4=$.data(_e3,"tree").options;
$(_e3).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _e5=tt.closest("div.tree-node");
if(!_e5.length){
return;
}
_e5.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _e6=tt.closest("div.tree-node");
if(!_e6.length){
return;
}
_e6.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _e7=tt.closest("div.tree-node");
if(!_e7.length){
return;
}
if(tt.hasClass("tree-hit")){
_145(_e3,_e7[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_10c(_e3,_e7[0]);
return false;
}else{
_188(_e3,_e7[0]);
_e4.onClick.call(_e3,_ea(_e3,_e7[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _e8=$(e.target).closest("div.tree-node");
if(!_e8.length){
return;
}
_188(_e3,_e8[0]);
_e4.onDblClick.call(_e3,_ea(_e3,_e8[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _e9=$(e.target).closest("div.tree-node");
if(!_e9.length){
return;
}
_e4.onContextMenu.call(_e3,e,_ea(_e3,_e9[0]));
e.stopPropagation();
});
};
function _eb(_ec){
var _ed=$.data(_ec,"tree").options;
_ed.dnd=false;
var _ee=$(_ec).find("div.tree-node");
_ee.draggable("disable");
_ee.css("cursor","pointer");
};
function _ef(_f0){
var _f1=$.data(_f0,"tree");
var _f2=_f1.options;
var _f3=_f1.tree;
_f1.disabledNodes=[];
_f2.dnd=true;
_f3.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_f4){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_f4).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_f2.onBeforeDrag.call(_f0,_ea(_f0,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _f5=$(this).find("span.tree-indent");
if(_f5.length){
e.data.offsetWidth-=_f5.length*_f5.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_f1.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_f2.onStartDrag.call(_f0,_ea(_f0,this));
var _f6=_ea(_f0,this);
if(_f6.id==undefined){
_f6.id="easyui_tree_node_id_temp";
_12c(_f0,_f6);
}
_f1.draggingNodeId=_f6.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_f1.disabledNodes.length;i++){
$(_f1.disabledNodes[i]).droppable("enable");
}
_f1.disabledNodes=[];
var _f7=_182(_f0,_f1.draggingNodeId);
if(_f7&&_f7.id=="easyui_tree_node_id_temp"){
_f7.id="";
_12c(_f0,_f7);
}
_f2.onStopDrag.call(_f0,_f7);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_f8){
if(_f2.onDragEnter.call(_f0,this,_f9(_f8))==false){
_fa(_f8,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f1.disabledNodes.push(this);
}
},onDragOver:function(e,_fb){
if($(this).droppable("options").disabled){
return;
}
var _fc=_fb.pageY;
var top=$(this).offset().top;
var _fd=top+$(this).outerHeight();
_fa(_fb,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_fc>top+(_fd-top)/2){
if(_fd-_fc<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_fc-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_f2.onDragOver.call(_f0,this,_f9(_fb))==false){
_fa(_fb,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_f1.disabledNodes.push(this);
}
},onDragLeave:function(e,_fe){
_fa(_fe,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_f2.onDragLeave.call(_f0,this,_f9(_fe));
},onDrop:function(e,_ff){
var dest=this;
var _100,_101;
if($(this).hasClass("tree-node-append")){
_100=_102;
_101="append";
}else{
_100=_103;
_101=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_f2.onBeforeDrop.call(_f0,dest,_f9(_ff),_101)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_100(_ff,dest,_101);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _f9(_104,pop){
return $(_104).closest("ul.tree").tree(pop?"pop":"getData",_104);
};
function _fa(_105,_106){
var icon=$(_105).draggable("proxy").find("span.tree-dnd-icon");
icon.removeClass("tree-dnd-yes tree-dnd-no").addClass(_106?"tree-dnd-yes":"tree-dnd-no");
};
function _102(_107,dest){
if(_ea(_f0,dest).state=="closed"){
_13d(_f0,dest,function(){
_108();
});
}else{
_108();
}
function _108(){
var node=_f9(_107,true);
$(_f0).tree("append",{parent:dest,data:[node]});
_f2.onDrop.call(_f0,dest,node,"append");
};
};
function _103(_109,dest,_10a){
var _10b={};
if(_10a=="top"){
_10b.before=dest;
}else{
_10b.after=dest;
}
var node=_f9(_109,true);
_10b.data=node;
$(_f0).tree("insert",_10b);
_f2.onDrop.call(_f0,dest,node,_10a);
};
};
function _10c(_10d,_10e,_10f,_110){
var _111=$.data(_10d,"tree");
var opts=_111.options;
if(!opts.checkbox){
return;
}
var _112=_ea(_10d,_10e);
if(!_112.checkState){
return;
}
var ck=$(_10e).find(".tree-checkbox");
if(_10f==undefined){
if(ck.hasClass("tree-checkbox1")){
_10f=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_10f=true;
}else{
if(_112._checked==undefined){
_112._checked=$(_10e).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_10f=!_112._checked;
}
}
}
_112._checked=_10f;
if(_10f){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_110){
if(opts.onBeforeCheck.call(_10d,_112,_10f)==false){
return;
}
}
if(opts.cascadeCheck){
_113(_10d,_112,_10f);
_114(_10d,_112);
}else{
_115(_10d,_112,_10f?"1":"0");
}
if(!_110){
opts.onCheck.call(_10d,_112,_10f);
}
};
function _113(_116,_117,_118){
var opts=$.data(_116,"tree").options;
var flag=_118?1:0;
_115(_116,_117,flag);
if(opts.deepCheck){
$.easyui.forEach(_117.children||[],true,function(n){
_115(_116,n,flag);
});
}else{
var _119=[];
if(_117.children&&_117.children.length){
_119.push(_117);
}
$.easyui.forEach(_117.children||[],true,function(n){
if(!n.hidden){
_115(_116,n,flag);
if(n.children&&n.children.length){
_119.push(n);
}
}
});
for(var i=_119.length-1;i>=0;i--){
var node=_119[i];
_115(_116,node,_11a(node));
}
}
};
function _115(_11b,_11c,flag){
var opts=$.data(_11b,"tree").options;
if(!_11c.checkState||flag==undefined){
return;
}
if(_11c.hidden&&!opts.deepCheck){
return;
}
var ck=$("#"+_11c.domId).find(".tree-checkbox");
_11c.checkState=["unchecked","checked","indeterminate"][flag];
_11c.checked=(_11c.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
};
function _114(_11d,_11e){
var pd=_11f(_11d,$("#"+_11e.domId)[0]);
if(pd){
_115(_11d,pd,_11a(pd));
_114(_11d,pd);
}
};
function _11a(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _120(_121,_122){
var opts=$.data(_121,"tree").options;
if(!opts.checkbox){
return;
}
var node=$(_122);
var ck=node.find(".tree-checkbox");
var _123=_ea(_121,_122);
if(opts.view.hasCheckbox(_121,_123)){
if(!ck.length){
_123.checkState=_123.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(node.find(".tree-title"));
}
if(_123.checkState=="checked"){
_10c(_121,_122,true,true);
}else{
if(_123.checkState=="unchecked"){
_10c(_121,_122,false,true);
}else{
var flag=_11a(_123);
if(flag===0){
_10c(_121,_122,false,true);
}else{
if(flag===1){
_10c(_121,_122,true,true);
}
}
}
}
}else{
ck.remove();
_123.checkState=undefined;
_123.checked=undefined;
_114(_121,_123);
}
};
function _124(_125,ul,data,_126,_127){
var _128=$.data(_125,"tree");
var opts=_128.options;
var _129=$(ul).prevAll("div.tree-node:first");
data=opts.loadFilter.call(_125,data,_129[0]);
var _12a=_12b(_125,"domId",_129.attr("id"));
if(!_126){
_12a?_12a.children=data:_128.data=data;
$(ul).empty();
}else{
if(_12a){
_12a.children?_12a.children=_12a.children.concat(data):_12a.children=data;
}else{
_128.data=_128.data.concat(data);
}
}
opts.view.render.call(opts.view,_125,ul,data);
if(opts.dnd){
_ef(_125);
}
if(_12a){
_12c(_125,_12a);
}
for(var i=0;i<_128.tmpIds.length;i++){
_10c(_125,$("#"+_128.tmpIds[i])[0],true,true);
}
_128.tmpIds=[];
setTimeout(function(){
_12d(_125,_125);
},0);
if(!_127){
opts.onLoadSuccess.call(_125,_12a,data);
}
};
function _12d(_12e,ul,_12f){
var opts=$.data(_12e,"tree").options;
if(opts.lines){
$(_12e).addClass("tree-lines");
}else{
$(_12e).removeClass("tree-lines");
return;
}
if(!_12f){
_12f=true;
$(_12e).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_12e).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _130=$(_12e).tree("getRoots");
if(_130.length>1){
$(_130[0].target).addClass("tree-root-first");
}else{
if(_130.length==1){
$(_130[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_131(node);
}
_12d(_12e,ul,_12f);
}else{
_132(node);
}
});
var _133=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_133.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _132(node,_134){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _131(node){
var _135=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_135-1)+")").addClass("tree-line");
});
};
};
function _136(_137,ul,_138,_139){
var opts=$.data(_137,"tree").options;
_138=$.extend({},opts.queryParams,_138||{});
var _13a=null;
if(_137!=ul){
var node=$(ul).prev();
_13a=_ea(_137,node[0]);
}
if(opts.onBeforeLoad.call(_137,_13a,_138)==false){
return;
}
var _13b=$(ul).prev().children("span.tree-folder");
_13b.addClass("tree-loading");
var _13c=opts.loader.call(_137,_138,function(data){
_13b.removeClass("tree-loading");
_124(_137,ul,data);
if(_139){
_139();
}
},function(){
_13b.removeClass("tree-loading");
opts.onLoadError.apply(_137,arguments);
if(_139){
_139();
}
});
if(_13c==false){
_13b.removeClass("tree-loading");
}
};
function _13d(_13e,_13f,_140){
var opts=$.data(_13e,"tree").options;
var hit=$(_13f).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_ea(_13e,_13f);
if(opts.onBeforeExpand.call(_13e,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_13f).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
});
}else{
ul.css("display","block");
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
}
}else{
var _141=$("<ul style=\"display:none\"></ul>").insertAfter(_13f);
_136(_13e,_141[0],{id:node.id},function(){
if(_141.is(":empty")){
_141.remove();
}
if(opts.animate){
_141.slideDown("normal",function(){
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
});
}else{
_141.css("display","block");
node.state="open";
opts.onExpand.call(_13e,node);
if(_140){
_140();
}
}
});
}
};
function _142(_143,_144){
var opts=$.data(_143,"tree").options;
var hit=$(_144).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_ea(_143,_144);
if(opts.onBeforeCollapse.call(_143,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_144).next();
if(opts.animate){
ul.slideUp("normal",function(){
node.state="closed";
opts.onCollapse.call(_143,node);
});
}else{
ul.css("display","none");
node.state="closed";
opts.onCollapse.call(_143,node);
}
};
function _145(_146,_147){
var hit=$(_147).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_142(_146,_147);
}else{
_13d(_146,_147);
}
};
function _148(_149,_14a){
var _14b=_14c(_149,_14a);
if(_14a){
_14b.unshift(_ea(_149,_14a));
}
for(var i=0;i<_14b.length;i++){
_13d(_149,_14b[i].target);
}
};
function _14d(_14e,_14f){
var _150=[];
var p=_11f(_14e,_14f);
while(p){
_150.unshift(p);
p=_11f(_14e,p.target);
}
for(var i=0;i<_150.length;i++){
_13d(_14e,_150[i].target);
}
};
function _151(_152,_153){
var c=$(_152).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_153);
var ntop=n.offset().top;
if(c[0].tagName!="BODY"){
var ctop=c.offset().top;
if(ntop<ctop){
c.scrollTop(c.scrollTop()+ntop-ctop);
}else{
if(ntop+n.outerHeight()>ctop+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+ntop+n.outerHeight()-ctop-c.outerHeight()+18);
}
}
}else{
c.scrollTop(ntop);
}
};
function _154(_155,_156){
var _157=_14c(_155,_156);
if(_156){
_157.unshift(_ea(_155,_156));
}
for(var i=0;i<_157.length;i++){
_142(_155,_157[i].target);
}
};
function _158(_159,_15a){
var node=$(_15a.parent);
var data=_15a.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
var ul;
if(node.length==0){
ul=$(_159);
}else{
if(_15b(_159,node[0])){
var _15c=node.find("span.tree-icon");
_15c.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_15c);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=node.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(node);
}
}
_124(_159,ul[0],data,true,true);
};
function _15d(_15e,_15f){
var ref=_15f.before||_15f.after;
var _160=_11f(_15e,ref);
var data=_15f.data;
if(!data){
return;
}
data=$.isArray(data)?data:[data];
if(!data.length){
return;
}
_158(_15e,{parent:(_160?_160.target:null),data:data});
var _161=_160?_160.children:$(_15e).tree("getRoots");
for(var i=0;i<_161.length;i++){
if(_161[i].domId==$(ref).attr("id")){
for(var j=data.length-1;j>=0;j--){
_161.splice((_15f.before?i:(i+1)),0,data[j]);
}
_161.splice(_161.length-data.length,data.length);
break;
}
}
var li=$();
for(var i=0;i<data.length;i++){
li=li.add($("#"+data[i].domId).parent());
}
if(_15f.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _162(_163,_164){
var _165=del(_164);
$(_164).parent().remove();
if(_165){
if(!_165.children||!_165.children.length){
var node=$(_165.target);
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
node.next().remove();
}
_12c(_163,_165);
}
_12d(_163,_163);
function del(_166){
var id=$(_166).attr("id");
var _167=_11f(_163,_166);
var cc=_167?_167.children:$.data(_163,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _167;
};
};
function _12c(_168,_169){
var opts=$.data(_168,"tree").options;
var node=$(_169.target);
var data=_ea(_168,_169.target);
if(data.iconCls){
node.find(".tree-icon").removeClass(data.iconCls);
}
$.extend(data,_169);
node.find(".tree-title").html(opts.formatter.call(_168,data));
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
_120(_168,_169.target);
};
function _16a(_16b,_16c){
if(_16c){
var p=_11f(_16b,_16c);
while(p){
_16c=p.target;
p=_11f(_16b,_16c);
}
return _ea(_16b,_16c);
}else{
var _16d=_16e(_16b);
return _16d.length?_16d[0]:null;
}
};
function _16e(_16f){
var _170=$.data(_16f,"tree").data;
for(var i=0;i<_170.length;i++){
_171(_170[i]);
}
return _170;
};
function _14c(_172,_173){
var _174=[];
var n=_ea(_172,_173);
var data=n?(n.children||[]):$.data(_172,"tree").data;
$.easyui.forEach(data,true,function(node){
_174.push(_171(node));
});
return _174;
};
function _11f(_175,_176){
var p=$(_176).closest("ul").prevAll("div.tree-node:first");
return _ea(_175,p[0]);
};
function _177(_178,_179){
_179=_179||"checked";
if(!$.isArray(_179)){
_179=[_179];
}
var _17a=[];
$.easyui.forEach($.data(_178,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_179,n.checkState)!=-1){
_17a.push(_171(n));
}
});
return _17a;
};
function _17b(_17c){
var node=$(_17c).find("div.tree-node-selected");
return node.length?_ea(_17c,node[0]):null;
};
function _17d(_17e,_17f){
var data=_ea(_17e,_17f);
if(data&&data.children){
$.easyui.forEach(data.children,true,function(node){
_171(node);
});
}
return data;
};
function _ea(_180,_181){
return _12b(_180,"domId",$(_181).attr("id"));
};
function _182(_183,id){
return _12b(_183,"id",id);
};
function _12b(_184,_185,_186){
var data=$.data(_184,"tree").data;
var _187=null;
$.easyui.forEach(data,true,function(node){
if(node[_185]==_186){
_187=_171(node);
return false;
}
});
return _187;
};
function _171(node){
node.target=$("#"+node.domId)[0];
return node;
};
function _188(_189,_18a){
var opts=$.data(_189,"tree").options;
var node=_ea(_189,_18a);
if(opts.onBeforeSelect.call(_189,node)==false){
return;
}
$(_189).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_18a).addClass("tree-node-selected");
opts.onSelect.call(_189,node);
};
function _15b(_18b,_18c){
return $(_18c).children("span.tree-hit").length==0;
};
function _18d(_18e,_18f){
var opts=$.data(_18e,"tree").options;
var node=_ea(_18e,_18f);
if(opts.onBeforeEdit.call(_18e,node)==false){
return;
}
$(_18f).css("position","relative");
var nt=$(_18f).find(".tree-title");
var _190=nt.outerWidth();
nt.empty();
var _191=$("<input class=\"tree-editor\">").appendTo(nt);
_191.val(node.text).focus();
_191.width(_190+20);
_191._outerHeight(18);
_191.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_192(_18e,_18f);
return false;
}else{
if(e.keyCode==27){
_196(_18e,_18f);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_192(_18e,_18f);
});
};
function _192(_193,_194){
var opts=$.data(_193,"tree").options;
$(_194).css("position","");
var _195=$(_194).find("input.tree-editor");
var val=_195.val();
_195.remove();
var node=_ea(_193,_194);
node.text=val;
_12c(_193,node);
opts.onAfterEdit.call(_193,node);
};
function _196(_197,_198){
var opts=$.data(_197,"tree").options;
$(_198).css("position","");
$(_198).find("input.tree-editor").remove();
var node=_ea(_197,_198);
_12c(_197,node);
opts.onCancelEdit.call(_197,node);
};
function _199(_19a,q){
var _19b=$.data(_19a,"tree");
var opts=_19b.options;
var ids={};
$.easyui.forEach(_19b.data,true,function(node){
if(opts.filter.call(_19a,q,node)){
$("#"+node.domId).removeClass("tree-node-hidden");
ids[node.domId]=1;
node.hidden=false;
}else{
$("#"+node.domId).addClass("tree-node-hidden");
node.hidden=true;
}
});
for(var id in ids){
_19c(id);
}
function _19c(_19d){
var p=$(_19a).tree("getParent",$("#"+_19d)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_19a).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_19e,_19f){
if(typeof _19e=="string"){
return $.fn.tree.methods[_19e](this,_19f);
}
var _19e=_19e||{};
return this.each(function(){
var _1a0=$.data(this,"tree");
var opts;
if(_1a0){
opts=$.extend(_1a0.options,_19e);
_1a0.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_19e);
$.data(this,"tree",{options:opts,tree:_df(this),data:[],tmpIds:[]});
var data=$.fn.tree.parseData(this);
if(data.length){
_124(this,this,data);
}
}
_e2(this);
if(opts.data){
_124(this,this,$.extend(true,[],opts.data));
}
_136(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_124(this,this,data);
});
},getNode:function(jq,_1a1){
return _ea(jq[0],_1a1);
},getData:function(jq,_1a2){
return _17d(jq[0],_1a2);
},reload:function(jq,_1a3){
return jq.each(function(){
if(_1a3){
var node=$(_1a3);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_13d(this,_1a3);
}else{
$(this).empty();
_136(this,this);
}
});
},getRoot:function(jq,_1a4){
return _16a(jq[0],_1a4);
},getRoots:function(jq){
return _16e(jq[0]);
},getParent:function(jq,_1a5){
return _11f(jq[0],_1a5);
},getChildren:function(jq,_1a6){
return _14c(jq[0],_1a6);
},getChecked:function(jq,_1a7){
return _177(jq[0],_1a7);
},getSelected:function(jq){
return _17b(jq[0]);
},isLeaf:function(jq,_1a8){
return _15b(jq[0],_1a8);
},find:function(jq,id){
return _182(jq[0],id);
},select:function(jq,_1a9){
return jq.each(function(){
_188(this,_1a9);
});
},check:function(jq,_1aa){
return jq.each(function(){
_10c(this,_1aa,true);
});
},uncheck:function(jq,_1ab){
return jq.each(function(){
_10c(this,_1ab,false);
});
},collapse:function(jq,_1ac){
return jq.each(function(){
_142(this,_1ac);
});
},expand:function(jq,_1ad){
return jq.each(function(){
_13d(this,_1ad);
});
},collapseAll:function(jq,_1ae){
return jq.each(function(){
_154(this,_1ae);
});
},expandAll:function(jq,_1af){
return jq.each(function(){
_148(this,_1af);
});
},expandTo:function(jq,_1b0){
return jq.each(function(){
_14d(this,_1b0);
});
},scrollTo:function(jq,_1b1){
return jq.each(function(){
_151(this,_1b1);
});
},toggle:function(jq,_1b2){
return jq.each(function(){
_145(this,_1b2);
});
},append:function(jq,_1b3){
return jq.each(function(){
_158(this,_1b3);
});
},insert:function(jq,_1b4){
return jq.each(function(){
_15d(this,_1b4);
});
},remove:function(jq,_1b5){
return jq.each(function(){
_162(this,_1b5);
});
},pop:function(jq,_1b6){
var node=jq.tree("getData",_1b6);
jq.tree("remove",_1b6);
return node;
},update:function(jq,_1b7){
return jq.each(function(){
_12c(this,$.extend({},_1b7,{checkState:_1b7.checked?"checked":(_1b7.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_ef(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_eb(this);
});
},beginEdit:function(jq,_1b8){
return jq.each(function(){
_18d(this,_1b8);
});
},endEdit:function(jq,_1b9){
return jq.each(function(){
_192(this,_1b9);
});
},cancelEdit:function(jq,_1ba){
return jq.each(function(){
_196(this,_1ba);
});
},doFilter:function(jq,q){
return jq.each(function(){
_199(this,q);
});
}};
$.fn.tree.parseOptions=function(_1bb){
var t=$(_1bb);
return $.extend({},$.parser.parseOptions(_1bb,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_1bc){
var data=[];
_1bd(data,$(_1bc));
return data;
function _1bd(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _1be=node.children("ul");
if(_1be.length){
item.children=[];
_1bd(item.children,_1be);
}
aa.push(item);
});
};
};
var _1bf=1;
var _1c0={render:function(_1c1,ul,data){
var _1c2=$.data(_1c1,"tree");
var opts=_1c2.options;
var _1c3=$(ul).prev(".tree-node");
var _1c4=_1c3.length?$(_1c1).tree("getNode",_1c3[0]):null;
var _1c5=_1c3.find("span.tree-indent, span.tree-hit").length;
var cc=_1c6.call(this,_1c5,data);
$(ul).append(cc.join(""));
function _1c6(_1c7,_1c8){
var cc=[];
for(var i=0;i<_1c8.length;i++){
var item=_1c8[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_1bf++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_1c7;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_1c1,item)){
var flag=0;
if(_1c4&&_1c4.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_1c2.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_1c1,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_1c6.call(this,_1c7+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_1c9,item){
var _1ca=$.data(_1c9,"tree");
var opts=_1ca.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_1c9,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _1cb=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_1cb>=0){
return true;
}
}
return !qq.length;
},loader:function(_1cc,_1cd,_1ce){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_1cc,dataType:"json",success:function(data){
_1cd(data);
},error:function(){
_1ce.apply(this,arguments);
}});
},loadFilter:function(data,_1cf){
return data;
},view:_1c0,onBeforeLoad:function(node,_1d0){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_1d1){
},onCheck:function(node,_1d2){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_1d3,_1d4){
},onDragOver:function(_1d5,_1d6){
},onDragLeave:function(_1d7,_1d8){
},onBeforeDrop:function(_1d9,_1da,_1db){
},onDrop:function(_1dc,_1dd,_1de){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_1df){
$(_1df).addClass("progressbar");
$(_1df).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\"><div class=\"progressbar-text\"></div></div>");
$(_1df).bind("_resize",function(e,_1e0){
if($(this).hasClass("easyui-fluid")||_1e0){
_1e1(_1df);
}
return false;
});
return $(_1df);
};
function _1e1(_1e2,_1e3){
var opts=$.data(_1e2,"progressbar").options;
var bar=$.data(_1e2,"progressbar").bar;
if(_1e3){
opts.width=_1e3;
}
bar._size(opts);
bar.find("div.progressbar-text").css("width",bar.width());
bar.find("div.progressbar-text,div.progressbar-value").css({height:bar.height()+"px",lineHeight:bar.height()+"px"});
};
$.fn.progressbar=function(_1e4,_1e5){
if(typeof _1e4=="string"){
var _1e6=$.fn.progressbar.methods[_1e4];
if(_1e6){
return _1e6(this,_1e5);
}
}
_1e4=_1e4||{};
return this.each(function(){
var _1e7=$.data(this,"progressbar");
if(_1e7){
$.extend(_1e7.options,_1e4);
}else{
_1e7=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_1e4),bar:init(this)});
}
$(this).progressbar("setValue",_1e7.options.value);
_1e1(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_1e8){
return jq.each(function(){
_1e1(this,_1e8);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_1e9){
if(_1e9<0){
_1e9=0;
}
if(_1e9>100){
_1e9=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_1e9);
var _1ea=opts.value;
opts.value=_1e9;
$(this).find("div.progressbar-value").width(_1e9+"%");
$(this).find("div.progressbar-text").html(text);
if(_1ea!=_1e9){
opts.onChange.call(this,_1e9,_1ea);
}
});
}};
$.fn.progressbar.parseOptions=function(_1eb){
return $.extend({},$.parser.parseOptions(_1eb,["width","height","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",height:22,value:0,text:"{value}%",onChange:function(_1ec,_1ed){
}};
})(jQuery);
(function($){
function init(_1ee){
$(_1ee).addClass("tooltip-f");
};
function _1ef(_1f0){
var opts=$.data(_1f0,"tooltip").options;
$(_1f0).unbind(".tooltip").bind(opts.showEvent+".tooltip",function(e){
$(_1f0).tooltip("show",e);
}).bind(opts.hideEvent+".tooltip",function(e){
$(_1f0).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(opts.trackMouse){
opts.trackMouseX=e.pageX;
opts.trackMouseY=e.pageY;
$(_1f0).tooltip("reposition");
}
});
};
function _1f1(_1f2){
var _1f3=$.data(_1f2,"tooltip");
if(_1f3.showTimer){
clearTimeout(_1f3.showTimer);
_1f3.showTimer=null;
}
if(_1f3.hideTimer){
clearTimeout(_1f3.hideTimer);
_1f3.hideTimer=null;
}
};
function _1f4(_1f5){
var _1f6=$.data(_1f5,"tooltip");
if(!_1f6||!_1f6.tip){
return;
}
var opts=_1f6.options;
var tip=_1f6.tip;
var pos={left:-100000,top:-100000};
if($(_1f5).is(":visible")){
pos=_1f7(opts.position);
if(opts.position=="top"&&pos.top<0){
pos=_1f7("bottom");
}else{
if((opts.position=="bottom")&&(pos.top+tip._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
pos=_1f7("top");
}
}
if(pos.left<0){
if(opts.position=="left"){
pos=_1f7("right");
}else{
$(_1f5).tooltip("arrow").css("left",tip._outerWidth()/2+pos.left);
pos.left=0;
}
}else{
if(pos.left+tip._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(opts.position=="right"){
pos=_1f7("left");
}else{
var left=pos.left;
pos.left=$(window)._outerWidth()+$(document)._scrollLeft()-tip._outerWidth();
$(_1f5).tooltip("arrow").css("left",tip._outerWidth()/2-(pos.left-left));
}
}
}
}
tip.css({left:pos.left,top:pos.top,zIndex:(opts.zIndex!=undefined?opts.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
opts.onPosition.call(_1f5,pos.left,pos.top);
function _1f7(_1f8){
opts.position=_1f8||"bottom";
tip.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+opts.position);
var left,top;
var _1f9=$.isFunction(opts.deltaX)?opts.deltaX.call(_1f5,opts.position):opts.deltaX;
var _1fa=$.isFunction(opts.deltaY)?opts.deltaY.call(_1f5,opts.position):opts.deltaY;
if(opts.trackMouse){
t=$();
left=opts.trackMouseX+_1f9;
top=opts.trackMouseY+_1fa;
}else{
var t=$(_1f5);
left=t.offset().left+_1f9;
top=t.offset().top+_1fa;
}
switch(opts.position){
case "right":
left+=t._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "left":
left-=tip._outerWidth()+12+(opts.trackMouse?12:0);
top-=(tip._outerHeight()-t._outerHeight())/2;
break;
case "top":
left-=(tip._outerWidth()-t._outerWidth())/2;
top-=tip._outerHeight()+12+(opts.trackMouse?12:0);
break;
case "bottom":
left-=(tip._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(opts.trackMouse?12:0);
break;
}
return {left:left,top:top};
};
};
function _1fb(_1fc,e){
var _1fd=$.data(_1fc,"tooltip");
var opts=_1fd.options;
var tip=_1fd.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_1fd.tip=tip;
_1fe(_1fc);
}
_1f1(_1fc);
_1fd.showTimer=setTimeout(function(){
$(_1fc).tooltip("reposition");
tip.show();
opts.onShow.call(_1fc,e);
var _1ff=tip.children(".tooltip-arrow-outer");
var _200=tip.children(".tooltip-arrow");
var bc="border-"+opts.position+"-color";
_1ff.add(_200).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_1ff.css(bc,tip.css(bc));
_200.css(bc,tip.css("backgroundColor"));
},opts.showDelay);
};
function _201(_202,e){
var _203=$.data(_202,"tooltip");
if(_203&&_203.tip){
_1f1(_202);
_203.hideTimer=setTimeout(function(){
_203.tip.hide();
_203.options.onHide.call(_202,e);
},_203.options.hideDelay);
}
};
function _1fe(_204,_205){
var _206=$.data(_204,"tooltip");
var opts=_206.options;
if(_205){
opts.content=_205;
}
if(!_206.tip){
return;
}
var cc=typeof opts.content=="function"?opts.content.call(_204):opts.content;
_206.tip.children(".tooltip-content").html(cc);
opts.onUpdate.call(_204,cc);
};
function _207(_208){
var _209=$.data(_208,"tooltip");
if(_209){
_1f1(_208);
var opts=_209.options;
if(_209.tip){
_209.tip.remove();
}
if(opts._title){
$(_208).attr("title",opts._title);
}
$.removeData(_208,"tooltip");
$(_208).unbind(".tooltip").removeClass("tooltip-f");
opts.onDestroy.call(_208);
}
};
$.fn.tooltip=function(_20a,_20b){
if(typeof _20a=="string"){
return $.fn.tooltip.methods[_20a](this,_20b);
}
_20a=_20a||{};
return this.each(function(){
var _20c=$.data(this,"tooltip");
if(_20c){
$.extend(_20c.options,_20a);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_20a)});
init(this);
}
_1ef(this);
_1fe(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_1fb(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_201(this,e);
});
},update:function(jq,_20d){
return jq.each(function(){
_1fe(this,_20d);
});
},reposition:function(jq){
return jq.each(function(){
_1f4(this);
});
},destroy:function(jq){
return jq.each(function(){
_207(this);
});
}};
$.fn.tooltip.parseOptions=function(_20e){
var t=$(_20e);
var opts=$.extend({},$.parser.parseOptions(_20e,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!opts.content){
opts.content=opts._title;
}
return opts;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_20f){
},onPosition:function(left,top){
},onDestroy:function(){
}};
})(jQuery);
(function($){
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _210(node){
node._remove();
};
function _211(_212,_213){
var _214=$.data(_212,"panel");
var opts=_214.options;
var _215=_214.panel;
var _216=_215.children(".panel-header");
var _217=_215.children(".panel-body");
var _218=_215.children(".panel-footer");
if(_213){
$.extend(opts,{width:_213.width,height:_213.height,minWidth:_213.minWidth,maxWidth:_213.maxWidth,minHeight:_213.minHeight,maxHeight:_213.maxHeight,left:_213.left,top:_213.top});
}
_215._size(opts);
_216.add(_217)._outerWidth(_215.width());
if(!isNaN(parseInt(opts.height))){
_217._outerHeight(_215.height()-_216._outerHeight()-_218._outerHeight());
}else{
_217.css("height","");
var min=$.parser.parseValue("minHeight",opts.minHeight,_215.parent());
var max=$.parser.parseValue("maxHeight",opts.maxHeight,_215.parent());
var _219=_216._outerHeight()+_218._outerHeight()+_215._outerHeight()-_215.height();
_217._size("minHeight",min?(min-_219):"");
_217._size("maxHeight",max?(max-_219):"");
}
_215.css({height:"",minHeight:"",maxHeight:"",left:opts.left,top:opts.top});
opts.onResize.apply(_212,[opts.width,opts.height]);
$(_212).panel("doLayout");
};
function _21a(_21b,_21c){
var _21d=$.data(_21b,"panel");
var opts=_21d.options;
var _21e=_21d.panel;
if(_21c){
if(_21c.left!=null){
opts.left=_21c.left;
}
if(_21c.top!=null){
opts.top=_21c.top;
}
}
_21e.css({left:opts.left,top:opts.top});
_21e.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
opts.onMove.apply(_21b,[opts.left,opts.top]);
};
function _21f(_220){
$(_220).addClass("panel-body")._size("clear");
var _221=$("<div class=\"panel\"></div>").insertBefore(_220);
_221[0].appendChild(_220);
_221.bind("_resize",function(e,_222){
if($(this).hasClass("easyui-fluid")||_222){
_211(_220);
}
return false;
});
return _221;
};
function _223(_224){
var _225=$.data(_224,"panel");
var opts=_225.options;
var _226=_225.panel;
_226.css(opts.style);
_226.addClass(opts.cls);
_227();
_228();
var _229=$(_224).panel("header");
var body=$(_224).panel("body");
var _22a=$(_224).siblings(".panel-footer");
if(opts.border){
_229.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
_22a.removeClass("panel-footer-noborder");
}else{
_229.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
_22a.addClass("panel-footer-noborder");
}
_229.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
$(_224).attr("id",opts.id||"");
if(opts.content){
$(_224).panel("clear");
$(_224).html(opts.content);
$.parser.parse($(_224));
}
function _227(){
if(opts.noheader||(!opts.title&&!opts.header)){
_210(_226.children(".panel-header"));
_226.children(".panel-body").addClass("panel-body-noheader");
}else{
if(opts.header){
$(opts.header).addClass("panel-header").prependTo(_226);
}else{
var _22b=_226.children(".panel-header");
if(!_22b.length){
_22b=$("<div class=\"panel-header\"></div>").prependTo(_226);
}
if(!$.isArray(opts.tools)){
_22b.find("div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_22b.empty();
var _22c=$("<div class=\"panel-title\"></div>").html(opts.title).appendTo(_22b);
if(opts.iconCls){
_22c.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_22b);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_22b);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if($.isArray(opts.tools)){
$.map(opts.tools,function(t){
_22d(tool,t.iconCls,eval(t.handler));
});
}else{
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}
}
if(opts.collapsible){
_22d(tool,"panel-tool-collapse",function(){
if(opts.collapsed==true){
_24c(_224,true);
}else{
_23e(_224,true);
}
});
}
if(opts.minimizable){
_22d(tool,"panel-tool-min",function(){
_252(_224);
});
}
if(opts.maximizable){
_22d(tool,"panel-tool-max",function(){
if(opts.maximized==true){
_255(_224);
}else{
_23d(_224);
}
});
}
if(opts.closable){
_22d(tool,"panel-tool-close",function(){
_23f(_224);
});
}
}
_226.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _22d(c,icon,_22e){
var a=$("<a href=\"javascript:void(0)\"></a>").addClass(icon).appendTo(c);
a.bind("click",_22e);
};
function _228(){
if(opts.footer){
$(opts.footer).addClass("panel-footer").appendTo(_226);
$(_224).addClass("panel-body-nobottom");
}else{
_226.children(".panel-footer").remove();
$(_224).removeClass("panel-body-nobottom");
}
};
};
function _22f(_230,_231){
var _232=$.data(_230,"panel");
var opts=_232.options;
if(_233){
opts.queryParams=_231;
}
if(!opts.href){
return;
}
if(!_232.isLoaded||!opts.cache){
var _233=$.extend({},opts.queryParams);
if(opts.onBeforeLoad.call(_230,_233)==false){
return;
}
_232.isLoaded=false;
if(opts.loadingMessage){
$(_230).panel("clear");
$(_230).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
opts.loader.call(_230,_233,function(data){
var _234=opts.extractor.call(_230,data);
$(_230).panel("clear");
$(_230).html(_234);
$.parser.parse($(_230));
opts.onLoad.apply(_230,arguments);
_232.isLoaded=true;
},function(){
opts.onLoadError.apply(_230,arguments);
});
}
};
function _235(_236){
var t=$(_236);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _237(_238){
$(_238).panel("doLayout",true);
};
function _239(_23a,_23b){
var opts=$.data(_23a,"panel").options;
var _23c=$.data(_23a,"panel").panel;
if(_23b!=true){
if(opts.onBeforeOpen.call(_23a)==false){
return;
}
}
_23c.stop(true,true);
if($.isFunction(opts.openAnimation)){
opts.openAnimation.call(_23a,cb);
}else{
switch(opts.openAnimation){
case "slide":
_23c.slideDown(opts.openDuration,cb);
break;
case "fade":
_23c.fadeIn(opts.openDuration,cb);
break;
case "show":
_23c.show(opts.openDuration,cb);
break;
default:
_23c.show();
cb();
}
}
function cb(){
opts.closed=false;
opts.minimized=false;
var tool=_23c.children(".panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_23a);
if(opts.maximized==true){
opts.maximized=false;
_23d(_23a);
}
if(opts.collapsed==true){
opts.collapsed=false;
_23e(_23a);
}
if(!opts.collapsed){
_22f(_23a);
_237(_23a);
}
};
};
function _23f(_240,_241){
var _242=$.data(_240,"panel");
var opts=_242.options;
var _243=_242.panel;
if(_241!=true){
if(opts.onBeforeClose.call(_240)==false){
return;
}
}
_243.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_243.stop(true,true);
_243._size("unfit");
if($.isFunction(opts.closeAnimation)){
opts.closeAnimation.call(_240,cb);
}else{
switch(opts.closeAnimation){
case "slide":
_243.slideUp(opts.closeDuration,cb);
break;
case "fade":
_243.fadeOut(opts.closeDuration,cb);
break;
case "hide":
_243.hide(opts.closeDuration,cb);
break;
default:
_243.hide();
cb();
}
}
function cb(){
opts.closed=true;
opts.onClose.call(_240);
};
};
function _244(_245,_246){
var _247=$.data(_245,"panel");
var opts=_247.options;
var _248=_247.panel;
if(_246!=true){
if(opts.onBeforeDestroy.call(_245)==false){
return;
}
}
$(_245).panel("clear").panel("clear","footer");
_210(_248);
opts.onDestroy.call(_245);
};
function _23e(_249,_24a){
var opts=$.data(_249,"panel").options;
var _24b=$.data(_249,"panel").panel;
var body=_24b.children(".panel-body");
var tool=_24b.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_249)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_24a==true){
body.slideUp("normal",function(){
opts.collapsed=true;
opts.onCollapse.call(_249);
});
}else{
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_249);
}
};
function _24c(_24d,_24e){
var opts=$.data(_24d,"panel").options;
var _24f=$.data(_24d,"panel").panel;
var body=_24f.children(".panel-body");
var tool=_24f.children(".panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_24d)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_24e==true){
body.slideDown("normal",function(){
opts.collapsed=false;
opts.onExpand.call(_24d);
_22f(_24d);
_237(_24d);
});
}else{
body.show();
opts.collapsed=false;
opts.onExpand.call(_24d);
_22f(_24d);
_237(_24d);
}
};
function _23d(_250){
var opts=$.data(_250,"panel").options;
var _251=$.data(_250,"panel").panel;
var tool=_251.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_250,"panel").original){
$.data(_250,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_211(_250);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_250);
};
function _252(_253){
var opts=$.data(_253,"panel").options;
var _254=$.data(_253,"panel").panel;
_254._size("unfit");
_254.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_253);
};
function _255(_256){
var opts=$.data(_256,"panel").options;
var _257=$.data(_256,"panel").panel;
var tool=_257.children(".panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_257.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_256,"panel").original);
_211(_256);
opts.minimized=false;
opts.maximized=false;
$.data(_256,"panel").original=null;
opts.onRestore.call(_256);
};
function _258(_259,_25a){
$.data(_259,"panel").options.title=_25a;
$(_259).panel("header").find("div.panel-title").html(_25a);
};
var _25b=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_25b){
clearTimeout(_25b);
}
_25b=setTimeout(function(){
var _25c=$("body.layout");
if(_25c.length){
_25c.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_25b=null;
},100);
});
$.fn.panel=function(_25d,_25e){
if(typeof _25d=="string"){
return $.fn.panel.methods[_25d](this,_25e);
}
_25d=_25d||{};
return this.each(function(){
var _25f=$.data(this,"panel");
var opts;
if(_25f){
opts=$.extend(_25f.options,_25d);
_25f.isLoaded=false;
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_25d);
$(this).attr("title","");
_25f=$.data(this,"panel",{options:opts,panel:_21f(this),isLoaded:false});
}
_223(this);
$(this).show();
if(opts.doSize==true){
_25f.panel.css("display","block");
_211(this);
}
if(opts.closed==true||opts.minimized==true){
_25f.panel.hide();
}else{
_239(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_260){
return jq.each(function(){
_258(this,_260);
});
},open:function(jq,_261){
return jq.each(function(){
_239(this,_261);
});
},close:function(jq,_262){
return jq.each(function(){
_23f(this,_262);
});
},destroy:function(jq,_263){
return jq.each(function(){
_244(this,_263);
});
},clear:function(jq,type){
return jq.each(function(){
_235(type=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,href){
return jq.each(function(){
var _264=$.data(this,"panel");
_264.isLoaded=false;
if(href){
if(typeof href=="string"){
_264.options.href=href;
}else{
_264.options.queryParams=href;
}
}
_22f(this);
});
},resize:function(jq,_265){
return jq.each(function(){
_211(this,_265);
});
},doLayout:function(jq,all){
return jq.each(function(){
_266(this,"body");
_266($(this).siblings(".panel-footer")[0],"footer");
function _266(_267,type){
if(!_267){
return;
}
var _268=_267==$("body")[0];
var s=$(_267).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_269,el){
var p=$(el).parents(".panel-"+type+":first");
return _268?p.length==0:p[0]==_267;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_26a){
return jq.each(function(){
_21a(this,_26a);
});
},maximize:function(jq){
return jq.each(function(){
_23d(this);
});
},minimize:function(jq){
return jq.each(function(){
_252(this);
});
},restore:function(jq){
return jq.each(function(){
_255(this);
});
},collapse:function(jq,_26b){
return jq.each(function(){
_23e(this,_26b);
});
},expand:function(jq,_26c){
return jq.each(function(){
_24c(this,_26c);
});
}};
$.fn.panel.parseOptions=function(_26d){
var t=$(_26d);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_26d,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_26e,_26f,_270){
var opts=$(this).panel("options");
if(!opts.href){
return false;
}
$.ajax({type:opts.method,url:opts.href,cache:false,data:_26e,dataType:"html",success:function(data){
_26f(data);
},error:function(){
_270.apply(this,arguments);
}});
},extractor:function(data){
var _271=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _272=_271.exec(data);
if(_272){
return _272[1];
}else{
return data;
}
},onBeforeLoad:function(_273){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_274,_275){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _276(_277,_278){
var _279=$.data(_277,"window");
if(_278){
if(_278.left!=null){
_279.options.left=_278.left;
}
if(_278.top!=null){
_279.options.top=_278.top;
}
}
$(_277).panel("move",_279.options);
if(_279.shadow){
_279.shadow.css({left:_279.options.left,top:_279.options.top});
}
};
function _27a(_27b,_27c){
var opts=$.data(_27b,"window").options;
var pp=$(_27b).window("panel");
var _27d=pp._outerWidth();
if(opts.inline){
var _27e=pp.parent();
opts.left=Math.ceil((_27e.width()-_27d)/2+_27e.scrollLeft());
}else{
opts.left=Math.ceil(($(window)._outerWidth()-_27d)/2+$(document).scrollLeft());
}
if(_27c){
_276(_27b);
}
};
function _27f(_280,_281){
var opts=$.data(_280,"window").options;
var pp=$(_280).window("panel");
var _282=pp._outerHeight();
if(opts.inline){
var _283=pp.parent();
opts.top=Math.ceil((_283.height()-_282)/2+_283.scrollTop());
}else{
opts.top=Math.ceil(($(window)._outerHeight()-_282)/2+$(document).scrollTop());
}
if(_281){
_276(_280);
}
};
function _284(_285){
var _286=$.data(_285,"window");
var opts=_286.options;
var win=$(_285).panel($.extend({},_286.options,{border:false,doSize:true,closed:true,cls:"window "+(!opts.border?"window-thinborder window-noborder ":(opts.border=="thin"?"window-thinborder ":""))+(opts.cls||""),headerCls:"window-header "+(opts.headerCls||""),bodyCls:"window-body "+(opts.noheader?"window-body-noheader ":" ")+(opts.bodyCls||""),onBeforeDestroy:function(){
if(opts.onBeforeDestroy.call(_285)==false){
return false;
}
if(_286.shadow){
_286.shadow.remove();
}
if(_286.mask){
_286.mask.remove();
}
},onClose:function(){
if(_286.shadow){
_286.shadow.hide();
}
if(_286.mask){
_286.mask.hide();
}
opts.onClose.call(_285);
},onOpen:function(){
if(_286.mask){
_286.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_285)));
}
if(_286.shadow){
_286.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:opts.left,top:opts.top,width:_286.window._outerWidth(),height:_286.window._outerHeight()});
}
_286.window.css("z-index",$.fn.window.defaults.zIndex++);
opts.onOpen.call(_285);
},onResize:function(_287,_288){
var _289=$(this).panel("options");
$.extend(opts,{width:_289.width,height:_289.height,left:_289.left,top:_289.top});
if(_286.shadow){
_286.shadow.css({left:opts.left,top:opts.top,width:_286.window._outerWidth(),height:_286.window._outerHeight()});
}
opts.onResize.call(_285,_287,_288);
},onMinimize:function(){
if(_286.shadow){
_286.shadow.hide();
}
if(_286.mask){
_286.mask.hide();
}
_286.options.onMinimize.call(_285);
},onBeforeCollapse:function(){
if(opts.onBeforeCollapse.call(_285)==false){
return false;
}
if(_286.shadow){
_286.shadow.hide();
}
},onExpand:function(){
if(_286.shadow){
_286.shadow.show();
}
opts.onExpand.call(_285);
}}));
_286.window=win.panel("panel");
if(_286.mask){
_286.mask.remove();
}
if(opts.modal){
_286.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_286.window);
}
if(_286.shadow){
_286.shadow.remove();
}
if(opts.shadow){
_286.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_286.window);
}
var _28a=opts.closed;
if(opts.left==null){
_27a(_285);
}
if(opts.top==null){
_27f(_285);
}
_276(_285);
if(!_28a){
win.window("open");
}
};
function _28b(left,top,_28c,_28d){
var _28e=this;
var _28f=$.data(_28e,"window");
var opts=_28f.options;
if(!opts.constrain){
return {};
}
if($.isFunction(opts.constrain)){
return opts.constrain.call(_28e,left,top,_28c,_28d);
}
var win=$(_28e).window("window");
var _290=opts.inline?win.parent():$(window);
if(left<0){
left=0;
}
if(top<_290.scrollTop()){
top=_290.scrollTop();
}
if(left+_28c>_290.width()){
if(_28c==win.outerWidth()){
left=_290.width()-_28c;
}else{
_28c=_290.width()-left;
}
}
if(top-_290.scrollTop()+_28d>_290.height()){
if(_28d==win.outerHeight()){
top=_290.height()-_28d+_290.scrollTop();
}else{
_28d=_290.height()-top+_290.scrollTop();
}
}
return {left:left,top:top,width:_28c,height:_28d};
};
function _291(_292){
var _293=$.data(_292,"window");
_293.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_293.options.draggable==false,onBeforeDrag:function(e){
if(_293.mask){
_293.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_293.shadow){
_293.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_293.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_294(e);
},onDrag:function(e){
_295(e);
return false;
},onStopDrag:function(e){
_296(e);
}});
_293.window.resizable({disabled:_293.options.resizable==false,onStartResize:function(e){
_294(e);
},onResize:function(e){
_295(e);
return false;
},onStopResize:function(e){
_296(e);
}});
function _294(e){
if(_293.pmask){
_293.pmask.remove();
}
_293.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_293.window);
_293.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_293.window._outerWidth(),height:_293.window._outerHeight()});
if(_293.proxy){
_293.proxy.remove();
}
_293.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_293.window);
_293.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_293.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_293.proxy.hide();
setTimeout(function(){
if(_293.pmask){
_293.pmask.show();
}
if(_293.proxy){
_293.proxy.show();
}
},500);
};
function _295(e){
$.extend(e.data,_28b.call(_292,e.data.left,e.data.top,e.data.width,e.data.height));
_293.pmask.show();
_293.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_293.proxy._outerWidth(e.data.width);
_293.proxy._outerHeight(e.data.height);
};
function _296(e){
$.extend(e.data,_28b.call(_292,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_292).window("resize",e.data);
_293.pmask.remove();
_293.pmask=null;
_293.proxy.remove();
_293.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_297,_298){
if(typeof _297=="string"){
var _299=$.fn.window.methods[_297];
if(_299){
return _299(this,_298);
}else{
return this.panel(_297,_298);
}
}
_297=_297||{};
return this.each(function(){
var _29a=$.data(this,"window");
if(_29a){
$.extend(_29a.options,_297);
}else{
_29a=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_297)});
if(!_29a.options.inline){
document.body.appendChild(this);
}
}
_284(this);
_291(this);
});
};
$.fn.window.methods={options:function(jq){
var _29b=jq.panel("options");
var _29c=$.data(jq[0],"window").options;
return $.extend(_29c,{closed:_29b.closed,collapsed:_29b.collapsed,minimized:_29b.minimized,maximized:_29b.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_29d){
return jq.each(function(){
_276(this,_29d);
});
},hcenter:function(jq){
return jq.each(function(){
_27a(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_27f(this,true);
});
},center:function(jq){
return jq.each(function(){
_27a(this);
_27f(this);
_276(this);
});
}};
$.fn.window.getMaskSize=function(_29e){
var _29f=$(_29e).data("window");
if(_29f&&_29f.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_2a0){
return $.extend({},$.fn.panel.parseOptions(_2a0),$.parser.parseOptions(_2a0,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);
(function($){
function _2a1(_2a2){
var opts=$.data(_2a2,"dialog").options;
opts.inited=false;
$(_2a2).window($.extend({},opts,{onResize:function(w,h){
if(opts.inited){
_2a7(this);
opts.onResize.call(this,w,h);
}
}}));
var win=$(_2a2).window("window");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$(_2a2).siblings("div.dialog-toolbar").remove();
var _2a3=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").appendTo(win);
var tr=_2a3.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("dialog-toolbar").appendTo(win);
$(opts.toolbar).show();
}
}else{
$(_2a2).siblings("div.dialog-toolbar").remove();
}
if(opts.buttons){
if($.isArray(opts.buttons)){
$(_2a2).siblings("div.dialog-button").remove();
var _2a4=$("<div class=\"dialog-button\"></div>").appendTo(win);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _2a5=$("<a href=\"javascript:void(0)\"></a>").appendTo(_2a4);
if(p.handler){
_2a5[0].onclick=p.handler;
}
_2a5.linkbutton(p);
}
}else{
$(opts.buttons).addClass("dialog-button").appendTo(win);
$(opts.buttons).show();
}
}else{
$(_2a2).siblings("div.dialog-button").remove();
}
opts.inited=true;
var _2a6=opts.closed;
win.show();
$(_2a2).window("resize");
if(_2a6){
win.hide();
}
};
function _2a7(_2a8,_2a9){
var t=$(_2a8);
var opts=t.dialog("options");
var _2aa=opts.noheader;
var tb=t.siblings(".dialog-toolbar");
var bb=t.siblings(".dialog-button");
tb.insertBefore(_2a8).css({borderTopWidth:(_2aa?1:0),top:(_2aa?tb.length:0)});
bb.insertAfter(_2a8);
tb.add(bb)._outerWidth(t._outerWidth()).find(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
var _2ab=tb._outerHeight()+bb._outerHeight();
if(!isNaN(parseInt(opts.height))){
t._outerHeight(t._outerHeight()-_2ab);
}else{
var _2ac=t._size("min-height");
if(_2ac){
t._size("min-height",_2ac-_2ab);
}
var _2ad=t._size("max-height");
if(_2ad){
t._size("max-height",_2ad-_2ab);
}
}
var _2ae=$.data(_2a8,"window").shadow;
if(_2ae){
var cc=t.panel("panel");
_2ae.css({width:cc._outerWidth(),height:cc._outerHeight()});
}
};
$.fn.dialog=function(_2af,_2b0){
if(typeof _2af=="string"){
var _2b1=$.fn.dialog.methods[_2af];
if(_2b1){
return _2b1(this,_2b0);
}else{
return this.window(_2af,_2b0);
}
}
_2af=_2af||{};
return this.each(function(){
var _2b2=$.data(this,"dialog");
if(_2b2){
$.extend(_2b2.options,_2af);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_2af)});
}
_2a1(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _2b3=$.data(jq[0],"dialog").options;
var _2b4=jq.panel("options");
$.extend(_2b3,{width:_2b4.width,height:_2b4.height,left:_2b4.left,top:_2b4.top,closed:_2b4.closed,collapsed:_2b4.collapsed,minimized:_2b4.minimized,maximized:_2b4.maximized});
return _2b3;
},dialog:function(jq){
return jq.window("window");
}};
$.fn.dialog.parseOptions=function(_2b5){
var t=$(_2b5);
return $.extend({},$.fn.window.parseOptions(_2b5),$.parser.parseOptions(_2b5,["toolbar","buttons"]),{toolbar:(t.children(".dialog-toolbar").length?t.children(".dialog-toolbar").removeClass("dialog-toolbar"):undefined),buttons:(t.children(".dialog-button").length?t.children(".dialog-button").removeClass("dialog-button"):undefined)});
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function _2b6(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var win=$("body").children("div.messager-window");
if(!win.length){
return;
}
var _2b7=win.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_2b7.length;i++){
if($(_2b7[i]).is(":focus")){
$(_2b7[i>=_2b7.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _2b8=$(e.target).closest("input.messager-input");
if(_2b8.length){
var dlg=_2b8.closest(".messager-body");
_2b9(dlg,_2b8.val());
}
}
}
}
});
};
function _2ba(){
$(document).unbind(".messager");
};
function _2bb(_2bc){
var opts=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,minHeight:0,showType:"slide",showSpeed:600,content:_2bc.msg,timeout:4000},_2bc);
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},opts,{noheader:(opts.title?false:true),openAnimation:(opts.showType),closeAnimation:(opts.showType=="show"?"hide":opts.showType),openDuration:opts.showSpeed,closeDuration:opts.showSpeed,onOpen:function(){
dlg.dialog("dialog").hover(function(){
if(opts.timer){
clearTimeout(opts.timer);
}
},function(){
_2bd();
});
_2bd();
function _2bd(){
if(opts.timeout>0){
opts.timer=setTimeout(function(){
if(dlg.length&&dlg.data("dialog")){
dlg.dialog("close");
}
},opts.timeout);
}
};
if(_2bc.onOpen){
_2bc.onOpen.call(this);
}else{
opts.onOpen.call(this);
}
},onClose:function(){
if(opts.timer){
clearTimeout(opts.timer);
}
if(_2bc.onClose){
_2bc.onClose.call(this);
}else{
opts.onClose.call(this);
}
dlg.dialog("destroy");
}}));
dlg.dialog("dialog").css(opts.style);
dlg.dialog("open");
return dlg;
};
function _2be(_2bf){
_2b6();
var dlg=$("<div class=\"messager-body\"></div>").appendTo("body");
dlg.dialog($.extend({},_2bf,{noheader:(_2bf.title?false:true),onClose:function(){
_2ba();
if(_2bf.onClose){
_2bf.onClose.call(this);
}
setTimeout(function(){
dlg.dialog("destroy");
},100);
}}));
var win=dlg.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return dlg;
};
function _2b9(dlg,_2c0){
dlg.dialog("close");
dlg.dialog("options").fn(_2c0);
};
$.messager={show:function(_2c1){
return _2bb(_2c1);
},alert:function(_2c2,msg,icon,fn){
var opts=typeof _2c2=="object"?_2c2:{title:_2c2,msg:msg,icon:icon,fn:fn};
var cls=opts.icon?"messager-icon messager-"+opts.icon:"";
opts=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2b9(dlg);
}}];
}
var dlg=_2be(opts);
return dlg;
},confirm:function(_2c3,msg,fn){
var opts=typeof _2c3=="object"?_2c3:{title:_2c3,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<div style=\"clear:both;\"/>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2b9(dlg,true);
}},{text:opts.cancel,onClick:function(){
_2b9(dlg,false);
}}];
}
var dlg=_2be(opts);
return dlg;
},prompt:function(_2c4,msg,fn){
var opts=typeof _2c4=="object"?_2c4:{title:_2c4,msg:msg,fn:fn};
opts=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+opts.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},opts);
if(!opts.buttons){
opts.buttons=[{text:opts.ok,onClick:function(){
_2b9(dlg,dlg.find(".messager-input").val());
}},{text:opts.cancel,onClick:function(){
_2b9(dlg);
}}];
}
var dlg=_2be(opts);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_2c5){
var _2c6={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _2c5=="string"){
var _2c7=_2c6[_2c5];
return _2c7();
}
_2c5=_2c5||{};
var opts=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_2c5);
var dlg=_2be($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+opts.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},opts,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_2c5.onClose){
_2c5.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
dlg.dialog("resize");
if(opts.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);
(function($){
function _2c8(_2c9,_2ca){
var _2cb=$.data(_2c9,"accordion");
var opts=_2cb.options;
var _2cc=_2cb.panels;
var cc=$(_2c9);
if(_2ca){
$.extend(opts,{width:_2ca.width,height:_2ca.height});
}
cc._size(opts);
var _2cd=0;
var _2ce="auto";
var _2cf=cc.find(">.panel>.accordion-header");
if(_2cf.length){
_2cd=$(_2cf[0]).css("height","")._outerHeight();
}
if(!isNaN(parseInt(opts.height))){
_2ce=cc.height()-_2cd*_2cf.length;
}
_2d0(true,_2ce-_2d0(false)+1);
function _2d0(_2d1,_2d2){
var _2d3=0;
for(var i=0;i<_2cc.length;i++){
var p=_2cc[i];
var h=p.panel("header")._outerHeight(_2cd);
if(p.panel("options").collapsible==_2d1){
var _2d4=isNaN(_2d2)?undefined:(_2d2+_2cd*h.length);
p.panel("resize",{width:cc.width(),height:(_2d1?_2d4:undefined)});
_2d3+=p.panel("panel").outerHeight()-_2cd*h.length;
}
}
return _2d3;
};
};
function _2d5(_2d6,_2d7,_2d8,all){
var _2d9=$.data(_2d6,"accordion").panels;
var pp=[];
for(var i=0;i<_2d9.length;i++){
var p=_2d9[i];
if(_2d7){
if(p.panel("options")[_2d7]==_2d8){
pp.push(p);
}
}else{
if(p[0]==$(_2d8)[0]){
return i;
}
}
}
if(_2d7){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _2da(_2db){
return _2d5(_2db,"collapsed",false,true);
};
function _2dc(_2dd){
var pp=_2da(_2dd);
return pp.length?pp[0]:null;
};
function _2de(_2df,_2e0){
return _2d5(_2df,null,_2e0);
};
function _2e1(_2e2,_2e3){
var _2e4=$.data(_2e2,"accordion").panels;
if(typeof _2e3=="number"){
if(_2e3<0||_2e3>=_2e4.length){
return null;
}else{
return _2e4[_2e3];
}
}
return _2d5(_2e2,"title",_2e3);
};
function _2e5(_2e6){
var opts=$.data(_2e6,"accordion").options;
var cc=$(_2e6);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function init(_2e7){
var _2e8=$.data(_2e7,"accordion");
var cc=$(_2e7);
cc.addClass("accordion");
_2e8.panels=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_2e8.panels.push(pp);
_2ea(_2e7,pp,opts);
});
cc.bind("_resize",function(e,_2e9){
if($(this).hasClass("easyui-fluid")||_2e9){
_2c8(_2e7);
}
return false;
});
};
function _2ea(_2eb,pp,_2ec){
var opts=$.data(_2eb,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body"},_2ec,{onBeforeExpand:function(){
if(_2ec.onBeforeExpand){
if(_2ec.onBeforeExpand.call(this)==false){
return false;
}
}
if(!opts.multiple){
var all=$.grep(_2da(_2eb),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_2f4(_2eb,_2de(_2eb,all[i]));
}
}
var _2ed=$(this).panel("header");
_2ed.addClass("accordion-header-selected");
_2ed.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
if(_2ec.onExpand){
_2ec.onExpand.call(this);
}
opts.onSelect.call(_2eb,$(this).panel("options").title,_2de(_2eb,this));
},onBeforeCollapse:function(){
if(_2ec.onBeforeCollapse){
if(_2ec.onBeforeCollapse.call(this)==false){
return false;
}
}
var _2ee=$(this).panel("header");
_2ee.removeClass("accordion-header-selected");
_2ee.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(_2ec.onCollapse){
_2ec.onCollapse.call(this);
}
opts.onUnselect.call(_2eb,$(this).panel("options").title,_2de(_2eb,this));
}}));
var _2ef=pp.panel("header");
var tool=_2ef.children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:void(0)\"></a>").addClass("accordion-collapse accordion-expand").appendTo(tool);
t.bind("click",function(){
_2f0(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
_2ef.click(function(){
_2f0(pp);
return false;
});
function _2f0(p){
var _2f1=p.panel("options");
if(_2f1.collapsible){
var _2f2=_2de(_2eb,p);
if(_2f1.collapsed){
_2f3(_2eb,_2f2);
}else{
_2f4(_2eb,_2f2);
}
}
};
};
function _2f3(_2f5,_2f6){
var p=_2e1(_2f5,_2f6);
if(!p){
return;
}
_2f7(_2f5);
var opts=$.data(_2f5,"accordion").options;
p.panel("expand",opts.animate);
};
function _2f4(_2f8,_2f9){
var p=_2e1(_2f8,_2f9);
if(!p){
return;
}
_2f7(_2f8);
var opts=$.data(_2f8,"accordion").options;
p.panel("collapse",opts.animate);
};
function _2fa(_2fb){
var opts=$.data(_2fb,"accordion").options;
var p=_2d5(_2fb,"selected",true);
if(p){
_2fc(_2de(_2fb,p));
}else{
_2fc(opts.selected);
}
function _2fc(_2fd){
var _2fe=opts.animate;
opts.animate=false;
_2f3(_2fb,_2fd);
opts.animate=_2fe;
};
};
function _2f7(_2ff){
var _300=$.data(_2ff,"accordion").panels;
for(var i=0;i<_300.length;i++){
_300[i].stop(true,true);
}
};
function add(_301,_302){
var _303=$.data(_301,"accordion");
var opts=_303.options;
var _304=_303.panels;
if(_302.selected==undefined){
_302.selected=true;
}
_2f7(_301);
var pp=$("<div></div>").appendTo(_301);
_304.push(pp);
_2ea(_301,pp,_302);
_2c8(_301);
opts.onAdd.call(_301,_302.title,_304.length-1);
if(_302.selected){
_2f3(_301,_304.length-1);
}
};
function _305(_306,_307){
var _308=$.data(_306,"accordion");
var opts=_308.options;
var _309=_308.panels;
_2f7(_306);
var _30a=_2e1(_306,_307);
var _30b=_30a.panel("options").title;
var _30c=_2de(_306,_30a);
if(!_30a){
return;
}
if(opts.onBeforeRemove.call(_306,_30b,_30c)==false){
return;
}
_309.splice(_30c,1);
_30a.panel("destroy");
if(_309.length){
_2c8(_306);
var curr=_2dc(_306);
if(!curr){
_2f3(_306,0);
}
}
opts.onRemove.call(_306,_30b,_30c);
};
$.fn.accordion=function(_30d,_30e){
if(typeof _30d=="string"){
return $.fn.accordion.methods[_30d](this,_30e);
}
_30d=_30d||{};
return this.each(function(){
var _30f=$.data(this,"accordion");
if(_30f){
$.extend(_30f.options,_30d);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_30d),accordion:$(this).addClass("accordion"),panels:[]});
init(this);
}
_2e5(this);
_2c8(this);
_2fa(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_310){
return jq.each(function(){
_2c8(this,_310);
});
},getSelections:function(jq){
return _2da(jq[0]);
},getSelected:function(jq){
return _2dc(jq[0]);
},getPanel:function(jq,_311){
return _2e1(jq[0],_311);
},getPanelIndex:function(jq,_312){
return _2de(jq[0],_312);
},select:function(jq,_313){
return jq.each(function(){
_2f3(this,_313);
});
},unselect:function(jq,_314){
return jq.each(function(){
_2f4(this,_314);
});
},add:function(jq,_315){
return jq.each(function(){
add(this,_315);
});
},remove:function(jq,_316){
return jq.each(function(){
_305(this,_316);
});
}};
$.fn.accordion.parseOptions=function(_317){
var t=$(_317);
return $.extend({},$.parser.parseOptions(_317,["width","height",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,onSelect:function(_318,_319){
},onUnselect:function(_31a,_31b){
},onAdd:function(_31c,_31d){
},onBeforeRemove:function(_31e,_31f){
},onRemove:function(_320,_321){
}};
})(jQuery);
(function($){
function _322(c){
var w=0;
$(c).children().each(function(){
w+=$(this).outerWidth(true);
});
return w;
};
function _323(_324){
var opts=$.data(_324,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"||!opts.showHeader){
return;
}
var _325=$(_324).children("div.tabs-header");
var tool=_325.children("div.tabs-tool:not(.tabs-tool-hidden)");
var _326=_325.children("div.tabs-scroller-left");
var _327=_325.children("div.tabs-scroller-right");
var wrap=_325.children("div.tabs-wrap");
var _328=_325.outerHeight();
if(opts.plain){
_328-=_328-_325.height();
}
tool._outerHeight(_328);
var _329=_322(_325.find("ul.tabs"));
var _32a=_325.width()-tool._outerWidth();
if(_329>_32a){
_326.add(_327).show()._outerHeight(_328);
if(opts.toolPosition=="left"){
tool.css({left:_326.outerWidth(),right:""});
wrap.css({marginLeft:_326.outerWidth()+tool._outerWidth(),marginRight:_327._outerWidth(),width:_32a-_326.outerWidth()-_327.outerWidth()});
}else{
tool.css({left:"",right:_327.outerWidth()});
wrap.css({marginLeft:_326.outerWidth(),marginRight:_327.outerWidth()+tool._outerWidth(),width:_32a-_326.outerWidth()-_327.outerWidth()});
}
}else{
_326.add(_327).hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_32a});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_32a});
}
}
};
function _32b(_32c){
var opts=$.data(_32c,"tabs").options;
var _32d=$(_32c).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_32d);
$(opts.tools).show();
}else{
_32d.children("div.tabs-tool").remove();
var _32e=$("<div class=\"tabs-tool\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"height:100%\"><tr></tr></table></div>").appendTo(_32d);
var tr=_32e.find("tr");
for(var i=0;i<opts.tools.length;i++){
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0);\"></a>").appendTo(td);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_32d.children("div.tabs-tool").remove();
}
};
function _32f(_330,_331){
var _332=$.data(_330,"tabs");
var opts=_332.options;
var cc=$(_330);
if(!opts.doSize){
return;
}
if(_331){
$.extend(opts,{width:_331.width,height:_331.height});
}
cc._size(opts);
var _333=cc.children("div.tabs-header");
var _334=cc.children("div.tabs-panels");
var wrap=_333.find("div.tabs-wrap");
var ul=wrap.find(".tabs");
ul.children("li").removeClass("tabs-first tabs-last");
ul.children("li:first").addClass("tabs-first");
ul.children("li:last").addClass("tabs-last");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_333._outerWidth(opts.showHeader?opts.headerWidth:0);
_334._outerWidth(cc.width()-_333.outerWidth());
_333.add(_334)._size("height",isNaN(parseInt(opts.height))?"":cc.height());
wrap._outerWidth(_333.width());
ul._outerWidth(wrap.width()).css("height","");
}else{
_333.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",opts.showHeader?"block":"none");
_333._outerWidth(cc.width()).css("height","");
if(opts.showHeader){
_333.css("background-color","");
wrap.css("height","");
}else{
_333.css("background-color","transparent");
_333._outerHeight(0);
wrap._outerHeight(0);
}
ul._outerHeight(opts.tabHeight).css("width","");
ul._outerHeight(ul.outerHeight()-ul.height()-1+opts.tabHeight).css("width","");
_334._size("height",isNaN(parseInt(opts.height))?"":(cc.height()-_333.outerHeight()));
_334._size("width",cc.width());
}
if(_332.tabs.length){
var d1=ul.outerWidth(true)-ul.width();
var li=ul.children("li:first");
var d2=li.outerWidth(true)-li.width();
var _335=_333.width()-_333.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth();
var _336=Math.floor((_335-d1-d2*_332.tabs.length)/_332.tabs.length);
$.map(_332.tabs,function(p){
_337(p,(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0)?_336:undefined);
});
if(opts.justified&&$.inArray(opts.tabPosition,["top","bottom"])>=0){
var _338=_335-d1-_322(ul);
_337(_332.tabs[_332.tabs.length-1],_336+_338);
}
}
_323(_330);
function _337(p,_339){
var _33a=p.panel("options");
var p_t=_33a.tab.find("a.tabs-inner");
var _339=_339?_339:(parseInt(_33a.tabWidth||opts.tabWidth||undefined));
if(_339){
p_t._outerWidth(_339);
}else{
p_t.css("width","");
}
p_t._outerHeight(opts.tabHeight);
p_t.css("lineHeight",p_t.height()+"px");
p_t.find(".easyui-fluid:visible").triggerHandler("_resize");
};
};
function _33b(_33c){
var opts=$.data(_33c,"tabs").options;
var tab=_33d(_33c);
if(tab){
var _33e=$(_33c).children("div.tabs-panels");
var _33f=opts.width=="auto"?"auto":_33e.width();
var _340=opts.height=="auto"?"auto":_33e.height();
tab.panel("resize",{width:_33f,height:_340});
}
};
function _341(_342){
var tabs=$.data(_342,"tabs").tabs;
var cc=$(_342).addClass("tabs-container");
var _343=$("<div class=\"tabs-panels\"></div>").insertBefore(cc);
cc.children("div").each(function(){
_343[0].appendChild(this);
});
cc[0].appendChild(_343[0]);
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_342);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{disabled:($(this).attr("disabled")?true:undefined),selected:($(this).attr("selected")?true:undefined)});
_350(_342,opts,$(this));
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_344){
if($(this).hasClass("easyui-fluid")||_344){
_32f(_342);
_33b(_342);
}
return false;
});
};
function _345(_346){
var _347=$.data(_346,"tabs");
var opts=_347.options;
$(_346).children("div.tabs-header").unbind().bind("click",function(e){
if($(e.target).hasClass("tabs-scroller-left")){
$(_346).tabs("scrollBy",-opts.scrollIncrement);
}else{
if($(e.target).hasClass("tabs-scroller-right")){
$(_346).tabs("scrollBy",opts.scrollIncrement);
}else{
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return false;
}
var a=$(e.target).closest("a.tabs-close");
if(a.length){
_369(_346,_348(li));
}else{
if(li.length){
var _349=_348(li);
var _34a=_347.tabs[_349].panel("options");
if(_34a.collapsible){
_34a.closed?_360(_346,_349):_37d(_346,_349);
}else{
_360(_346,_349);
}
}
}
return false;
}
}
}).bind("contextmenu",function(e){
var li=$(e.target).closest("li");
if(li.hasClass("tabs-disabled")){
return;
}
if(li.length){
opts.onContextMenu.call(_346,e,li.find("span.tabs-title").html(),_348(li));
}
});
function _348(li){
var _34b=0;
li.parent().children("li").each(function(i){
if(li[0]==this){
_34b=i;
return false;
}
});
return _34b;
};
};
function _34c(_34d){
var opts=$.data(_34d,"tabs").options;
var _34e=$(_34d).children("div.tabs-header");
var _34f=$(_34d).children("div.tabs-panels");
_34e.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_34f.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_34e.insertBefore(_34f);
}else{
if(opts.tabPosition=="bottom"){
_34e.insertAfter(_34f);
_34e.addClass("tabs-header-bottom");
_34f.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_34e.addClass("tabs-header-left");
_34f.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_34e.addClass("tabs-header-right");
_34f.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_34e.addClass("tabs-header-plain");
}else{
_34e.removeClass("tabs-header-plain");
}
_34e.removeClass("tabs-header-narrow").addClass(opts.narrow?"tabs-header-narrow":"");
var tabs=_34e.find(".tabs");
tabs.removeClass("tabs-pill").addClass(opts.pill?"tabs-pill":"");
tabs.removeClass("tabs-narrow").addClass(opts.narrow?"tabs-narrow":"");
tabs.removeClass("tabs-justified").addClass(opts.justified?"tabs-justified":"");
if(opts.border==true){
_34e.removeClass("tabs-header-noborder");
_34f.removeClass("tabs-panels-noborder");
}else{
_34e.addClass("tabs-header-noborder");
_34f.addClass("tabs-panels-noborder");
}
opts.doSize=true;
};
function _350(_351,_352,pp){
_352=_352||{};
var _353=$.data(_351,"tabs");
var tabs=_353.tabs;
if(_352.index==undefined||_352.index>tabs.length){
_352.index=tabs.length;
}
if(_352.index<0){
_352.index=0;
}
var ul=$(_351).children("div.tabs-header").find("ul.tabs");
var _354=$(_351).children("div.tabs-panels");
var tab=$("<li>"+"<a href=\"javascript:void(0)\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>"+"</li>");
if(!pp){
pp=$("<div></div>");
}
if(_352.index>=tabs.length){
tab.appendTo(ul);
pp.appendTo(_354);
tabs.push(pp);
}else{
tab.insertBefore(ul.children("li:eq("+_352.index+")"));
pp.insertBefore(_354.children("div.panel:eq("+_352.index+")"));
tabs.splice(_352.index,0,pp);
}
pp.panel($.extend({},_352,{tab:tab,border:false,noheader:true,closed:true,doSize:false,iconCls:(_352.icon?_352.icon:undefined),onLoad:function(){
if(_352.onLoad){
_352.onLoad.call(this,arguments);
}
_353.options.onLoad.call(_351,$(this));
},onBeforeOpen:function(){
if(_352.onBeforeOpen){
if(_352.onBeforeOpen.call(this)==false){
return false;
}
}
var p=$(_351).tabs("getSelected");
if(p){
if(p[0]!=this){
$(_351).tabs("unselect",_35b(_351,p));
p=$(_351).tabs("getSelected");
if(p){
return false;
}
}else{
_33b(_351);
return false;
}
}
var _355=$(this).panel("options");
_355.tab.addClass("tabs-selected");
var wrap=$(_351).find(">div.tabs-header>div.tabs-wrap");
var left=_355.tab.position().left;
var _356=left+_355.tab.outerWidth();
if(left<0||_356>wrap.width()){
var _357=left-(wrap.width()-_355.tab.width())/2;
$(_351).tabs("scrollBy",_357);
}else{
$(_351).tabs("scrollBy",0);
}
var _358=$(this).panel("panel");
_358.css("display","block");
_33b(_351);
_358.css("display","none");
},onOpen:function(){
if(_352.onOpen){
_352.onOpen.call(this);
}
var _359=$(this).panel("options");
_353.selectHis.push(_359.title);
_353.options.onSelect.call(_351,_359.title,_35b(_351,this));
},onBeforeClose:function(){
if(_352.onBeforeClose){
if(_352.onBeforeClose.call(this)==false){
return false;
}
}
$(this).panel("options").tab.removeClass("tabs-selected");
},onClose:function(){
if(_352.onClose){
_352.onClose.call(this);
}
var _35a=$(this).panel("options");
_353.options.onUnselect.call(_351,_35a.title,_35b(_351,this));
}}));
$(_351).tabs("update",{tab:pp,options:pp.panel("options"),type:"header"});
};
function _35c(_35d,_35e){
var _35f=$.data(_35d,"tabs");
var opts=_35f.options;
if(_35e.selected==undefined){
_35e.selected=true;
}
_350(_35d,_35e);
opts.onAdd.call(_35d,_35e.title,_35e.index);
if(_35e.selected){
_360(_35d,_35e.index);
}
};
function _361(_362,_363){
_363.type=_363.type||"all";
var _364=$.data(_362,"tabs").selectHis;
var pp=_363.tab;
var opts=pp.panel("options");
var _365=opts.title;
$.extend(opts,_363.options,{iconCls:(_363.options.icon?_363.options.icon:undefined)});
if(_363.type=="all"||_363.type=="body"){
pp.panel();
}
if(_363.type=="all"||_363.type=="header"){
var tab=opts.tab;
if(opts.header){
tab.find(".tabs-inner").html($(opts.header));
}else{
var _366=tab.find("span.tabs-title");
var _367=tab.find("span.tabs-icon");
_366.html(opts.title);
_367.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_366.addClass("tabs-closable");
$("<a href=\"javascript:void(0)\" class=\"tabs-close\"></a>").appendTo(tab);
}else{
_366.removeClass("tabs-closable");
}
if(opts.iconCls){
_366.addClass("tabs-with-icon");
_367.addClass(opts.iconCls);
}else{
_366.removeClass("tabs-with-icon");
}
if(opts.tools){
var _368=tab.find("span.tabs-p-tool");
if(!_368.length){
var _368=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
}
if($.isArray(opts.tools)){
_368.empty();
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:void(0)\"></a>").appendTo(_368);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}else{
$(opts.tools).children().appendTo(_368);
}
var pr=_368.children().length*12;
if(opts.closable){
pr+=8;
}else{
pr-=3;
_368.css("right","5px");
}
_366.css("padding-right",pr+"px");
}else{
tab.find("span.tabs-p-tool").remove();
_366.css("padding-right","");
}
}
if(_365!=opts.title){
for(var i=0;i<_364.length;i++){
if(_364[i]==_365){
_364[i]=opts.title;
}
}
}
}
if(opts.disabled){
opts.tab.addClass("tabs-disabled");
}else{
opts.tab.removeClass("tabs-disabled");
}
_32f(_362);
$.data(_362,"tabs").options.onUpdate.call(_362,opts.title,_35b(_362,pp));
};
function _369(_36a,_36b){
var opts=$.data(_36a,"tabs").options;
var tabs=$.data(_36a,"tabs").tabs;
var _36c=$.data(_36a,"tabs").selectHis;
if(!_36d(_36a,_36b)){
return;
}
var tab=_36e(_36a,_36b);
var _36f=tab.panel("options").title;
var _370=_35b(_36a,tab);
if(opts.onBeforeClose.call(_36a,_36f,_370)==false){
return;
}
var tab=_36e(_36a,_36b,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_36a,_36f,_370);
_32f(_36a);
for(var i=0;i<_36c.length;i++){
if(_36c[i]==_36f){
_36c.splice(i,1);
i--;
}
}
var _371=_36c.pop();
if(_371){
_360(_36a,_371);
}else{
if(tabs.length){
_360(_36a,0);
}
}
};
function _36e(_372,_373,_374){
var tabs=$.data(_372,"tabs").tabs;
var tab=null;
if(typeof _373=="number"){
if(_373>=0&&_373<tabs.length){
tab=tabs[_373];
if(_374){
tabs.splice(_373,1);
}
}
}else{
var tmp=$("<span></span>");
for(var i=0;i<tabs.length;i++){
var p=tabs[i];
tmp.html(p.panel("options").title);
if(tmp.text()==_373){
tab=p;
if(_374){
tabs.splice(i,1);
}
break;
}
}
tmp.remove();
}
return tab;
};
function _35b(_375,tab){
var tabs=$.data(_375,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _33d(_376){
var tabs=$.data(_376,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").tab.hasClass("tabs-selected")){
return tab;
}
}
return null;
};
function _377(_378){
var _379=$.data(_378,"tabs");
var tabs=_379.tabs;
for(var i=0;i<tabs.length;i++){
var opts=tabs[i].panel("options");
if(opts.selected&&!opts.disabled){
_360(_378,i);
return;
}
}
_360(_378,_379.options.selected);
};
function _360(_37a,_37b){
var p=_36e(_37a,_37b);
if(p&&!p.is(":visible")){
_37c(_37a);
if(!p.panel("options").disabled){
p.panel("open");
}
}
};
function _37d(_37e,_37f){
var p=_36e(_37e,_37f);
if(p&&p.is(":visible")){
_37c(_37e);
p.panel("close");
}
};
function _37c(_380){
$(_380).children("div.tabs-panels").each(function(){
$(this).stop(true,true);
});
};
function _36d(_381,_382){
return _36e(_381,_382)!=null;
};
function _383(_384,_385){
var opts=$.data(_384,"tabs").options;
opts.showHeader=_385;
$(_384).tabs("resize");
};
function _386(_387,_388){
var tool=$(_387).find(">.tabs-header>.tabs-tool");
if(_388){
tool.removeClass("tabs-tool-hidden").show();
}else{
tool.addClass("tabs-tool-hidden").hide();
}
$(_387).tabs("resize").tabs("scrollBy",0);
};
$.fn.tabs=function(_389,_38a){
if(typeof _389=="string"){
return $.fn.tabs.methods[_389](this,_38a);
}
_389=_389||{};
return this.each(function(){
var _38b=$.data(this,"tabs");
if(_38b){
$.extend(_38b.options,_389);
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_389),tabs:[],selectHis:[]});
_341(this);
}
_32b(this);
_34c(this);
_32f(this);
_345(this);
_377(this);
});
};
$.fn.tabs.methods={options:function(jq){
var cc=jq[0];
var opts=$.data(cc,"tabs").options;
var s=_33d(cc);
opts.selected=s?_35b(cc,s):-1;
return opts;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq,_38c){
return jq.each(function(){
_32f(this,_38c);
_33b(this);
});
},add:function(jq,_38d){
return jq.each(function(){
_35c(this,_38d);
});
},close:function(jq,_38e){
return jq.each(function(){
_369(this,_38e);
});
},getTab:function(jq,_38f){
return _36e(jq[0],_38f);
},getTabIndex:function(jq,tab){
return _35b(jq[0],tab);
},getSelected:function(jq){
return _33d(jq[0]);
},select:function(jq,_390){
return jq.each(function(){
_360(this,_390);
});
},unselect:function(jq,_391){
return jq.each(function(){
_37d(this,_391);
});
},exists:function(jq,_392){
return _36d(jq[0],_392);
},update:function(jq,_393){
return jq.each(function(){
_361(this,_393);
});
},enableTab:function(jq,_394){
return jq.each(function(){
var opts=$(this).tabs("getTab",_394).panel("options");
opts.tab.removeClass("tabs-disabled");
opts.disabled=false;
});
},disableTab:function(jq,_395){
return jq.each(function(){
var opts=$(this).tabs("getTab",_395).panel("options");
opts.tab.addClass("tabs-disabled");
opts.disabled=true;
});
},showHeader:function(jq){
return jq.each(function(){
_383(this,true);
});
},hideHeader:function(jq){
return jq.each(function(){
_383(this,false);
});
},showTool:function(jq){
return jq.each(function(){
_386(this,true);
});
},hideTool:function(jq){
return jq.each(function(){
_386(this,false);
});
},scrollBy:function(jq,_396){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_396,_397());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _397(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_398){
return $.extend({},$.parser.parseOptions(_398,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:true,plain:false,fit:false,border:true,justified:false,narrow:false,pill:false,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_399){
},onSelect:function(_39a,_39b){
},onUnselect:function(_39c,_39d){
},onBeforeClose:function(_39e,_39f){
},onClose:function(_3a0,_3a1){
},onAdd:function(_3a2,_3a3){
},onUpdate:function(_3a4,_3a5){
},onContextMenu:function(e,_3a6,_3a7){
}};
})(jQuery);
(function($){
var _3a8=false;
function _3a9(_3aa,_3ab){
var _3ac=$.data(_3aa,"layout");
var opts=_3ac.options;
var _3ad=_3ac.panels;
var cc=$(_3aa);
if(_3ab){
$.extend(opts,{width:_3ab.width,height:_3ab.height});
}
if(_3aa.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(opts);
}
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
_3ae(_3af(_3ad.expandNorth)?_3ad.expandNorth:_3ad.north,"n");
_3ae(_3af(_3ad.expandSouth)?_3ad.expandSouth:_3ad.south,"s");
_3b0(_3af(_3ad.expandEast)?_3ad.expandEast:_3ad.east,"e");
_3b0(_3af(_3ad.expandWest)?_3ad.expandWest:_3ad.west,"w");
_3ad.center.panel("resize",cpos);
function _3ae(pp,type){
if(!pp.length||!_3af(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:opts.height});
var _3b1=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(type=="n"?0:cc.height()-_3b1)});
cpos.height-=_3b1;
if(type=="n"){
cpos.top+=_3b1;
if(!opts.split&&opts.border){
cpos.top--;
}
}
if(!opts.split&&opts.border){
cpos.height++;
}
};
function _3b0(pp,type){
if(!pp.length||!_3af(pp)){
return;
}
var opts=pp.panel("options");
pp.panel("resize",{width:opts.width,height:cpos.height});
var _3b2=pp.panel("panel").outerWidth();
pp.panel("move",{left:(type=="e"?cc.width()-_3b2:0),top:cpos.top});
cpos.width-=_3b2;
if(type=="w"){
cpos.left+=_3b2;
if(!opts.split&&opts.border){
cpos.left--;
}
}
if(!opts.split&&opts.border){
cpos.width++;
}
};
};
function init(_3b3){
var cc=$(_3b3);
cc.addClass("layout");
function _3b4(el){
var _3b5=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_3b5.region)>=0){
_3b8(_3b3,_3b5,el);
}
};
var opts=cc.layout("options");
var _3b6=opts.onAdd;
opts.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_3b4(this);
});
opts.onAdd=_3b6;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_3b7){
if($(this).hasClass("easyui-fluid")||_3b7){
_3a9(_3b3);
}
return false;
});
};
function _3b8(_3b9,_3ba,el){
_3ba.region=_3ba.region||"center";
var _3bb=$.data(_3b9,"layout").panels;
var cc=$(_3b9);
var dir=_3ba.region;
if(_3bb[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _3bc=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var tool=$(this).panel("header").children("div.panel-tool");
tool.children("a.panel-tool-collapse").hide();
var _3bd={north:"up",south:"down",east:"right",west:"left"};
if(!_3bd[dir]){
return;
}
var _3be="layout-button-"+_3bd[dir];
var t=tool.children("a."+_3be);
if(!t.length){
t=$("<a href=\"javascript:void(0)\"></a>").addClass(_3be).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_3ca(_3b9,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_3ba,{cls:((_3ba.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_3ba.bodyCls||"")+" layout-body")});
pp.panel(_3bc);
_3bb[dir]=pp;
var _3bf={north:"s",south:"n",east:"w",west:"e"};
var _3c0=pp.panel("panel");
if(pp.panel("options").split){
_3c0.addClass("layout-split-"+dir);
}
_3c0.resizable($.extend({},{handles:(_3bf[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_3a8=true;
if(dir=="north"||dir=="south"){
var _3c1=$(">div.layout-split-proxy-v",_3b9);
}else{
var _3c1=$(">div.layout-split-proxy-h",_3b9);
}
var top=0,left=0,_3c2=0,_3c3=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_3c0.css("top"))+_3c0.outerHeight()-_3c1.height();
pos.left=parseInt(_3c0.css("left"));
pos.width=_3c0.outerWidth();
pos.height=_3c1.height();
}else{
if(dir=="south"){
pos.top=parseInt(_3c0.css("top"));
pos.left=parseInt(_3c0.css("left"));
pos.width=_3c0.outerWidth();
pos.height=_3c1.height();
}else{
if(dir=="east"){
pos.top=parseInt(_3c0.css("top"))||0;
pos.left=parseInt(_3c0.css("left"))||0;
pos.width=_3c1.width();
pos.height=_3c0.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_3c0.css("top"))||0;
pos.left=_3c0.outerWidth()-_3c1.width();
pos.width=_3c1.width();
pos.height=_3c0.outerHeight();
}
}
}
}
_3c1.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _3c4=$(">div.layout-split-proxy-v",_3b9);
_3c4.css("top",e.pageY-$(_3b9).offset().top-_3c4.height()/2);
}else{
var _3c4=$(">div.layout-split-proxy-h",_3b9);
_3c4.css("left",e.pageX-$(_3b9).offset().left-_3c4.width()/2);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_3a9(_3b9);
_3a8=false;
cc.find(">div.layout-mask").remove();
}},_3ba));
cc.layout("options").onAdd.call(_3b9,dir);
};
function _3c5(_3c6,_3c7){
var _3c8=$.data(_3c6,"layout").panels;
if(_3c8[_3c7].length){
_3c8[_3c7].panel("destroy");
_3c8[_3c7]=$();
var _3c9="expand"+_3c7.substring(0,1).toUpperCase()+_3c7.substring(1);
if(_3c8[_3c9]){
_3c8[_3c9].panel("destroy");
_3c8[_3c9]=undefined;
}
$(_3c6).layout("options").onRemove.call(_3c6,_3c7);
}
};
function _3ca(_3cb,_3cc,_3cd){
if(_3cd==undefined){
_3cd="normal";
}
var _3ce=$.data(_3cb,"layout").panels;
var p=_3ce[_3cc];
var _3cf=p.panel("options");
if(_3cf.onBeforeCollapse.call(p)==false){
return;
}
var _3d0="expand"+_3cc.substring(0,1).toUpperCase()+_3cc.substring(1);
if(!_3ce[_3d0]){
_3ce[_3d0]=_3d1(_3cc);
var ep=_3ce[_3d0].panel("panel");
if(!_3cf.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3cf.expandMode=="dock"){
_3dc(_3cb,_3cc);
}else{
p.panel("expand",false).panel("open");
var _3d2=_3d3();
p.panel("resize",_3d2.collapse);
p.panel("panel").animate(_3d2.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3cc},function(e){
if(_3a8==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_3ca(_3cb,e.data.region);
});
$(_3cb).layout("options").onExpand.call(_3cb,_3cc);
});
}
return false;
});
}
}
var _3d4=_3d3();
if(!_3af(_3ce[_3d0])){
_3ce.center.panel("resize",_3d4.resizeC);
}
p.panel("panel").animate(_3d4.collapse,_3cd,function(){
p.panel("collapse",false).panel("close");
_3ce[_3d0].panel("open").panel("resize",_3d4.expandP);
$(this).unbind(".layout");
$(_3cb).layout("options").onCollapse.call(_3cb,_3cc);
});
function _3d1(dir){
var _3d5={"east":"left","west":"right","north":"down","south":"up"};
var isns=(_3cf.region=="north"||_3cf.region=="south");
var icon="layout-button-"+_3d5[dir];
var p=$("<div></div>").appendTo(_3cb);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",iconCls:(_3cf.hideCollapsedContent?null:_3cf.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3cf.region,collapsedSize:_3cf.collapsedSize,noheader:(!isns&&_3cf.hideExpandTool),tools:((isns&&_3cf.hideExpandTool)?null:[{iconCls:icon,handler:function(){
_3dc(_3cb,_3cc);
return false;
}}])}));
if(!_3cf.hideCollapsedContent){
var _3d6=typeof _3cf.collapsedContent=="function"?_3cf.collapsedContent.call(p[0],_3cf.title):_3cf.collapsedContent;
isns?p.panel("setTitle",_3d6):p.html(_3d6);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _3d3(){
var cc=$(_3cb);
var _3d7=_3ce.center.panel("options");
var _3d8=_3cf.collapsedSize;
if(_3cc=="east"){
var _3d9=p.panel("panel")._outerWidth();
var _3da=_3d7.width+_3d9-_3d8;
if(_3cf.split||!_3cf.border){
_3da++;
}
return {resizeC:{width:_3da},expand:{left:cc.width()-_3d9},expandP:{top:_3d7.top,left:cc.width()-_3d8,width:_3d8,height:_3d7.height},collapse:{left:cc.width(),top:_3d7.top,height:_3d7.height}};
}else{
if(_3cc=="west"){
var _3d9=p.panel("panel")._outerWidth();
var _3da=_3d7.width+_3d9-_3d8;
if(_3cf.split||!_3cf.border){
_3da++;
}
return {resizeC:{width:_3da,left:_3d8-1},expand:{left:0},expandP:{left:0,top:_3d7.top,width:_3d8,height:_3d7.height},collapse:{left:-_3d9,top:_3d7.top,height:_3d7.height}};
}else{
if(_3cc=="north"){
var _3db=p.panel("panel")._outerHeight();
var hh=_3d7.height;
if(!_3af(_3ce.expandNorth)){
hh+=_3db-_3d8+((_3cf.split||!_3cf.border)?1:0);
}
_3ce.east.add(_3ce.west).add(_3ce.expandEast).add(_3ce.expandWest).panel("resize",{top:_3d8-1,height:hh});
return {resizeC:{top:_3d8-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_3d8},collapse:{top:-_3db,width:cc.width()}};
}else{
if(_3cc=="south"){
var _3db=p.panel("panel")._outerHeight();
var hh=_3d7.height;
if(!_3af(_3ce.expandSouth)){
hh+=_3db-_3d8+((_3cf.split||!_3cf.border)?1:0);
}
_3ce.east.add(_3ce.west).add(_3ce.expandEast).add(_3ce.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_3db},expandP:{top:cc.height()-_3d8,left:0,width:cc.width(),height:_3d8},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _3dc(_3dd,_3de){
var _3df=$.data(_3dd,"layout").panels;
var p=_3df[_3de];
var _3e0=p.panel("options");
if(_3e0.onBeforeExpand.call(p)==false){
return;
}
var _3e1="expand"+_3de.substring(0,1).toUpperCase()+_3de.substring(1);
if(_3df[_3e1]){
_3df[_3e1].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _3e2=_3e3();
p.panel("resize",_3e2.collapse);
p.panel("panel").animate(_3e2.expand,function(){
_3a9(_3dd);
$(_3dd).layout("options").onExpand.call(_3dd,_3de);
});
}
function _3e3(){
var cc=$(_3dd);
var _3e4=_3df.center.panel("options");
if(_3de=="east"&&_3df.expandEast){
return {collapse:{left:cc.width(),top:_3e4.top,height:_3e4.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_3de=="west"&&_3df.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_3e4.top,height:_3e4.height},expand:{left:0}};
}else{
if(_3de=="north"&&_3df.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_3de=="south"&&_3df.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _3af(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _3e5(_3e6){
var _3e7=$.data(_3e6,"layout");
var opts=_3e7.options;
var _3e8=_3e7.panels;
var _3e9=opts.onCollapse;
opts.onCollapse=function(){
};
_3ea("east");
_3ea("west");
_3ea("north");
_3ea("south");
opts.onCollapse=_3e9;
function _3ea(_3eb){
var p=_3e8[_3eb];
if(p.length&&p.panel("options").collapsed){
_3ca(_3e6,_3eb,0);
}
};
};
function _3ec(_3ed,_3ee,_3ef){
var p=$(_3ed).layout("panel",_3ee);
p.panel("options").split=_3ef;
var cls="layout-split-"+_3ee;
var _3f0=p.panel("panel").removeClass(cls);
if(_3ef){
_3f0.addClass(cls);
}
_3f0.resizable({disabled:(!_3ef)});
_3a9(_3ed);
};
$.fn.layout=function(_3f1,_3f2){
if(typeof _3f1=="string"){
return $.fn.layout.methods[_3f1](this,_3f2);
}
_3f1=_3f1||{};
return this.each(function(){
var _3f3=$.data(this,"layout");
if(_3f3){
$.extend(_3f3.options,_3f1);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_3f1);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
}
_3a9(this);
_3e5(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_3f4){
return jq.each(function(){
_3a9(this,_3f4);
});
},panel:function(jq,_3f5){
return $.data(jq[0],"layout").panels[_3f5];
},collapse:function(jq,_3f6){
return jq.each(function(){
_3ca(this,_3f6);
});
},expand:function(jq,_3f7){
return jq.each(function(){
_3dc(this,_3f7);
});
},add:function(jq,_3f8){
return jq.each(function(){
_3b8(this,_3f8);
_3a9(this);
if($(this).layout("panel",_3f8.region).panel("options").collapsed){
_3ca(this,_3f8.region,0);
}
});
},remove:function(jq,_3f9){
return jq.each(function(){
_3c5(this,_3f9);
_3a9(this);
});
},split:function(jq,_3fa){
return jq.each(function(){
_3ec(this,_3fa,true);
});
},unsplit:function(jq,_3fb){
return jq.each(function(){
_3ec(this,_3fb,false);
});
}};
$.fn.layout.parseOptions=function(_3fc){
return $.extend({},$.parser.parseOptions(_3fc,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_3fd){
},onCollapse:function(_3fe){
},onAdd:function(_3ff){
},onRemove:function(_400){
}};
$.fn.layout.parsePanelOptions=function(_401){
var t=$(_401);
return $.extend({},$.fn.panel.parseOptions(_401),$.parser.parseOptions(_401,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_402){
var p=$(this);
var opts=p.panel("options");
if(opts.region=="north"||opts.region=="south"){
return _402;
}
var size=opts.collapsedSize-2;
var left=(size-16)/2;
left=size-left;
var cc=[];
if(opts.iconCls){
cc.push("<div class=\"panel-icon "+opts.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(opts.iconCls?" layout-expand-with-icon":"");
cc.push("\" style=\"left:"+left+"px\">");
cc.push(_402);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var m=$(e.target).closest("div.menu,div.combo-p");
if(m.length){
return;
}
$("body>div.menu-top:visible").not(".menu-inline").menu("hide");
_403($("body>div.menu:visible").not(".menu-inline"));
});
});
function init(_404){
var opts=$.data(_404,"menu").options;
$(_404).addClass("menu-top");
opts.inline?$(_404).addClass("menu-inline"):$(_404).appendTo("body");
$(_404).bind("_resize",function(e,_405){
if($(this).hasClass("easyui-fluid")||_405){
$(_404).menu("resize",_404);
}
return false;
});
var _406=_407($(_404));
for(var i=0;i<_406.length;i++){
_40a(_404,_406[i]);
}
function _407(menu){
var _408=[];
menu.addClass("menu");
_408.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _409=$(this).children("div");
if(_409.length){
_409.appendTo("body");
this.submenu=_409;
var mm=_407(_409);
_408=_408.concat(mm);
}
});
}
return _408;
};
};
function _40a(_40b,div){
var menu=$(div).addClass("menu");
if(!menu.data("menu")){
menu.data("menu",{options:$.parser.parseOptions(menu[0],["width","height"])});
}
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
_40c(_40b,this);
});
$("<div class=\"menu-line\"></div>").prependTo(menu);
}
_40d(_40b,menu);
if(!menu.hasClass("menu-inline")){
menu.hide();
}
_40e(_40b,menu);
};
function _40c(_40f,div,_410){
var item=$(div);
var _411=$.extend({},$.parser.parseOptions(item[0],["id","name","iconCls","href",{separator:"boolean"}]),{disabled:(item.attr("disabled")?true:undefined),text:$.trim(item.html()),onclick:item[0].onclick},_410||{});
_411.onclick=_411.onclick||_411.handler||null;
item.data("menuitem",{options:_411});
if(_411.separator){
item.addClass("menu-sep");
}
if(!item.hasClass("menu-sep")){
item.addClass("menu-item");
item.empty().append($("<div class=\"menu-text\"></div>").html(_411.text));
if(_411.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_411.iconCls).appendTo(item);
}
if(_411.id){
item.attr("id",_411.id);
}
if(_411.onclick){
if(typeof _411.onclick=="string"){
item.attr("onclick",_411.onclick);
}else{
item[0].onclick=eval(_411.onclick);
}
}
if(_411.disabled){
_412(_40f,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
}
};
function _40d(_413,menu){
var opts=$.data(_413,"menu").options;
var _414=menu.attr("style")||"";
var _415=menu.is(":visible");
menu.css({display:"block",left:-10000,height:"auto",overflow:"hidden"});
menu.find(".menu-item").each(function(){
$(this)._outerHeight(opts.itemHeight);
$(this).find(".menu-text").css({height:(opts.itemHeight-2)+"px",lineHeight:(opts.itemHeight-2)+"px"});
});
menu.removeClass("menu-noline").addClass(opts.noline?"menu-noline":"");
var _416=menu.data("menu").options;
var _417=_416.width;
var _418=_416.height;
if(isNaN(parseInt(_417))){
_417=0;
menu.find("div.menu-text").each(function(){
if(_417<$(this).outerWidth()){
_417=$(this).outerWidth();
}
});
_417=_417?_417+40:"";
}
var _419=menu.outerHeight();
if(isNaN(parseInt(_418))){
_418=_419;
if(menu.hasClass("menu-top")&&opts.alignTo){
var at=$(opts.alignTo);
var h1=at.offset().top-$(document).scrollTop();
var h2=$(window)._outerHeight()+$(document).scrollTop()-at.offset().top-at._outerHeight();
_418=Math.min(_418,Math.max(h1,h2));
}else{
if(_418>$(window)._outerHeight()){
_418=$(window).height();
}
}
}
menu.attr("style",_414);
menu.show();
menu._size($.extend({},_416,{width:_417,height:_418,minWidth:_416.minWidth||opts.minWidth,maxWidth:_416.maxWidth||opts.maxWidth}));
menu.find(".easyui-fluid").triggerHandler("_resize",[true]);
menu.css("overflow",menu.outerHeight()<_419?"auto":"hidden");
menu.children("div.menu-line")._outerHeight(_419-2);
if(!_415){
menu.hide();
}
};
function _40e(_41a,menu){
var _41b=$.data(_41a,"menu");
var opts=_41b.options;
menu.unbind(".menu");
for(var _41c in opts.events){
menu.bind(_41c+".menu",{target:_41a},opts.events[_41c]);
}
};
function _41d(e){
var _41e=e.data.target;
var _41f=$.data(_41e,"menu");
if(_41f.timer){
clearTimeout(_41f.timer);
_41f.timer=null;
}
};
function _420(e){
var _421=e.data.target;
var _422=$.data(_421,"menu");
if(_422.options.hideOnUnhover){
_422.timer=setTimeout(function(){
_423(_421,$(_421).hasClass("menu-inline"));
},_422.options.duration);
}
};
function _424(e){
var _425=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
item.siblings().each(function(){
if(this.submenu){
_403(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if(item.hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _426=item[0].submenu;
if(_426){
$(_425).menu("show",{menu:_426,parent:item});
}
}
};
function _427(e){
var item=$(e.target).closest(".menu-item");
if(item.length){
item.removeClass("menu-active menu-active-disabled");
var _428=item[0].submenu;
if(_428){
if(e.pageX>=parseInt(_428.css("left"))){
item.addClass("menu-active");
}else{
_403(_428);
}
}else{
item.removeClass("menu-active");
}
}
};
function _429(e){
var _42a=e.data.target;
var item=$(e.target).closest(".menu-item");
if(item.length){
var opts=$(_42a).data("menu").options;
var _42b=item.data("menuitem").options;
if(_42b.disabled){
return;
}
if(!item[0].submenu){
_423(_42a,opts.inline);
if(_42b.href){
location.href=_42b.href;
}
}
item.trigger("mouseenter");
opts.onClick.call(_42a,$(_42a).menu("getItem",item[0]));
}
};
function _423(_42c,_42d){
var _42e=$.data(_42c,"menu");
if(_42e){
if($(_42c).is(":visible")){
_403($(_42c));
if(_42d){
$(_42c).show();
}else{
_42e.options.onHide.call(_42c);
}
}
}
return false;
};
function _42f(_430,_431){
_431=_431||{};
var left,top;
var opts=$.data(_430,"menu").options;
var menu=$(_431.menu||_430);
$(_430).menu("resize",menu[0]);
if(menu.hasClass("menu-top")){
$.extend(opts,_431);
left=opts.left;
top=opts.top;
if(opts.alignTo){
var at=$(opts.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
if(opts.align=="right"){
left+=at.outerWidth()-menu.outerWidth();
}
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(left<0){
left=0;
}
top=_432(top,opts.alignTo);
}else{
var _433=_431.parent;
left=_433.offset().left+_433.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_433.offset().left-menu.outerWidth()+2;
}
top=_432(_433.offset().top-3);
}
function _432(top,_434){
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
if(_434){
top=$(_434).offset().top-menu._outerHeight();
}else{
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight();
}
}
if(top<0){
top=0;
}
return top;
};
menu.css(opts.position.call(_430,menu[0],left,top));
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:(menu.hasClass("menu-inline")?"none":"block"),zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
opts.onShow.call(_430);
}
});
};
function _403(menu){
if(menu&&menu.length){
_435(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_403(this.submenu);
}
$(this).removeClass("menu-active");
});
}
function _435(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _436(_437,text){
var _438=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_437).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_438=item;
}else{
if(this.submenu&&!_438){
find(this.submenu);
}
}
});
};
find($(_437));
tmp.remove();
return _438;
};
function _412(_439,_43a,_43b){
var t=$(_43a);
if(t.hasClass("menu-item")){
var opts=t.data("menuitem").options;
opts.disabled=_43b;
if(_43b){
t.addClass("menu-item-disabled");
t[0].onclick=null;
}else{
t.removeClass("menu-item-disabled");
t[0].onclick=opts.onclick;
}
}
};
function _43c(_43d,_43e){
var opts=$.data(_43d,"menu").options;
var menu=$(_43d);
if(_43e.parent){
if(!_43e.parent.submenu){
var _43f=$("<div></div>").appendTo("body");
_43e.parent.submenu=_43f;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_43e.parent);
_40a(_43d,_43f);
}
menu=_43e.parent.submenu;
}
var div=$("<div></div>").appendTo(menu);
_40c(_43d,div,_43e);
};
function _440(_441,_442){
function _443(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_443(this);
});
var _444=el.submenu[0].shadow;
if(_444){
_444.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_443(_442);
};
function _445(_446,_447,_448){
var menu=$(_447).parent();
if(_448){
$(_447).show();
}else{
$(_447).hide();
}
_40d(_446,menu);
};
function _449(_44a){
$(_44a).children("div.menu-item").each(function(){
_440(_44a,this);
});
if(_44a.shadow){
_44a.shadow.remove();
}
$(_44a).remove();
};
$.fn.menu=function(_44b,_44c){
if(typeof _44b=="string"){
return $.fn.menu.methods[_44b](this,_44c);
}
_44b=_44b||{};
return this.each(function(){
var _44d=$.data(this,"menu");
if(_44d){
$.extend(_44d.options,_44b);
}else{
_44d=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_44b)});
init(this);
}
$(this).css({left:_44d.options.left,top:_44d.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_42f(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_423(this);
});
},destroy:function(jq){
return jq.each(function(){
_449(this);
});
},setText:function(jq,_44e){
return jq.each(function(){
var item=$(_44e.target).data("menuitem").options;
item.text=_44e.text;
$(_44e.target).children("div.menu-text").html(_44e.text);
});
},setIcon:function(jq,_44f){
return jq.each(function(){
var item=$(_44f.target).data("menuitem").options;
item.iconCls=_44f.iconCls;
$(_44f.target).children("div.menu-icon").remove();
if(_44f.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_44f.iconCls).appendTo(_44f.target);
}
});
},getItem:function(jq,_450){
var item=$(_450).data("menuitem").options;
return $.extend({},item,{target:$(_450)[0]});
},findItem:function(jq,text){
return _436(jq[0],text);
},appendItem:function(jq,_451){
return jq.each(function(){
_43c(this,_451);
});
},removeItem:function(jq,_452){
return jq.each(function(){
_440(this,_452);
});
},enableItem:function(jq,_453){
return jq.each(function(){
_412(this,_453,false);
});
},disableItem:function(jq,_454){
return jq.each(function(){
_412(this,_454,true);
});
},showItem:function(jq,_455){
return jq.each(function(){
_445(this,_455,true);
});
},hideItem:function(jq,_456){
return jq.each(function(){
_445(this,_456,false);
});
},resize:function(jq,_457){
return jq.each(function(){
_40d(this,_457?$(_457):$(this));
});
}};
$.fn.menu.parseOptions=function(_458){
return $.extend({},$.parser.parseOptions(_458,[{minWidth:"number",itemHeight:"number",duration:"number",hideOnUnhover:"boolean"},{fit:"boolean",inline:"boolean",noline:"boolean"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,alignTo:null,align:"left",minWidth:120,itemHeight:22,duration:100,hideOnUnhover:true,inline:false,fit:false,noline:false,events:{mouseenter:_41d,mouseleave:_420,mouseover:_424,mouseout:_427,click:_429},position:function(_459,left,top){
return {left:left,top:top};
},onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_45a){
var opts=$.data(_45a,"menubutton").options;
var btn=$(_45a);
btn.linkbutton(opts);
if(opts.hasDownArrow){
btn.removeClass(opts.cls.btn1+" "+opts.cls.btn2).addClass("m-btn");
btn.removeClass("m-btn-small m-btn-medium m-btn-large").addClass("m-btn-"+opts.size);
var _45b=btn.find(".l-btn-left");
$("<span></span>").addClass(opts.cls.arrow).appendTo(_45b);
$("<span></span>").addClass("m-btn-line").appendTo(_45b);
}
$(_45a).menubutton("resize");
if(opts.menu){
$(opts.menu).menu({duration:opts.duration});
var _45c=$(opts.menu).menu("options");
var _45d=_45c.onShow;
var _45e=_45c.onHide;
$.extend(_45c,{onShow:function(){
var _45f=$(this).menu("options");
var btn=$(_45f.alignTo);
var opts=btn.menubutton("options");
btn.addClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_45d.call(this);
},onHide:function(){
var _460=$(this).menu("options");
var btn=$(_460.alignTo);
var opts=btn.menubutton("options");
btn.removeClass((opts.plain==true)?opts.cls.btn2:opts.cls.btn1);
_45e.call(this);
}});
}
};
function _461(_462){
var opts=$.data(_462,"menubutton").options;
var btn=$(_462);
var t=btn.find("."+opts.cls.trigger);
if(!t.length){
t=btn;
}
t.unbind(".menubutton");
var _463=null;
t.bind("click.menubutton",function(){
if(!_464()){
_465(_462);
return false;
}
}).bind("mouseenter.menubutton",function(){
if(!_464()){
_463=setTimeout(function(){
_465(_462);
},opts.duration);
return false;
}
}).bind("mouseleave.menubutton",function(){
if(_463){
clearTimeout(_463);
}
$(opts.menu).triggerHandler("mouseleave");
});
function _464(){
return $(_462).linkbutton("options").disabled;
};
};
function _465(_466){
var opts=$(_466).menubutton("options");
if(opts.disabled||!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
var btn=$(_466);
var mm=$(opts.menu);
if(mm.length){
mm.menu("options").alignTo=btn;
mm.menu("show",{alignTo:btn,align:opts.menuAlign});
}
btn.blur();
};
$.fn.menubutton=function(_467,_468){
if(typeof _467=="string"){
var _469=$.fn.menubutton.methods[_467];
if(_469){
return _469(this,_468);
}else{
return this.linkbutton(_467,_468);
}
}
_467=_467||{};
return this.each(function(){
var _46a=$.data(this,"menubutton");
if(_46a){
$.extend(_46a.options,_467);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_467)});
$(this).removeAttr("disabled");
}
init(this);
_461(this);
});
};
$.fn.menubutton.methods={options:function(jq){
var _46b=jq.linkbutton("options");
return $.extend($.data(jq[0],"menubutton").options,{toggle:_46b.toggle,selected:_46b.selected,disabled:_46b.disabled});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_46c){
var t=$(_46c);
return $.extend({},$.fn.linkbutton.parseOptions(_46c),$.parser.parseOptions(_46c,["menu",{plain:"boolean",hasDownArrow:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,hasDownArrow:true,menu:null,menuAlign:"left",duration:100,cls:{btn1:"m-btn-active",btn2:"m-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn"}});
})(jQuery);
(function($){
function init(_46d){
var opts=$.data(_46d,"splitbutton").options;
$(_46d).menubutton(opts);
$(_46d).addClass("s-btn");
};
$.fn.splitbutton=function(_46e,_46f){
if(typeof _46e=="string"){
var _470=$.fn.splitbutton.methods[_46e];
if(_470){
return _470(this,_46f);
}else{
return this.menubutton(_46e,_46f);
}
}
_46e=_46e||{};
return this.each(function(){
var _471=$.data(this,"splitbutton");
if(_471){
$.extend(_471.options,_46e);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_46e)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
var _472=jq.menubutton("options");
var _473=$.data(jq[0],"splitbutton").options;
$.extend(_473,{disabled:_472.disabled,toggle:_472.toggle,selected:_472.selected});
return _473;
}};
$.fn.splitbutton.parseOptions=function(_474){
var t=$(_474);
return $.extend({},$.fn.linkbutton.parseOptions(_474),$.parser.parseOptions(_474,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100,cls:{btn1:"m-btn-active s-btn-active",btn2:"m-btn-plain-active s-btn-plain-active",arrow:"m-btn-downarrow",trigger:"m-btn-line"}});
})(jQuery);
(function($){
function init(_475){
var _476=$("<span class=\"switchbutton\">"+"<span class=\"switchbutton-inner\">"+"<span class=\"switchbutton-on\"></span>"+"<span class=\"switchbutton-handle\"></span>"+"<span class=\"switchbutton-off\"></span>"+"<input class=\"switchbutton-value\" type=\"checkbox\">"+"</span>"+"</span>").insertAfter(_475);
var t=$(_475);
t.addClass("switchbutton-f").hide();
var name=t.attr("name");
if(name){
t.removeAttr("name").attr("switchbuttonName",name);
_476.find(".switchbutton-value").attr("name",name);
}
_476.bind("_resize",function(e,_477){
if($(this).hasClass("easyui-fluid")||_477){
_478(_475);
}
return false;
});
return _476;
};
function _478(_479,_47a){
var _47b=$.data(_479,"switchbutton");
var opts=_47b.options;
var _47c=_47b.switchbutton;
if(_47a){
$.extend(opts,_47a);
}
var _47d=_47c.is(":visible");
if(!_47d){
_47c.appendTo("body");
}
_47c._size(opts);
var w=_47c.width();
var h=_47c.height();
var w=_47c.outerWidth();
var h=_47c.outerHeight();
var _47e=parseInt(opts.handleWidth)||_47c.height();
var _47f=w*2-_47e;
_47c.find(".switchbutton-inner").css({width:_47f+"px",height:h+"px",lineHeight:h+"px"});
_47c.find(".switchbutton-handle")._outerWidth(_47e)._outerHeight(h).css({marginLeft:-_47e/2+"px"});
_47c.find(".switchbutton-on").css({width:(w-_47e/2)+"px",textIndent:(opts.reversed?"":"-")+_47e/2+"px"});
_47c.find(".switchbutton-off").css({width:(w-_47e/2)+"px",textIndent:(opts.reversed?"-":"")+_47e/2+"px"});
opts.marginWidth=w-_47e;
_480(_479,opts.checked,false);
if(!_47d){
_47c.insertAfter(_479);
}
};
function _481(_482){
var _483=$.data(_482,"switchbutton");
var opts=_483.options;
var _484=_483.switchbutton;
var _485=_484.find(".switchbutton-inner");
var on=_485.find(".switchbutton-on").html(opts.onText);
var off=_485.find(".switchbutton-off").html(opts.offText);
var _486=_485.find(".switchbutton-handle").html(opts.handleText);
if(opts.reversed){
off.prependTo(_485);
on.insertAfter(_486);
}else{
on.prependTo(_485);
off.insertAfter(_486);
}
_484.find(".switchbutton-value")._propAttr("checked",opts.checked);
_484.removeClass("switchbutton-disabled").addClass(opts.disabled?"switchbutton-disabled":"");
_484.removeClass("switchbutton-reversed").addClass(opts.reversed?"switchbutton-reversed":"");
_480(_482,opts.checked);
_487(_482,opts.readonly);
$(_482).switchbutton("setValue",opts.value);
};
function _480(_488,_489,_48a){
var _48b=$.data(_488,"switchbutton");
var opts=_48b.options;
opts.checked=_489;
var _48c=_48b.switchbutton.find(".switchbutton-inner");
var _48d=_48c.find(".switchbutton-on");
var _48e=opts.reversed?(opts.checked?opts.marginWidth:0):(opts.checked?0:opts.marginWidth);
var dir=_48d.css("float").toLowerCase();
var css={};
css["margin-"+dir]=-_48e+"px";
_48a?_48c.animate(css,200):_48c.css(css);
var _48f=_48c.find(".switchbutton-value");
var ck=_48f.is(":checked");
$(_488).add(_48f)._propAttr("checked",opts.checked);
if(ck!=opts.checked){
opts.onChange.call(_488,opts.checked);
}
};
function _490(_491,_492){
var _493=$.data(_491,"switchbutton");
var opts=_493.options;
var _494=_493.switchbutton;
var _495=_494.find(".switchbutton-value");
if(_492){
opts.disabled=true;
$(_491).add(_495).attr("disabled","disabled");
_494.addClass("switchbutton-disabled");
}else{
opts.disabled=false;
$(_491).add(_495).removeAttr("disabled");
_494.removeClass("switchbutton-disabled");
}
};
function _487(_496,mode){
var _497=$.data(_496,"switchbutton");
var opts=_497.options;
opts.readonly=mode==undefined?true:mode;
_497.switchbutton.removeClass("switchbutton-readonly").addClass(opts.readonly?"switchbutton-readonly":"");
};
function _498(_499){
var _49a=$.data(_499,"switchbutton");
var opts=_49a.options;
_49a.switchbutton.unbind(".switchbutton").bind("click.switchbutton",function(){
if(!opts.disabled&&!opts.readonly){
_480(_499,opts.checked?false:true,true);
}
});
};
$.fn.switchbutton=function(_49b,_49c){
if(typeof _49b=="string"){
return $.fn.switchbutton.methods[_49b](this,_49c);
}
_49b=_49b||{};
return this.each(function(){
var _49d=$.data(this,"switchbutton");
if(_49d){
$.extend(_49d.options,_49b);
}else{
_49d=$.data(this,"switchbutton",{options:$.extend({},$.fn.switchbutton.defaults,$.fn.switchbutton.parseOptions(this),_49b),switchbutton:init(this)});
}
_49d.options.originalChecked=_49d.options.checked;
_481(this);
_478(this);
_498(this);
});
};
$.fn.switchbutton.methods={options:function(jq){
var _49e=jq.data("switchbutton");
return $.extend(_49e.options,{value:_49e.switchbutton.find(".switchbutton-value").val()});
},resize:function(jq,_49f){
return jq.each(function(){
_478(this,_49f);
});
},enable:function(jq){
return jq.each(function(){
_490(this,false);
});
},disable:function(jq){
return jq.each(function(){
_490(this,true);
});
},readonly:function(jq,mode){
return jq.each(function(){
_487(this,mode);
});
},check:function(jq){
return jq.each(function(){
_480(this,true);
});
},uncheck:function(jq){
return jq.each(function(){
_480(this,false);
});
},clear:function(jq){
return jq.each(function(){
_480(this,false);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).switchbutton("options");
_480(this,opts.originalChecked);
});
},setValue:function(jq,_4a0){
return jq.each(function(){
$(this).val(_4a0);
$.data(this,"switchbutton").switchbutton.find(".switchbutton-value").val(_4a0);
});
}};
$.fn.switchbutton.parseOptions=function(_4a1){
var t=$(_4a1);
return $.extend({},$.parser.parseOptions(_4a1,["onText","offText","handleText",{handleWidth:"number",reversed:"boolean"}]),{value:(t.val()||undefined),checked:(t.attr("checked")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined)});
};
$.fn.switchbutton.defaults={handleWidth:"auto",width:60,height:26,checked:false,disabled:false,readonly:false,reversed:false,onText:"ON",offText:"OFF",handleText:"",value:"on",onChange:function(_4a2){
}};
})(jQuery);
(function($){
function init(_4a3){
$(_4a3).addClass("validatebox-text");
};
function _4a4(_4a5){
var _4a6=$.data(_4a5,"validatebox");
_4a6.validating=false;
if(_4a6.timer){
clearTimeout(_4a6.timer);
}
$(_4a5).tooltip("destroy");
$(_4a5).unbind();
$(_4a5).remove();
};
function _4a7(_4a8){
var opts=$.data(_4a8,"validatebox").options;
$(_4a8).unbind(".validatebox");
if(opts.novalidate||opts.disabled){
return;
}
for(var _4a9 in opts.events){
$(_4a8).bind(_4a9+".validatebox",{target:_4a8},opts.events[_4a9]);
}
};
function _4aa(e){
var _4ab=e.data.target;
var _4ac=$.data(_4ab,"validatebox");
var opts=_4ac.options;
if($(_4ab).attr("readonly")){
return;
}
_4ac.validating=true;
_4ac.value=opts.val(_4ab);
(function(){
if(!$(_4ab).is(":visible")){
_4ac.validating=false;
}
if(_4ac.validating){
var _4ad=opts.val(_4ab);
if(_4ac.value!=_4ad){
_4ac.value=_4ad;
if(_4ac.timer){
clearTimeout(_4ac.timer);
}
_4ac.timer=setTimeout(function(){
$(_4ab).validatebox("validate");
},opts.delay);
}else{
if(_4ac.message){
opts.err(_4ab,_4ac.message);
}
}
setTimeout(arguments.callee,opts.interval);
}
})();
};
function _4ae(e){
var _4af=e.data.target;
var _4b0=$.data(_4af,"validatebox");
var opts=_4b0.options;
_4b0.validating=false;
if(_4b0.timer){
clearTimeout(_4b0.timer);
_4b0.timer=undefined;
}
if(opts.validateOnBlur){
$(_4af).validatebox("validate");
}
opts.err(_4af,_4b0.message,"hide");
};
function _4b1(e){
var _4b2=e.data.target;
var _4b3=$.data(_4b2,"validatebox");
_4b3.options.err(_4b2,_4b3.message,"show");
};
function _4b4(e){
var _4b5=e.data.target;
var _4b6=$.data(_4b5,"validatebox");
if(!_4b6.validating){
_4b6.options.err(_4b5,_4b6.message,"hide");
}
};
function _4b7(_4b8,_4b9,_4ba){
var _4bb=$.data(_4b8,"validatebox");
var opts=_4bb.options;
var t=$(_4b8);
if(_4ba=="hide"||!_4b9){
t.tooltip("hide");
}else{
if((t.is(":focus")&&_4bb.validating)||_4ba=="show"){
t.tooltip($.extend({},opts.tipOptions,{content:_4b9,position:opts.tipPosition,deltaX:opts.deltaX})).tooltip("show");
}
}
};
function _4bc(_4bd){
var _4be=$.data(_4bd,"validatebox");
var opts=_4be.options;
var box=$(_4bd);
opts.onBeforeValidate.call(_4bd);
var _4bf=_4c0();
_4bf?box.removeClass("validatebox-invalid"):box.addClass("validatebox-invalid");
opts.err(_4bd,_4be.message);
opts.onValidate.call(_4bd,_4bf);
return _4bf;
function _4c1(msg){
_4be.message=msg;
};
function _4c2(_4c3,_4c4){
var _4c5=opts.val(_4bd);
var _4c6=/([a-zA-Z_]+)(.*)/.exec(_4c3);
var rule=opts.rules[_4c6[1]];
if(rule&&_4c5){
var _4c7=_4c4||opts.validParams||eval(_4c6[2]);
if(!rule["validator"].call(_4bd,_4c5,_4c7)){
var _4c8=rule["message"];
if(_4c7){
for(var i=0;i<_4c7.length;i++){
_4c8=_4c8.replace(new RegExp("\\{"+i+"\\}","g"),_4c7[i]);
}
}
_4c1(opts.invalidMessage||_4c8);
return false;
}
}
return true;
};
function _4c0(){
_4c1("");
if(!opts._validateOnCreate){
setTimeout(function(){
opts._validateOnCreate=true;
},0);
return true;
}
if(opts.novalidate||opts.disabled){
return true;
}
if(opts.required){
if(opts.val(_4bd)==""){
_4c1(opts.missingMessage);
return false;
}
}
if(opts.validType){
if($.isArray(opts.validType)){
for(var i=0;i<opts.validType.length;i++){
if(!_4c2(opts.validType[i])){
return false;
}
}
}else{
if(typeof opts.validType=="string"){
if(!_4c2(opts.validType)){
return false;
}
}else{
for(var _4c9 in opts.validType){
var _4ca=opts.validType[_4c9];
if(!_4c2(_4c9,_4ca)){
return false;
}
}
}
}
}
return true;
};
};
function _4cb(_4cc,_4cd){
var opts=$.data(_4cc,"validatebox").options;
if(_4cd!=undefined){
opts.disabled=_4cd;
}
if(opts.disabled){
$(_4cc).addClass("validatebox-disabled").attr("disabled","disabled");
}else{
$(_4cc).removeClass("validatebox-disabled").removeAttr("disabled");
}
};
function _4ce(_4cf,mode){
var opts=$.data(_4cf,"validatebox").options;
opts.readonly=mode==undefined?true:mode;
if(opts.readonly||!opts.editable){
$(_4cf).triggerHandler("blur.validatebox");
$(_4cf).addClass("validatebox-readonly").attr("readonly","readonly");
}else{
$(_4cf).removeClass("validatebox-readonly").removeAttr("readonly");
}
};
$.fn.validatebox=function(_4d0,_4d1){
if(typeof _4d0=="string"){
return $.fn.validatebox.methods[_4d0](this,_4d1);
}
_4d0=_4d0||{};
return this.each(function(){
var _4d2=$.data(this,"validatebox");
if(_4d2){
$.extend(_4d2.options,_4d0);
}else{
init(this);
_4d2=$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_4d0)});
}
_4d2.options._validateOnCreate=_4d2.options.validateOnCreate;
_4cb(this,_4d2.options.disabled);
_4ce(this,_4d2.options.readonly);
_4a7(this);
_4bc(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_4a4(this);
});
},validate:function(jq){
return jq.each(function(){
_4bc(this);
});
},isValid:function(jq){
return _4bc(jq[0]);
},enableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=false;
_4a7(this);
_4bc(this);
});
},disableValidation:function(jq){
return jq.each(function(){
$(this).validatebox("options").novalidate=true;
_4a7(this);
_4bc(this);
});
},resetValidation:function(jq){
return jq.each(function(){
var opts=$(this).validatebox("options");
opts._validateOnCreate=opts.validateOnCreate;
_4bc(this);
});
},enable:function(jq){
return jq.each(function(){
_4cb(this,false);
_4a7(this);
_4bc(this);
});
},disable:function(jq){
return jq.each(function(){
_4cb(this,true);
_4a7(this);
_4bc(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4ce(this,mode);
_4a7(this);
_4bc(this);
});
}};
$.fn.validatebox.parseOptions=function(_4d3){
var t=$(_4d3);
return $.extend({},$.parser.parseOptions(_4d3,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",interval:"number",deltaX:"number"},{editable:"boolean",validateOnCreate:"boolean",validateOnBlur:"boolean"}]),{required:(t.attr("required")?true:undefined),disabled:(t.attr("disabled")?true:undefined),readonly:(t.attr("readonly")?true:undefined),novalidate:(t.attr("novalidate")!=undefined?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,validParams:null,delay:200,interval:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,novalidate:false,editable:true,disabled:false,readonly:false,validateOnCreate:true,validateOnBlur:false,events:{focus:_4aa,blur:_4ae,mouseenter:_4b1,mouseleave:_4b4,click:function(e){
var t=$(e.data.target);
if(t.attr("type")=="checkbox"||t.attr("type")=="radio"){
t.focus().validatebox("validate");
}
}},val:function(_4d4){
return $(_4d4).val();
},err:function(_4d5,_4d6,_4d7){
_4b7(_4d5,_4d6,_4d7);
},tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_4d8){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_4d8);
},message:"Please enter a valid email address."},url:{validator:function(_4d9){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_4d9);
},message:"Please enter a valid URL."},length:{validator:function(_4da,_4db){
var len=$.trim(_4da).length;
return len>=_4db[0]&&len<=_4db[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_4dc,_4dd){
var data={};
data[_4dd[1]]=_4dc;
var _4de=$.ajax({url:_4dd[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _4de=="true";
},message:"Please fix this field."}},onBeforeValidate:function(){
},onValidate:function(_4df){
}};
})(jQuery);
(function($){
var _4e0=0;
function init(_4e1){
$(_4e1).addClass("textbox-f").hide();
var span=$("<span class=\"textbox\">"+"<input class=\"textbox-text\" autocomplete=\"off\">"+"<input type=\"hidden\" class=\"textbox-value\">"+"</span>").insertAfter(_4e1);
var name=$(_4e1).attr("name");
if(name){
span.find("input.textbox-value").attr("name",name);
$(_4e1).removeAttr("name").attr("textboxName",name);
}
return span;
};
function _4e2(_4e3){
var _4e4=$.data(_4e3,"textbox");
var opts=_4e4.options;
var tb=_4e4.textbox;
var _4e5="_easyui_textbox_input"+(++_4e0);
tb.find(".textbox-text").remove();
if(opts.multiline){
$("<textarea id=\""+_4e5+"\" class=\"textbox-text\" autocomplete=\"off\"></textarea>").prependTo(tb);
}else{
$("<input id=\""+_4e5+"\" type=\""+opts.type+"\" class=\"textbox-text\" autocomplete=\"off\">").prependTo(tb);
}
$("#"+_4e5).attr("tabindex",$(_4e3).attr("tabindex")||"").css("text-align",$(_4e3).css("text-align"));
tb.find(".textbox-addon").remove();
var bb=opts.icons?$.extend(true,[],opts.icons):[];
if(opts.iconCls){
bb.push({iconCls:opts.iconCls,disabled:true});
}
if(bb.length){
var bc=$("<span class=\"textbox-addon\"></span>").prependTo(tb);
bc.addClass("textbox-addon-"+opts.iconAlign);
for(var i=0;i<bb.length;i++){
bc.append("<a href=\"javascript:void(0)\" class=\"textbox-icon "+bb[i].iconCls+"\" icon-index=\""+i+"\" tabindex=\"-1\"></a>");
}
}
tb.find(".textbox-button").remove();
if(opts.buttonText||opts.buttonIcon){
var btn=$("<a href=\"javascript:void(0)\" class=\"textbox-button\"></a>").prependTo(tb);
btn.addClass("textbox-button-"+opts.buttonAlign).linkbutton({text:opts.buttonText,iconCls:opts.buttonIcon,onClick:function(){
var t=$(this).parent().prev();
t.textbox("options").onClickButton.call(t[0]);
}});
}
if(opts.label){
if(typeof opts.label=="object"){
_4e4.label=$(opts.label);
_4e4.label.attr("for",_4e5);
}else{
$(_4e4.label).remove();
_4e4.label=$("<label class=\"textbox-label\"></label>").html(opts.label);
_4e4.label.css("textAlign",opts.labelAlign).attr("for",_4e5);
if(opts.labelPosition=="after"){
_4e4.label.insertAfter(tb);
}else{
_4e4.label.insertBefore(_4e3);
}
_4e4.label.removeClass("textbox-label-left textbox-label-right textbox-label-top");
_4e4.label.addClass("textbox-label-"+opts.labelPosition);
}
}else{
$(_4e4.label).remove();
}
_4e6(_4e3);
_4e7(_4e3,opts.disabled);
_4e8(_4e3,opts.readonly);
};
function _4e9(_4ea){
var tb=$.data(_4ea,"textbox").textbox;
tb.find(".textbox-text").validatebox("destroy");
tb.remove();
$(_4ea).remove();
};
function _4eb(_4ec,_4ed){
var _4ee=$.data(_4ec,"textbox");
var opts=_4ee.options;
var tb=_4ee.textbox;
var _4ef=tb.parent();
if(_4ed){
if(typeof _4ed=="object"){
$.extend(opts,_4ed);
}else{
opts.width=_4ed;
}
}
if(isNaN(parseInt(opts.width))){
var c=$(_4ec).clone();
c.css("visibility","hidden");
c.insertAfter(_4ec);
opts.width=c.outerWidth();
c.remove();
}
var _4f0=tb.is(":visible");
if(!_4f0){
tb.appendTo("body");
}
var _4f1=tb.find(".textbox-text");
var btn=tb.find(".textbox-button");
var _4f2=tb.find(".textbox-addon");
var _4f3=_4f2.find(".textbox-icon");
if(opts.height=="auto"){
_4f1.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""});
}
tb._size(opts,_4ef);
if(opts.label&&opts.labelPosition){
if(opts.labelPosition=="top"){
_4ee.label._size({width:opts.labelWidth=="auto"?tb.outerWidth():opts.labelWidth},tb);
if(opts.height!="auto"){
tb._size("height",tb.outerHeight()-_4ee.label.outerHeight());
}
}else{
_4ee.label._size({width:opts.labelWidth,height:tb.outerHeight()},tb);
if(!opts.multiline){
_4ee.label.css("lineHeight",_4ee.label.height()+"px");
}
tb._size("width",tb.outerWidth()-_4ee.label.outerWidth());
}
}
if(opts.buttonAlign=="left"||opts.buttonAlign=="right"){
btn.linkbutton("resize",{height:tb.height()});
}else{
btn.linkbutton("resize",{width:"100%"});
}
var _4f4=tb.width()-_4f3.length*opts.iconWidth-_4f5("left")-_4f5("right");
var _4f6=opts.height=="auto"?_4f1.outerHeight():(tb.height()-_4f5("top")-_4f5("bottom"));
_4f2.css(opts.iconAlign,_4f5(opts.iconAlign)+"px");
_4f2.css("top",_4f5("top")+"px");
_4f3.css({width:opts.iconWidth+"px",height:_4f6+"px"});
_4f1.css({paddingLeft:(_4ec.style.paddingLeft||""),paddingRight:(_4ec.style.paddingRight||""),marginLeft:_4f7("left"),marginRight:_4f7("right"),marginTop:_4f5("top"),marginBottom:_4f5("bottom")});
if(opts.multiline){
_4f1.css({paddingTop:(_4ec.style.paddingTop||""),paddingBottom:(_4ec.style.paddingBottom||"")});
_4f1._outerHeight(_4f6);
}else{
_4f1.css({paddingTop:0,paddingBottom:0,height:_4f6+"px",lineHeight:_4f6+"px"});
}
_4f1._outerWidth(_4f4);
if(!_4f0){
tb.insertAfter(_4ec);
}
opts.onResize.call(_4ec,opts.width,opts.height);
function _4f7(_4f8){
return (opts.iconAlign==_4f8?_4f2._outerWidth():0)+_4f5(_4f8);
};
function _4f5(_4f9){
var w=0;
btn.filter(".textbox-button-"+_4f9).each(function(){
if(_4f9=="left"||_4f9=="right"){
w+=$(this).outerWidth();
}else{
w+=$(this).outerHeight();
}
});
return w;
};
};
function _4e6(_4fa){
var opts=$(_4fa).textbox("options");
var _4fb=$(_4fa).textbox("textbox");
_4fb.validatebox($.extend({},opts,{deltaX:function(_4fc){
return $(_4fa).textbox("getTipX",_4fc);
},onBeforeValidate:function(){
opts.onBeforeValidate.call(_4fa);
var box=$(this);
if(!box.is(":focus")){
if(box.val()!==opts.value){
opts.oldInputValue=box.val();
box.val(opts.value);
}
}
},onValidate:function(_4fd){
var box=$(this);
if(opts.oldInputValue!=undefined){
box.val(opts.oldInputValue);
opts.oldInputValue=undefined;
}
var tb=box.parent();
if(_4fd){
tb.removeClass("textbox-invalid");
}else{
tb.addClass("textbox-invalid");
}
opts.onValidate.call(_4fa,_4fd);
}}));
};
function _4fe(_4ff){
var _500=$.data(_4ff,"textbox");
var opts=_500.options;
var tb=_500.textbox;
var _501=tb.find(".textbox-text");
_501.attr("placeholder",opts.prompt);
_501.unbind(".textbox");
$(_500.label).unbind(".textbox");
if(!opts.disabled&&!opts.readonly){
if(_500.label){
$(_500.label).bind("click.textbox",function(e){
if(!opts.hasFocusMe){
_501.focus();
$(_4ff).textbox("setSelectionRange",{start:0,end:_501.val().length});
}
});
}
_501.bind("blur.textbox",function(e){
if(!tb.hasClass("textbox-focused")){
return;
}
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt).addClass("textbox-prompt");
}else{
$(this).removeClass("textbox-prompt");
}
tb.removeClass("textbox-focused");
}).bind("focus.textbox",function(e){
opts.hasFocusMe=true;
if(tb.hasClass("textbox-focused")){
return;
}
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("textbox-prompt");
tb.addClass("textbox-focused");
});
for(var _502 in opts.inputEvents){
_501.bind(_502+".textbox",{target:_4ff},opts.inputEvents[_502]);
}
}
var _503=tb.find(".textbox-addon");
_503.unbind().bind("click",{target:_4ff},function(e){
var icon=$(e.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");
if(icon.length){
var _504=parseInt(icon.attr("icon-index"));
var conf=opts.icons[_504];
if(conf&&conf.handler){
conf.handler.call(icon[0],e);
}
opts.onClickIcon.call(_4ff,_504);
}
});
_503.find(".textbox-icon").each(function(_505){
var conf=opts.icons[_505];
var icon=$(this);
if(!conf||conf.disabled||opts.disabled||opts.readonly){
icon.addClass("textbox-icon-disabled");
}else{
icon.removeClass("textbox-icon-disabled");
}
});
var btn=tb.find(".textbox-button");
btn.linkbutton((opts.disabled||opts.readonly)?"disable":"enable");
tb.unbind(".textbox").bind("_resize.textbox",function(e,_506){
if($(this).hasClass("easyui-fluid")||_506){
_4eb(_4ff);
}
return false;
});
};
function _4e7(_507,_508){
var _509=$.data(_507,"textbox");
var opts=_509.options;
var tb=_509.textbox;
var _50a=tb.find(".textbox-text");
var ss=$(_507).add(tb.find(".textbox-value"));
opts.disabled=_508;
if(opts.disabled){
_50a.blur();
_50a.validatebox("disable");
tb.addClass("textbox-disabled");
ss.attr("disabled","disabled");
$(_509.label).addClass("textbox-label-disabled");
}else{
_50a.validatebox("enable");
tb.removeClass("textbox-disabled");
ss.removeAttr("disabled");
$(_509.label).removeClass("textbox-label-disabled");
}
};
function _4e8(_50b,mode){
var _50c=$.data(_50b,"textbox");
var opts=_50c.options;
var tb=_50c.textbox;
var _50d=tb.find(".textbox-text");
opts.readonly=mode==undefined?true:mode;
if(opts.readonly){
_50d.triggerHandler("blur.textbox");
}
_50d.validatebox("readonly",opts.readonly);
tb.removeClass("textbox-readonly").addClass(opts.readonly?"textbox-readonly":"");
};
$.fn.textbox=function(_50e,_50f){
if(typeof _50e=="string"){
var _510=$.fn.textbox.methods[_50e];
if(_510){
return _510(this,_50f);
}else{
return this.each(function(){
var _511=$(this).textbox("textbox");
_511.validatebox(_50e,_50f);
});
}
}
_50e=_50e||{};
return this.each(function(){
var _512=$.data(this,"textbox");
if(_512){
$.extend(_512.options,_50e);
if(_50e.value!=undefined){
_512.options.originalValue=_50e.value;
}
}else{
_512=$.data(this,"textbox",{options:$.extend({},$.fn.textbox.defaults,$.fn.textbox.parseOptions(this),_50e),textbox:init(this)});
_512.options.originalValue=_512.options.value;
}
_4e2(this);
_4fe(this);
if(_512.options.doSize){
_4eb(this);
}
var _513=_512.options.value;
_512.options.value="";
$(this).textbox("initValue",_513);
});
};
$.fn.textbox.methods={options:function(jq){
return $.data(jq[0],"textbox").options;
},cloneFrom:function(jq,from){
return jq.each(function(){
var t=$(this);
if(t.data("textbox")){
return;
}
if(!$(from).data("textbox")){
$(from).textbox();
}
var opts=$.extend(true,{},$(from).textbox("options"));
var name=t.attr("name")||"";
t.addClass("textbox-f").hide();
t.removeAttr("name").attr("textboxName",name);
var span=$(from).next().clone().insertAfter(t);
var _514="_easyui_textbox_input"+(++_4e0);
span.find(".textbox-value").attr("name",name);
span.find(".textbox-text").attr("id",_514);
var _515=$($(from).textbox("label")).clone();
if(_515.length){
_515.attr("for",_514);
if(opts.labelPosition=="after"){
_515.insertAfter(t.next());
}else{
_515.insertBefore(t);
}
}
$.data(this,"textbox",{options:opts,textbox:span,label:(_515.length?_515:undefined)});
var _516=$(from).textbox("button");
if(_516.length){
t.textbox("button").linkbutton($.extend(true,{},_516.linkbutton("options")));
}
_4fe(this);
_4e6(this);
});
},textbox:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-text");
},button:function(jq){
return $.data(jq[0],"textbox").textbox.find(".textbox-button");
},label:function(jq){
return $.data(jq[0],"textbox").label;
},destroy:function(jq){
return jq.each(function(){
_4e9(this);
});
},resize:function(jq,_517){
return jq.each(function(){
_4eb(this,_517);
});
},disable:function(jq){
return jq.each(function(){
_4e7(this,true);
_4fe(this);
});
},enable:function(jq){
return jq.each(function(){
_4e7(this,false);
_4fe(this);
});
},readonly:function(jq,mode){
return jq.each(function(){
_4e8(this,mode);
_4fe(this);
});
},isValid:function(jq){
return jq.textbox("textbox").validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setValue","");
});
},setText:function(jq,_518){
return jq.each(function(){
var opts=$(this).textbox("options");
var _519=$(this).textbox("textbox");
_518=_518==undefined?"":String(_518);
if($(this).textbox("getText")!=_518){
_519.val(_518);
}
opts.value=_518;
if(!_519.is(":focus")){
if(_518){
_519.removeClass("textbox-prompt");
}else{
_519.val(opts.prompt).addClass("textbox-prompt");
}
}
$(this).textbox("validate");
});
},initValue:function(jq,_51a){
return jq.each(function(){
var _51b=$.data(this,"textbox");
$(this).textbox("setText",_51a);
_51b.textbox.find(".textbox-value").val(_51a);
$(this).val(_51a);
});
},setValue:function(jq,_51c){
return jq.each(function(){
var opts=$.data(this,"textbox").options;
var _51d=$(this).textbox("getValue");
$(this).textbox("initValue",_51c);
if(_51d!=_51c){
opts.onChange.call(this,_51c,_51d);
$(this).closest("form").trigger("_change",[this]);
}
});
},getText:function(jq){
var _51e=jq.textbox("textbox");
if(_51e.is(":focus")){
return _51e.val();
}else{
return jq.textbox("options").value;
}
},getValue:function(jq){
return jq.data("textbox").textbox.find(".textbox-value").val();
},reset:function(jq){
return jq.each(function(){
var opts=$(this).textbox("options");
$(this).textbox("setValue",opts.originalValue);
});
},getIcon:function(jq,_51f){
return jq.data("textbox").textbox.find(".textbox-icon:eq("+_51f+")");
},getTipX:function(jq,_520){
var _521=jq.data("textbox");
var opts=_521.options;
var tb=_521.textbox;
var _522=tb.find(".textbox-text");
var _523=tb.find(".textbox-addon")._outerWidth();
var _524=tb.find(".textbox-button")._outerWidth();
var _520=_520||opts.tipPosition;
if(_520=="right"){
return (opts.iconAlign=="right"?_523:0)+(opts.buttonAlign=="right"?_524:0)+1;
}else{
if(_520=="left"){
return (opts.iconAlign=="left"?-_523:0)+(opts.buttonAlign=="left"?-_524:0)-1;
}else{
return _523/2*(opts.iconAlign=="right"?1:-1)+_524/2*(opts.buttonAlign=="right"?1:-1);
}
}
},getSelectionStart:function(jq){
return jq.textbox("getSelectionRange").start;
},getSelectionRange:function(jq){
var _525=jq.textbox("textbox")[0];
var _526=0;
var end=0;
if(typeof _525.selectionStart=="number"){
_526=_525.selectionStart;
end=_525.selectionEnd;
}else{
if(_525.createTextRange){
var s=document.selection.createRange();
var _527=_525.createTextRange();
_527.setEndPoint("EndToStart",s);
_526=_527.text.length;
end=_526+s.text.length;
}
}
return {start:_526,end:end};
},setSelectionRange:function(jq,_528){
return jq.each(function(){
var _529=$(this).textbox("textbox")[0];
var _52a=_528.start;
var end=_528.end;
if(_529.setSelectionRange){
_529.setSelectionRange(_52a,end);
}else{
if(_529.createTextRange){
var _52b=_529.createTextRange();
_52b.collapse();
_52b.moveEnd("character",end);
_52b.moveStart("character",_52a);
_52b.select();
}
}
});
}};
$.fn.textbox.parseOptions=function(_52c){
var t=$(_52c);
return $.extend({},$.fn.validatebox.parseOptions(_52c),$.parser.parseOptions(_52c,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign",{multiline:"boolean",iconWidth:"number",labelWidth:"number"}]),{value:(t.val()||undefined),type:(t.attr("type")?t.attr("type"):undefined)});
};
$.fn.textbox.defaults=$.extend({},$.fn.validatebox.defaults,{doSize:true,width:"auto",height:"auto",prompt:"",value:"",type:"text",multiline:false,icons:[],iconCls:null,iconAlign:"right",iconWidth:18,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){
var t=$(e.data.target);
var opts=t.textbox("options");
if(t.textbox("getValue")!=opts.value){
t.textbox("setValue",opts.value);
}
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.textbox("setValue",t.textbox("getText"));
}
}},onChange:function(_52d,_52e){
},onResize:function(_52f,_530){
},onClickButton:function(){
},onClickIcon:function(_531){
}});
})(jQuery);
(function($){
function _532(_533){
var _534=$.data(_533,"passwordbox");
var opts=_534.options;
var _535=$.extend(true,[],opts.icons);
if(opts.showEye){
_535.push({iconCls:"passwordbox-open",handler:function(e){
opts.revealed=!opts.revealed;
_536(_533);
}});
}
$(_533).addClass("passwordbox-f").textbox($.extend({},opts,{icons:_535}));
_536(_533);
};
function _537(_538,_539,all){
var t=$(_538);
var opts=t.passwordbox("options");
if(opts.revealed){
t.textbox("setValue",_539);
return;
}
var _53a=unescape(opts.passwordChar);
var cc=_539.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_53a){
vv.splice(i,0,c);
}
}
}
var pos=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(pos,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(all||i!=pos-1){
cc[i]=_53a;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:pos,end:pos});
};
function _536(_53b,_53c){
var t=$(_53b);
var opts=t.passwordbox("options");
var icon=t.next().find(".passwordbox-open");
var _53d=unescape(opts.passwordChar);
_53c=_53c==undefined?t.textbox("getValue"):_53c;
t.textbox("setValue",_53c);
t.textbox("setText",opts.revealed?_53c:_53c.replace(/./ig,_53d));
opts.revealed?icon.addClass("passwordbox-close"):icon.removeClass("passwordbox-close");
};
function _53e(e){
var _53f=e.data.target;
var t=$(e.data.target);
var _540=t.data("passwordbox");
var opts=t.data("passwordbox").options;
_540.checking=true;
_540.value=t.passwordbox("getText");
(function(){
if(_540.checking){
var _541=t.passwordbox("getText");
if(_540.value!=_541){
_540.value=_541;
if(_540.lastTimer){
clearTimeout(_540.lastTimer);
_540.lastTimer=undefined;
}
_537(_53f,_541);
_540.lastTimer=setTimeout(function(){
_537(_53f,t.passwordbox("getText"),true);
_540.lastTimer=undefined;
},opts.lastDelay);
}
setTimeout(arguments.callee,opts.checkInterval);
}
})();
};
function _542(e){
var _543=e.data.target;
var _544=$(_543).data("passwordbox");
_544.checking=false;
if(_544.lastTimer){
clearTimeout(_544.lastTimer);
_544.lastTimer=undefined;
}
_536(_543);
};
$.fn.passwordbox=function(_545,_546){
if(typeof _545=="string"){
var _547=$.fn.passwordbox.methods[_545];
if(_547){
return _547(this,_546);
}else{
return this.textbox(_545,_546);
}
}
_545=_545||{};
return this.each(function(){
var _548=$.data(this,"passwordbox");
if(_548){
$.extend(_548.options,_545);
}else{
_548=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_545)});
}
_532(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_549){
return jq.each(function(){
_536(this,_549);
});
},clear:function(jq){
return jq.each(function(){
_536(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_536(this);
});
},showPassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=true;
_536(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var opts=$(this).passwordbox("options");
opts.revealed=false;
_536(this);
});
}};
$.fn.passwordbox.parseOptions=function(_54a){
return $.extend({},$.fn.textbox.parseOptions(_54a),$.parser.parseOptions(_54a,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_53e,blur:_542},val:function(_54b){
return $(_54b).parent().prev().passwordbox("getValue");
}});
})(jQuery);
(function($){
var _54c=0;
function _54d(_54e){
var _54f=$.data(_54e,"filebox");
var opts=_54f.options;
opts.fileboxId="filebox_file_id_"+(++_54c);
$(_54e).addClass("filebox-f").textbox(opts);
$(_54e).textbox("textbox").attr("readonly","readonly");
_54f.filebox=$(_54e).next().addClass("filebox");
var file=_550(_54e);
var btn=$(_54e).filebox("button");
if(btn.length){
$("<label class=\"filebox-label\" for=\""+opts.fileboxId+"\"></label>").appendTo(btn);
if(btn.linkbutton("options").disabled){
file.attr("disabled","disabled");
}else{
file.removeAttr("disabled");
}
}
};
function _550(_551){
var _552=$.data(_551,"filebox");
var opts=_552.options;
_552.filebox.find(".textbox-value").remove();
opts.oldValue="";
var file=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_552.filebox);
file.attr("id",opts.fileboxId).attr("name",$(_551).attr("textboxName")||"");
file.attr("accept",opts.accept);
if(opts.multiple){
file.attr("multiple","multiple");
}
file.change(function(){
var _553=this.value;
if(this.files){
_553=$.map(this.files,function(file){
return file.name;
}).join(opts.separator);
}
$(_551).filebox("setText",_553);
opts.onChange.call(_551,_553,opts.oldValue);
opts.oldValue=_553;
});
return file;
};
$.fn.filebox=function(_554,_555){
if(typeof _554=="string"){
var _556=$.fn.filebox.methods[_554];
if(_556){
return _556(this,_555);
}else{
return this.textbox(_554,_555);
}
}
_554=_554||{};
return this.each(function(){
var _557=$.data(this,"filebox");
if(_557){
$.extend(_557.options,_554);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_554)});
}
_54d(this);
});
};
$.fn.filebox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_550(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
}};
$.fn.filebox.parseOptions=function(_558){
var t=$(_558);
return $.extend({},$.fn.textbox.parseOptions(_558),$.parser.parseOptions(_558,["accept","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",separator:",",multiple:false});
})(jQuery);
(function($){
function _559(_55a){
var _55b=$.data(_55a,"searchbox");
var opts=_55b.options;
var _55c=$.extend(true,[],opts.icons);
_55c.push({iconCls:"searchbox-button",handler:function(e){
var t=$(e.data.target);
var opts=t.searchbox("options");
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
}});
_55d();
var _55e=_55f();
$(_55a).addClass("searchbox-f").textbox($.extend({},opts,{icons:_55c,buttonText:(_55e?_55e.text:"")}));
$(_55a).attr("searchboxName",$(_55a).attr("textboxName"));
_55b.searchbox=$(_55a).next();
_55b.searchbox.addClass("searchbox");
_560(_55e);
function _55d(){
if(opts.menu){
_55b.menu=$(opts.menu).menu();
var _561=_55b.menu.menu("options");
var _562=_561.onClick;
_561.onClick=function(item){
_560(item);
_562.call(this,item);
};
}else{
if(_55b.menu){
_55b.menu.menu("destroy");
}
_55b.menu=null;
}
};
function _55f(){
if(_55b.menu){
var item=_55b.menu.children("div.menu-item:first");
_55b.menu.children("div.menu-item").each(function(){
var _563=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_563.selected){
item=$(this);
return false;
}
});
return _55b.menu.menu("getItem",item[0]);
}else{
return null;
}
};
function _560(item){
if(!item){
return;
}
$(_55a).textbox("button").menubutton({text:item.text,iconCls:(item.iconCls||null),menu:_55b.menu,menuAlign:opts.buttonAlign,plain:false});
_55b.searchbox.find("input.textbox-value").attr("name",item.name||item.text);
$(_55a).searchbox("resize");
};
};
$.fn.searchbox=function(_564,_565){
if(typeof _564=="string"){
var _566=$.fn.searchbox.methods[_564];
if(_566){
return _566(this,_565);
}else{
return this.textbox(_564,_565);
}
}
_564=_564||{};
return this.each(function(){
var _567=$.data(this,"searchbox");
if(_567){
$.extend(_567.options,_564);
}else{
$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_564)});
}
_559(this);
});
};
$.fn.searchbox.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"searchbox").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.textbox-value").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item").each(function(){
var item=menu.menu("getItem",this);
if(item.name==name){
$(this).triggerHandler("click");
return false;
}
});
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$(this).textbox("destroy");
});
}};
$.fn.searchbox.parseOptions=function(_568){
var t=$(_568);
return $.extend({},$.fn.textbox.parseOptions(_568),$.parser.parseOptions(_568,["menu"]),{searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:$.extend({},$.fn.textbox.defaults.inputEvents,{keydown:function(e){
if(e.keyCode==13){
e.preventDefault();
var t=$(e.data.target);
var opts=t.searchbox("options");
t.searchbox("setValue",$(this).val());
opts.searcher.call(e.data.target,t.searchbox("getValue"),t.searchbox("getName"));
return false;
}
}}),buttonAlign:"left",menu:null,searcher:function(_569,name){
}});
})(jQuery);
(function($){
function _56a(_56b,_56c){
var opts=$.data(_56b,"form").options;
$.extend(opts,_56c||{});
var _56d=$.extend({},opts.queryParams);
if(opts.onSubmit.call(_56b,_56d)==false){
return;
}
var _56e=$(_56b).find(".textbox-text:focus");
_56e.triggerHandler("blur");
_56e.focus();
var _56f=null;
if(opts.dirty){
var ff=[];
$.map(opts.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_56f=$(_56b).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_56f.attr("disabled","disabled");
}
if(opts.ajax){
if(opts.iframe){
_570(_56b,_56d);
}else{
if(window.FormData!==undefined){
_571(_56b,_56d);
}else{
_570(_56b,_56d);
}
}
}else{
$(_56b).submit();
}
if(opts.dirty){
_56f.removeAttr("disabled");
}
};
function _570(_572,_573){
var opts=$.data(_572,"form").options;
var _574="easyui_frame_"+(new Date().getTime());
var _575=$("<iframe id="+_574+" name="+_574+"></iframe>").appendTo("body");
_575.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_575.css({position:"absolute",top:-1000,left:-1000});
_575.bind("load",cb);
_576(_573);
function _576(_577){
var form=$(_572);
if(opts.url){
form.attr("action",opts.url);
}
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_574);
var _578=$();
try{
for(var n in _577){
var _579=$("<input type=\"hidden\" name=\""+n+"\">").val(_577[n]).appendTo(form);
_578=_578.add(_579);
}
_57a();
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
_578.remove();
}
};
function _57a(){
var f=$("#"+_574);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_57a,100);
}
}
catch(e){
cb();
}
};
var _57b=10;
function cb(){
var f=$("#"+_574);
if(!f.length){
return;
}
f.unbind();
var data="";
try{
var body=f.contents().find("body");
data=body.html();
if(data==""){
if(--_57b){
setTimeout(cb,100);
return;
}
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
}
catch(e){
}
opts.success.call(_572,data);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _571(_57c,_57d){
var opts=$.data(_57c,"form").options;
var _57e=new FormData($(_57c)[0]);
for(var name in _57d){
_57e.append(name,_57d[name]);
}
$.ajax({url:opts.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _57f=e.total;
var _580=e.loaded||e.position;
var _581=Math.ceil(_580*100/_57f);
opts.onProgress.call(_57c,_581);
}
},false);
}
return xhr;
},data:_57e,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
opts.success.call(_57c,res.responseText);
}});
};
function load(_582,data){
var opts=$.data(_582,"form").options;
if(typeof data=="string"){
var _583={};
if(opts.onBeforeLoad.call(_582,_583)==false){
return;
}
$.ajax({url:data,data:_583,dataType:"json",success:function(data){
_584(data);
},error:function(){
opts.onLoadError.apply(_582,arguments);
}});
}else{
_584(data);
}
function _584(data){
var form=$(_582);
for(var name in data){
var val=data[name];
if(!_585(name,val)){
if(!_586(name,val)){
form.find("input[name=\""+name+"\"]").val(val);
form.find("textarea[name=\""+name+"\"]").val(val);
form.find("select[name=\""+name+"\"]").val(val);
}
}
}
opts.onLoadSuccess.call(_582,data);
form.form("validate");
};
function _585(name,val){
var cc=$(_582).find("[switchbuttonName=\""+name+"\"]");
if(cc.length){
cc.switchbutton("uncheck");
cc.each(function(){
if(_587($(this).switchbutton("options").value,val)){
$(this).switchbutton("check");
}
});
return true;
}
cc=$(_582).find("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_587($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _587(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _586(name,val){
var _588=$(_582).find("[textboxName=\""+name+"\"],[sliderName=\""+name+"\"]");
if(_588.length){
for(var i=0;i<opts.fieldTypes.length;i++){
var type=opts.fieldTypes[i];
var _589=_588.data(type);
if(_589){
if(_589.options.multiple||_589.options.range){
_588[type]("setValues",val);
}else{
_588[type]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _58a(_58b){
$("input,select,textarea",_58b).each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
if(!file.hasClass("textbox-value")){
var _58c=file.clone().val("");
_58c.insertAfter(file);
if(file.data("validatebox")){
file.validatebox("destroy");
_58c.validatebox();
}else{
file.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var form=$(_58b);
var opts=$.data(_58b,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _58d=form.find("."+type+"-f");
if(_58d.length&&_58d[type]){
_58d[type]("clear");
}
}
form.form("validate");
};
function _58e(_58f){
_58f.reset();
var form=$(_58f);
var opts=$.data(_58f,"form").options;
for(var i=opts.fieldTypes.length-1;i>=0;i--){
var type=opts.fieldTypes[i];
var _590=form.find("."+type+"-f");
if(_590.length&&_590[type]){
_590[type]("reset");
}
}
form.form("validate");
};
function _591(_592){
var _593=$.data(_592,"form").options;
$(_592).unbind(".form");
if(_593.ajax){
$(_592).bind("submit.form",function(){
setTimeout(function(){
_56a(_592,_593);
},0);
return false;
});
}
$(_592).bind("_change.form",function(e,t){
if($.inArray(t,_593.dirtyFields)==-1){
_593.dirtyFields.push(t);
}
_593.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_593.dirtyFields)==-1){
_593.dirtyFields.push(t);
}
_593.onChange.call(this,t);
}
});
_594(_592,_593.novalidate);
};
function _595(_596,_597){
_597=_597||{};
var _598=$.data(_596,"form");
if(_598){
$.extend(_598.options,_597);
}else{
$.data(_596,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_596),_597)});
}
};
function _599(_59a){
if($.fn.validatebox){
var t=$(_59a);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _59b=t.find(".validatebox-invalid");
_59b.filter(":not(:disabled):first").focus();
return _59b.length==0;
}
return true;
};
function _594(_59c,_59d){
var opts=$.data(_59c,"form").options;
opts.novalidate=_59d;
$(_59c).find(".validatebox-text:not(:disabled)").validatebox(_59d?"disableValidation":"enableValidation");
};
$.fn.form=function(_59e,_59f){
if(typeof _59e=="string"){
this.each(function(){
_595(this);
});
return $.fn.form.methods[_59e](this,_59f);
}
return this.each(function(){
_595(this,_59e);
_591(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_5a0){
return jq.each(function(){
_56a(this,_5a0);
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_58a(this);
});
},reset:function(jq){
return jq.each(function(){
_58e(this);
});
},validate:function(jq){
return _599(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_594(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_594(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_5a1){
var t=$(_5a1);
return $.extend({},$.parser.parseOptions(_5a1,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_5a2){
return $(this).form("validate");
},onProgress:function(_5a3){
},success:function(data){
},onBeforeLoad:function(_5a4){
},onLoadSuccess:function(data){
},onLoadError:function(){
},onChange:function(_5a5){
}};
})(jQuery);
(function($){
function _5a6(_5a7){
var _5a8=$.data(_5a7,"numberbox");
var opts=_5a8.options;
$(_5a7).addClass("numberbox-f").textbox(opts);
$(_5a7).textbox("textbox").css({imeMode:"disabled"});
$(_5a7).attr("numberboxName",$(_5a7).attr("textboxName"));
_5a8.numberbox=$(_5a7).next();
_5a8.numberbox.addClass("numberbox");
var _5a9=opts.parser.call(_5a7,opts.value);
var _5aa=opts.formatter.call(_5a7,_5a9);
$(_5a7).numberbox("initValue",_5a9).numberbox("setText",_5aa);
};
function _5ab(_5ac,_5ad){
var _5ae=$.data(_5ac,"numberbox");
var opts=_5ae.options;
var _5ad=opts.parser.call(_5ac,_5ad);
var text=opts.formatter.call(_5ac,_5ad);
opts.value=_5ad;
$(_5ac).textbox("setText",text).textbox("setValue",_5ad);
text=opts.formatter.call(_5ac,$(_5ac).textbox("getValue"));
$(_5ac).textbox("setText",text);
};
$.fn.numberbox=function(_5af,_5b0){
if(typeof _5af=="string"){
var _5b1=$.fn.numberbox.methods[_5af];
if(_5b1){
return _5b1(this,_5b0);
}else{
return this.textbox(_5af,_5b0);
}
}
_5af=_5af||{};
return this.each(function(){
var _5b2=$.data(this,"numberbox");
if(_5b2){
$.extend(_5b2.options,_5af);
}else{
_5b2=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_5af)});
}
_5a6(this);
});
};
$.fn.numberbox.methods={options:function(jq){
var opts=jq.data("textbox")?jq.textbox("options"):{};
return $.extend($.data(jq[0],"numberbox").options,{width:opts.width,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},fix:function(jq){
return jq.each(function(){
$(this).numberbox("setValue",$(this).numberbox("getText"));
});
},setValue:function(jq,_5b3){
return jq.each(function(){
_5ab(this,_5b3);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
$(this).numberbox("options").value="";
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
$(this).numberbox("setValue",$(this).numberbox("getValue"));
});
}};
$.fn.numberbox.parseOptions=function(_5b4){
var t=$(_5b4);
return $.extend({},$.fn.textbox.parseOptions(_5b4),$.parser.parseOptions(_5b4,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{keypress:function(e){
var _5b5=e.data.target;
var opts=$(_5b5).numberbox("options");
return opts.filter.call(_5b5,e);
},blur:function(e){
var _5b6=e.data.target;
$(_5b6).numberbox("setValue",$(_5b6).numberbox("getText"));
},keydown:function(e){
if(e.keyCode==13){
var _5b7=e.data.target;
$(_5b7).numberbox("setValue",$(_5b7).numberbox("getText"));
}
}},min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",filter:function(e){
var opts=$(this).numberbox("options");
var s=$(this).numberbox("getText");
if(e.metaKey||e.ctrlKey){
return true;
}
if($.inArray(String(e.which),["46","8","13","0"])>=0){
return true;
}
var tmp=$("<span></span>");
tmp.html(String.fromCharCode(e.which));
var c=tmp.text();
tmp.remove();
if(!c){
return true;
}
if(c=="-"||c==opts.decimalSeparator){
return (s.indexOf(c)==-1)?true:false;
}else{
if(c==opts.groupSeparator){
return true;
}else{
if("0123456789".indexOf(c)>=0){
return true;
}else{
return false;
}
}
}
},formatter:function(_5b8){
if(!_5b8){
return _5b8;
}
_5b8=_5b8+"";
var opts=$(this).numberbox("options");
var s1=_5b8,s2="";
var dpos=_5b8.indexOf(".");
if(dpos>=0){
s1=_5b8.substring(0,dpos);
s2=_5b8.substring(dpos+1,_5b8.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(parseFloat(s)!=s){
if(opts.prefix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),""));
}
if(opts.suffix){
s=$.trim(s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),""));
}
if(opts.groupSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.groupSeparator,"g"),""));
}
if(opts.decimalSeparator){
s=$.trim(s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),"."));
}
s=s.replace(/\s/g,"");
}
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
}});
})(jQuery);
(function($){
function _5b9(_5ba,_5bb){
var opts=$.data(_5ba,"calendar").options;
var t=$(_5ba);
if(_5bb){
$.extend(opts,{width:_5bb.width,height:_5bb.height});
}
t._size(opts,t.parent());
t.find(".calendar-body")._outerHeight(t.height()-t.find(".calendar-header")._outerHeight());
if(t.find(".calendar-menu").is(":visible")){
_5bc(_5ba);
}
};
function init(_5bd){
$(_5bd).addClass("calendar").html("<div class=\"calendar-header\">"+"<div class=\"calendar-nav calendar-prevmonth\"></div>"+"<div class=\"calendar-nav calendar-nextmonth\"></div>"+"<div class=\"calendar-nav calendar-prevyear\"></div>"+"<div class=\"calendar-nav calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span class=\"calendar-text\"></span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-nav calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-nav calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_5bd).bind("_resize",function(e,_5be){
if($(this).hasClass("easyui-fluid")||_5be){
_5b9(_5bd);
}
return false;
});
};
function _5bf(_5c0){
var opts=$.data(_5c0,"calendar").options;
var menu=$(_5c0).find(".calendar-menu");
menu.find(".calendar-menu-year").unbind(".calendar").bind("keypress.calendar",function(e){
if(e.keyCode==13){
_5c1(true);
}
});
$(_5c0).unbind(".calendar").bind("mouseover.calendar",function(e){
var t=_5c2(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.addClass("calendar-nav-hover");
}
}).bind("mouseout.calendar",function(e){
var t=_5c2(e.target);
if(t.hasClass("calendar-nav")||t.hasClass("calendar-text")||(t.hasClass("calendar-day")&&!t.hasClass("calendar-disabled"))){
t.removeClass("calendar-nav-hover");
}
}).bind("click.calendar",function(e){
var t=_5c2(e.target);
if(t.hasClass("calendar-menu-next")||t.hasClass("calendar-nextyear")){
_5c3(1);
}else{
if(t.hasClass("calendar-menu-prev")||t.hasClass("calendar-prevyear")){
_5c3(-1);
}else{
if(t.hasClass("calendar-menu-month")){
menu.find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
_5c1(true);
}else{
if(t.hasClass("calendar-prevmonth")){
_5c4(-1);
}else{
if(t.hasClass("calendar-nextmonth")){
_5c4(1);
}else{
if(t.hasClass("calendar-text")){
if(menu.is(":visible")){
menu.hide();
}else{
_5bc(_5c0);
}
}else{
if(t.hasClass("calendar-day")){
if(t.hasClass("calendar-disabled")){
return;
}
var _5c5=opts.current;
t.closest("div.calendar-body").find(".calendar-selected").removeClass("calendar-selected");
t.addClass("calendar-selected");
var _5c6=t.attr("abbr").split(",");
var y=parseInt(_5c6[0]);
var m=parseInt(_5c6[1]);
var d=parseInt(_5c6[2]);
opts.current=new Date(y,m-1,d);
opts.onSelect.call(_5c0,opts.current);
if(!_5c5||_5c5.getTime()!=opts.current.getTime()){
opts.onChange.call(_5c0,opts.current,_5c5);
}
if(opts.year!=y||opts.month!=m){
opts.year=y;
opts.month=m;
show(_5c0);
}
}
}
}
}
}
}
}
});
function _5c2(t){
var day=$(t).closest(".calendar-day");
if(day.length){
return day;
}else{
return $(t);
}
};
function _5c1(_5c7){
var menu=$(_5c0).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _5c8=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_5c8);
show(_5c0);
}
if(_5c7){
menu.hide();
}
};
function _5c3(_5c9){
opts.year+=_5c9;
show(_5c0);
menu.find(".calendar-menu-year").val(opts.year);
};
function _5c4(_5ca){
opts.month+=_5ca;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_5c0);
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
};
function _5bc(_5cb){
var opts=$.data(_5cb,"calendar").options;
$(_5cb).find(".calendar-menu").show();
if($(_5cb).find(".calendar-menu-month-inner").is(":empty")){
$(_5cb).find(".calendar-menu-month-inner").empty();
var t=$("<table class=\"calendar-mtable\"></table>").appendTo($(_5cb).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-nav calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
}
var body=$(_5cb).find(".calendar-body");
var sele=$(_5cb).find(".calendar-menu");
var _5cc=sele.find(".calendar-menu-year-inner");
var _5cd=sele.find(".calendar-menu-month-inner");
_5cc.find("input").val(opts.year).focus();
_5cd.find("td.calendar-selected").removeClass("calendar-selected");
_5cd.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_5cd._outerHeight(sele.height()-_5cc._outerHeight());
};
function _5ce(_5cf,year,_5d0){
var opts=$.data(_5cf,"calendar").options;
var _5d1=[];
var _5d2=new Date(year,_5d0,0).getDate();
for(var i=1;i<=_5d2;i++){
_5d1.push([year,_5d0,i]);
}
var _5d3=[],week=[];
var _5d4=-1;
while(_5d1.length>0){
var date=_5d1.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_5d4==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_5d3.push(week);
week=[];
}
}
_5d4=day;
}
if(week.length){
_5d3.push(week);
}
var _5d5=_5d3[0];
if(_5d5.length<7){
while(_5d5.length<7){
var _5d6=_5d5[0];
var date=new Date(_5d6[0],_5d6[1]-1,_5d6[2]-1);
_5d5.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _5d6=_5d5[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5d6[0],_5d6[1]-1,_5d6[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5d3.unshift(week);
}
var _5d7=_5d3[_5d3.length-1];
while(_5d7.length<7){
var _5d8=_5d7[_5d7.length-1];
var date=new Date(_5d8[0],_5d8[1]-1,_5d8[2]+1);
_5d7.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_5d3.length<6){
var _5d8=_5d7[_5d7.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_5d8[0],_5d8[1]-1,_5d8[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_5d3.push(week);
}
return _5d3;
};
function show(_5d9){
var opts=$.data(_5d9,"calendar").options;
if(opts.current&&!opts.validator.call(_5d9,opts.current)){
opts.current=null;
}
var now=new Date();
var _5da=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
var _5db=opts.current?(opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate()):"";
var _5dc=6-opts.firstDay;
var _5dd=_5dc+1;
if(_5dc>=7){
_5dc-=7;
}
if(_5dd>=7){
_5dd-=7;
}
$(_5d9).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_5d9).find("div.calendar-body");
body.children("table").remove();
var data=["<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"];
data.push("<thead><tr>");
if(opts.showWeek){
data.push("<th class=\"calendar-week\">"+opts.weekNumberHeader+"</th>");
}
for(var i=opts.firstDay;i<opts.weeks.length;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
data.push("<th>"+opts.weeks[i]+"</th>");
}
data.push("</tr></thead>");
data.push("<tbody>");
var _5de=_5ce(_5d9,opts.year,opts.month);
for(var i=0;i<_5de.length;i++){
var week=_5de[i];
var cls="";
if(i==0){
cls="calendar-first";
}else{
if(i==_5de.length-1){
cls="calendar-last";
}
}
data.push("<tr class=\""+cls+"\">");
if(opts.showWeek){
var _5df=opts.getWeekNumber(new Date(week[0][0],parseInt(week[0][1])-1,week[0][2]));
data.push("<td class=\"calendar-week\">"+_5df+"</td>");
}
for(var j=0;j<week.length;j++){
var day=week[j];
var s=day[0]+","+day[1]+","+day[2];
var _5e0=new Date(day[0],parseInt(day[1])-1,day[2]);
var d=opts.formatter.call(_5d9,_5e0);
var css=opts.styler.call(_5d9,_5e0);
var _5e1="";
var _5e2="";
if(typeof css=="string"){
_5e2=css;
}else{
if(css){
_5e1=css["class"]||"";
_5e2=css["style"]||"";
}
}
var cls="calendar-day";
if(!(opts.year==day[0]&&opts.month==day[1])){
cls+=" calendar-other-month";
}
if(s==_5da){
cls+=" calendar-today";
}
if(s==_5db){
cls+=" calendar-selected";
}
if(j==_5dc){
cls+=" calendar-saturday";
}else{
if(j==_5dd){
cls+=" calendar-sunday";
}
}
if(j==0){
cls+=" calendar-first";
}else{
if(j==week.length-1){
cls+=" calendar-last";
}
}
cls+=" "+_5e1;
if(!opts.validator.call(_5d9,_5e0)){
cls+=" calendar-disabled";
}
data.push("<td class=\""+cls+"\" abbr=\""+s+"\" style=\""+_5e2+"\">"+d+"</td>");
}
data.push("</tr>");
}
data.push("</tbody>");
data.push("</table>");
body.append(data.join(""));
body.children("table.calendar-dtable").prependTo(body);
opts.onNavigate.call(_5d9,opts.year,opts.month);
};
$.fn.calendar=function(_5e3,_5e4){
if(typeof _5e3=="string"){
return $.fn.calendar.methods[_5e3](this,_5e4);
}
_5e3=_5e3||{};
return this.each(function(){
var _5e5=$.data(this,"calendar");
if(_5e5){
$.extend(_5e5.options,_5e3);
}else{
_5e5=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_5e3)});
init(this);
}
if(_5e5.options.border==false){
$(this).addClass("calendar-noborder");
}
_5b9(this);
_5bf(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq,_5e6){
return jq.each(function(){
_5b9(this,_5e6);
});
},moveTo:function(jq,date){
return jq.each(function(){
if(!date){
var now=new Date();
$(this).calendar({year:now.getFullYear(),month:now.getMonth()+1,current:date});
return;
}
var opts=$(this).calendar("options");
if(opts.validator.call(this,date)){
var _5e7=opts.current;
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
if(!_5e7||_5e7.getTime()!=date.getTime()){
opts.onChange.call(this,opts.current,_5e7);
}
}
});
}};
$.fn.calendar.parseOptions=function(_5e8){
var t=$(_5e8);
return $.extend({},$.parser.parseOptions(_5e8,["weekNumberHeader",{firstDay:"number",fit:"boolean",border:"boolean",showWeek:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,showWeek:false,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:(function(){
var d=new Date();
return new Date(d.getFullYear(),d.getMonth(),d.getDate());
})(),weekNumberHeader:"",getWeekNumber:function(date){
var _5e9=new Date(date.getTime());
_5e9.setDate(_5e9.getDate()+4-(_5e9.getDay()||7));
var time=_5e9.getTime();
_5e9.setMonth(0);
_5e9.setDate(1);
return Math.floor(Math.round((time-_5e9)/86400000)/7)+1;
},formatter:function(date){
return date.getDate();
},styler:function(date){
return "";
},validator:function(date){
return true;
},onSelect:function(date){
},onChange:function(_5ea,_5eb){
},onNavigate:function(year,_5ec){
}};
})(jQuery);
(function($){
function _5ed(_5ee){
var _5ef=$.data(_5ee,"spinner");
var opts=_5ef.options;
var _5f0=$.extend(true,[],opts.icons);
if(opts.spinAlign=="left"||opts.spinAlign=="right"){
opts.spinArrow=true;
opts.iconAlign=opts.spinAlign;
var _5f1={iconCls:"spinner-arrow",handler:function(e){
var spin=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_5fb(e.data.target,spin.hasClass("spinner-arrow-down"));
}};
if(opts.spinAlign=="left"){
_5f0.unshift(_5f1);
}else{
_5f0.push(_5f1);
}
}else{
opts.spinArrow=false;
if(opts.spinAlign=="vertical"){
if(opts.buttonAlign!="top"){
opts.buttonAlign="bottom";
}
opts.clsLeft="textbox-button-bottom";
opts.clsRight="textbox-button-top";
}else{
opts.clsLeft="textbox-button-left";
opts.clsRight="textbox-button-right";
}
}
$(_5ee).addClass("spinner-f").textbox($.extend({},opts,{icons:_5f0,doSize:false,onResize:function(_5f2,_5f3){
if(!opts.spinArrow){
var span=$(this).next();
var btn=span.find(".textbox-button:not(.spinner-button)");
if(btn.length){
var _5f4=btn.outerWidth();
var _5f5=btn.outerHeight();
var _5f6=span.find(".spinner-button."+opts.clsLeft);
var _5f7=span.find(".spinner-button."+opts.clsRight);
if(opts.buttonAlign=="right"){
_5f7.css("marginRight",_5f4+"px");
}else{
if(opts.buttonAlign=="left"){
_5f6.css("marginLeft",_5f4+"px");
}else{
if(opts.buttonAlign=="top"){
_5f7.css("marginTop",_5f5+"px");
}else{
_5f6.css("marginBottom",_5f5+"px");
}
}
}
}
}
opts.onResize.call(this,_5f2,_5f3);
}}));
$(_5ee).attr("spinnerName",$(_5ee).attr("textboxName"));
_5ef.spinner=$(_5ee).next();
_5ef.spinner.addClass("spinner");
if(opts.spinArrow){
var _5f8=_5ef.spinner.find(".spinner-arrow");
_5f8.append("<a href=\"javascript:void(0)\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_5f8.append("<a href=\"javascript:void(0)\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
}else{
var _5f9=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsLeft).appendTo(_5ef.spinner);
var _5fa=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(opts.clsRight).appendTo(_5ef.spinner);
_5f9.linkbutton({iconCls:opts.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_5fb(_5ee,!opts.reversed);
}});
_5fa.linkbutton({iconCls:opts.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_5fb(_5ee,opts.reversed);
}});
if(opts.disabled){
$(_5ee).spinner("disable");
}
if(opts.readonly){
$(_5ee).spinner("readonly");
}
}
$(_5ee).spinner("resize");
};
function _5fb(_5fc,down){
var opts=$(_5fc).spinner("options");
opts.spin.call(_5fc,down);
opts[down?"onSpinDown":"onSpinUp"].call(_5fc);
$(_5fc).spinner("validate");
};
$.fn.spinner=function(_5fd,_5fe){
if(typeof _5fd=="string"){
var _5ff=$.fn.spinner.methods[_5fd];
if(_5ff){
return _5ff(this,_5fe);
}else{
return this.textbox(_5fd,_5fe);
}
}
_5fd=_5fd||{};
return this.each(function(){
var _600=$.data(this,"spinner");
if(_600){
$.extend(_600.options,_5fd);
}else{
_600=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_5fd)});
}
_5ed(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.spinner.parseOptions=function(_601){
return $.extend({},$.fn.textbox.parseOptions(_601),$.parser.parseOptions(_601,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _602(_603){
$(_603).addClass("numberspinner-f");
var opts=$.data(_603,"numberspinner").options;
$(_603).numberbox($.extend({},opts,{doSize:false})).spinner(opts);
$(_603).numberbox("setValue",opts.value);
};
function _604(_605,down){
var opts=$.data(_605,"numberspinner").options;
var v=parseFloat($(_605).numberbox("getValue")||opts.value)||0;
if(down){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_605).numberbox("setValue",v);
};
$.fn.numberspinner=function(_606,_607){
if(typeof _606=="string"){
var _608=$.fn.numberspinner.methods[_606];
if(_608){
return _608(this,_607);
}else{
return this.numberbox(_606,_607);
}
}
_606=_606||{};
return this.each(function(){
var _609=$.data(this,"numberspinner");
if(_609){
$.extend(_609.options,_606);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_606)});
}
_602(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=jq.numberbox("options");
return $.extend($.data(jq[0],"numberspinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.numberspinner.parseOptions=function(_60a){
return $.extend({},$.fn.spinner.parseOptions(_60a),$.fn.numberbox.parseOptions(_60a),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_604(this,down);
}});
})(jQuery);
(function($){
function _60b(_60c){
var opts=$.data(_60c,"timespinner").options;
$(_60c).addClass("timespinner-f").spinner(opts);
var _60d=opts.formatter.call(_60c,opts.parser.call(_60c,opts.value));
$(_60c).timespinner("initValue",_60d);
};
function _60e(e){
var _60f=e.data.target;
var opts=$.data(_60f,"timespinner").options;
var _610=$(_60f).timespinner("getSelectionStart");
for(var i=0;i<opts.selections.length;i++){
var _611=opts.selections[i];
if(_610>=_611[0]&&_610<=_611[1]){
_612(_60f,i);
return;
}
}
};
function _612(_613,_614){
var opts=$.data(_613,"timespinner").options;
if(_614!=undefined){
opts.highlight=_614;
}
var _615=opts.selections[opts.highlight];
if(_615){
var tb=$(_613).timespinner("textbox");
$(_613).timespinner("setSelectionRange",{start:_615[0],end:_615[1]});
tb.focus();
}
};
function _616(_617,_618){
var opts=$.data(_617,"timespinner").options;
var _618=opts.parser.call(_617,_618);
var text=opts.formatter.call(_617,_618);
$(_617).spinner("setValue",text);
};
function _619(_61a,down){
var opts=$.data(_61a,"timespinner").options;
var s=$(_61a).timespinner("getValue");
var _61b=opts.selections[opts.highlight];
var s1=s.substring(0,_61b[0]);
var s2=s.substring(_61b[0],_61b[1]);
var s3=s.substring(_61b[1]);
var v=s1+((parseInt(s2,10)||0)+opts.increment*(down?-1:1))+s3;
$(_61a).timespinner("setValue",v);
_612(_61a);
};
$.fn.timespinner=function(_61c,_61d){
if(typeof _61c=="string"){
var _61e=$.fn.timespinner.methods[_61c];
if(_61e){
return _61e(this,_61d);
}else{
return this.spinner(_61c,_61d);
}
}
_61c=_61c||{};
return this.each(function(){
var _61f=$.data(this,"timespinner");
if(_61f){
$.extend(_61f.options,_61c);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_61c)});
}
_60b(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
},setValue:function(jq,_620){
return jq.each(function(){
_616(this,_620);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_621){
return $.extend({},$.fn.spinner.parseOptions(_621),$.parser.parseOptions(_621,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_60e.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(date){
if(!date){
return "";
}
var opts=$(this).timespinner("options");
var tt=[_622(date.getHours()),_622(date.getMinutes())];
if(opts.showSeconds){
tt.push(_622(date.getSeconds()));
}
return tt.join(opts.separator);
function _622(_623){
return (_623<10?"0":"")+_623;
};
},parser:function(s){
var opts=$(this).timespinner("options");
var date=_624(s);
if(date){
var min=_624(opts.min);
var max=_624(opts.max);
if(min&&min>date){
date=min;
}
if(max&&max<date){
date=max;
}
}
return date;
function _624(s){
if(!s){
return null;
}
var tt=s.split(opts.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(down){
_619(this,down);
}});
})(jQuery);
(function($){
function _625(_626){
var opts=$.data(_626,"datetimespinner").options;
$(_626).addClass("datetimespinner-f").timespinner(opts);
};
$.fn.datetimespinner=function(_627,_628){
if(typeof _627=="string"){
var _629=$.fn.datetimespinner.methods[_627];
if(_629){
return _629(this,_628);
}else{
return this.timespinner(_627,_628);
}
}
_627=_627||{};
return this.each(function(){
var _62a=$.data(this,"datetimespinner");
if(_62a){
$.extend(_62a.options,_627);
}else{
$.data(this,"datetimespinner",{options:$.extend({},$.fn.datetimespinner.defaults,$.fn.datetimespinner.parseOptions(this),_627)});
}
_625(this);
});
};
$.fn.datetimespinner.methods={options:function(jq){
var opts=jq.timespinner("options");
return $.extend($.data(jq[0],"datetimespinner").options,{width:opts.width,value:opts.value,originalValue:opts.originalValue,disabled:opts.disabled,readonly:opts.readonly});
}};
$.fn.datetimespinner.parseOptions=function(_62b){
return $.extend({},$.fn.timespinner.parseOptions(_62b),$.parser.parseOptions(_62b,[]));
};
$.fn.datetimespinner.defaults=$.extend({},$.fn.timespinner.defaults,{formatter:function(date){
if(!date){
return "";
}
return $.fn.datebox.defaults.formatter.call(this,date)+" "+$.fn.timespinner.defaults.formatter.call(this,date);
},parser:function(s){
s=$.trim(s);
if(!s){
return null;
}
var dt=s.split(" ");
var _62c=$.fn.datebox.defaults.parser.call(this,dt[0]);
if(dt.length<2){
return _62c;
}
var _62d=$.fn.timespinner.defaults.parser.call(this,dt[1]);
return new Date(_62c.getFullYear(),_62c.getMonth(),_62c.getDate(),_62d.getHours(),_62d.getMinutes(),_62d.getSeconds());
},selections:[[0,2],[3,5],[6,10],[11,13],[14,16],[17,19]]});
})(jQuery);
(function($){
var _62e=0;
function _62f(a,o){
return $.easyui.indexOfArray(a,o);
};
function _630(a,o,id){
$.easyui.removeArrayItem(a,o,id);
};
function _631(a,o,r){
$.easyui.addArrayItem(a,o,r);
};
function _632(_633,aa){
return $.data(_633,"treegrid")?aa.slice(1):aa;
};
function _634(_635){
var _636=$.data(_635,"datagrid");
var opts=_636.options;
var _637=_636.panel;
var dc=_636.dc;
var ss=null;
if(opts.sharedStyleSheet){
ss=typeof opts.sharedStyleSheet=="boolean"?"head":opts.sharedStyleSheet;
}else{
ss=_637.closest("div.datagrid-view");
if(!ss.length){
ss=dc.view;
}
}
var cc=$(ss);
var _638=$.data(cc[0],"ss");
if(!_638){
_638=$.data(cc[0],"ss",{cache:{},dirty:[]});
}
return {add:function(_639){
var ss=["<style type=\"text/css\" easyui=\"true\">"];
for(var i=0;i<_639.length;i++){
_638.cache[_639[i][0]]={width:_639[i][1]};
}
var _63a=0;
for(var s in _638.cache){
var item=_638.cache[s];
item.index=_63a++;
ss.push(s+"{width:"+item.width+"}");
}
ss.push("</style>");
$(ss.join("\n")).appendTo(cc);
cc.children("style[easyui]:not(:last)").remove();
},getRule:function(_63b){
var _63c=cc.children("style[easyui]:last")[0];
var _63d=_63c.styleSheet?_63c.styleSheet:(_63c.sheet||document.styleSheets[document.styleSheets.length-1]);
var _63e=_63d.cssRules||_63d.rules;
return _63e[_63b];
},set:function(_63f,_640){
var item=_638.cache[_63f];
if(item){
item.width=_640;
var rule=this.getRule(item.index);
if(rule){
rule.style["width"]=_640;
}
}
},remove:function(_641){
var tmp=[];
for(var s in _638.cache){
if(s.indexOf(_641)==-1){
tmp.push([s,_638.cache[s].width]);
}
}
_638.cache={};
this.add(tmp);
},dirty:function(_642){
if(_642){
_638.dirty.push(_642);
}
},clean:function(){
for(var i=0;i<_638.dirty.length;i++){
this.remove(_638.dirty[i]);
}
_638.dirty=[];
}};
};
function _643(_644,_645){
var _646=$.data(_644,"datagrid");
var opts=_646.options;
var _647=_646.panel;
if(_645){
$.extend(opts,_645);
}
if(opts.fit==true){
var p=_647.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_647.panel("resize",opts);
};
function _648(_649){
var _64a=$.data(_649,"datagrid");
var opts=_64a.options;
var dc=_64a.dc;
var wrap=_64a.panel;
var _64b=wrap.width();
var _64c=wrap.height();
var view=dc.view;
var _64d=dc.view1;
var _64e=dc.view2;
var _64f=_64d.children("div.datagrid-header");
var _650=_64e.children("div.datagrid-header");
var _651=_64f.find("table");
var _652=_650.find("table");
view.width(_64b);
var _653=_64f.children("div.datagrid-header-inner").show();
_64d.width(_653.find("table").width());
if(!opts.showHeader){
_653.hide();
}
_64e.width(_64b-_64d._outerWidth());
_64d.children()._outerWidth(_64d.width());
_64e.children()._outerWidth(_64e.width());
var all=_64f.add(_650).add(_651).add(_652);
all.css("height","");
var hh=Math.max(_651.height(),_652.height());
all._outerHeight(hh);
view.children(".datagrid-empty").css("top",hh+"px");
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _654=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
var _655=_654+_650._outerHeight()+_64e.children(".datagrid-footer")._outerHeight();
wrap.children(":not(.datagrid-view,.datagrid-mask,.datagrid-mask-msg)").each(function(){
_655+=$(this)._outerHeight();
});
var _656=wrap.outerHeight()-wrap.height();
var _657=wrap._size("minHeight")||"";
var _658=wrap._size("maxHeight")||"";
_64d.add(_64e).children("div.datagrid-body").css({marginTop:_654,height:(isNaN(parseInt(opts.height))?"":(_64c-_655)),minHeight:(_657?_657-_656-_655:""),maxHeight:(_658?_658-_656-_655:"")});
view.height(_64e.height());
};
function _659(_65a,_65b,_65c){
var rows=$.data(_65a,"datagrid").data.rows;
var opts=$.data(_65a,"datagrid").options;
var dc=$.data(_65a,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_65c)){
if(_65b!=undefined){
var tr1=opts.finder.getTr(_65a,_65b,"body",1);
var tr2=opts.finder.getTr(_65a,_65b,"body",2);
_65d(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_65a,0,"allbody",1);
var tr2=opts.finder.getTr(_65a,0,"allbody",2);
_65d(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_65a,0,"allfooter",1);
var tr2=opts.finder.getTr(_65a,0,"allfooter",2);
_65d(tr1,tr2);
}
}
}
_648(_65a);
if(opts.height=="auto"){
var _65e=dc.body1.parent();
var _65f=dc.body2;
var _660=_661(_65f);
var _662=_660.height;
if(_660.width>_65f.width()){
_662+=18;
}
_662-=parseInt(_65f.css("marginTop"))||0;
_65e.height(_662);
_65f.height(_662);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _65d(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _663=Math.max(tr1.height(),tr2.height());
tr1.css("height",_663);
tr2.css("height",_663);
}
};
function _661(cc){
var _664=0;
var _665=0;
$(cc).children().each(function(){
var c=$(this);
if(c.is(":visible")){
_665+=c._outerHeight();
if(_664<c._outerWidth()){
_664=c._outerWidth();
}
}
});
return {width:_664,height:_665};
};
};
function _666(_667,_668){
var _669=$.data(_667,"datagrid");
var opts=_669.options;
var dc=_669.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_66a(true);
_66a(false);
_648(_667);
function _66a(_66b){
var _66c=_66b?1:2;
var tr=opts.finder.getTr(_667,_668,"body",_66c);
(_66b?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _66d(_66e,_66f){
function _670(){
var _671=[];
var _672=[];
$(_66e).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["id","field","align","halign","order","width",{sortable:"boolean",checkbox:"boolean",resizable:"boolean",fixed:"boolean"},{rowspan:"number",colspan:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined),sorter:(th.attr("sorter")?eval(th.attr("sorter")):undefined)});
if(col.width&&String(col.width).indexOf("%")==-1){
col.width=parseInt(col.width);
}
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_671.push(cols):_672.push(cols);
});
});
return [_671,_672];
};
var _673=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_66e);
_673.panel({doSize:false,cls:"datagrid"});
$(_66e).addClass("datagrid-f").hide().appendTo(_673.children("div.datagrid-view"));
var cc=_670();
var view=_673.children("div.datagrid-view");
var _674=view.children("div.datagrid-view1");
var _675=view.children("div.datagrid-view2");
return {panel:_673,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_674,view2:_675,header1:_674.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_675.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_674.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_675.children("div.datagrid-body"),footer1:_674.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_675.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _676(_677){
var _678=$.data(_677,"datagrid");
var opts=_678.options;
var dc=_678.dc;
var _679=_678.panel;
_678.ss=$(_677).datagrid("createStyleSheet");
_679.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_67a,_67b){
if($.data(_677,"datagrid")){
_648(_677);
$(_677).datagrid("fitColumns");
opts.onResize.call(_679,_67a,_67b);
}
},onExpand:function(){
if($.data(_677,"datagrid")){
$(_677).datagrid("fixRowHeight").datagrid("fitColumns");
opts.onExpand.call(_679);
}
}}));
_678.rowIdPrefix="datagrid-row-r"+(++_62e);
_678.cellClassPrefix="datagrid-cell-c"+_62e;
_67c(dc.header1,opts.frozenColumns,true);
_67c(dc.header2,opts.columns,false);
_67d();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if($.isArray(opts.toolbar)){
$("div.datagrid-toolbar",_679).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_679);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}else{
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_679);
$(opts.toolbar).show();
}
}else{
$("div.datagrid-toolbar",_679).remove();
}
$("div.datagrid-pager",_679).remove();
if(opts.pagination){
var _67e=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_67e.appendTo(_679);
}else{
if(opts.pagePosition=="top"){
_67e.addClass("datagrid-pager-top").prependTo(_679);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_679);
_67e.appendTo(_679);
_67e=_67e.add(ptop);
}
}
_67e.pagination({total:(opts.pageNumber*opts.pageSize),pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_67f,_680){
opts.pageNumber=_67f||1;
opts.pageSize=_680;
_67e.pagination("refresh",{pageNumber:_67f,pageSize:_680});
_6c8(_677);
}});
opts.pageSize=_67e.pagination("options").pageSize;
}
function _67c(_681,_682,_683){
if(!_682){
return;
}
$(_681).show();
$(_681).empty();
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-99999px\"></div>").appendTo("body");
tmp._outerWidth(99);
var _684=100-parseInt(tmp[0].style.width);
tmp.remove();
var _685=[];
var _686=[];
var _687=[];
if(opts.sortName){
_685=opts.sortName.split(",");
_686=opts.sortOrder.split(",");
}
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_681);
for(var i=0;i<_682.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_682[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
if(!col.id){
col.id=["datagrid-td-group"+_62e,i,j].join("-");
}
}
if(col.id){
attr+="id=\""+col.id+"\"";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
td.find("span:first").html(col.title);
var cell=td.find("div.datagrid-cell");
var pos=_62f(_685,col.field);
if(pos>=0){
cell.addClass("datagrid-sort-"+_686[pos]);
}
if(col.sortable){
cell.addClass("datagrid-sort");
}
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
var _688=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0));
col.deltaWidth=_684;
col.boxWidth=_688-_684;
}else{
col.auto=true;
}
cell.css("text-align",(col.halign||col.align||""));
col.cellClass=_678.cellClassPrefix+"-"+col.field.replace(/[\.|\s]/g,"-");
cell.addClass(col.cellClass);
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
_687.push(col.field);
}
}
}
if(_683&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
for(var i=0;i<_687.length;i++){
_6ca(_677,_687[i],-1);
}
};
function _67d(){
var _689=[[".datagrid-header-rownumber",(opts.rownumberWidth-1)+"px"],[".datagrid-cell-rownumber",(opts.rownumberWidth-1)+"px"]];
var _68a=_68b(_677,true).concat(_68b(_677));
for(var i=0;i<_68a.length;i++){
var col=_68c(_677,_68a[i]);
if(col&&!col.checkbox){
_689.push(["."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto"]);
}
}
_678.ss.add(_689);
_678.ss.dirty(_678.cellSelectorPrefix);
_678.cellSelectorPrefix="."+_678.cellClassPrefix;
};
};
function _68d(_68e){
var _68f=$.data(_68e,"datagrid");
var _690=_68f.panel;
var opts=_68f.options;
var dc=_68f.dc;
var _691=dc.header1.add(dc.header2);
_691.unbind(".datagrid");
for(var _692 in opts.headerEvents){
_691.bind(_692+".datagrid",opts.headerEvents[_692]);
}
var _693=_691.find("div.datagrid-cell");
var _694=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_693.each(function(){
$(this).resizable({handles:_694,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_68f.resizing=true;
_691.css("cursor",$("body").css("cursor"));
if(!_68f.proxy){
_68f.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
_68f.proxy.css({left:e.pageX-$(_690).offset().left-1,display:"none"});
setTimeout(function(){
if(_68f.proxy){
_68f.proxy.show();
}
},500);
},onResize:function(e){
_68f.proxy.css({left:e.pageX-$(_690).offset().left-1,display:"block"});
return false;
},onStopResize:function(e){
_691.css("cursor","");
$(this).css("height","");
var _695=$(this).parent().attr("field");
var col=_68c(_68e,_695);
col.width=$(this)._outerWidth();
col.boxWidth=col.width-col.deltaWidth;
col.auto=undefined;
$(this).css("width","");
$(_68e).datagrid("fixColumnSize",_695);
_68f.proxy.remove();
_68f.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_648(_68e);
}
$(_68e).datagrid("fitColumns");
opts.onResizeColumn.call(_68e,_695,col.width);
setTimeout(function(){
_68f.resizing=false;
},0);
}});
});
var bb=dc.body1.add(dc.body2);
bb.unbind();
for(var _692 in opts.rowEvents){
bb.bind(_692,opts.rowEvents[_692]);
}
dc.body1.bind("mousewheel DOMMouseScroll",function(e){
e.preventDefault();
var e1=e.originalEvent||window.event;
var _696=e1.wheelDelta||e1.detail*(-1);
if("deltaY" in e1){
_696=e1.deltaY*-1;
}
var dg=$(e.target).closest("div.datagrid-view").children(".datagrid-f");
var dc=dg.data("datagrid").dc;
dc.body2.scrollTop(dc.body2.scrollTop()-_696);
});
dc.body2.bind("scroll",function(){
var b1=dc.view1.children("div.datagrid-body");
b1.scrollTop($(this).scrollTop());
var c1=dc.body1.children(":first");
var c2=dc.body2.children(":first");
if(c1.length&&c2.length){
var top1=c1.offset().top;
var top2=c2.offset().top;
if(top1!=top2){
b1.scrollTop(b1.scrollTop()+top1-top2);
}
}
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
};
function _697(_698){
return function(e){
var td=$(e.target).closest("td[field]");
if(td.length){
var _699=_69a(td);
if(!$(_699).data("datagrid").resizing&&_698){
td.addClass("datagrid-header-over");
}else{
td.removeClass("datagrid-header-over");
}
}
};
};
function _69b(e){
var _69c=_69a(e.target);
var opts=$(_69c).datagrid("options");
var ck=$(e.target).closest("input[type=checkbox]");
if(ck.length){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if(ck.is(":checked")){
_69d(_69c);
}else{
_69e(_69c);
}
e.stopPropagation();
}else{
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
_69f(_69c,cell.parent().attr("field"));
}
}
}
};
function _6a0(e){
var _6a1=_69a(e.target);
var opts=$(_6a1).datagrid("options");
var cell=$(e.target).closest(".datagrid-cell");
if(cell.length){
var p1=cell.offset().left+5;
var p2=cell.offset().left+cell._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _6a2=cell.parent().attr("field");
var col=_68c(_6a1,_6a2);
if(col.resizable==false){
return;
}
$(_6a1).datagrid("autoSizeColumn",_6a2);
col.auto=false;
}
}
};
function _6a3(e){
var _6a4=_69a(e.target);
var opts=$(_6a4).datagrid("options");
var td=$(e.target).closest("td[field]");
opts.onHeaderContextMenu.call(_6a4,e,td.attr("field"));
};
function _6a5(_6a6){
return function(e){
var tr=_6a7(e.target);
if(!tr){
return;
}
var _6a8=_69a(tr);
if($.data(_6a8,"datagrid").resizing){
return;
}
var _6a9=_6aa(tr);
if(_6a6){
_6ab(_6a8,_6a9);
}else{
var opts=$.data(_6a8,"datagrid").options;
opts.finder.getTr(_6a8,_6a9).removeClass("datagrid-row-over");
}
};
};
function _6ac(e){
var tr=_6a7(e.target);
if(!tr){
return;
}
var _6ad=_69a(tr);
var opts=$.data(_6ad,"datagrid").options;
var _6ae=_6aa(tr);
var tt=$(e.target);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
tt._propAttr("checked",!tt.is(":checked"));
_6af(_6ad,_6ae);
}else{
if(tt.is(":checked")){
tt._propAttr("checked",false);
_6af(_6ad,_6ae);
}else{
tt._propAttr("checked",true);
_6b0(_6ad,_6ae);
}
}
}else{
var row=opts.finder.getRow(_6ad,_6ae);
var td=tt.closest("td[field]",tr);
if(td.length){
var _6b1=td.attr("field");
opts.onClickCell.call(_6ad,_6ae,_6b1,row[_6b1]);
}
if(opts.singleSelect==true){
_6b2(_6ad,_6ae);
}else{
if(opts.ctrlSelect){
if(e.ctrlKey){
if(tr.hasClass("datagrid-row-selected")){
_6b3(_6ad,_6ae);
}else{
_6b2(_6ad,_6ae);
}
}else{
if(e.shiftKey){
$(_6ad).datagrid("clearSelections");
var _6b4=Math.min(opts.lastSelectedIndex||0,_6ae);
var _6b5=Math.max(opts.lastSelectedIndex||0,_6ae);
for(var i=_6b4;i<=_6b5;i++){
_6b2(_6ad,i);
}
}else{
$(_6ad).datagrid("clearSelections");
_6b2(_6ad,_6ae);
opts.lastSelectedIndex=_6ae;
}
}
}else{
if(tr.hasClass("datagrid-row-selected")){
_6b3(_6ad,_6ae);
}else{
_6b2(_6ad,_6ae);
}
}
}
opts.onClickRow.apply(_6ad,_632(_6ad,[_6ae,row]));
}
};
function _6b6(e){
var tr=_6a7(e.target);
if(!tr){
return;
}
var _6b7=_69a(tr);
var opts=$.data(_6b7,"datagrid").options;
var _6b8=_6aa(tr);
var row=opts.finder.getRow(_6b7,_6b8);
var td=$(e.target).closest("td[field]",tr);
if(td.length){
var _6b9=td.attr("field");
opts.onDblClickCell.call(_6b7,_6b8,_6b9,row[_6b9]);
}
opts.onDblClickRow.apply(_6b7,_632(_6b7,[_6b8,row]));
};
function _6ba(e){
var tr=_6a7(e.target);
if(tr){
var _6bb=_69a(tr);
var opts=$.data(_6bb,"datagrid").options;
var _6bc=_6aa(tr);
var row=opts.finder.getRow(_6bb,_6bc);
opts.onRowContextMenu.call(_6bb,e,_6bc,row);
}else{
var body=_6a7(e.target,".datagrid-body");
if(body){
var _6bb=_69a(body);
var opts=$.data(_6bb,"datagrid").options;
opts.onRowContextMenu.call(_6bb,e,-1,null);
}
}
};
function _69a(t){
return $(t).closest("div.datagrid-view").children(".datagrid-f")[0];
};
function _6a7(t,_6bd){
var tr=$(t).closest(_6bd||"tr.datagrid-row");
if(tr.length&&tr.parent().length){
return tr;
}else{
return undefined;
}
};
function _6aa(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
function _69f(_6be,_6bf){
var _6c0=$.data(_6be,"datagrid");
var opts=_6c0.options;
_6bf=_6bf||{};
var _6c1={sortName:opts.sortName,sortOrder:opts.sortOrder};
if(typeof _6bf=="object"){
$.extend(_6c1,_6bf);
}
var _6c2=[];
var _6c3=[];
if(_6c1.sortName){
_6c2=_6c1.sortName.split(",");
_6c3=_6c1.sortOrder.split(",");
}
if(typeof _6bf=="string"){
var _6c4=_6bf;
var col=_68c(_6be,_6c4);
if(!col.sortable||_6c0.resizing){
return;
}
var _6c5=col.order||"asc";
var pos=_62f(_6c2,_6c4);
if(pos>=0){
var _6c6=_6c3[pos]=="asc"?"desc":"asc";
if(opts.multiSort&&_6c6==_6c5){
_6c2.splice(pos,1);
_6c3.splice(pos,1);
}else{
_6c3[pos]=_6c6;
}
}else{
if(opts.multiSort){
_6c2.push(_6c4);
_6c3.push(_6c5);
}else{
_6c2=[_6c4];
_6c3=[_6c5];
}
}
_6c1.sortName=_6c2.join(",");
_6c1.sortOrder=_6c3.join(",");
}
if(opts.onBeforeSortColumn.call(_6be,_6c1.sortName,_6c1.sortOrder)==false){
return;
}
$.extend(opts,_6c1);
var dc=_6c0.dc;
var _6c7=dc.header1.add(dc.header2);
_6c7.find("div.datagrid-cell").removeClass("datagrid-sort-asc datagrid-sort-desc");
for(var i=0;i<_6c2.length;i++){
var col=_68c(_6be,_6c2[i]);
_6c7.find("div."+col.cellClass).addClass("datagrid-sort-"+_6c3[i]);
}
if(opts.remoteSort){
_6c8(_6be);
}else{
_6c9(_6be,$(_6be).datagrid("getData"));
}
opts.onSortColumn.call(_6be,opts.sortName,opts.sortOrder);
};
function _6ca(_6cb,_6cc,_6cd){
_6ce(true);
_6ce(false);
function _6ce(_6cf){
var aa=_6d0(_6cb,_6cf);
if(aa.length){
var _6d1=aa[aa.length-1];
var _6d2=_62f(_6d1,_6cc);
if(_6d2>=0){
for(var _6d3=0;_6d3<aa.length-1;_6d3++){
var td=$("#"+aa[_6d3][_6d2]);
var _6d4=parseInt(td.attr("colspan")||1)+(_6cd||0);
td.attr("colspan",_6d4);
if(_6d4){
td.show();
}else{
td.hide();
}
}
}
}
};
};
function _6d5(_6d6){
var _6d7=$.data(_6d6,"datagrid");
var opts=_6d7.options;
var dc=_6d7.dc;
var _6d8=dc.view2.children("div.datagrid-header");
dc.body2.css("overflow-x","");
_6d9();
_6da();
_6db();
_6d9(true);
if(_6d8.width()>=_6d8.find("table").width()){
dc.body2.css("overflow-x","hidden");
}
function _6db(){
if(!opts.fitColumns){
return;
}
if(!_6d7.leftWidth){
_6d7.leftWidth=0;
}
var _6dc=0;
var cc=[];
var _6dd=_68b(_6d6,false);
for(var i=0;i<_6dd.length;i++){
var col=_68c(_6d6,_6dd[i]);
if(_6de(col)){
_6dc+=col.width;
cc.push({field:col.field,col:col,addingWidth:0});
}
}
if(!_6dc){
return;
}
cc[cc.length-1].addingWidth-=_6d7.leftWidth;
var _6df=_6d8.children("div.datagrid-header-inner").show();
var _6e0=_6d8.width()-_6d8.find("table").width()-opts.scrollbarSize+_6d7.leftWidth;
var rate=_6e0/_6dc;
if(!opts.showHeader){
_6df.hide();
}
for(var i=0;i<cc.length;i++){
var c=cc[i];
var _6e1=parseInt(c.col.width*rate);
c.addingWidth+=_6e1;
_6e0-=_6e1;
}
cc[cc.length-1].addingWidth+=_6e0;
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c.col.boxWidth+c.addingWidth>0){
c.col.boxWidth+=c.addingWidth;
c.col.width+=c.addingWidth;
}
}
_6d7.leftWidth=_6e0;
$(_6d6).datagrid("fixColumnSize");
};
function _6da(){
var _6e2=false;
var _6e3=_68b(_6d6,true).concat(_68b(_6d6,false));
$.map(_6e3,function(_6e4){
var col=_68c(_6d6,_6e4);
if(String(col.width||"").indexOf("%")>=0){
var _6e5=$.parser.parseValue("width",col.width,dc.view,opts.scrollbarSize+(opts.rownumbers?opts.rownumberWidth:0))-col.deltaWidth;
if(_6e5>0){
col.boxWidth=_6e5;
_6e2=true;
}
}
});
if(_6e2){
$(_6d6).datagrid("fixColumnSize");
}
};
function _6d9(fit){
var _6e6=dc.header1.add(dc.header2).find(".datagrid-cell-group");
if(_6e6.length){
_6e6.each(function(){
$(this)._outerWidth(fit?$(this).parent().width():10);
});
if(fit){
_648(_6d6);
}
}
};
function _6de(col){
if(String(col.width||"").indexOf("%")>=0){
return false;
}
if(!col.hidden&&!col.checkbox&&!col.auto&&!col.fixed){
return true;
}
};
};
function _6e7(_6e8,_6e9){
var _6ea=$.data(_6e8,"datagrid");
var opts=_6ea.options;
var dc=_6ea.dc;
var tmp=$("<div class=\"datagrid-cell\" style=\"position:absolute;left:-9999px\"></div>").appendTo("body");
if(_6e9){
_643(_6e9);
$(_6e8).datagrid("fitColumns");
}else{
var _6eb=false;
var _6ec=_68b(_6e8,true).concat(_68b(_6e8,false));
for(var i=0;i<_6ec.length;i++){
var _6e9=_6ec[i];
var col=_68c(_6e8,_6e9);
if(col.auto){
_643(_6e9);
_6eb=true;
}
}
if(_6eb){
$(_6e8).datagrid("fitColumns");
}
}
tmp.remove();
function _643(_6ed){
var _6ee=dc.view.find("div.datagrid-header td[field=\""+_6ed+"\"] div.datagrid-cell");
_6ee.css("width","");
var col=$(_6e8).datagrid("getColumnOption",_6ed);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_6e8).datagrid("fixColumnSize",_6ed);
var _6ef=Math.max(_6f0("header"),_6f0("allbody"),_6f0("allfooter"))+1;
_6ee._outerWidth(_6ef-1);
col.width=_6ef;
col.boxWidth=parseInt(_6ee[0].style.width);
col.deltaWidth=_6ef-col.boxWidth;
_6ee.css("width","");
$(_6e8).datagrid("fixColumnSize",_6ed);
opts.onResizeColumn.call(_6e8,_6ed,col.width);
function _6f0(type){
var _6f1=0;
if(type=="header"){
_6f1=_6f2(_6ee);
}else{
opts.finder.getTr(_6e8,0,type).find("td[field=\""+_6ed+"\"] div.datagrid-cell").each(function(){
var w=_6f2($(this));
if(_6f1<w){
_6f1=w;
}
});
}
return _6f1;
function _6f2(cell){
return cell.is(":visible")?cell._outerWidth():tmp.html(cell.html())._outerWidth();
};
};
};
};
function _6f3(_6f4,_6f5){
var _6f6=$.data(_6f4,"datagrid");
var opts=_6f6.options;
var dc=_6f6.dc;
var _6f7=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_6f7.css("table-layout","fixed");
if(_6f5){
fix(_6f5);
}else{
var ff=_68b(_6f4,true).concat(_68b(_6f4,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_6f7.css("table-layout","");
_6f8(_6f4);
_659(_6f4);
_6f9(_6f4);
function fix(_6fa){
var col=_68c(_6f4,_6fa);
if(col.cellClass){
_6f6.ss.set("."+col.cellClass,col.boxWidth?col.boxWidth+"px":"auto");
}
};
};
function _6f8(_6fb,tds){
var dc=$.data(_6fb,"datagrid").dc;
tds=tds||dc.view.find("td.datagrid-td-merged");
tds.each(function(){
var td=$(this);
var _6fc=td.attr("colspan")||1;
if(_6fc>1){
var col=_68c(_6fb,td.attr("field"));
var _6fd=col.boxWidth+col.deltaWidth-1;
for(var i=1;i<_6fc;i++){
td=td.next();
col=_68c(_6fb,td.attr("field"));
_6fd+=col.boxWidth+col.deltaWidth;
}
$(this).children("div.datagrid-cell")._outerWidth(_6fd);
}
});
};
function _6f9(_6fe){
var dc=$.data(_6fe,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _6ff=cell.parent().attr("field");
var col=$(_6fe).datagrid("getColumnOption",_6ff);
cell._outerWidth(col.boxWidth+col.deltaWidth-1);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _68c(_700,_701){
function find(_702){
if(_702){
for(var i=0;i<_702.length;i++){
var cc=_702[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_701){
return c;
}
}
}
}
return null;
};
var opts=$.data(_700,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _6d0(_703,_704){
var opts=$.data(_703,"datagrid").options;
var _705=_704?opts.frozenColumns:opts.columns;
var aa=[];
var _706=_707();
for(var i=0;i<_705.length;i++){
aa[i]=new Array(_706);
}
for(var _708=0;_708<_705.length;_708++){
$.map(_705[_708],function(col){
var _709=_70a(aa[_708]);
if(_709>=0){
var _70b=col.field||col.id||"";
for(var c=0;c<(col.colspan||1);c++){
for(var r=0;r<(col.rowspan||1);r++){
aa[_708+r][_709]=_70b;
}
_709++;
}
}
});
}
return aa;
function _707(){
var _70c=0;
$.map(_705[0]||[],function(col){
_70c+=col.colspan||1;
});
return _70c;
};
function _70a(a){
for(var i=0;i<a.length;i++){
if(a[i]==undefined){
return i;
}
}
return -1;
};
};
function _68b(_70d,_70e){
var aa=_6d0(_70d,_70e);
return aa.length?aa[aa.length-1]:aa;
};
function _6c9(_70f,data){
var _710=$.data(_70f,"datagrid");
var opts=_710.options;
var dc=_710.dc;
data=opts.loadFilter.call(_70f,data);
if($.isArray(data)){
data={total:data.length,rows:data};
}
data.total=parseInt(data.total);
_710.data=data;
if(data.footer){
_710.footer=data.footer;
}
if(!opts.remoteSort&&opts.sortName){
var _711=opts.sortName.split(",");
var _712=opts.sortOrder.split(",");
data.rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_711.length;i++){
var sn=_711[i];
var so=_712[i];
var col=_68c(_70f,sn);
var _713=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_713(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_70f,data.rows);
}
opts.view.render.call(opts.view,_70f,dc.body2,false);
opts.view.render.call(opts.view,_70f,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_70f,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_70f,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_70f);
}
_710.ss.clean();
var _714=$(_70f).datagrid("getPager");
if(_714.length){
var _715=_714.pagination("options");
if(_715.total!=data.total){
_714.pagination("refresh",{total:data.total});
if(opts.pageNumber!=_715.pageNumber&&_715.pageNumber>0){
opts.pageNumber=_715.pageNumber;
_6c8(_70f);
}
}
}
_659(_70f);
dc.body2.triggerHandler("scroll");
$(_70f).datagrid("setSelectionState");
$(_70f).datagrid("autoSizeColumn");
opts.onLoadSuccess.call(_70f,data);
};
function _716(_717){
var _718=$.data(_717,"datagrid");
var opts=_718.options;
var dc=_718.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
var _719=$.data(_717,"treegrid")?true:false;
var _71a=opts.onSelect;
var _71b=opts.onCheck;
opts.onSelect=opts.onCheck=function(){
};
var rows=opts.finder.getRows(_717);
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _71c=_719?row[opts.idField]:i;
if(_71d(_718.selectedRows,row)){
_6b2(_717,_71c,true);
}
if(_71d(_718.checkedRows,row)){
_6af(_717,_71c,true);
}
}
opts.onSelect=_71a;
opts.onCheck=_71b;
}
function _71d(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
function _71e(_71f,row){
var _720=$.data(_71f,"datagrid");
var opts=_720.options;
var rows=_720.data.rows;
if(typeof row=="object"){
return _62f(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _721(_722){
var _723=$.data(_722,"datagrid");
var opts=_723.options;
var data=_723.data;
if(opts.idField){
return _723.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_722,"","selected",2).each(function(){
rows.push(opts.finder.getRow(_722,$(this)));
});
return rows;
}
};
function _724(_725){
var _726=$.data(_725,"datagrid");
var opts=_726.options;
if(opts.idField){
return _726.checkedRows;
}else{
var rows=[];
opts.finder.getTr(_725,"","checked",2).each(function(){
rows.push(opts.finder.getRow(_725,$(this)));
});
return rows;
}
};
function _727(_728,_729){
var _72a=$.data(_728,"datagrid");
var dc=_72a.dc;
var opts=_72a.options;
var tr=opts.finder.getTr(_728,_729);
if(tr.length){
if(tr.closest("table").hasClass("datagrid-btable-frozen")){
return;
}
var _72b=dc.view2.children("div.datagrid-header")._outerHeight();
var _72c=dc.body2;
var _72d=_72c.outerHeight(true)-_72c.outerHeight();
var top=tr.position().top-_72b-_72d;
if(top<0){
_72c.scrollTop(_72c.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_72c.height()-18){
_72c.scrollTop(_72c.scrollTop()+top+tr._outerHeight()-_72c.height()+18);
}
}
}
};
function _6ab(_72e,_72f){
var _730=$.data(_72e,"datagrid");
var opts=_730.options;
opts.finder.getTr(_72e,_730.highlightIndex).removeClass("datagrid-row-over");
opts.finder.getTr(_72e,_72f).addClass("datagrid-row-over");
_730.highlightIndex=_72f;
};
function _6b2(_731,_732,_733){
var _734=$.data(_731,"datagrid");
var opts=_734.options;
var row=opts.finder.getRow(_731,_732);
if(opts.onBeforeSelect.apply(_731,_632(_731,[_732,row]))==false){
return;
}
if(opts.singleSelect){
_735(_731,true);
_734.selectedRows=[];
}
if(!_733&&opts.checkOnSelect){
_6af(_731,_732,true);
}
if(opts.idField){
_631(_734.selectedRows,opts.idField,row);
}
opts.finder.getTr(_731,_732).addClass("datagrid-row-selected");
opts.onSelect.apply(_731,_632(_731,[_732,row]));
_727(_731,_732);
};
function _6b3(_736,_737,_738){
var _739=$.data(_736,"datagrid");
var dc=_739.dc;
var opts=_739.options;
var row=opts.finder.getRow(_736,_737);
if(opts.onBeforeUnselect.apply(_736,_632(_736,[_737,row]))==false){
return;
}
if(!_738&&opts.checkOnSelect){
_6b0(_736,_737,true);
}
opts.finder.getTr(_736,_737).removeClass("datagrid-row-selected");
if(opts.idField){
_630(_739.selectedRows,opts.idField,row[opts.idField]);
}
opts.onUnselect.apply(_736,_632(_736,[_737,row]));
};
function _73a(_73b,_73c){
var _73d=$.data(_73b,"datagrid");
var opts=_73d.options;
var rows=opts.finder.getRows(_73b);
var _73e=$.data(_73b,"datagrid").selectedRows;
if(!_73c&&opts.checkOnSelect){
_69d(_73b,true);
}
opts.finder.getTr(_73b,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _73f=0;_73f<rows.length;_73f++){
_631(_73e,opts.idField,rows[_73f]);
}
}
opts.onSelectAll.call(_73b,rows);
};
function _735(_740,_741){
var _742=$.data(_740,"datagrid");
var opts=_742.options;
var rows=opts.finder.getRows(_740);
var _743=$.data(_740,"datagrid").selectedRows;
if(!_741&&opts.checkOnSelect){
_69e(_740,true);
}
opts.finder.getTr(_740,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _744=0;_744<rows.length;_744++){
_630(_743,opts.idField,rows[_744][opts.idField]);
}
}
opts.onUnselectAll.call(_740,rows);
};
function _6af(_745,_746,_747){
var _748=$.data(_745,"datagrid");
var opts=_748.options;
var row=opts.finder.getRow(_745,_746);
if(opts.onBeforeCheck.apply(_745,_632(_745,[_746,row]))==false){
return;
}
if(opts.singleSelect&&opts.selectOnCheck){
_69e(_745,true);
_748.checkedRows=[];
}
if(!_747&&opts.selectOnCheck){
_6b2(_745,_746,true);
}
var tr=opts.finder.getTr(_745,_746).addClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
tr=opts.finder.getTr(_745,"","checked",2);
if(tr.length==opts.finder.getRows(_745).length){
var dc=_748.dc;
dc.header1.add(dc.header2).find("input[type=checkbox]")._propAttr("checked",true);
}
if(opts.idField){
_631(_748.checkedRows,opts.idField,row);
}
opts.onCheck.apply(_745,_632(_745,[_746,row]));
};
function _6b0(_749,_74a,_74b){
var _74c=$.data(_749,"datagrid");
var opts=_74c.options;
var row=opts.finder.getRow(_749,_74a);
if(opts.onBeforeUncheck.apply(_749,_632(_749,[_74a,row]))==false){
return;
}
if(!_74b&&opts.selectOnCheck){
_6b3(_749,_74a,true);
}
var tr=opts.finder.getTr(_749,_74a).removeClass("datagrid-row-checked");
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",false);
var dc=_74c.dc;
var _74d=dc.header1.add(dc.header2);
_74d.find("input[type=checkbox]")._propAttr("checked",false);
if(opts.idField){
_630(_74c.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.apply(_749,_632(_749,[_74a,row]));
};
function _69d(_74e,_74f){
var _750=$.data(_74e,"datagrid");
var opts=_750.options;
var rows=opts.finder.getRows(_74e);
if(!_74f&&opts.selectOnCheck){
_73a(_74e,true);
}
var dc=_750.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_74e,"","allbody").addClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_631(_750.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_74e,rows);
};
function _69e(_751,_752){
var _753=$.data(_751,"datagrid");
var opts=_753.options;
var rows=opts.finder.getRows(_751);
if(!_752&&opts.selectOnCheck){
_735(_751,true);
}
var dc=_753.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_751,"","checked").removeClass("datagrid-row-checked").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_630(_753.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_751,rows);
};
function _754(_755,_756){
var opts=$.data(_755,"datagrid").options;
var tr=opts.finder.getTr(_755,_756);
var row=opts.finder.getRow(_755,_756);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.apply(_755,_632(_755,[_756,row]))==false){
return;
}
tr.addClass("datagrid-row-editing");
_757(_755,_756);
_6f9(_755);
tr.find("div.datagrid-editable").each(function(){
var _758=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_758]);
});
_759(_755,_756);
opts.onBeginEdit.apply(_755,_632(_755,[_756,row]));
};
function _75a(_75b,_75c,_75d){
var _75e=$.data(_75b,"datagrid");
var opts=_75e.options;
var _75f=_75e.updatedRows;
var _760=_75e.insertedRows;
var tr=opts.finder.getTr(_75b,_75c);
var row=opts.finder.getRow(_75b,_75c);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_75d){
if(!_759(_75b,_75c)){
return;
}
var _761=false;
var _762={};
tr.find("div.datagrid-editable").each(function(){
var _763=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var t=$(ed.target);
var _764=t.data("textbox")?t.textbox("textbox"):t;
if(_764.is(":focus")){
_764.triggerHandler("blur");
}
var _765=ed.actions.getValue(ed.target);
if(row[_763]!==_765){
row[_763]=_765;
_761=true;
_762[_763]=_765;
}
});
if(_761){
if(_62f(_760,row)==-1){
if(_62f(_75f,row)==-1){
_75f.push(row);
}
}
}
opts.onEndEdit.apply(_75b,_632(_75b,[_75c,row,_762]));
}
tr.removeClass("datagrid-row-editing");
_766(_75b,_75c);
$(_75b).datagrid("refreshRow",_75c);
if(!_75d){
opts.onAfterEdit.apply(_75b,_632(_75b,[_75c,row,_762]));
}else{
opts.onCancelEdit.apply(_75b,_632(_75b,[_75c,row]));
}
};
function _767(_768,_769){
var opts=$.data(_768,"datagrid").options;
var tr=opts.finder.getTr(_768,_769);
var _76a=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_76a.push(ed);
}
});
return _76a;
};
function _76b(_76c,_76d){
var _76e=_767(_76c,_76d.index!=undefined?_76d.index:_76d.id);
for(var i=0;i<_76e.length;i++){
if(_76e[i].field==_76d.field){
return _76e[i];
}
}
return null;
};
function _757(_76f,_770){
var opts=$.data(_76f,"datagrid").options;
var tr=opts.finder.getTr(_76f,_770);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _771=$(this).attr("field");
var col=_68c(_76f,_771);
if(col&&col.editor){
var _772,_773;
if(typeof col.editor=="string"){
_772=col.editor;
}else{
_772=col.editor.type;
_773=col.editor.options;
}
var _774=opts.editors[_772];
if(_774){
var _775=cell.html();
var _776=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_776);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_774,target:_774.init(cell.find("td"),$.extend({height:opts.editorHeight},_773)),field:_771,type:_772,oldHtml:_775});
}
}
});
_659(_76f,_770,true);
};
function _766(_777,_778){
var opts=$.data(_777,"datagrid").options;
var tr=opts.finder.getTr(_777,_778);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _759(_779,_77a){
var tr=$.data(_779,"datagrid").options.finder.getTr(_779,_77a);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _77b=tr.find(".validatebox-invalid");
return _77b.length==0;
};
function _77c(_77d,_77e){
var _77f=$.data(_77d,"datagrid").insertedRows;
var _780=$.data(_77d,"datagrid").deletedRows;
var _781=$.data(_77d,"datagrid").updatedRows;
if(!_77e){
var rows=[];
rows=rows.concat(_77f);
rows=rows.concat(_780);
rows=rows.concat(_781);
return rows;
}else{
if(_77e=="inserted"){
return _77f;
}else{
if(_77e=="deleted"){
return _780;
}else{
if(_77e=="updated"){
return _781;
}
}
}
}
return [];
};
function _782(_783,_784){
var _785=$.data(_783,"datagrid");
var opts=_785.options;
var data=_785.data;
var _786=_785.insertedRows;
var _787=_785.deletedRows;
$(_783).datagrid("cancelEdit",_784);
var row=opts.finder.getRow(_783,_784);
if(_62f(_786,row)>=0){
_630(_786,row);
}else{
_787.push(row);
}
_630(_785.selectedRows,opts.idField,row[opts.idField]);
_630(_785.checkedRows,opts.idField,row[opts.idField]);
opts.view.deleteRow.call(opts.view,_783,_784);
if(opts.height=="auto"){
_659(_783);
}
$(_783).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _788(_789,_78a){
var data=$.data(_789,"datagrid").data;
var view=$.data(_789,"datagrid").options.view;
var _78b=$.data(_789,"datagrid").insertedRows;
view.insertRow.call(view,_789,_78a.index,_78a.row);
_78b.push(_78a.row);
$(_789).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _78c(_78d,row){
var data=$.data(_78d,"datagrid").data;
var view=$.data(_78d,"datagrid").options.view;
var _78e=$.data(_78d,"datagrid").insertedRows;
view.insertRow.call(view,_78d,null,row);
_78e.push(row);
$(_78d).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _78f(_790,_791){
var _792=$.data(_790,"datagrid");
var opts=_792.options;
var row=opts.finder.getRow(_790,_791.index);
var _793=false;
_791.row=_791.row||{};
for(var _794 in _791.row){
if(row[_794]!==_791.row[_794]){
_793=true;
break;
}
}
if(_793){
if(_62f(_792.insertedRows,row)==-1){
if(_62f(_792.updatedRows,row)==-1){
_792.updatedRows.push(row);
}
}
opts.view.updateRow.call(opts.view,_790,_791.index,_791.row);
}
};
function _795(_796){
var _797=$.data(_796,"datagrid");
var data=_797.data;
var rows=data.rows;
var _798=[];
for(var i=0;i<rows.length;i++){
_798.push($.extend({},rows[i]));
}
_797.originalRows=_798;
_797.updatedRows=[];
_797.insertedRows=[];
_797.deletedRows=[];
};
function _799(_79a){
var data=$.data(_79a,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_759(_79a,i)){
$(_79a).datagrid("endEdit",i);
}else{
ok=false;
}
}
if(ok){
_795(_79a);
}
};
function _79b(_79c){
var _79d=$.data(_79c,"datagrid");
var opts=_79d.options;
var _79e=_79d.originalRows;
var _79f=_79d.insertedRows;
var _7a0=_79d.deletedRows;
var _7a1=_79d.selectedRows;
var _7a2=_79d.checkedRows;
var data=_79d.data;
function _7a3(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _7a4(ids,_7a5){
for(var i=0;i<ids.length;i++){
var _7a6=_71e(_79c,ids[i]);
if(_7a6>=0){
(_7a5=="s"?_6b2:_6af)(_79c,_7a6,true);
}
}
};
for(var i=0;i<data.rows.length;i++){
$(_79c).datagrid("cancelEdit",i);
}
var _7a7=_7a3(_7a1);
var _7a8=_7a3(_7a2);
_7a1.splice(0,_7a1.length);
_7a2.splice(0,_7a2.length);
data.total+=_7a0.length-_79f.length;
data.rows=_79e;
_6c9(_79c,data);
_7a4(_7a7,"s");
_7a4(_7a8,"c");
_795(_79c);
};
function _6c8(_7a9,_7aa,cb){
var opts=$.data(_7a9,"datagrid").options;
if(_7aa){
opts.queryParams=_7aa;
}
var _7ab=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_7ab,{page:opts.pageNumber||1,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_7ab,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_7a9,_7ab)==false){
return;
}
$(_7a9).datagrid("loading");
var _7ac=opts.loader.call(_7a9,_7ab,function(data){
$(_7a9).datagrid("loaded");
$(_7a9).datagrid("loadData",data);
if(cb){
cb();
}
},function(){
$(_7a9).datagrid("loaded");
opts.onLoadError.apply(_7a9,arguments);
});
if(_7ac==false){
$(_7a9).datagrid("loaded");
}
};
function _7ad(_7ae,_7af){
var opts=$.data(_7ae,"datagrid").options;
_7af.type=_7af.type||"body";
_7af.rowspan=_7af.rowspan||1;
_7af.colspan=_7af.colspan||1;
if(_7af.rowspan==1&&_7af.colspan==1){
return;
}
var tr=opts.finder.getTr(_7ae,(_7af.index!=undefined?_7af.index:_7af.id),_7af.type);
if(!tr.length){
return;
}
var td=tr.find("td[field=\""+_7af.field+"\"]");
td.attr("rowspan",_7af.rowspan).attr("colspan",_7af.colspan);
td.addClass("datagrid-td-merged");
_7b0(td.next(),_7af.colspan-1);
for(var i=1;i<_7af.rowspan;i++){
tr=tr.next();
if(!tr.length){
break;
}
_7b0(tr.find("td[field=\""+_7af.field+"\"]"),_7af.colspan);
}
_6f8(_7ae,td);
function _7b0(td,_7b1){
for(var i=0;i<_7b1;i++){
td.hide();
td=td.next();
}
};
};
$.fn.datagrid=function(_7b2,_7b3){
if(typeof _7b2=="string"){
return $.fn.datagrid.methods[_7b2](this,_7b3);
}
_7b2=_7b2||{};
return this.each(function(){
var _7b4=$.data(this,"datagrid");
var opts;
if(_7b4){
opts=$.extend(_7b4.options,_7b2);
_7b4.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_7b2);
$(this).css("width","").css("height","");
var _7b5=_66d(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_7b5.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_7b5.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_7b5.panel,dc:_7b5.dc,ss:null,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_676(this);
_68d(this);
_643(this);
if(opts.data){
$(this).datagrid("loadData",opts.data);
}else{
var data=$.fn.datagrid.parseData(this);
if(data.total>0){
$(this).datagrid("loadData",data);
}else{
opts.view.setEmptyMsg(this);
$(this).datagrid("autoSizeColumn");
}
}
_6c8(this);
});
};
function _7b6(_7b7){
var _7b8={};
$.map(_7b7,function(name){
_7b8[name]=_7b9(name);
});
return _7b8;
function _7b9(name){
function isA(_7ba){
return $.data($(_7ba)[0],name)!=undefined;
};
return {init:function(_7bb,_7bc){
var _7bd=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7bb);
if(_7bd[name]&&name!="text"){
return _7bd[name](_7bc);
}else{
return _7bd;
}
},destroy:function(_7be){
if(isA(_7be,name)){
$(_7be)[name]("destroy");
}
},getValue:function(_7bf){
if(isA(_7bf,name)){
var opts=$(_7bf)[name]("options");
if(opts.multiple){
return $(_7bf)[name]("getValues").join(opts.separator);
}else{
return $(_7bf)[name]("getValue");
}
}else{
return $(_7bf).val();
}
},setValue:function(_7c0,_7c1){
if(isA(_7c0,name)){
var opts=$(_7c0)[name]("options");
if(opts.multiple){
if(_7c1){
$(_7c0)[name]("setValues",_7c1.split(opts.separator));
}else{
$(_7c0)[name]("clear");
}
}else{
$(_7c0)[name]("setValue",_7c1);
}
}else{
$(_7c0).val(_7c1);
}
},resize:function(_7c2,_7c3){
if(isA(_7c2,name)){
$(_7c2)[name]("resize",_7c3);
}else{
$(_7c2)._size({width:_7c3,height:$.fn.datagrid.defaults.editorHeight});
}
}};
};
};
var _7c4=$.extend({},_7b6(["text","textbox","passwordbox","filebox","numberbox","numberspinner","combobox","combotree","combogrid","combotreegrid","datebox","datetimebox","timespinner","datetimespinner"]),{textarea:{init:function(_7c5,_7c6){
var _7c7=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_7c5);
_7c7.css("vertical-align","middle")._outerHeight(_7c6.height);
return _7c7;
},getValue:function(_7c8){
return $(_7c8).val();
},setValue:function(_7c9,_7ca){
$(_7c9).val(_7ca);
},resize:function(_7cb,_7cc){
$(_7cb)._outerWidth(_7cc);
}},checkbox:{init:function(_7cd,_7ce){
var _7cf=$("<input type=\"checkbox\">").appendTo(_7cd);
_7cf.val(_7ce.on);
_7cf.attr("offval",_7ce.off);
return _7cf;
},getValue:function(_7d0){
if($(_7d0).is(":checked")){
return $(_7d0).val();
}else{
return $(_7d0).attr("offval");
}
},setValue:function(_7d1,_7d2){
var _7d3=false;
if($(_7d1).val()==_7d2){
_7d3=true;
}
$(_7d1)._propAttr("checked",_7d3);
}},validatebox:{init:function(_7d4,_7d5){
var _7d6=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_7d4);
_7d6.validatebox(_7d5);
return _7d6;
},destroy:function(_7d7){
$(_7d7).validatebox("destroy");
},getValue:function(_7d8){
return $(_7d8).val();
},setValue:function(_7d9,_7da){
$(_7d9).val(_7da);
},resize:function(_7db,_7dc){
$(_7db)._outerWidth(_7dc)._outerHeight($.fn.datagrid.defaults.editorHeight);
}}});
$.fn.datagrid.methods={options:function(jq){
var _7dd=$.data(jq[0],"datagrid").options;
var _7de=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_7dd,{width:_7de.width,height:_7de.height,closed:_7de.closed,collapsed:_7de.collapsed,minimized:_7de.minimized,maximized:_7de.maximized});
return opts;
},setSelectionState:function(jq){
return jq.each(function(){
_716(this);
});
},createStyleSheet:function(jq){
return _634(jq[0]);
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_7df){
return _68b(jq[0],_7df);
},getColumnOption:function(jq,_7e0){
return _68c(jq[0],_7e0);
},resize:function(jq,_7e1){
return jq.each(function(){
_643(this,_7e1);
});
},load:function(jq,_7e2){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7e2=="string"){
opts.url=_7e2;
_7e2=null;
}
opts.pageNumber=1;
var _7e3=$(this).datagrid("getPager");
_7e3.pagination("refresh",{pageNumber:1});
_6c8(this,_7e2);
});
},reload:function(jq,_7e4){
return jq.each(function(){
var opts=$(this).datagrid("options");
if(typeof _7e4=="string"){
opts.url=_7e4;
_7e4=null;
}
_6c8(this,_7e4);
});
},reloadFooter:function(jq,_7e5){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_7e5){
$.data(this,"datagrid").footer=_7e5;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _7e6=$(this).datagrid("getPanel");
if(!_7e6.children("div.datagrid-mask").length){
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_7e6);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_7e6);
msg._outerHeight(40);
msg.css({marginLeft:(-msg.outerWidth()/2),lineHeight:(msg.height()+"px")});
}
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _7e7=$(this).datagrid("getPanel");
_7e7.children("div.datagrid-mask-msg").remove();
_7e7.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_6d5(this);
});
},fixColumnSize:function(jq,_7e8){
return jq.each(function(){
_6f3(this,_7e8);
});
},fixRowHeight:function(jq,_7e9){
return jq.each(function(){
_659(this,_7e9);
});
},freezeRow:function(jq,_7ea){
return jq.each(function(){
_666(this,_7ea);
});
},autoSizeColumn:function(jq,_7eb){
return jq.each(function(){
_6e7(this,_7eb);
});
},loadData:function(jq,data){
return jq.each(function(){
_6c9(this,data);
_795(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _71e(jq[0],id);
},getChecked:function(jq){
return _724(jq[0]);
},getSelected:function(jq){
var rows=_721(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _721(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _7ec=$.data(this,"datagrid");
var _7ed=_7ec.selectedRows;
var _7ee=_7ec.checkedRows;
_7ed.splice(0,_7ed.length);
_735(this);
if(_7ec.options.checkOnSelect){
_7ee.splice(0,_7ee.length);
}
});
},clearChecked:function(jq){
return jq.each(function(){
var _7ef=$.data(this,"datagrid");
var _7f0=_7ef.selectedRows;
var _7f1=_7ef.checkedRows;
_7f1.splice(0,_7f1.length);
_69e(this);
if(_7ef.options.selectOnCheck){
_7f0.splice(0,_7f0.length);
}
});
},scrollTo:function(jq,_7f2){
return jq.each(function(){
_727(this,_7f2);
});
},highlightRow:function(jq,_7f3){
return jq.each(function(){
_6ab(this,_7f3);
_727(this,_7f3);
});
},selectAll:function(jq){
return jq.each(function(){
_73a(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_735(this);
});
},selectRow:function(jq,_7f4){
return jq.each(function(){
_6b2(this,_7f4);
});
},selectRecord:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
if(opts.idField){
var _7f5=_71e(this,id);
if(_7f5>=0){
$(this).datagrid("selectRow",_7f5);
}
}
});
},unselectRow:function(jq,_7f6){
return jq.each(function(){
_6b3(this,_7f6);
});
},checkRow:function(jq,_7f7){
return jq.each(function(){
_6af(this,_7f7);
});
},uncheckRow:function(jq,_7f8){
return jq.each(function(){
_6b0(this,_7f8);
});
},checkAll:function(jq){
return jq.each(function(){
_69d(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_69e(this);
});
},beginEdit:function(jq,_7f9){
return jq.each(function(){
_754(this,_7f9);
});
},endEdit:function(jq,_7fa){
return jq.each(function(){
_75a(this,_7fa,false);
});
},cancelEdit:function(jq,_7fb){
return jq.each(function(){
_75a(this,_7fb,true);
});
},getEditors:function(jq,_7fc){
return _767(jq[0],_7fc);
},getEditor:function(jq,_7fd){
return _76b(jq[0],_7fd);
},refreshRow:function(jq,_7fe){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_7fe);
});
},validateRow:function(jq,_7ff){
return _759(jq[0],_7ff);
},updateRow:function(jq,_800){
return jq.each(function(){
_78f(this,_800);
});
},appendRow:function(jq,row){
return jq.each(function(){
_78c(this,row);
});
},insertRow:function(jq,_801){
return jq.each(function(){
_788(this,_801);
});
},deleteRow:function(jq,_802){
return jq.each(function(){
_782(this,_802);
});
},getChanges:function(jq,_803){
return _77c(jq[0],_803);
},acceptChanges:function(jq){
return jq.each(function(){
_799(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_79b(this);
});
},mergeCells:function(jq,_804){
return jq.each(function(){
_7ad(this,_804);
});
},showColumn:function(jq,_805){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_805);
if(col.hidden){
col.hidden=false;
$(this).datagrid("getPanel").find("td[field=\""+_805+"\"]").show();
_6ca(this,_805,1);
$(this).datagrid("fitColumns");
}
});
},hideColumn:function(jq,_806){
return jq.each(function(){
var col=$(this).datagrid("getColumnOption",_806);
if(!col.hidden){
col.hidden=true;
$(this).datagrid("getPanel").find("td[field=\""+_806+"\"]").hide();
_6ca(this,_806,-1);
$(this).datagrid("fitColumns");
}
});
},sort:function(jq,_807){
return jq.each(function(){
_69f(this,_807);
});
},gotoPage:function(jq,_808){
return jq.each(function(){
var _809=this;
var page,cb;
if(typeof _808=="object"){
page=_808.page;
cb=_808.callback;
}else{
page=_808;
}
$(_809).datagrid("options").pageNumber=page;
$(_809).datagrid("getPager").pagination("refresh",{pageNumber:page});
_6c8(_809,null,function(){
if(cb){
cb.call(_809,page);
}
});
});
}};
$.fn.datagrid.parseOptions=function(_80a){
var t=$(_80a);
return $.extend({},$.fn.panel.parseOptions(_80a),$.parser.parseOptions(_80a,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{sharedStyleSheet:"boolean",fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",ctrlSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{multiSort:"boolean",remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
$.fn.datagrid.parseData=function(_80b){
var t=$(_80b);
var data={total:0,rows:[]};
var _80c=t.datagrid("getColumnFields",true).concat(t.datagrid("getColumnFields",false));
t.find("tbody tr").each(function(){
data.total++;
var row={};
$.extend(row,$.parser.parseOptions(this,["iconCls","state"]));
for(var i=0;i<_80c.length;i++){
row[_80c[i]]=$(this).find("td:eq("+i+")").html();
}
data.rows.push(row);
});
return data;
};
var _80d={render:function(_80e,_80f,_810){
var rows=$(_80e).datagrid("getRows");
$(_80f).html(this.renderTable(_80e,0,rows,_810));
},renderFooter:function(_811,_812,_813){
var opts=$.data(_811,"datagrid").options;
var rows=$.data(_811,"datagrid").footer||[];
var _814=$(_811).datagrid("getColumnFields",_813);
var _815=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_815.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_815.push(this.renderRow.call(this,_811,_814,_813,i,rows[i]));
_815.push("</tr>");
}
_815.push("</tbody></table>");
$(_812).html(_815.join(""));
},renderTable:function(_816,_817,rows,_818){
var _819=$.data(_816,"datagrid");
var opts=_819.options;
if(_818){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return "";
}
}
var _81a=$(_816).datagrid("getColumnFields",_818);
var _81b=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var css=opts.rowStyler?opts.rowStyler.call(_816,_817,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_817%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _81c=cs.s?"style=\""+cs.s+"\"":"";
var _81d=_819.rowIdPrefix+"-"+(_818?1:2)+"-"+_817;
_81b.push("<tr id=\""+_81d+"\" datagrid-row-index=\""+_817+"\" "+cls+" "+_81c+">");
_81b.push(this.renderRow.call(this,_816,_81a,_818,_817,row));
_81b.push("</tr>");
_817++;
}
_81b.push("</tbody></table>");
return _81b.join("");
},renderRow:function(_81e,_81f,_820,_821,_822){
var opts=$.data(_81e,"datagrid").options;
var cc=[];
if(_820&&opts.rownumbers){
var _823=_821+1;
if(opts.pagination){
_823+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_823+"</div></td>");
}
for(var i=0;i<_81f.length;i++){
var _824=_81f[i];
var col=$(_81e).datagrid("getColumnOption",_824);
if(col){
var _825=_822[_824];
var css=col.styler?(col.styler(_825,_822,_821)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _826=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_824+"\" "+cls+" "+_826+">");
var _826="";
if(!col.checkbox){
if(col.align){
_826+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_826+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_826+="height:auto;";
}
}
}
cc.push("<div style=\""+_826+"\" ");
cc.push(col.checkbox?"class=\"datagrid-cell-check\"":"class=\"datagrid-cell "+col.cellClass+"\"");
cc.push(">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" "+(_822.checked?"checked=\"checked\"":""));
cc.push(" name=\""+_824+"\" value=\""+(_825!=undefined?_825:"")+"\">");
}else{
if(col.formatter){
cc.push(col.formatter(_825,_822,_821));
}else{
cc.push(_825);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},getStyleValue:function(css){
var _827="";
var _828="";
if(typeof css=="string"){
_828=css;
}else{
if(css){
_827=css["class"]||"";
_828=css["style"]||"";
}
}
return {c:_827,s:_828};
},refreshRow:function(_829,_82a){
this.updateRow.call(this,_829,_82a,{});
},updateRow:function(_82b,_82c,row){
var opts=$.data(_82b,"datagrid").options;
var _82d=opts.finder.getRow(_82b,_82c);
$.extend(_82d,row);
var cs=_82e.call(this,_82c);
var _82f=cs.s;
var cls="datagrid-row "+(_82c%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c;
function _82e(_830){
var css=opts.rowStyler?opts.rowStyler.call(_82b,_830,_82d):"";
return this.getStyleValue(css);
};
function _831(_832){
var _833=$(_82b).datagrid("getColumnFields",_832);
var tr=opts.finder.getTr(_82b,_82c,"body",(_832?1:2));
var _834=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_82b,_833,_832,_82c,_82d));
tr.attr("style",_82f).attr("class",cls);
if(_834){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_831.call(this,true);
_831.call(this,false);
$(_82b).datagrid("fixRowHeight",_82c);
},insertRow:function(_835,_836,row){
var _837=$.data(_835,"datagrid");
var opts=_837.options;
var dc=_837.dc;
var data=_837.data;
if(_836==undefined||_836==null){
_836=data.rows.length;
}
if(_836>data.rows.length){
_836=data.rows.length;
}
function _838(_839){
var _83a=_839?1:2;
for(var i=data.rows.length-1;i>=_836;i--){
var tr=opts.finder.getTr(_835,i,"body",_83a);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_837.rowIdPrefix+"-"+_83a+"-"+(i+1));
if(_839&&opts.rownumbers){
var _83b=i+2;
if(opts.pagination){
_83b+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_83b);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i+1)%2?"datagrid-row-alt":"");
}
}
};
function _83c(_83d){
var _83e=_83d?1:2;
var _83f=$(_835).datagrid("getColumnFields",_83d);
var _840=_837.rowIdPrefix+"-"+_83e+"-"+_836;
var tr="<tr id=\""+_840+"\" class=\"datagrid-row\" datagrid-row-index=\""+_836+"\"></tr>";
if(_836>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_835,"","last",_83e).after(tr);
}else{
var cc=_83d?dc.body1:dc.body2;
cc.html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_835,_836+1,"body",_83e).before(tr);
}
};
_838.call(this,true);
_838.call(this,false);
_83c.call(this,true);
_83c.call(this,false);
data.total+=1;
data.rows.splice(_836,0,row);
this.setEmptyMsg(_835);
this.refreshRow.call(this,_835,_836);
},deleteRow:function(_841,_842){
var _843=$.data(_841,"datagrid");
var opts=_843.options;
var data=_843.data;
function _844(_845){
var _846=_845?1:2;
for(var i=_842+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_841,i,"body",_846);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_843.rowIdPrefix+"-"+_846+"-"+(i-1));
if(_845&&opts.rownumbers){
var _847=i;
if(opts.pagination){
_847+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_847);
}
if(opts.striped){
tr.removeClass("datagrid-row-alt").addClass((i-1)%2?"datagrid-row-alt":"");
}
}
};
opts.finder.getTr(_841,_842).remove();
_844.call(this,true);
_844.call(this,false);
data.total-=1;
data.rows.splice(_842,1);
this.setEmptyMsg(_841);
},onBeforeRender:function(_848,rows){
},onAfterRender:function(_849){
var _84a=$.data(_849,"datagrid");
var opts=_84a.options;
if(opts.showFooter){
var _84b=$(_849).datagrid("getPanel").find("div.datagrid-footer");
_84b.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
this.setEmptyMsg(_849);
},setEmptyMsg:function(_84c){
var _84d=$.data(_84c,"datagrid");
var opts=_84d.options;
var _84e=opts.finder.getRows(_84c).length==0;
if(_84e){
this.renderEmptyRow(_84c);
}
if(opts.emptyMsg){
if(_84e){
var h=_84d.dc.header2.parent().outerHeight();
var d=$("<div class=\"datagrid-empty\"></div>").appendTo(_84d.dc.view);
d.html(opts.emptyMsg).css("top",h+"px");
}else{
_84d.dc.view.children(".datagrid-empty").remove();
}
}
},renderEmptyRow:function(_84f){
var cols=$.map($(_84f).datagrid("getColumnFields"),function(_850){
return $(_84f).datagrid("getColumnOption",_850);
});
$.map(cols,function(col){
col.formatter1=col.formatter;
col.styler1=col.styler;
col.formatter=col.styler=undefined;
});
var _851=$.data(_84f,"datagrid").dc.body2;
_851.html(this.renderTable(_84f,0,[{}],false));
_851.find("tbody *").css({height:1,borderColor:"transparent",background:"transparent"});
var tr=_851.find(".datagrid-row");
tr.removeClass("datagrid-row").removeAttr("datagrid-row-index");
tr.find(".datagrid-cell,.datagrid-cell-check").empty();
$.map(cols,function(col){
col.formatter=col.formatter1;
col.styler=col.styler1;
col.formatter1=col.styler1=undefined;
});
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{sharedStyleSheet:false,frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,data:null,loadMsg:"Processing, please wait ...",emptyMsg:"",rownumbers:false,singleSelect:false,ctrlSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",multiSort:false,remoteSort:true,showHeader:true,showFooter:false,scrollbarSize:18,rownumberWidth:30,editorHeight:24,headerEvents:{mouseover:_697(true),mouseout:_697(false),click:_69b,dblclick:_6a0,contextmenu:_6a3},rowEvents:{mouseover:_6a5(true),mouseout:_6a5(false),click:_6ac,dblclick:_6b6,contextmenu:_6ba},rowStyler:function(_852,_853){
},loader:function(_854,_855,_856){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_854,dataType:"json",success:function(data){
_855(data);
},error:function(){
_856.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},editors:_7c4,finder:{getTr:function(_857,_858,type,_859){
type=type||"body";
_859=_859||0;
var _85a=$.data(_857,"datagrid");
var dc=_85a.dc;
var opts=_85a.options;
if(_859==0){
var tr1=opts.finder.getTr(_857,_858,type,1);
var tr2=opts.finder.getTr(_857,_858,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_85a.rowIdPrefix+"-"+_859+"-"+_858);
if(!tr.length){
tr=(_859==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_858+"]");
}
return tr;
}else{
if(type=="footer"){
return (_859==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_858+"]");
}else{
if(type=="selected"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-checked");
}else{
if(type=="editing"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-editing");
}else{
if(type=="last"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_859==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_859==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
}
}
}
},getRow:function(_85b,p){
var _85c=(typeof p=="object")?p.attr("datagrid-row-index"):p;
return $.data(_85b,"datagrid").data.rows[parseInt(_85c)];
},getRows:function(_85d){
return $(_85d).datagrid("getRows");
}},view:_80d,onBeforeLoad:function(_85e){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_85f,_860){
},onDblClickRow:function(_861,_862){
},onClickCell:function(_863,_864,_865){
},onDblClickCell:function(_866,_867,_868){
},onBeforeSortColumn:function(sort,_869){
},onSortColumn:function(sort,_86a){
},onResizeColumn:function(_86b,_86c){
},onBeforeSelect:function(_86d,_86e){
},onSelect:function(_86f,_870){
},onBeforeUnselect:function(_871,_872){
},onUnselect:function(_873,_874){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onBeforeCheck:function(_875,_876){
},onCheck:function(_877,_878){
},onBeforeUncheck:function(_879,_87a){
},onUncheck:function(_87b,_87c){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_87d,_87e){
},onBeginEdit:function(_87f,_880){
},onEndEdit:function(_881,_882,_883){
},onAfterEdit:function(_884,_885,_886){
},onCancelEdit:function(_887,_888){
},onHeaderContextMenu:function(e,_889){
},onRowContextMenu:function(e,_88a,_88b){
}});
})(jQuery);
(function($){
var _88c;
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.datagrid-view,div.combo-panel");
if(p.length){
return;
}
_88d(_88c);
_88c=undefined;
});
function _88e(_88f){
var _890=$.data(_88f,"propertygrid");
var opts=$.data(_88f,"propertygrid").options;
$(_88f).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?opts.groupView:opts.view),onBeforeEdit:function(_891,row){
if(opts.onBeforeEdit.call(_88f,_891,row)==false){
return false;
}
var dg=$(this);
var row=dg.datagrid("getRows")[_891];
var col=dg.datagrid("getColumnOption","value");
col.editor=row.editor;
},onClickCell:function(_892,_893,_894){
if(_88c!=this){
_88d(_88c);
_88c=this;
}
if(opts.editIndex!=_892){
_88d(_88c);
$(this).datagrid("beginEdit",_892);
var ed=$(this).datagrid("getEditor",{index:_892,field:_893});
if(!ed){
ed=$(this).datagrid("getEditor",{index:_892,field:"value"});
}
if(ed){
var t=$(ed.target);
var _895=t.data("textbox")?t.textbox("textbox"):t;
_895.focus();
opts.editIndex=_892;
}
}
opts.onClickCell.call(_88f,_892,_893,_894);
},loadFilter:function(data){
_88d(this);
return opts.loadFilter.call(this,data);
}}));
};
function _88d(_896){
var t=$(_896);
if(!t.length){
return;
}
var opts=$.data(_896,"propertygrid").options;
opts.finder.getTr(_896,null,"editing").each(function(){
var _897=parseInt($(this).attr("datagrid-row-index"));
if(t.datagrid("validateRow",_897)){
t.datagrid("endEdit",_897);
}else{
t.datagrid("cancelEdit",_897);
}
});
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_898,_899){
if(typeof _898=="string"){
var _89a=$.fn.propertygrid.methods[_898];
if(_89a){
return _89a(this,_899);
}else{
return this.datagrid(_898,_899);
}
}
_898=_898||{};
return this.each(function(){
var _89b=$.data(this,"propertygrid");
if(_89b){
$.extend(_89b.options,_898);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_898);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_88e(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_89c){
return $.extend({},$.fn.datagrid.parseOptions(_89c),$.parser.parseOptions(_89c,[{showGroup:"boolean"}]));
};
var _89d=$.extend({},$.fn.datagrid.defaults.view,{render:function(_89e,_89f,_8a0){
var _8a1=[];
var _8a2=this.groups;
for(var i=0;i<_8a2.length;i++){
_8a1.push(this.renderGroup.call(this,_89e,i,_8a2[i],_8a0));
}
$(_89f).html(_8a1.join(""));
},renderGroup:function(_8a3,_8a4,_8a5,_8a6){
var _8a7=$.data(_8a3,"datagrid");
var opts=_8a7.options;
var _8a8=$(_8a3).datagrid("getColumnFields",_8a6);
var _8a9=[];
_8a9.push("<div class=\"datagrid-group\" group-index="+_8a4+">");
if((_8a6&&(opts.rownumbers||opts.frozenColumns.length))||(!_8a6&&!(opts.rownumbers||opts.frozenColumns.length))){
_8a9.push("<span class=\"datagrid-group-expander\">");
_8a9.push("<span class=\"datagrid-row-expander datagrid-row-collapse\">&nbsp;</span>");
_8a9.push("</span>");
}
if(!_8a6){
_8a9.push("<span class=\"datagrid-group-title\">");
_8a9.push(opts.groupFormatter.call(_8a3,_8a5.value,_8a5.rows));
_8a9.push("</span>");
}
_8a9.push("</div>");
_8a9.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
var _8aa=_8a5.startIndex;
for(var j=0;j<_8a5.rows.length;j++){
var css=opts.rowStyler?opts.rowStyler.call(_8a3,_8aa,_8a5.rows[j]):"";
var _8ab="";
var _8ac="";
if(typeof css=="string"){
_8ac=css;
}else{
if(css){
_8ab=css["class"]||"";
_8ac=css["style"]||"";
}
}
var cls="class=\"datagrid-row "+(_8aa%2&&opts.striped?"datagrid-row-alt ":" ")+_8ab+"\"";
var _8ad=_8ac?"style=\""+_8ac+"\"":"";
var _8ae=_8a7.rowIdPrefix+"-"+(_8a6?1:2)+"-"+_8aa;
_8a9.push("<tr id=\""+_8ae+"\" datagrid-row-index=\""+_8aa+"\" "+cls+" "+_8ad+">");
_8a9.push(this.renderRow.call(this,_8a3,_8a8,_8a6,_8aa,_8a5.rows[j]));
_8a9.push("</tr>");
_8aa++;
}
_8a9.push("</tbody></table>");
return _8a9.join("");
},bindEvents:function(_8af){
var _8b0=$.data(_8af,"datagrid");
var dc=_8b0.dc;
var body=dc.body1.add(dc.body2);
var _8b1=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
body.unbind("click").bind("click",function(e){
var tt=$(e.target);
var _8b2=tt.closest("span.datagrid-row-expander");
if(_8b2.length){
var _8b3=_8b2.closest("div.datagrid-group").attr("group-index");
if(_8b2.hasClass("datagrid-row-collapse")){
$(_8af).datagrid("collapseGroup",_8b3);
}else{
$(_8af).datagrid("expandGroup",_8b3);
}
}else{
_8b1(e);
}
e.stopPropagation();
});
},onBeforeRender:function(_8b4,rows){
var _8b5=$.data(_8b4,"datagrid");
var opts=_8b5.options;
_8b6();
var _8b7=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _8b8=_8b9(row[opts.groupField]);
if(!_8b8){
_8b8={value:row[opts.groupField],rows:[row]};
_8b7.push(_8b8);
}else{
_8b8.rows.push(row);
}
}
var _8ba=0;
var _8bb=[];
for(var i=0;i<_8b7.length;i++){
var _8b8=_8b7[i];
_8b8.startIndex=_8ba;
_8ba+=_8b8.rows.length;
_8bb=_8bb.concat(_8b8.rows);
}
_8b5.data.rows=_8bb;
this.groups=_8b7;
var that=this;
setTimeout(function(){
that.bindEvents(_8b4);
},0);
function _8b9(_8bc){
for(var i=0;i<_8b7.length;i++){
var _8bd=_8b7[i];
if(_8bd.value==_8bc){
return _8bd;
}
}
return null;
};
function _8b6(){
if(!$("#datagrid-group-style").length){
$("head").append("<style id=\"datagrid-group-style\">"+".datagrid-group{height:"+opts.groupHeight+"px;overflow:hidden;font-weight:bold;border-bottom:1px solid #ccc;}"+".datagrid-group-title,.datagrid-group-expander{display:inline-block;vertical-align:bottom;height:100%;line-height:"+opts.groupHeight+"px;padding:0 4px;}"+".datagrid-group-expander{width:"+opts.expanderWidth+"px;text-align:center;padding:0}"+".datagrid-row-expander{margin:"+Math.floor((opts.groupHeight-16)/2)+"px 0;display:inline-block;width:16px;height:16px;cursor:pointer}"+"</style>");
}
};
}});
$.extend($.fn.datagrid.methods,{groups:function(jq){
return jq.datagrid("options").view.groups;
},expandGroup:function(jq,_8be){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8bf=view.find(_8be!=undefined?"div.datagrid-group[group-index=\""+_8be+"\"]":"div.datagrid-group");
var _8c0=_8bf.find("span.datagrid-row-expander");
if(_8c0.hasClass("datagrid-row-expand")){
_8c0.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_8bf.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_8c1){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
var _8c2=view.find(_8c1!=undefined?"div.datagrid-group[group-index=\""+_8c1+"\"]":"div.datagrid-group");
var _8c3=_8c2.find("span.datagrid-row-expander");
if(_8c3.hasClass("datagrid-row-collapse")){
_8c3.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_8c2.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.extend(_89d,{refreshGroupTitle:function(_8c4,_8c5){
var _8c6=$.data(_8c4,"datagrid");
var opts=_8c6.options;
var dc=_8c6.dc;
var _8c7=this.groups[_8c5];
var span=dc.body2.children("div.datagrid-group[group-index="+_8c5+"]").find("span.datagrid-group-title");
span.html(opts.groupFormatter.call(_8c4,_8c7.value,_8c7.rows));
},insertRow:function(_8c8,_8c9,row){
var _8ca=$.data(_8c8,"datagrid");
var opts=_8ca.options;
var dc=_8ca.dc;
var _8cb=null;
var _8cc;
if(!_8ca.data.rows.length){
$(_8c8).datagrid("loadData",[row]);
return;
}
for(var i=0;i<this.groups.length;i++){
if(this.groups[i].value==row[opts.groupField]){
_8cb=this.groups[i];
_8cc=i;
break;
}
}
if(_8cb){
if(_8c9==undefined||_8c9==null){
_8c9=_8ca.data.rows.length;
}
if(_8c9<_8cb.startIndex){
_8c9=_8cb.startIndex;
}else{
if(_8c9>_8cb.startIndex+_8cb.rows.length){
_8c9=_8cb.startIndex+_8cb.rows.length;
}
}
$.fn.datagrid.defaults.view.insertRow.call(this,_8c8,_8c9,row);
if(_8c9>=_8cb.startIndex+_8cb.rows.length){
_8cd(_8c9,true);
_8cd(_8c9,false);
}
_8cb.rows.splice(_8c9-_8cb.startIndex,0,row);
}else{
_8cb={value:row[opts.groupField],rows:[row],startIndex:_8ca.data.rows.length};
_8cc=this.groups.length;
dc.body1.append(this.renderGroup.call(this,_8c8,_8cc,_8cb,true));
dc.body2.append(this.renderGroup.call(this,_8c8,_8cc,_8cb,false));
this.groups.push(_8cb);
_8ca.data.rows.push(row);
}
this.refreshGroupTitle(_8c8,_8cc);
function _8cd(_8ce,_8cf){
var _8d0=_8cf?1:2;
var _8d1=opts.finder.getTr(_8c8,_8ce-1,"body",_8d0);
var tr=opts.finder.getTr(_8c8,_8ce,"body",_8d0);
tr.insertAfter(_8d1);
};
},updateRow:function(_8d2,_8d3,row){
var opts=$.data(_8d2,"datagrid").options;
$.fn.datagrid.defaults.view.updateRow.call(this,_8d2,_8d3,row);
var tb=opts.finder.getTr(_8d2,_8d3,"body",2).closest("table.datagrid-btable");
var _8d4=parseInt(tb.prev().attr("group-index"));
this.refreshGroupTitle(_8d2,_8d4);
},deleteRow:function(_8d5,_8d6){
var _8d7=$.data(_8d5,"datagrid");
var opts=_8d7.options;
var dc=_8d7.dc;
var body=dc.body1.add(dc.body2);
var tb=opts.finder.getTr(_8d5,_8d6,"body",2).closest("table.datagrid-btable");
var _8d8=parseInt(tb.prev().attr("group-index"));
$.fn.datagrid.defaults.view.deleteRow.call(this,_8d5,_8d6);
var _8d9=this.groups[_8d8];
if(_8d9.rows.length>1){
_8d9.rows.splice(_8d6-_8d9.startIndex,1);
this.refreshGroupTitle(_8d5,_8d8);
}else{
body.children("div.datagrid-group[group-index="+_8d8+"]").remove();
for(var i=_8d8+1;i<this.groups.length;i++){
body.children("div.datagrid-group[group-index="+i+"]").attr("group-index",i-1);
}
this.groups.splice(_8d8,1);
}
var _8d6=0;
for(var i=0;i<this.groups.length;i++){
var _8d9=this.groups[i];
_8d9.startIndex=_8d6;
_8d6+=_8d9.rows.length;
}
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{groupHeight:21,expanderWidth:16,singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupView:_89d,groupField:"group",groupFormatter:function(_8da,rows){
return _8da;
}});
})(jQuery);
(function($){
function _8db(_8dc){
var _8dd=$.data(_8dc,"treegrid");
var opts=_8dd.options;
$(_8dc).datagrid($.extend({},opts,{url:null,data:null,loader:function(){
return false;
},onBeforeLoad:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_8de,_8df){
_8ec(_8dc);
opts.onResizeColumn.call(_8dc,_8de,_8df);
},onBeforeSortColumn:function(sort,_8e0){
if(opts.onBeforeSortColumn.call(_8dc,sort,_8e0)==false){
return false;
}
},onSortColumn:function(sort,_8e1){
opts.sortName=sort;
opts.sortOrder=_8e1;
if(opts.remoteSort){
_8eb(_8dc);
}else{
var data=$(_8dc).treegrid("getData");
_918(_8dc,null,data);
}
opts.onSortColumn.call(_8dc,sort,_8e1);
},onClickCell:function(_8e2,_8e3){
opts.onClickCell.call(_8dc,_8e3,find(_8dc,_8e2));
},onDblClickCell:function(_8e4,_8e5){
opts.onDblClickCell.call(_8dc,_8e5,find(_8dc,_8e4));
},onRowContextMenu:function(e,_8e6){
opts.onContextMenu.call(_8dc,e,find(_8dc,_8e6));
}}));
var _8e7=$.data(_8dc,"datagrid").options;
opts.columns=_8e7.columns;
opts.frozenColumns=_8e7.frozenColumns;
_8dd.dc=$.data(_8dc,"datagrid").dc;
if(opts.pagination){
var _8e8=$(_8dc).datagrid("getPager");
_8e8.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_8e9,_8ea){
opts.pageNumber=_8e9;
opts.pageSize=_8ea;
_8eb(_8dc);
}});
opts.pageSize=_8e8.pagination("options").pageSize;
}
};
function _8ec(_8ed,_8ee){
var opts=$.data(_8ed,"datagrid").options;
var dc=$.data(_8ed,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_8ee!=undefined){
var _8ef=_8f0(_8ed,_8ee);
for(var i=0;i<_8ef.length;i++){
_8f1(_8ef[i][opts.idField]);
}
}
}
$(_8ed).datagrid("fixRowHeight",_8ee);
function _8f1(_8f2){
var tr1=opts.finder.getTr(_8ed,_8f2,"body",1);
var tr2=opts.finder.getTr(_8ed,_8f2,"body",2);
tr1.css("height","");
tr2.css("height","");
var _8f3=Math.max(tr1.height(),tr2.height());
tr1.css("height",_8f3);
tr2.css("height",_8f3);
};
};
function _8f4(_8f5){
var dc=$.data(_8f5,"datagrid").dc;
var opts=$.data(_8f5,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _8f6(_8f7){
return function(e){
$.fn.datagrid.defaults.rowEvents[_8f7?"mouseover":"mouseout"](e);
var tt=$(e.target);
var fn=_8f7?"addClass":"removeClass";
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt[fn]("tree-expanded-hover"):tt[fn]("tree-collapsed-hover");
}
};
};
function _8f8(e){
var tt=$(e.target);
if(tt.hasClass("tree-hit")){
_8f9(_8fa);
}else{
if(tt.hasClass("tree-checkbox")){
_8f9(_8fb);
}else{
$.fn.datagrid.defaults.rowEvents.click(e);
}
}
function _8f9(fn){
var tr=tt.closest("tr.datagrid-row");
var _8fc=tr.closest("div.datagrid-view").children(".datagrid-f")[0];
fn(_8fc,tr.attr("node-id"));
};
};
function _8fb(_8fd,_8fe,_8ff,_900){
var _901=$.data(_8fd,"treegrid");
var _902=_901.checkedRows;
var opts=_901.options;
if(!opts.checkbox){
return;
}
var row=find(_8fd,_8fe);
if(!row.checkState){
return;
}
var tr=opts.finder.getTr(_8fd,_8fe);
var ck=tr.find(".tree-checkbox");
if(_8ff==undefined){
if(ck.hasClass("tree-checkbox1")){
_8ff=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_8ff=true;
}else{
if(row._checked==undefined){
row._checked=ck.hasClass("tree-checkbox1");
}
_8ff=!row._checked;
}
}
}
row._checked=_8ff;
if(_8ff){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_900){
if(opts.onBeforeCheckNode.call(_8fd,row,_8ff)==false){
return;
}
}
if(opts.cascadeCheck){
_903(_8fd,row,_8ff);
_904(_8fd,row);
}else{
_905(_8fd,row,_8ff?"1":"0");
}
if(!_900){
opts.onCheckNode.call(_8fd,row,_8ff);
}
};
function _905(_906,row,flag){
var _907=$.data(_906,"treegrid");
var _908=_907.checkedRows;
var opts=_907.options;
if(!row.checkState||flag==undefined){
return;
}
var tr=opts.finder.getTr(_906,row[opts.idField]);
var ck=tr.find(".tree-checkbox");
if(!ck.length){
return;
}
row.checkState=["unchecked","checked","indeterminate"][flag];
row.checked=(row.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+flag);
if(flag==0){
$.easyui.removeArrayItem(_908,opts.idField,row[opts.idField]);
}else{
$.easyui.addArrayItem(_908,opts.idField,row);
}
};
function _903(_909,row,_90a){
var flag=_90a?1:0;
_905(_909,row,flag);
$.easyui.forEach(row.children||[],true,function(r){
_905(_909,r,flag);
});
};
function _904(_90b,row){
var opts=$.data(_90b,"treegrid").options;
var prow=_90c(_90b,row[opts.idField]);
if(prow){
_905(_90b,prow,_90d(prow));
_904(_90b,prow);
}
};
function _90d(row){
var len=0;
var c0=0;
var c1=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var flag=0;
if(c0==len){
flag=0;
}else{
if(c1==len){
flag=1;
}else{
flag=2;
}
}
return flag;
};
function _90e(_90f,_910){
var opts=$.data(_90f,"treegrid").options;
if(!opts.checkbox){
return;
}
var row=find(_90f,_910);
var tr=opts.finder.getTr(_90f,_910);
var ck=tr.find(".tree-checkbox");
if(opts.view.hasCheckbox(_90f,row)){
if(!ck.length){
row.checkState=row.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(tr.find(".tree-title"));
}
if(row.checkState=="checked"){
_8fb(_90f,_910,true,true);
}else{
if(row.checkState=="unchecked"){
_8fb(_90f,_910,false,true);
}else{
var flag=_90d(row);
if(flag===0){
_8fb(_90f,_910,false,true);
}else{
if(flag===1){
_8fb(_90f,_910,true,true);
}
}
}
}
}else{
ck.remove();
row.checkState=undefined;
row.checked=undefined;
_904(_90f,row);
}
};
function _911(_912,_913){
var opts=$.data(_912,"treegrid").options;
var tr1=opts.finder.getTr(_912,_913,"body",1);
var tr2=opts.finder.getTr(_912,_913,"body",2);
var _914=$(_912).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _915=$(_912).datagrid("getColumnFields",false).length;
_916(tr1,_914);
_916(tr2,_915);
function _916(tr,_917){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_917+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _918(_919,_91a,data,_91b,_91c){
var _91d=$.data(_919,"treegrid");
var opts=_91d.options;
var dc=_91d.dc;
data=opts.loadFilter.call(_919,data,_91a);
var node=find(_919,_91a);
if(node){
var _91e=opts.finder.getTr(_919,_91a,"body",1);
var _91f=opts.finder.getTr(_919,_91a,"body",2);
var cc1=_91e.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_91f.next("tr.treegrid-tr-tree").children("td").children("div");
if(!_91b){
node.children=[];
}
}else{
var cc1=dc.body1;
var cc2=dc.body2;
if(!_91b){
_91d.data=[];
}
}
if(!_91b){
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_919,_91a,data);
}
opts.view.render.call(opts.view,_919,cc1,true);
opts.view.render.call(opts.view,_919,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_919,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_919,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_919);
}
if(!_91a&&opts.pagination){
var _920=$.data(_919,"treegrid").total;
var _921=$(_919).datagrid("getPager");
if(_921.pagination("options").total!=_920){
_921.pagination({total:_920});
}
}
_8ec(_919);
_8f4(_919);
$(_919).treegrid("showLines");
$(_919).treegrid("setSelectionState");
$(_919).treegrid("autoSizeColumn");
if(!_91c){
opts.onLoadSuccess.call(_919,node,data);
}
};
function _8eb(_922,_923,_924,_925,_926){
var opts=$.data(_922,"treegrid").options;
var body=$(_922).datagrid("getPanel").find("div.datagrid-body");
if(_923==undefined&&opts.queryParams){
opts.queryParams.id=undefined;
}
if(_924){
opts.queryParams=_924;
}
var _927=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_927,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_927,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_922,_923);
if(opts.onBeforeLoad.call(_922,row,_927)==false){
return;
}
var _928=body.find("tr[node-id=\""+_923+"\"] span.tree-folder");
_928.addClass("tree-loading");
$(_922).treegrid("loading");
var _929=opts.loader.call(_922,_927,function(data){
_928.removeClass("tree-loading");
$(_922).treegrid("loaded");
_918(_922,_923,data,_925);
if(_926){
_926();
}
},function(){
_928.removeClass("tree-loading");
$(_922).treegrid("loaded");
opts.onLoadError.apply(_922,arguments);
if(_926){
_926();
}
});
if(_929==false){
_928.removeClass("tree-loading");
$(_922).treegrid("loaded");
}
};
function _92a(_92b){
var _92c=_92d(_92b);
return _92c.length?_92c[0]:null;
};
function _92d(_92e){
return $.data(_92e,"treegrid").data;
};
function _90c(_92f,_930){
var row=find(_92f,_930);
if(row._parentId){
return find(_92f,row._parentId);
}else{
return null;
}
};
function _8f0(_931,_932){
var data=$.data(_931,"treegrid").data;
if(_932){
var _933=find(_931,_932);
data=_933?(_933.children||[]):[];
}
var _934=[];
$.easyui.forEach(data,true,function(node){
_934.push(node);
});
return _934;
};
function _935(_936,_937){
var opts=$.data(_936,"treegrid").options;
var tr=opts.finder.getTr(_936,_937);
var node=tr.children("td[field=\""+opts.treeField+"\"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_938,_939){
var _93a=$.data(_938,"treegrid");
var opts=_93a.options;
var _93b=null;
$.easyui.forEach(_93a.data,true,function(node){
if(node[opts.idField]==_939){
_93b=node;
return false;
}
});
return _93b;
};
function _93c(_93d,_93e){
var opts=$.data(_93d,"treegrid").options;
var row=find(_93d,_93e);
var tr=opts.finder.getTr(_93d,_93e);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_93d,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_93d).treegrid("autoSizeColumn");
_8ec(_93d,_93e);
opts.onCollapse.call(_93d,row);
});
}else{
cc.hide();
$(_93d).treegrid("autoSizeColumn");
_8ec(_93d,_93e);
opts.onCollapse.call(_93d,row);
}
};
function _93f(_940,_941){
var opts=$.data(_940,"treegrid").options;
var tr=opts.finder.getTr(_940,_941);
var hit=tr.find("span.tree-hit");
var row=find(_940,_941);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_940,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _942=tr.next("tr.treegrid-tr-tree");
if(_942.length){
var cc=_942.children("td").children("div");
_943(cc);
}else{
_911(_940,row[opts.idField]);
var _942=tr.next("tr.treegrid-tr-tree");
var cc=_942.children("td").children("div");
cc.hide();
var _944=$.extend({},opts.queryParams||{});
_944.id=row[opts.idField];
_8eb(_940,row[opts.idField],_944,true,function(){
if(cc.is(":empty")){
_942.remove();
}else{
_943(cc);
}
});
}
function _943(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_940).treegrid("autoSizeColumn");
_8ec(_940,_941);
opts.onExpand.call(_940,row);
});
}else{
cc.show();
$(_940).treegrid("autoSizeColumn");
_8ec(_940,_941);
opts.onExpand.call(_940,row);
}
};
};
function _8fa(_945,_946){
var opts=$.data(_945,"treegrid").options;
var tr=opts.finder.getTr(_945,_946);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_93c(_945,_946);
}else{
_93f(_945,_946);
}
};
function _947(_948,_949){
var opts=$.data(_948,"treegrid").options;
var _94a=_8f0(_948,_949);
if(_949){
_94a.unshift(find(_948,_949));
}
for(var i=0;i<_94a.length;i++){
_93c(_948,_94a[i][opts.idField]);
}
};
function _94b(_94c,_94d){
var opts=$.data(_94c,"treegrid").options;
var _94e=_8f0(_94c,_94d);
if(_94d){
_94e.unshift(find(_94c,_94d));
}
for(var i=0;i<_94e.length;i++){
_93f(_94c,_94e[i][opts.idField]);
}
};
function _94f(_950,_951){
var opts=$.data(_950,"treegrid").options;
var ids=[];
var p=_90c(_950,_951);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_90c(_950,id);
}
for(var i=0;i<ids.length;i++){
_93f(_950,ids[i]);
}
};
function _952(_953,_954){
var _955=$.data(_953,"treegrid");
var opts=_955.options;
if(_954.parent){
var tr=opts.finder.getTr(_953,_954.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_911(_953,_954.parent);
}
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
var _956=cell.children("span.tree-icon");
if(_956.hasClass("tree-file")){
_956.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_956);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_918(_953,_954.parent,_954.data,_955.data.length>0,true);
};
function _957(_958,_959){
var ref=_959.before||_959.after;
var opts=$.data(_958,"treegrid").options;
var _95a=_90c(_958,ref);
_952(_958,{parent:(_95a?_95a[opts.idField]:null),data:[_959.data]});
var _95b=_95a?_95a.children:$(_958).treegrid("getRoots");
for(var i=0;i<_95b.length;i++){
if(_95b[i][opts.idField]==ref){
var _95c=_95b[_95b.length-1];
_95b.splice(_959.before?i:(i+1),0,_95c);
_95b.splice(_95b.length-1,1);
break;
}
}
_95d(true);
_95d(false);
_8f4(_958);
$(_958).treegrid("showLines");
function _95d(_95e){
var _95f=_95e?1:2;
var tr=opts.finder.getTr(_958,_959.data[opts.idField],"body",_95f);
var _960=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_958,ref,"body",_95f);
if(_959.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_960.remove();
};
};
function _961(_962,_963){
var _964=$.data(_962,"treegrid");
var opts=_964.options;
var prow=_90c(_962,_963);
$(_962).datagrid("deleteRow",_963);
$.easyui.removeArrayItem(_964.checkedRows,opts.idField,_963);
_8f4(_962);
if(prow){
_90e(_962,prow[opts.idField]);
}
_964.total-=1;
$(_962).datagrid("getPager").pagination("refresh",{total:_964.total});
$(_962).treegrid("showLines");
};
function _965(_966){
var t=$(_966);
var opts=t.treegrid("options");
if(opts.lines){
t.treegrid("getPanel").addClass("tree-lines");
}else{
t.treegrid("getPanel").removeClass("tree-lines");
return;
}
t.treegrid("getPanel").find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
t.treegrid("getPanel").find("div.datagrid-cell").removeClass("tree-node-last tree-root-first tree-root-one");
var _967=t.treegrid("getRoots");
if(_967.length>1){
_968(_967[0]).addClass("tree-root-first");
}else{
if(_967.length==1){
_968(_967[0]).addClass("tree-root-one");
}
}
_969(_967);
_96a(_967);
function _969(_96b){
$.map(_96b,function(node){
if(node.children&&node.children.length){
_969(node.children);
}else{
var cell=_968(node);
cell.find(".tree-icon").prev().addClass("tree-join");
}
});
if(_96b.length){
var cell=_968(_96b[_96b.length-1]);
cell.addClass("tree-node-last");
cell.find(".tree-join").removeClass("tree-join").addClass("tree-joinbottom");
}
};
function _96a(_96c){
$.map(_96c,function(node){
if(node.children&&node.children.length){
_96a(node.children);
}
});
for(var i=0;i<_96c.length-1;i++){
var node=_96c[i];
var _96d=t.treegrid("getLevel",node[opts.idField]);
var tr=opts.finder.getTr(_966,node[opts.idField]);
var cc=tr.next().find("tr.datagrid-row td[field=\""+opts.treeField+"\"] div.datagrid-cell");
cc.find("span:eq("+(_96d-1)+")").addClass("tree-line");
}
};
function _968(node){
var tr=opts.finder.getTr(_966,node[opts.idField]);
var cell=tr.find("td[field=\""+opts.treeField+"\"] div.datagrid-cell");
return cell;
};
};
$.fn.treegrid=function(_96e,_96f){
if(typeof _96e=="string"){
var _970=$.fn.treegrid.methods[_96e];
if(_970){
return _970(this,_96f);
}else{
return this.datagrid(_96e,_96f);
}
}
_96e=_96e||{};
return this.each(function(){
var _971=$.data(this,"treegrid");
if(_971){
$.extend(_971.options,_96e);
}else{
_971=$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_96e),data:[],checkedRows:[],tmpIds:[]});
}
_8db(this);
if(_971.options.data){
$(this).treegrid("loadData",_971.options.data);
}
_8eb(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_972){
return jq.each(function(){
$(this).datagrid("resize",_972);
});
},fixRowHeight:function(jq,_973){
return jq.each(function(){
_8ec(this,_973);
});
},loadData:function(jq,data){
return jq.each(function(){
_918(this,data.parent,data);
});
},load:function(jq,_974){
return jq.each(function(){
$(this).treegrid("options").pageNumber=1;
$(this).treegrid("getPager").pagination({pageNumber:1});
$(this).treegrid("reload",_974);
});
},reload:function(jq,id){
return jq.each(function(){
var opts=$(this).treegrid("options");
var _975={};
if(typeof id=="object"){
_975=id;
}else{
_975=$.extend({},opts.queryParams);
_975.id=id;
}
if(_975.id){
var node=$(this).treegrid("find",_975.id);
if(node.children){
node.children.splice(0,node.children.length);
}
opts.queryParams=_975;
var tr=opts.finder.getTr(this,_975.id);
tr.next("tr.treegrid-tr-tree").remove();
tr.find("span.tree-hit").removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_93f(this,_975.id);
}else{
_8eb(this,null,_975);
}
});
},reloadFooter:function(jq,_976){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_976){
$.data(this,"treegrid").footer=_976;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _92a(jq[0]);
},getRoots:function(jq){
return _92d(jq[0]);
},getParent:function(jq,id){
return _90c(jq[0],id);
},getChildren:function(jq,id){
return _8f0(jq[0],id);
},getLevel:function(jq,id){
return _935(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_93c(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_93f(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_8fa(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_947(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_94b(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_94f(this,id);
});
},append:function(jq,_977){
return jq.each(function(){
_952(this,_977);
});
},insert:function(jq,_978){
return jq.each(function(){
_957(this,_978);
});
},remove:function(jq,id){
return jq.each(function(){
_961(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_979){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var row=_979.row;
opts.view.updateRow.call(opts.view,this,_979.id,row);
if(row.checked!=undefined){
row=find(this,_979.id);
$.extend(row,{checkState:row.checked?"checked":(row.checked===false?"unchecked":undefined)});
_90e(this,_979.id);
}
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
},showLines:function(jq){
return jq.each(function(){
_965(this);
});
},setSelectionState:function(jq){
return jq.each(function(){
$(this).datagrid("setSelectionState");
var _97a=$(this).data("treegrid");
for(var i=0;i<_97a.tmpIds.length;i++){
_8fb(this,_97a.tmpIds[i],true,true);
}
_97a.tmpIds=[];
});
},getCheckedNodes:function(jq,_97b){
_97b=_97b||"checked";
var rows=[];
$.easyui.forEach(jq.data("treegrid").checkedRows,false,function(row){
if(row.checkState==_97b){
rows.push(row);
}
});
return rows;
},checkNode:function(jq,id){
return jq.each(function(){
_8fb(this,id,true);
});
},uncheckNode:function(jq,id){
return jq.each(function(){
_8fb(this,id,false);
});
},clearChecked:function(jq){
return jq.each(function(){
var _97c=this;
var opts=$(_97c).treegrid("options");
$(_97c).datagrid("clearChecked");
$.map($(_97c).treegrid("getCheckedNodes"),function(row){
_8fb(_97c,row[opts.idField],false,true);
});
});
}};
$.fn.treegrid.parseOptions=function(_97d){
return $.extend({},$.fn.datagrid.parseOptions(_97d),$.parser.parseOptions(_97d,["treeField",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean"}]));
};
var _97e=$.extend({},$.fn.datagrid.defaults.view,{render:function(_97f,_980,_981){
var opts=$.data(_97f,"treegrid").options;
var _982=$(_97f).datagrid("getColumnFields",_981);
var _983=$.data(_97f,"datagrid").rowIdPrefix;
if(_981){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
if(this.treeNodes&&this.treeNodes.length){
var _984=_985.call(this,_981,this.treeLevel,this.treeNodes);
$(_980).append(_984.join(""));
}
function _985(_986,_987,_988){
var _989=$(_97f).treegrid("getParent",_988[0][opts.idField]);
var _98a=(_989?_989.children.length:$(_97f).treegrid("getRoots").length)-_988.length;
var _98b=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_988.length;i++){
var row=_988[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var css=opts.rowStyler?opts.rowStyler.call(_97f,row):"";
var cs=this.getStyleValue(css);
var cls="class=\"datagrid-row "+(_98a++%2&&opts.striped?"datagrid-row-alt ":" ")+cs.c+"\"";
var _98c=cs.s?"style=\""+cs.s+"\"":"";
var _98d=_983+"-"+(_986?1:2)+"-"+row[opts.idField];
_98b.push("<tr id=\""+_98d+"\" node-id=\""+row[opts.idField]+"\" "+cls+" "+_98c+">");
_98b=_98b.concat(view.renderRow.call(view,_97f,_982,_986,_987,row));
_98b.push("</tr>");
if(row.children&&row.children.length){
var tt=_985.call(this,_986,_987+1,row.children);
var v=row.state=="closed"?"none":"block";
_98b.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_982.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_98b=_98b.concat(tt);
_98b.push("</div></td></tr>");
}
}
_98b.push("</tbody></table>");
return _98b;
};
},renderFooter:function(_98e,_98f,_990){
var opts=$.data(_98e,"treegrid").options;
var rows=$.data(_98e,"treegrid").footer||[];
var _991=$(_98e).datagrid("getColumnFields",_990);
var _992=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_992.push("<tr class=\"datagrid-row\" node-id=\""+row[opts.idField]+"\">");
_992.push(this.renderRow.call(this,_98e,_991,_990,0,row));
_992.push("</tr>");
}
_992.push("</tbody></table>");
$(_98f).html(_992.join(""));
},renderRow:function(_993,_994,_995,_996,row){
var _997=$.data(_993,"treegrid");
var opts=_997.options;
var cc=[];
if(_995&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_994.length;i++){
var _998=_994[i];
var col=$(_993).datagrid("getColumnOption",_998);
if(col){
var css=col.styler?(col.styler(row[_998],row)||""):"";
var cs=this.getStyleValue(css);
var cls=cs.c?"class=\""+cs.c+"\"":"";
var _999=col.hidden?"style=\"display:none;"+cs.s+"\"":(cs.s?"style=\""+cs.s+"\"":"");
cc.push("<td field=\""+_998+"\" "+cls+" "+_999+">");
var _999="";
if(!col.checkbox){
if(col.align){
_999+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_999+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_999+="height:auto;";
}
}
}
cc.push("<div style=\""+_999+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_998+"\" value=\""+(row[_998]!=undefined?row[_998]:"")+"\">");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_998],row);
}else{
val=row[_998];
}
if(_998==opts.treeField){
for(var j=0;j<_996;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_993,row)){
var flag=0;
var crow=$.easyui.getArrayItem(_997.checkedRows,opts.idField,row[opts.idField]);
if(crow){
flag=crow.checkState=="checked"?1:2;
}else{
var prow=$.easyui.getArrayItem(_997.checkedRows,opts.idField,row._parentId);
if(prow&&prow.checkState=="checked"&&opts.cascadeCheck){
flag=1;
row.checked=true;
$.easyui.addArrayItem(_997.checkedRows,opts.idField,row);
}else{
if(row.checked){
$.easyui.addArrayItem(_997.tmpIds,row[opts.idField]);
}
}
row.checkState=flag?"checked":"unchecked";
}
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
row.checkState=undefined;
row.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},hasCheckbox:function(_99a,row){
var opts=$.data(_99a,"treegrid").options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_99a,row)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(row.state=="open"&&!(row.children&&row.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
},refreshRow:function(_99b,id){
this.updateRow.call(this,_99b,id,{});
},updateRow:function(_99c,id,row){
var opts=$.data(_99c,"treegrid").options;
var _99d=$(_99c).treegrid("find",id);
$.extend(_99d,row);
var _99e=$(_99c).treegrid("getLevel",id)-1;
var _99f=opts.rowStyler?opts.rowStyler.call(_99c,_99d):"";
var _9a0=$.data(_99c,"datagrid").rowIdPrefix;
var _9a1=_99d[opts.idField];
function _9a2(_9a3){
var _9a4=$(_99c).treegrid("getColumnFields",_9a3);
var tr=opts.finder.getTr(_99c,id,"body",(_9a3?1:2));
var _9a5=tr.find("div.datagrid-cell-rownumber").html();
var _9a6=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_99c,_9a4,_9a3,_99e,_99d));
tr.attr("style",_99f||"");
tr.find("div.datagrid-cell-rownumber").html(_9a5);
if(_9a6){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
if(_9a1!=id){
tr.attr("id",_9a0+"-"+(_9a3?1:2)+"-"+_9a1);
tr.attr("node-id",_9a1);
}
};
_9a2.call(this,true);
_9a2.call(this,false);
$(_99c).treegrid("fixRowHeight",id);
},deleteRow:function(_9a7,id){
var opts=$.data(_9a7,"treegrid").options;
var tr=opts.finder.getTr(_9a7,id);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _9a8=del(id);
if(_9a8){
if(_9a8.children.length==0){
tr=opts.finder.getTr(_9a7,_9a8[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field=\""+opts.treeField+"\"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
this.setEmptyMsg(_9a7);
function del(id){
var cc;
var _9a9=$(_9a7).treegrid("getParent",id);
if(_9a9){
cc=_9a9.children;
}else{
cc=$(_9a7).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _9a9;
};
},onBeforeRender:function(_9aa,_9ab,data){
if($.isArray(_9ab)){
data={total:_9ab.length,rows:_9ab};
_9ab=null;
}
if(!data){
return false;
}
var _9ac=$.data(_9aa,"treegrid");
var opts=_9ac.options;
if(data.length==undefined){
if(data.footer){
_9ac.footer=data.footer;
}
if(data.total){
_9ac.total=data.total;
}
data=this.transfer(_9aa,_9ab,data.rows);
}else{
function _9ad(_9ae,_9af){
for(var i=0;i<_9ae.length;i++){
var row=_9ae[i];
row._parentId=_9af;
if(row.children&&row.children.length){
_9ad(row.children,row[opts.idField]);
}
}
};
_9ad(data,_9ab);
}
var node=find(_9aa,_9ab);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
_9ac.data=_9ac.data.concat(data);
}
this.sort(_9aa,data);
this.treeNodes=data;
this.treeLevel=$(_9aa).treegrid("getLevel",_9ab);
},sort:function(_9b0,data){
var opts=$.data(_9b0,"treegrid").options;
if(!opts.remoteSort&&opts.sortName){
var _9b1=opts.sortName.split(",");
var _9b2=opts.sortOrder.split(",");
_9b3(data);
}
function _9b3(rows){
rows.sort(function(r1,r2){
var r=0;
for(var i=0;i<_9b1.length;i++){
var sn=_9b1[i];
var so=_9b2[i];
var col=$(_9b0).treegrid("getColumnOption",sn);
var _9b4=col.sorter||function(a,b){
return a==b?0:(a>b?1:-1);
};
r=_9b4(r1[sn],r2[sn])*(so=="asc"?1:-1);
if(r!=0){
return r;
}
}
return r;
});
for(var i=0;i<rows.length;i++){
var _9b5=rows[i].children;
if(_9b5&&_9b5.length){
_9b3(_9b5);
}
}
};
},transfer:function(_9b6,_9b7,data){
var opts=$.data(_9b6,"treegrid").options;
var rows=$.extend([],data);
var _9b8=_9b9(_9b7,rows);
var toDo=$.extend([],_9b8);
while(toDo.length){
var node=toDo.shift();
var _9ba=_9b9(node[opts.idField],rows);
if(_9ba.length){
if(node.children){
node.children=node.children.concat(_9ba);
}else{
node.children=_9ba;
}
toDo=toDo.concat(_9ba);
}
}
return _9b8;
function _9b9(_9bb,rows){
var rr=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==_9bb){
rr.push(row);
rows.splice(i,1);
i--;
}
}
return rr;
};
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,animate:false,singleSelect:true,view:_97e,rowEvents:$.extend({},$.fn.datagrid.defaults.rowEvents,{mouseover:_8f6(true),mouseout:_8f6(false),click:_8f8}),loader:function(_9bc,_9bd,_9be){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_9bc,dataType:"json",success:function(data){
_9bd(data);
},error:function(){
_9be.apply(this,arguments);
}});
},loadFilter:function(data,_9bf){
return data;
},finder:{getTr:function(_9c0,id,type,_9c1){
type=type||"body";
_9c1=_9c1||0;
var dc=$.data(_9c0,"datagrid").dc;
if(_9c1==0){
var opts=$.data(_9c0,"treegrid").options;
var tr1=opts.finder.getTr(_9c0,id,type,1);
var tr2=opts.finder.getTr(_9c0,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_9c0,"datagrid").rowIdPrefix+"-"+_9c1+"-"+id);
if(!tr.length){
tr=(_9c1==1?dc.body1:dc.body2).find("tr[node-id=\""+id+"\"]");
}
return tr;
}else{
if(type=="footer"){
return (_9c1==1?dc.footer1:dc.footer2).find("tr[node-id=\""+id+"\"]");
}else{
if(type=="selected"){
return (_9c1==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="highlight"){
return (_9c1==1?dc.body1:dc.body2).find("tr.datagrid-row-over");
}else{
if(type=="checked"){
return (_9c1==1?dc.body1:dc.body2).find("tr.datagrid-row-checked");
}else{
if(type=="last"){
return (_9c1==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_9c1==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_9c1==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
}
}
},getRow:function(_9c2,p){
var id=(typeof p=="object")?p.attr("node-id"):p;
return $(_9c2).treegrid("find",id);
},getRows:function(_9c3){
return $(_9c3).treegrid("getChildren");
}},onBeforeLoad:function(row,_9c4){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_9c5,row){
},onDblClickCell:function(_9c6,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_9c7){
},onCancelEdit:function(row){
},onBeforeCheckNode:function(row,_9c8){
},onCheckNode:function(row,_9c9){
}});
})(jQuery);
(function($){
function _9ca(_9cb){
var opts=$.data(_9cb,"datalist").options;
$(_9cb).datagrid($.extend({},opts,{cls:"datalist"+(opts.lines?" datalist-lines":""),frozenColumns:(opts.frozenColumns&&opts.frozenColumns.length)?opts.frozenColumns:(opts.checkbox?[[{field:"_ck",checkbox:true}]]:undefined),columns:(opts.columns&&opts.columns.length)?opts.columns:[[{field:opts.textField,width:"100%",formatter:function(_9cc,row,_9cd){
return opts.textFormatter?opts.textFormatter(_9cc,row,_9cd):_9cc;
}}]]}));
};
var _9ce=$.extend({},$.fn.datagrid.defaults.view,{render:function(_9cf,_9d0,_9d1){
var _9d2=$.data(_9cf,"datagrid");
var opts=_9d2.options;
if(opts.groupField){
var g=this.groupRows(_9cf,_9d2.data.rows);
this.groups=g.groups;
_9d2.data.rows=g.rows;
var _9d3=[];
for(var i=0;i<g.groups.length;i++){
_9d3.push(this.renderGroup.call(this,_9cf,i,g.groups[i],_9d1));
}
$(_9d0).html(_9d3.join(""));
}else{
$(_9d0).html(this.renderTable(_9cf,0,_9d2.data.rows,_9d1));
}
},renderGroup:function(_9d4,_9d5,_9d6,_9d7){
var _9d8=$.data(_9d4,"datagrid");
var opts=_9d8.options;
var _9d9=$(_9d4).datagrid("getColumnFields",_9d7);
var _9da=[];
_9da.push("<div class=\"datagrid-group\" group-index="+_9d5+">");
if(!_9d7){
_9da.push("<span class=\"datagrid-group-title\">");
_9da.push(opts.groupFormatter.call(_9d4,_9d6.value,_9d6.rows));
_9da.push("</span>");
}
_9da.push("</div>");
_9da.push(this.renderTable(_9d4,_9d6.startIndex,_9d6.rows,_9d7));
return _9da.join("");
},groupRows:function(_9db,rows){
var _9dc=$.data(_9db,"datagrid");
var opts=_9dc.options;
var _9dd=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _9de=_9df(row[opts.groupField]);
if(!_9de){
_9de={value:row[opts.groupField],rows:[row]};
_9dd.push(_9de);
}else{
_9de.rows.push(row);
}
}
var _9e0=0;
var rows=[];
for(var i=0;i<_9dd.length;i++){
var _9de=_9dd[i];
_9de.startIndex=_9e0;
_9e0+=_9de.rows.length;
rows=rows.concat(_9de.rows);
}
return {groups:_9dd,rows:rows};
function _9df(_9e1){
for(var i=0;i<_9dd.length;i++){
var _9e2=_9dd[i];
if(_9e2.value==_9e1){
return _9e2;
}
}
return null;
};
}});
$.fn.datalist=function(_9e3,_9e4){
if(typeof _9e3=="string"){
var _9e5=$.fn.datalist.methods[_9e3];
if(_9e5){
return _9e5(this,_9e4);
}else{
return this.datagrid(_9e3,_9e4);
}
}
_9e3=_9e3||{};
return this.each(function(){
var _9e6=$.data(this,"datalist");
if(_9e6){
$.extend(_9e6.options,_9e3);
}else{
var opts=$.extend({},$.fn.datalist.defaults,$.fn.datalist.parseOptions(this),_9e3);
opts.columns=$.extend(true,[],opts.columns);
_9e6=$.data(this,"datalist",{options:opts});
}
_9ca(this);
if(!_9e6.options.data){
var data=$.fn.datalist.parseData(this);
if(data.total){
$(this).datalist("loadData",data);
}
}
});
};
$.fn.datalist.methods={options:function(jq){
return $.data(jq[0],"datalist").options;
}};
$.fn.datalist.parseOptions=function(_9e7){
return $.extend({},$.fn.datagrid.parseOptions(_9e7),$.parser.parseOptions(_9e7,["valueField","textField","groupField",{checkbox:"boolean",lines:"boolean"}]));
};
$.fn.datalist.parseData=function(_9e8){
var opts=$.data(_9e8,"datalist").options;
var data={total:0,rows:[]};
$(_9e8).children().each(function(){
var _9e9=$.parser.parseOptions(this,["value","group"]);
var row={};
var html=$(this).html();
row[opts.valueField]=_9e9.value!=undefined?_9e9.value:html;
row[opts.textField]=html;
if(opts.groupField){
row[opts.groupField]=_9e9.group;
}
data.total++;
data.rows.push(row);
});
return data;
};
$.fn.datalist.defaults=$.extend({},$.fn.datagrid.defaults,{fitColumns:true,singleSelect:true,showHeader:false,checkbox:false,lines:false,valueField:"value",textField:"text",groupField:"",view:_9ce,textFormatter:function(_9ea,row){
return _9ea;
},groupFormatter:function(_9eb,rows){
return _9eb;
}});
})(jQuery);
(function($){
$(function(){
$(document).unbind(".combo").bind("mousedown.combo mousewheel.combo",function(e){
var p=$(e.target).closest("span.combo,div.combo-p,div.menu");
if(p.length){
_9ec(p);
return;
}
$("body>div.combo-p>div.combo-panel:visible").panel("close");
});
});
function _9ed(_9ee){
var _9ef=$.data(_9ee,"combo");
var opts=_9ef.options;
if(!_9ef.panel){
_9ef.panel=$("<div class=\"combo-panel\"></div>").appendTo("body");
_9ef.panel.panel({minWidth:opts.panelMinWidth,maxWidth:opts.panelMaxWidth,minHeight:opts.panelMinHeight,maxHeight:opts.panelMaxHeight,doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
var _9f0=$(this).panel("options").comboTarget;
var _9f1=$.data(_9f0,"combo");
if(_9f1){
_9f1.options.onShowPanel.call(_9f0);
}
},onBeforeClose:function(){
_9ec($(this).parent());
},onClose:function(){
var _9f2=$(this).panel("options").comboTarget;
var _9f3=$(_9f2).data("combo");
if(_9f3){
_9f3.options.onHidePanel.call(_9f2);
}
}});
}
var _9f4=$.extend(true,[],opts.icons);
if(opts.hasDownArrow){
_9f4.push({iconCls:"combo-arrow",handler:function(e){
_9f8(e.data.target);
}});
}
$(_9ee).addClass("combo-f").textbox($.extend({},opts,{icons:_9f4,onChange:function(){
}}));
$(_9ee).attr("comboName",$(_9ee).attr("textboxName"));
_9ef.combo=$(_9ee).next();
_9ef.combo.addClass("combo");
};
function _9f5(_9f6){
var _9f7=$.data(_9f6,"combo");
var opts=_9f7.options;
var p=_9f7.panel;
if(p.is(":visible")){
p.panel("close");
}
if(!opts.cloned){
p.panel("destroy");
}
$(_9f6).textbox("destroy");
};
function _9f8(_9f9){
var _9fa=$.data(_9f9,"combo").panel;
if(_9fa.is(":visible")){
var _9fb=_9fa.combo("combo");
_9fc(_9fb);
if(_9fb!=_9f9){
$(_9f9).combo("showPanel");
}
}else{
var p=$(_9f9).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(_9fa).not(p).panel("close");
$(_9f9).combo("showPanel");
}
$(_9f9).combo("textbox").focus();
};
function _9ec(_9fd){
$(_9fd).find(".combo-f").each(function(){
var p=$(this).combo("panel");
if(p.is(":visible")){
p.panel("close");
}
});
};
function _9fe(e){
var _9ff=e.data.target;
var _a00=$.data(_9ff,"combo");
var opts=_a00.options;
if(!opts.editable){
_9f8(_9ff);
}else{
var p=$(_9ff).closest("div.combo-p").children(".combo-panel");
$("div.combo-panel:visible").not(p).each(function(){
var _a01=$(this).combo("combo");
if(_a01!=_9ff){
_9fc(_a01);
}
});
}
};
function _a02(e){
var _a03=e.data.target;
var t=$(_a03);
var _a04=t.data("combo");
var opts=t.combo("options");
_a04.panel.panel("options").comboTarget=_a03;
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_a03,e);
break;
case 40:
opts.keyHandler.down.call(_a03,e);
break;
case 37:
opts.keyHandler.left.call(_a03,e);
break;
case 39:
opts.keyHandler.right.call(_a03,e);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_a03,e);
return false;
case 9:
case 27:
_9fc(_a03);
break;
default:
if(opts.editable){
if(_a04.timer){
clearTimeout(_a04.timer);
}
_a04.timer=setTimeout(function(){
var q=t.combo("getText");
if(_a04.previousText!=q){
_a04.previousText=q;
t.combo("showPanel");
opts.keyHandler.query.call(_a03,q,e);
t.combo("validate");
}
},opts.delay);
}
}
};
function _a05(_a06){
var _a07=$.data(_a06,"combo");
var _a08=_a07.combo;
var _a09=_a07.panel;
var opts=$(_a06).combo("options");
var _a0a=_a09.panel("options");
_a0a.comboTarget=_a06;
if(_a0a.closed){
_a09.panel("panel").show().css({zIndex:($.fn.menu?$.fn.menu.defaults.zIndex++:($.fn.window?$.fn.window.defaults.zIndex++:99)),left:-999999});
_a09.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_a08._outerWidth()),height:opts.panelHeight});
_a09.panel("panel").hide();
_a09.panel("open");
}
(function(){
if(_a0a.comboTarget==_a06&&_a09.is(":visible")){
_a09.panel("move",{left:_a0b(),top:_a0c()});
setTimeout(arguments.callee,200);
}
})();
function _a0b(){
var left=_a08.offset().left;
if(opts.panelAlign=="right"){
left+=_a08._outerWidth()-_a09._outerWidth();
}
if(left+_a09._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_a09._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _a0c(){
var top=_a08.offset().top+_a08._outerHeight();
if(top+_a09._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_a08.offset().top-_a09._outerHeight();
}
if(top<$(document).scrollTop()){
top=_a08.offset().top+_a08._outerHeight();
}
return top;
};
};
function _9fc(_a0d){
var _a0e=$.data(_a0d,"combo").panel;
_a0e.panel("close");
};
function _a0f(_a10,text){
var _a11=$.data(_a10,"combo");
var _a12=$(_a10).textbox("getText");
if(_a12!=text){
$(_a10).textbox("setText",text);
_a11.previousText=text;
}
};
function _a13(_a14){
var _a15=[];
var _a16=$.data(_a14,"combo").combo;
_a16.find(".textbox-value").each(function(){
_a15.push($(this).val());
});
return _a15;
};
function _a17(_a18,_a19){
var _a1a=$.data(_a18,"combo");
var opts=_a1a.options;
var _a1b=_a1a.combo;
if(!$.isArray(_a19)){
_a19=_a19.split(opts.separator);
}
var _a1c=_a13(_a18);
_a1b.find(".textbox-value").remove();
var name=$(_a18).attr("textboxName")||"";
for(var i=0;i<_a19.length;i++){
var _a1d=$("<input type=\"hidden\" class=\"textbox-value\">").appendTo(_a1b);
_a1d.attr("name",name);
if(opts.disabled){
_a1d.attr("disabled","disabled");
}
_a1d.val(_a19[i]);
}
var _a1e=(function(){
if(_a1c.length!=_a19.length){
return true;
}
var a1=$.extend(true,[],_a1c);
var a2=$.extend(true,[],_a19);
a1.sort();
a2.sort();
for(var i=0;i<a1.length;i++){
if(a1[i]!=a2[i]){
return true;
}
}
return false;
})();
if(_a1e){
if(opts.multiple){
opts.onChange.call(_a18,_a19,_a1c);
}else{
opts.onChange.call(_a18,_a19[0],_a1c[0]);
}
$(_a18).closest("form").trigger("_change",[_a18]);
}
};
function _a1f(_a20){
var _a21=_a13(_a20);
return _a21[0];
};
function _a22(_a23,_a24){
_a17(_a23,[_a24]);
};
function _a25(_a26){
var opts=$.data(_a26,"combo").options;
var _a27=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
_a17(_a26,opts.value?opts.value:[]);
}else{
_a22(_a26,opts.value);
}
opts.onChange=_a27;
};
$.fn.combo=function(_a28,_a29){
if(typeof _a28=="string"){
var _a2a=$.fn.combo.methods[_a28];
if(_a2a){
return _a2a(this,_a29);
}else{
return this.textbox(_a28,_a29);
}
}
_a28=_a28||{};
return this.each(function(){
var _a2b=$.data(this,"combo");
if(_a2b){
$.extend(_a2b.options,_a28);
if(_a28.value!=undefined){
_a2b.options.originalValue=_a28.value;
}
}else{
_a2b=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_a28),previousText:""});
_a2b.options.originalValue=_a2b.options.value;
}
_9ed(this);
_a25(this);
});
};
$.fn.combo.methods={options:function(jq){
var opts=jq.textbox("options");
return $.extend($.data(jq[0],"combo").options,{width:opts.width,height:opts.height,disabled:opts.disabled,readonly:opts.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).textbox("cloneFrom",from);
$.data(this,"combo",{options:$.extend(true,{cloned:true},$(from).combo("options")),combo:$(this).next(),panel:$(from).combo("panel")});
$(this).addClass("combo-f").attr("comboName",$(this).attr("textboxName"));
});
},combo:function(jq){
return jq.closest(".combo-panel").panel("options").comboTarget;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},destroy:function(jq){
return jq.each(function(){
_9f5(this);
});
},showPanel:function(jq){
return jq.each(function(){
_a05(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_9fc(this);
});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("setText","");
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",[]);
}else{
$(this).combo("setValue","");
}
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},setText:function(jq,text){
return jq.each(function(){
_a0f(this,text);
});
},getValues:function(jq){
return _a13(jq[0]);
},setValues:function(jq,_a2c){
return jq.each(function(){
_a17(this,_a2c);
});
},getValue:function(jq){
return _a1f(jq[0]);
},setValue:function(jq,_a2d){
return jq.each(function(){
_a22(this,_a2d);
});
}};
$.fn.combo.parseOptions=function(_a2e){
var t=$(_a2e);
return $.extend({},$.fn.textbox.parseOptions(_a2e),$.parser.parseOptions(_a2e,["separator","panelAlign",{panelWidth:"number",hasDownArrow:"boolean",delay:"number",selectOnNavigation:"boolean"},{panelMinWidth:"number",panelMaxWidth:"number",panelMinHeight:"number",panelMaxHeight:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.textbox.defaults,{inputEvents:{click:_9fe,keydown:_a02,paste:_a02,drop:_a02},panelWidth:null,panelHeight:200,panelMinWidth:null,panelMaxWidth:null,panelMinHeight:null,panelMaxHeight:null,panelAlign:"left",multiple:false,selectOnNavigation:true,separator:",",hasDownArrow:true,delay:200,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
},query:function(q,e){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_a2f,_a30){
}});
})(jQuery);
(function($){
function _a31(_a32,_a33){
var _a34=$.data(_a32,"combobox");
return $.easyui.indexOfArray(_a34.data,_a34.options.valueField,_a33);
};
function _a35(_a36,_a37){
var opts=$.data(_a36,"combobox").options;
var _a38=$(_a36).combo("panel");
var item=opts.finder.getEl(_a36,_a37);
if(item.length){
if(item.position().top<=0){
var h=_a38.scrollTop()+item.position().top;
_a38.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_a38.height()){
var h=_a38.scrollTop()+item.position().top+item.outerHeight()-_a38.height();
_a38.scrollTop(h);
}
}
}
_a38.triggerHandler("scroll");
};
function nav(_a39,dir){
var opts=$.data(_a39,"combobox").options;
var _a3a=$(_a39).combobox("panel");
var item=_a3a.children("div.combobox-item-hover");
if(!item.length){
item=_a3a.children("div.combobox-item-selected");
}
item.removeClass("combobox-item-hover");
var _a3b="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _a3c="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!item.length){
item=_a3a.children(dir=="next"?_a3b:_a3c);
}else{
if(dir=="next"){
item=item.nextAll(_a3b);
if(!item.length){
item=_a3a.children(_a3b);
}
}else{
item=item.prevAll(_a3b);
if(!item.length){
item=_a3a.children(_a3c);
}
}
}
if(item.length){
item.addClass("combobox-item-hover");
var row=opts.finder.getRow(_a39,item);
if(row){
$(_a39).combobox("scrollTo",row[opts.valueField]);
if(opts.selectOnNavigation){
_a3d(_a39,row[opts.valueField]);
}
}
}
};
function _a3d(_a3e,_a3f,_a40){
var opts=$.data(_a3e,"combobox").options;
var _a41=$(_a3e).combo("getValues");
if($.inArray(_a3f+"",_a41)==-1){
if(opts.multiple){
_a41.push(_a3f);
}else{
_a41=[_a3f];
}
_a42(_a3e,_a41,_a40);
}
};
function _a43(_a44,_a45){
var opts=$.data(_a44,"combobox").options;
var _a46=$(_a44).combo("getValues");
var _a47=$.inArray(_a45+"",_a46);
if(_a47>=0){
_a46.splice(_a47,1);
_a42(_a44,_a46);
}
};
function _a42(_a48,_a49,_a4a){
var opts=$.data(_a48,"combobox").options;
var _a4b=$(_a48).combo("panel");
if(!$.isArray(_a49)){
_a49=_a49.split(opts.separator);
}
if(!opts.multiple){
_a49=_a49.length?[_a49[0]]:[""];
}
$.map($(_a48).combo("getValues"),function(v){
if($.easyui.indexOfArray(_a49,v)==-1){
var el=opts.finder.getEl(_a48,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
opts.onUnselect.call(_a48,opts.finder.getRow(_a48,v));
}
}
});
var _a4c=null;
var vv=[],ss=[];
for(var i=0;i<_a49.length;i++){
var v=_a49[i];
var s=v;
var row=opts.finder.getRow(_a48,v);
if(row){
s=row[opts.textField];
_a4c=row;
var el=opts.finder.getEl(_a48,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
opts.onSelect.call(_a48,row);
}
}
vv.push(v);
ss.push(s);
}
if(!_a4a){
$(_a48).combo("setText",ss.join(opts.separator));
}
if(opts.showItemIcon){
var tb=$(_a48).combobox("textbox");
tb.removeClass("textbox-bgicon "+opts.textboxIconCls);
if(_a4c&&_a4c.iconCls){
tb.addClass("textbox-bgicon "+_a4c.iconCls);
opts.textboxIconCls=_a4c.iconCls;
}
}
$(_a48).combo("setValues",vv);
_a4b.triggerHandler("scroll");
};
function _a4d(_a4e,data,_a4f){
var _a50=$.data(_a4e,"combobox");
var opts=_a50.options;
_a50.data=opts.loadFilter.call(_a4e,data);
opts.view.render.call(opts.view,_a4e,$(_a4e).combo("panel"),_a50.data);
var vv=$(_a4e).combobox("getValues");
$.easyui.forEach(_a50.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[opts.valueField]+"");
}
});
if(opts.multiple){
_a42(_a4e,vv,_a4f);
}else{
_a42(_a4e,vv.length?[vv[vv.length-1]]:[],_a4f);
}
opts.onLoadSuccess.call(_a4e,data);
};
function _a51(_a52,url,_a53,_a54){
var opts=$.data(_a52,"combobox").options;
if(url){
opts.url=url;
}
_a53=$.extend({},opts.queryParams,_a53||{});
if(opts.onBeforeLoad.call(_a52,_a53)==false){
return;
}
opts.loader.call(_a52,_a53,function(data){
_a4d(_a52,data,_a54);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _a55(_a56,q){
var _a57=$.data(_a56,"combobox");
var opts=_a57.options;
var qq=opts.multiple?q.split(opts.separator):[q];
if(opts.mode=="remote"){
_a58(qq);
_a51(_a56,null,{q:q},true);
}else{
var _a59=$(_a56).combo("panel");
_a59.find(".combobox-item-hover").removeClass("combobox-item-hover");
_a59.find(".combobox-item,.combobox-group").hide();
var data=_a57.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _a5a=q;
var _a5b=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
if(opts.filter.call(_a56,q,row)){
var v=row[opts.valueField];
var s=row[opts.textField];
var g=row[opts.groupField];
var item=opts.finder.getEl(_a56,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_a5a=v;
_a3d(_a56,v,true);
}
if(opts.groupField&&_a5b!=g){
opts.finder.getGroupEl(_a56,g).show();
_a5b=g;
}
}
}
vv.push(_a5a);
});
_a58(vv);
}
function _a58(vv){
_a42(_a56,opts.multiple?(q?vv:[]):vv,true);
};
};
function _a5c(_a5d){
var t=$(_a5d);
var opts=t.combobox("options");
var _a5e=t.combobox("panel");
var item=_a5e.children("div.combobox-item-hover");
if(item.length){
var row=opts.finder.getRow(_a5d,item);
var _a5f=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
t.combobox("unselect",_a5f);
}else{
t.combobox("select",_a5f);
}
}else{
t.combobox("select",_a5f);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_a31(_a5d,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!opts.multiple){
t.combobox("hidePanel");
}
};
function _a60(_a61){
var _a62=$.data(_a61,"combobox");
var opts=_a62.options;
$(_a61).addClass("combobox-f");
$(_a61).combo($.extend({},opts,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_a42(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
opts.onShowPanel.call(this);
}}));
var p=$(_a61).combo("panel");
p.unbind(".combobox");
for(var _a63 in opts.panelEvents){
p.bind(_a63+".combobox",{target:_a61},opts.panelEvents[_a63]);
}
};
function _a64(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var item=$(e.target).closest("div.combobox-item");
if(!item.hasClass("combobox-item-disabled")){
item.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _a65(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _a66(e){
var _a67=$(this).panel("options").comboTarget;
if(!_a67){
return;
}
var opts=$(_a67).combobox("options");
var item=$(e.target).closest("div.combobox-item");
if(!item.length||item.hasClass("combobox-item-disabled")){
return;
}
var row=opts.finder.getRow(_a67,item);
if(!row){
return;
}
var _a68=row[opts.valueField];
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_a43(_a67,_a68);
}else{
_a3d(_a67,_a68);
}
}else{
$(_a67).combobox("setValue",_a68).combobox("hidePanel");
}
e.stopPropagation();
};
function _a69(e){
var _a6a=$(this).panel("options").comboTarget;
if(!_a6a){
return;
}
var opts=$(_a6a).combobox("options");
if(opts.groupPosition=="sticky"){
var _a6b=$(this).children(".combobox-stick");
if(!_a6b.length){
_a6b=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_a6b.hide();
var _a6c=$(_a6a).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _a6d=opts.finder.getGroup(_a6a,g);
var _a6e=_a6c.data[_a6d.startIndex+_a6d.count-1];
var last=opts.finder.getEl(_a6a,_a6e[opts.valueField]);
if(g.position().top<0&&last.position().top>0){
_a6b.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_a6f,_a70){
if(typeof _a6f=="string"){
var _a71=$.fn.combobox.methods[_a6f];
if(_a71){
return _a71(this,_a70);
}else{
return this.combo(_a6f,_a70);
}
}
_a6f=_a6f||{};
return this.each(function(){
var _a72=$.data(this,"combobox");
if(_a72){
$.extend(_a72.options,_a6f);
}else{
_a72=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_a6f),data:[]});
}
_a60(this);
if(_a72.options.data){
_a4d(this,_a72.options.data);
}else{
var data=$.fn.combobox.parseData(this);
if(data.length){
_a4d(this,data);
}
}
_a51(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _a73=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_a73.width,height:_a73.height,originalValue:_a73.originalValue,disabled:_a73.disabled,readonly:_a73.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combobox",$(from).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_a74){
return jq.each(function(){
_a42(this,_a74);
});
},setValue:function(jq,_a75){
return jq.each(function(){
_a42(this,$.isArray(_a75)?_a75:[_a75]);
});
},clear:function(jq){
return jq.each(function(){
_a42(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_a4d(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_a51(this,url);
}else{
if(url){
var opts=$(this).combobox("options");
opts.queryParams=url;
}
_a51(this);
}
});
},select:function(jq,_a76){
return jq.each(function(){
_a3d(this,_a76);
});
},unselect:function(jq,_a77){
return jq.each(function(){
_a43(this,_a77);
});
},scrollTo:function(jq,_a78){
return jq.each(function(){
_a35(this,_a78);
});
}};
$.fn.combobox.parseOptions=function(_a79){
var t=$(_a79);
return $.extend({},$.fn.combo.parseOptions(_a79),$.parser.parseOptions(_a79,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_a7a){
var data=[];
var opts=$(_a7a).combobox("options");
$(_a7a).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _a7b=$(this).attr("label");
$(this).children().each(function(){
_a7c(this,_a7b);
});
}else{
_a7c(this);
}
});
return data;
function _a7c(el,_a7d){
var t=$(el);
var row={};
row[opts.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[opts.textField]=t.text();
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_a7d){
opts.groupField=opts.groupField||"group";
row[opts.groupField]=_a7d;
}
data.push(row);
};
};
var _a7e=0;
var _a7f={render:function(_a80,_a81,data){
var _a82=$.data(_a80,"combobox");
var opts=_a82.options;
_a7e++;
_a82.itemIdPrefix="_easyui_combobox_i"+_a7e;
_a82.groupIdPrefix="_easyui_combobox_g"+_a7e;
_a82.groups=[];
var dd=[];
var _a83=undefined;
for(var i=0;i<data.length;i++){
var row=data[i];
var v=row[opts.valueField]+"";
var s=row[opts.textField];
var g=row[opts.groupField];
if(g){
if(_a83!=g){
_a83=g;
_a82.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_a82.groupIdPrefix+"_"+(_a82.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(opts.groupFormatter?opts.groupFormatter.call(_a80,g):g);
dd.push("</div>");
}else{
_a82.groups[_a82.groups.length-1].count++;
}
}else{
_a83=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_a82.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(opts.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(opts.formatter?opts.formatter.call(_a80,row):s);
dd.push("</div>");
}
$(_a81).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_a84){
return _a84;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,view:_a7f,keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_a5c(this);
},query:function(q,e){
_a55(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _a85=e.data.target;
var opts=$(_a85).combobox("options");
if(opts.limitToList){
_a5c(_a85);
}
}}),panelEvents:{mouseover:_a64,mouseout:_a65,click:_a66,scroll:_a69},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_a86,_a87,_a88){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_a86,dataType:"json",success:function(data){
_a87(data);
},error:function(){
_a88.apply(this,arguments);
}});
},loadFilter:function(data){
return data;
},finder:{getEl:function(_a89,_a8a){
var _a8b=_a31(_a89,_a8a);
var id=$.data(_a89,"combobox").itemIdPrefix+"_"+_a8b;
return $("#"+id);
},getGroupEl:function(_a8c,_a8d){
var _a8e=$.data(_a8c,"combobox");
var _a8f=$.easyui.indexOfArray(_a8e.groups,"value",_a8d);
var id=_a8e.groupIdPrefix+"_"+_a8f;
return $("#"+id);
},getGroup:function(_a90,p){
var _a91=$.data(_a90,"combobox");
var _a92=p.attr("id").substr(_a91.groupIdPrefix.length+1);
return _a91.groups[parseInt(_a92)];
},getRow:function(_a93,p){
var _a94=$.data(_a93,"combobox");
var _a95=(p instanceof $)?p.attr("id").substr(_a94.itemIdPrefix.length+1):_a31(_a93,p);
return _a94.data[parseInt(_a95)];
}},onBeforeLoad:function(_a96){
},onLoadSuccess:function(){
},onLoadError:function(){
},onSelect:function(_a97){
},onUnselect:function(_a98){
}});
})(jQuery);
(function($){
function _a99(_a9a){
var _a9b=$.data(_a9a,"combotree");
var opts=_a9b.options;
var tree=_a9b.tree;
$(_a9a).addClass("combotree-f");
$(_a9a).combo($.extend({},opts,{onShowPanel:function(){
if(opts.editable){
tree.tree("doFilter","");
}
opts.onShowPanel.call(this);
}}));
var _a9c=$(_a9a).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_a9c);
_a9b.tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _a9d=$(_a9a).combotree("getValues");
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
$.easyui.addArrayItem(_a9d,node.id);
});
}
_aa2(_a9a,_a9d,_a9b.remainText);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
if(opts.multiple){
$(this).tree(node.checked?"uncheck":"check",node.target);
}else{
$(_a9a).combo("hidePanel");
}
_a9b.remainText=false;
_a9f(_a9a);
opts.onClick.call(this,node);
},onCheck:function(node,_a9e){
_a9b.remainText=false;
_a9f(_a9a);
opts.onCheck.call(this,node,_a9e);
}}));
};
function _a9f(_aa0){
var _aa1=$.data(_aa0,"combotree");
var opts=_aa1.options;
var tree=_aa1.tree;
var vv=[];
if(opts.multiple){
vv=$.map(tree.tree("getChecked"),function(node){
return node.id;
});
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
}
}
vv=vv.concat(opts.unselectedValues);
_aa2(_aa0,vv,_aa1.remainText);
};
function _aa2(_aa3,_aa4,_aa5){
var _aa6=$.data(_aa3,"combotree");
var opts=_aa6.options;
var tree=_aa6.tree;
var _aa7=tree.tree("options");
var _aa8=_aa7.onBeforeCheck;
var _aa9=_aa7.onCheck;
var _aaa=_aa7.onSelect;
_aa7.onBeforeCheck=_aa7.onCheck=_aa7.onSelect=function(){
};
if(!$.isArray(_aa4)){
_aa4=_aa4.split(opts.separator);
}
if(!opts.multiple){
_aa4=_aa4.length?[_aa4[0]]:[""];
}
var vv=$.map(_aa4,function(_aab){
return String(_aab);
});
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(tree.tree("getChecked"),function(node){
if($.inArray(String(node.id),vv)==-1){
tree.tree("uncheck",node.target);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var node=tree.tree("find",v);
if(node){
tree.tree("check",node.target).tree("select",node.target);
ss.push(node.text);
}else{
ss.push(_aac(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(tree.tree("getChecked"),function(node){
var id=String(node.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(node.text);
}
});
}
_aa7.onBeforeCheck=_aa8;
_aa7.onCheck=_aa9;
_aa7.onSelect=_aaa;
if(!_aa5){
var s=ss.join(opts.separator);
if($(_aa3).combo("getText")!=s){
$(_aa3).combo("setText",s);
}
}
$(_aa3).combo("setValues",vv);
function _aac(_aad,a){
var item=$.easyui.getArrayItem(a,"id",_aad);
return item?item.text:undefined;
};
};
function _aae(_aaf,q){
var _ab0=$.data(_aaf,"combotree");
var opts=_ab0.options;
var tree=_ab0.tree;
_ab0.remainText=true;
tree.tree("doFilter",opts.multiple?q.split(opts.separator):q);
};
function _ab1(_ab2){
var _ab3=$.data(_ab2,"combotree");
_ab3.remainText=false;
$(_ab2).combotree("setValues",$(_ab2).combotree("getValues"));
$(_ab2).combotree("hidePanel");
};
$.fn.combotree=function(_ab4,_ab5){
if(typeof _ab4=="string"){
var _ab6=$.fn.combotree.methods[_ab4];
if(_ab6){
return _ab6(this,_ab5);
}else{
return this.combo(_ab4,_ab5);
}
}
_ab4=_ab4||{};
return this.each(function(){
var _ab7=$.data(this,"combotree");
if(_ab7){
$.extend(_ab7.options,_ab4);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_ab4)});
}
_a99(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _ab8=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_ab8.width,height:_ab8.height,originalValue:_ab8.originalValue,disabled:_ab8.disabled,readonly:_ab8.readonly});
},clone:function(jq,_ab9){
var t=jq.combo("clone",_ab9);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_aba){
return jq.each(function(){
var opts=$(this).combotree("options");
if($.isArray(_aba)){
_aba=$.map(_aba,function(_abb){
if(_abb&&typeof _abb=="object"){
$.easyui.addArrayItem(opts.mappingRows,"id",_abb);
return _abb.id;
}else{
return _abb;
}
});
}
_aa2(this,_aba);
});
},setValue:function(jq,_abc){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_abc)?_abc:[_abc]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_abd){
return $.extend({},$.fn.combo.parseOptions(_abd),$.fn.tree.parseOptions(_abd));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_ab1(this);
},query:function(q,e){
_aae(this,q);
}}});
})(jQuery);
(function($){
function _abe(_abf){
var _ac0=$.data(_abf,"combogrid");
var opts=_ac0.options;
var grid=_ac0.grid;
$(_abf).addClass("combogrid-f").combo($.extend({},opts,{onShowPanel:function(){
_ad5(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _ac1=p.outerHeight()-p.height();
var _ac2=p._size("minHeight");
var _ac3=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_ac2?_ac2-_ac1:""),maxHeight:(_ac3?_ac3-_ac1:"")});
var row=dg.datagrid("getSelected");
if(row){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",row));
}
opts.onShowPanel.call(this);
}}));
var _ac4=$(_abf).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_ac4);
_ac0.grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,singleSelect:(!opts.multiple),onLoadSuccess:_ac5,onClickRow:_ac6,onSelect:_ac7("onSelect"),onUnselect:_ac7("onUnselect"),onSelectAll:_ac7("onSelectAll"),onUnselectAll:_ac7("onUnselectAll")}));
function _ac8(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_abf;
};
function _ac5(data){
var _ac9=_ac8(this);
var _aca=$(_ac9).data("combogrid");
var opts=_aca.options;
var _acb=$(_ac9).combo("getValues");
_ad5(_ac9,_acb,_aca.remainText);
opts.onLoadSuccess.call(this,data);
};
function _ac6(_acc,row){
var _acd=_ac8(this);
var _ace=$(_acd).data("combogrid");
var opts=_ace.options;
_ace.remainText=false;
_acf.call(this);
if(!opts.multiple){
$(_acd).combo("hidePanel");
}
opts.onClickRow.call(this,_acc,row);
};
function _ac7(_ad0){
return function(_ad1,row){
var _ad2=_ac8(this);
var opts=$(_ad2).combogrid("options");
if(_ad0=="onUnselectAll"){
if(opts.multiple){
_acf.call(this);
}
}else{
_acf.call(this);
}
opts[_ad0].call(this,_ad1,row);
};
};
function _acf(){
var dg=$(this);
var _ad3=_ac8(dg);
var _ad4=$(_ad3).data("combogrid");
var opts=_ad4.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[opts.idField];
});
vv=vv.concat(opts.unselectedValues);
_ad5(_ad3,vv,_ad4.remainText);
};
};
function nav(_ad6,dir){
var _ad7=$.data(_ad6,"combogrid");
var opts=_ad7.options;
var grid=_ad7.grid;
var _ad8=grid.datagrid("getRows").length;
if(!_ad8){
return;
}
var tr=opts.finder.getTr(grid[0],null,"highlight");
if(!tr.length){
tr=opts.finder.getTr(grid[0],null,"selected");
}
var _ad9;
if(!tr.length){
_ad9=(dir=="next"?0:_ad8-1);
}else{
var _ad9=parseInt(tr.attr("datagrid-row-index"));
_ad9+=(dir=="next"?1:-1);
if(_ad9<0){
_ad9=_ad8-1;
}
if(_ad9>=_ad8){
_ad9=0;
}
}
grid.datagrid("highlightRow",_ad9);
if(opts.selectOnNavigation){
_ad7.remainText=false;
grid.datagrid("selectRow",_ad9);
}
};
function _ad5(_ada,_adb,_adc){
var _add=$.data(_ada,"combogrid");
var opts=_add.options;
var grid=_add.grid;
var _ade=$(_ada).combo("getValues");
var _adf=$(_ada).combo("options");
var _ae0=_adf.onChange;
_adf.onChange=function(){
};
var _ae1=grid.datagrid("options");
var _ae2=_ae1.onSelect;
var _ae3=_ae1.onUnselectAll;
_ae1.onSelect=_ae1.onUnselectAll=function(){
};
if(!$.isArray(_adb)){
_adb=_adb.split(opts.separator);
}
if(!opts.multiple){
_adb=_adb.length?[_adb[0]]:[""];
}
var vv=$.map(_adb,function(_ae4){
return String(_ae4);
});
vv=$.grep(vv,function(v,_ae5){
return _ae5===$.inArray(v,vv);
});
var _ae6=$.grep(grid.datagrid("getSelections"),function(row,_ae7){
return $.inArray(String(row[opts.idField]),vv)>=0;
});
grid.datagrid("clearSelections");
grid.data("datagrid").selectedRows=_ae6;
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var _ae8=grid.datagrid("getRowIndex",v);
if(_ae8>=0){
grid.datagrid("selectRow",_ae8);
}else{
opts.unselectedValues.push(v);
}
ss.push(_ae9(v,grid.datagrid("getRows"))||_ae9(v,_ae6)||_ae9(v,opts.mappingRows)||v);
});
$(_ada).combo("setValues",_ade);
_adf.onChange=_ae0;
_ae1.onSelect=_ae2;
_ae1.onUnselectAll=_ae3;
if(!_adc){
var s=ss.join(opts.separator);
if($(_ada).combo("getText")!=s){
$(_ada).combo("setText",s);
}
}
$(_ada).combo("setValues",_adb);
function _ae9(_aea,a){
var item=$.easyui.getArrayItem(a,opts.idField,_aea);
return item?item[opts.textField]:undefined;
};
};
function _aeb(_aec,q){
var _aed=$.data(_aec,"combogrid");
var opts=_aed.options;
var grid=_aed.grid;
_aed.remainText=true;
if(opts.multiple&&!q){
_ad5(_aec,[],true);
}else{
_ad5(_aec,[q],true);
}
if(opts.mode=="remote"){
grid.datagrid("clearSelections");
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(!q){
return;
}
grid.datagrid("clearSelections").datagrid("highlightRow",-1);
var rows=grid.datagrid("getRows");
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
$.map(rows,function(row,i){
if(q==row[opts.textField]){
grid.datagrid("selectRow",i);
}else{
if(opts.filter.call(_aec,q,row)){
grid.datagrid("highlightRow",i);
}
}
});
}
});
}
};
function _aee(_aef){
var _af0=$.data(_aef,"combogrid");
var opts=_af0.options;
var grid=_af0.grid;
var tr=opts.finder.getTr(grid[0],null,"highlight");
_af0.remainText=false;
if(tr.length){
var _af1=parseInt(tr.attr("datagrid-row-index"));
if(opts.multiple){
if(tr.hasClass("datagrid-row-selected")){
grid.datagrid("unselectRow",_af1);
}else{
grid.datagrid("selectRow",_af1);
}
}else{
grid.datagrid("selectRow",_af1);
}
}
var vv=[];
$.map(grid.datagrid("getSelections"),function(row){
vv.push(row[opts.idField]);
});
$(_aef).combogrid("setValues",vv);
if(!opts.multiple){
$(_aef).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_af2,_af3){
if(typeof _af2=="string"){
var _af4=$.fn.combogrid.methods[_af2];
if(_af4){
return _af4(this,_af3);
}else{
return this.combo(_af2,_af3);
}
}
_af2=_af2||{};
return this.each(function(){
var _af5=$.data(this,"combogrid");
if(_af5){
$.extend(_af5.options,_af2);
}else{
_af5=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_af2)});
}
_abe(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _af6=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_af6.width,height:_af6.height,originalValue:_af6.originalValue,disabled:_af6.disabled,readonly:_af6.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(from).combogrid("options")),combo:$(this).next(),panel:$(from).combo("panel"),grid:$(from).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_af7){
return jq.each(function(){
var opts=$(this).combogrid("options");
if($.isArray(_af7)){
_af7=$.map(_af7,function(_af8){
if(_af8&&typeof _af8=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_af8);
return _af8[opts.idField];
}else{
return _af8;
}
});
}
_ad5(this,_af7);
});
},setValue:function(jq,_af9){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_af9)?_af9:[_af9]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_afa){
var t=$(_afa);
return $.extend({},$.fn.combo.parseOptions(_afa),$.fn.datagrid.parseOptions(_afa),$.parser.parseOptions(_afa,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_aee(this);
},query:function(q,e){
_aeb(this,q);
}},filter:function(q,row){
var opts=$(this).combogrid("options");
return (row[opts.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _afb(_afc){
var _afd=$.data(_afc,"combotreegrid");
var opts=_afd.options;
$(_afc).addClass("combotreegrid-f").combo($.extend({},opts,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _afe=p.outerHeight()-p.height();
var _aff=p._size("minHeight");
var _b00=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(opts.panelHeight))?"auto":"100%"),minHeight:(_aff?_aff-_afe:""),maxHeight:(_b00?_b00-_afe:"")});
var row=dg.treegrid("getSelected");
if(row){
dg.treegrid("scrollTo",row[opts.idField]);
}
opts.onShowPanel.call(this);
}}));
if(!_afd.grid){
var _b01=$(_afc).combo("panel");
_afd.grid=$("<table></table>").appendTo(_b01);
}
_afd.grid.treegrid($.extend({},opts,{border:false,checkbox:opts.multiple,onLoadSuccess:function(row,data){
var _b02=$(_afc).combotreegrid("getValues");
if(opts.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(row){
$.easyui.addArrayItem(_b02,row[opts.idField]);
});
}
_b07(_afc,_b02);
opts.onLoadSuccess.call(this,row,data);
_afd.remainText=false;
},onClickRow:function(row){
if(opts.multiple){
$(this).treegrid(row.checked?"uncheckNode":"checkNode",row[opts.idField]);
$(this).treegrid("unselect",row[opts.idField]);
}else{
$(_afc).combo("hidePanel");
}
_b04(_afc);
opts.onClickRow.call(this,row);
},onCheckNode:function(row,_b03){
_b04(_afc);
opts.onCheckNode.call(this,row,_b03);
}}));
};
function _b04(_b05){
var _b06=$.data(_b05,"combotreegrid");
var opts=_b06.options;
var grid=_b06.grid;
var vv=[];
if(opts.multiple){
vv=$.map(grid.treegrid("getCheckedNodes"),function(row){
return row[opts.idField];
});
}else{
var row=grid.treegrid("getSelected");
if(row){
vv.push(row[opts.idField]);
}
}
vv=vv.concat(opts.unselectedValues);
_b07(_b05,vv);
};
function _b07(_b08,_b09){
var _b0a=$.data(_b08,"combotreegrid");
var opts=_b0a.options;
var grid=_b0a.grid;
if(!$.isArray(_b09)){
_b09=_b09.split(opts.separator);
}
if(!opts.multiple){
_b09=_b09.length?[_b09[0]]:[""];
}
var vv=$.map(_b09,function(_b0b){
return String(_b0b);
});
vv=$.grep(vv,function(v,_b0c){
return _b0c===$.inArray(v,vv);
});
var _b0d=grid.treegrid("getSelected");
if(_b0d){
grid.treegrid("unselect",_b0d[opts.idField]);
}
$.map(grid.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[opts.idField]),vv)==-1){
grid.treegrid("uncheckNode",row[opts.idField]);
}
});
var ss=[];
opts.unselectedValues=[];
$.map(vv,function(v){
var row=grid.treegrid("find",v);
if(row){
if(opts.multiple){
grid.treegrid("checkNode",v);
}else{
grid.treegrid("select",v);
}
ss.push(row[opts.treeField]);
}else{
ss.push(_b0e(v,opts.mappingRows)||v);
opts.unselectedValues.push(v);
}
});
if(opts.multiple){
$.map(grid.treegrid("getCheckedNodes"),function(row){
var id=String(row[opts.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(row[opts.treeField]);
}
});
}
if(!_b0a.remainText){
var s=ss.join(opts.separator);
if($(_b08).combo("getText")!=s){
$(_b08).combo("setText",s);
}
}
$(_b08).combo("setValues",vv);
function _b0e(_b0f,a){
var item=$.easyui.getArrayItem(a,opts.idField,_b0f);
return item?item[opts.treeField]:undefined;
};
};
function _b10(_b11,q){
var _b12=$.data(_b11,"combotreegrid");
var opts=_b12.options;
var grid=_b12.grid;
_b12.remainText=true;
grid.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(opts.mode=="remote"){
$(_b11).combotreegrid("clear");
grid.treegrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(q){
var data=grid.treegrid("getData");
var vv=[];
var qq=opts.multiple?q.split(opts.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(data,true,function(row){
if(q.toLowerCase()==String(row[opts.treeField]).toLowerCase()){
v=row[opts.idField];
return false;
}else{
if(opts.filter.call(_b11,q,row)){
grid.treegrid("expandTo",row[opts.idField]);
grid.treegrid("highlightRow",row[opts.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(opts.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[opts.treeField])){
v=row[opts.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}
}
});
_b07(_b11,vv);
_b12.remainText=false;
}
}
};
function _b13(_b14){
_b04(_b14);
};
$.fn.combotreegrid=function(_b15,_b16){
if(typeof _b15=="string"){
var _b17=$.fn.combotreegrid.methods[_b15];
if(_b17){
return _b17(this,_b16);
}else{
return this.combo(_b15,_b16);
}
}
_b15=_b15||{};
return this.each(function(){
var _b18=$.data(this,"combotreegrid");
if(_b18){
$.extend(_b18.options,_b15);
}else{
_b18=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_b15)});
}
_afb(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _b19=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_b19.width,height:_b19.height,originalValue:_b19.originalValue,disabled:_b19.disabled,readonly:_b19.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_b1a){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if($.isArray(_b1a)){
_b1a=$.map(_b1a,function(_b1b){
if(_b1b&&typeof _b1b=="object"){
$.easyui.addArrayItem(opts.mappingRows,opts.idField,_b1b);
return _b1b[opts.idField];
}else{
return _b1b;
}
});
}
_b07(this,_b1a);
});
},setValue:function(jq,_b1c){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_b1c)?_b1c:[_b1c]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotreegrid("options");
if(opts.multiple){
$(this).combotreegrid("setValues",opts.originalValue);
}else{
$(this).combotreegrid("setValue",opts.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_b1d){
var t=$(_b1d);
return $.extend({},$.fn.combo.parseOptions(_b1d),$.fn.treegrid.parseOptions(_b1d),$.parser.parseOptions(_b1d,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b13(this);
},query:function(q,e){
_b10(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _b1e=e.data.target;
var opts=$(_b1e).combotreegrid("options");
if(opts.limitToGrid){
_b13(_b1e);
}
}}),filter:function(q,row){
var opts=$(this).combotreegrid("options");
return (row[opts.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);
(function($){
function _b1f(_b20){
var _b21=$.data(_b20,"datebox");
var opts=_b21.options;
$(_b20).addClass("datebox-f").combo($.extend({},opts,{onShowPanel:function(){
_b22(this);
_b23(this);
_b24(this);
_b32(this,$(this).datebox("getText"),true);
opts.onShowPanel.call(this);
}}));
if(!_b21.calendar){
var _b25=$(_b20).combo("panel").css("overflow","hidden");
_b25.panel("options").onBeforeDestroy=function(){
var c=$(this).find(".calendar-shared");
if(c.length){
c.insertBefore(c[0].pholder);
}
};
var cc=$("<div class=\"datebox-calendar-inner\"></div>").prependTo(_b25);
if(opts.sharedCalendar){
var c=$(opts.sharedCalendar);
if(!c[0].pholder){
c[0].pholder=$("<div class=\"calendar-pholder\" style=\"display:none\"></div>").insertAfter(c);
}
c.addClass("calendar-shared").appendTo(cc);
if(!c.hasClass("calendar")){
c.calendar();
}
_b21.calendar=c;
}else{
_b21.calendar=$("<div></div>").appendTo(cc).calendar();
}
$.extend(_b21.calendar.calendar("options"),{fit:true,border:false,onSelect:function(date){
var _b26=this.target;
var opts=$(_b26).datebox("options");
_b32(_b26,opts.formatter.call(_b26,date));
$(_b26).combo("hidePanel");
opts.onSelect.call(_b26,date);
}});
}
$(_b20).combo("textbox").parent().addClass("datebox");
$(_b20).datebox("initValue",opts.value);
function _b22(_b27){
var opts=$(_b27).datebox("options");
var _b28=$(_b27).combo("panel");
_b28.unbind(".datebox").bind("click.datebox",function(e){
if($(e.target).hasClass("datebox-button-a")){
var _b29=parseInt($(e.target).attr("datebox-button-index"));
opts.buttons[_b29].handler.call(e.target,_b27);
}
});
};
function _b23(_b2a){
var _b2b=$(_b2a).combo("panel");
if(_b2b.children("div.datebox-button").length){
return;
}
var _b2c=$("<div class=\"datebox-button\"><table cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%\"><tr></tr></table></div>").appendTo(_b2b);
var tr=_b2c.find("tr");
for(var i=0;i<opts.buttons.length;i++){
var td=$("<td></td>").appendTo(tr);
var btn=opts.buttons[i];
var t=$("<a class=\"datebox-button-a\" href=\"javascript:void(0)\"></a>").html($.isFunction(btn.text)?btn.text(_b2a):btn.text).appendTo(td);
t.attr("datebox-button-index",i);
}
tr.find("td").css("width",(100/opts.buttons.length)+"%");
};
function _b24(_b2d){
var _b2e=$(_b2d).combo("panel");
var cc=_b2e.children("div.datebox-calendar-inner");
_b2e.children()._outerWidth(_b2e.width());
_b21.calendar.appendTo(cc);
_b21.calendar[0].target=_b2d;
if(opts.panelHeight!="auto"){
var _b2f=_b2e.height();
_b2e.children().not(cc).each(function(){
_b2f-=$(this).outerHeight();
});
cc._outerHeight(_b2f);
}
_b21.calendar.calendar("resize");
};
};
function _b30(_b31,q){
_b32(_b31,q,true);
};
function _b33(_b34){
var _b35=$.data(_b34,"datebox");
var opts=_b35.options;
var _b36=_b35.calendar.calendar("options").current;
if(_b36){
_b32(_b34,opts.formatter.call(_b34,_b36));
$(_b34).combo("hidePanel");
}
};
function _b32(_b37,_b38,_b39){
var _b3a=$.data(_b37,"datebox");
var opts=_b3a.options;
var _b3b=_b3a.calendar;
_b3b.calendar("moveTo",opts.parser.call(_b37,_b38));
if(_b39){
$(_b37).combo("setValue",_b38);
}else{
if(_b38){
_b38=opts.formatter.call(_b37,_b3b.calendar("options").current);
}
$(_b37).combo("setText",_b38).combo("setValue",_b38);
}
};
$.fn.datebox=function(_b3c,_b3d){
if(typeof _b3c=="string"){
var _b3e=$.fn.datebox.methods[_b3c];
if(_b3e){
return _b3e(this,_b3d);
}else{
return this.combo(_b3c,_b3d);
}
}
_b3c=_b3c||{};
return this.each(function(){
var _b3f=$.data(this,"datebox");
if(_b3f){
$.extend(_b3f.options,_b3c);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_b3c)});
}
_b1f(this);
});
};
$.fn.datebox.methods={options:function(jq){
var _b40=jq.combo("options");
return $.extend($.data(jq[0],"datebox").options,{width:_b40.width,height:_b40.height,originalValue:_b40.originalValue,disabled:_b40.disabled,readonly:_b40.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).combo("cloneFrom",from);
$.data(this,"datebox",{options:$.extend(true,{},$(from).datebox("options")),calendar:$(from).datebox("calendar")});
$(this).addClass("datebox-f");
});
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},initValue:function(jq,_b41){
return jq.each(function(){
var opts=$(this).datebox("options");
var _b42=opts.value;
if(_b42){
_b42=opts.formatter.call(this,opts.parser.call(this,_b42));
}
$(this).combo("initValue",_b42).combo("setText",_b42);
});
},setValue:function(jq,_b43){
return jq.each(function(){
_b32(this,_b43);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_b44){
return $.extend({},$.fn.combo.parseOptions(_b44),$.parser.parseOptions(_b44,["sharedCalendar"]));
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",sharedCalendar:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b33(this);
},query:function(q,e){
_b30(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",buttons:[{text:function(_b45){
return $(_b45).datebox("options").currentText;
},handler:function(_b46){
var now=new Date();
$(_b46).datebox("calendar").calendar({year:now.getFullYear(),month:now.getMonth()+1,current:new Date(now.getFullYear(),now.getMonth(),now.getDate())});
_b33(_b46);
}},{text:function(_b47){
return $(_b47).datebox("options").closeText;
},handler:function(_b48){
$(this).closest("div.combo-panel").panel("close");
}}],formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return (m<10?("0"+m):m)+"/"+(d<10?("0"+d):d)+"/"+y;
},parser:function(s){
if(!s){
return new Date();
}
var ss=s.split("/");
var m=parseInt(ss[0],10);
var d=parseInt(ss[1],10);
var y=parseInt(ss[2],10);
if(!isNaN(y)&&!isNaN(m)&&!isNaN(d)){
return new Date(y,m-1,d);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _b49(_b4a){
var _b4b=$.data(_b4a,"datetimebox");
var opts=_b4b.options;
$(_b4a).datebox($.extend({},opts,{onShowPanel:function(){
var _b4c=$(this).datetimebox("getValue");
_b52(this,_b4c,true);
opts.onShowPanel.call(this);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_b4a).removeClass("datebox-f").addClass("datetimebox-f");
$(_b4a).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(this.target,date);
}});
if(!_b4b.spinner){
var _b4d=$(_b4a).datebox("panel");
var p=$("<div style=\"padding:2px\"><input></div>").insertAfter(_b4d.children("div.datebox-calendar-inner"));
_b4b.spinner=p.children("input");
}
_b4b.spinner.timespinner({width:opts.spinnerWidth,showSeconds:opts.showSeconds,separator:opts.timeSeparator});
$(_b4a).datetimebox("initValue",opts.value);
};
function _b4e(_b4f){
var c=$(_b4f).datetimebox("calendar");
var t=$(_b4f).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _b50(_b51,q){
_b52(_b51,q,true);
};
function _b53(_b54){
var opts=$.data(_b54,"datetimebox").options;
var date=_b4e(_b54);
_b52(_b54,opts.formatter.call(_b54,date));
$(_b54).combo("hidePanel");
};
function _b52(_b55,_b56,_b57){
var opts=$.data(_b55,"datetimebox").options;
$(_b55).combo("setValue",_b56);
if(!_b57){
if(_b56){
var date=opts.parser.call(_b55,_b56);
$(_b55).combo("setText",opts.formatter.call(_b55,date));
$(_b55).combo("setValue",opts.formatter.call(_b55,date));
}else{
$(_b55).combo("setText",_b56);
}
}
var date=opts.parser.call(_b55,_b56);
$(_b55).datetimebox("calendar").calendar("moveTo",date);
$(_b55).datetimebox("spinner").timespinner("setValue",_b58(date));
function _b58(date){
function _b59(_b5a){
return (_b5a<10?"0":"")+_b5a;
};
var tt=[_b59(date.getHours()),_b59(date.getMinutes())];
if(opts.showSeconds){
tt.push(_b59(date.getSeconds()));
}
return tt.join($(_b55).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_b5b,_b5c){
if(typeof _b5b=="string"){
var _b5d=$.fn.datetimebox.methods[_b5b];
if(_b5d){
return _b5d(this,_b5c);
}else{
return this.datebox(_b5b,_b5c);
}
}
_b5b=_b5b||{};
return this.each(function(){
var _b5e=$.data(this,"datetimebox");
if(_b5e){
$.extend(_b5e.options,_b5b);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_b5b)});
}
_b49(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var _b5f=jq.datebox("options");
return $.extend($.data(jq[0],"datetimebox").options,{originalValue:_b5f.originalValue,disabled:_b5f.disabled,readonly:_b5f.readonly});
},cloneFrom:function(jq,from){
return jq.each(function(){
$(this).datebox("cloneFrom",from);
$.data(this,"datetimebox",{options:$.extend(true,{},$(from).datetimebox("options")),spinner:$(from).datetimebox("spinner")});
$(this).removeClass("datebox-f").addClass("datetimebox-f");
});
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},initValue:function(jq,_b60){
return jq.each(function(){
var opts=$(this).datetimebox("options");
var _b61=opts.value;
if(_b61){
_b61=opts.formatter.call(this,opts.parser.call(this,_b61));
}
$(this).combo("initValue",_b61).combo("setText",_b61);
});
},setValue:function(jq,_b62){
return jq.each(function(){
_b52(this,_b62);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_b63){
var t=$(_b63);
return $.extend({},$.fn.datebox.parseOptions(_b63),$.parser.parseOptions(_b63,["timeSeparator","spinnerWidth",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{spinnerWidth:"100%",showSeconds:true,timeSeparator:":",keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_b53(this);
},query:function(q,e){
_b50(this,q);
}},buttons:[{text:function(_b64){
return $(_b64).datetimebox("options").currentText;
},handler:function(_b65){
var opts=$(_b65).datetimebox("options");
_b52(_b65,opts.formatter.call(_b65,new Date()));
$(_b65).datetimebox("hidePanel");
}},{text:function(_b66){
return $(_b66).datetimebox("options").okText;
},handler:function(_b67){
_b53(_b67);
}},{text:function(_b68){
return $(_b68).datetimebox("options").closeText;
},handler:function(_b69){
$(_b69).datetimebox("hidePanel");
}}],formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _b6a(_b6b){
return (_b6b<10?"0":"")+_b6b;
};
var _b6c=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_b6a(h)+_b6c+_b6a(M);
if($(this).datetimebox("options").showSeconds){
r+=_b6c+_b6a(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _b6d=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_b6d);
var hour=parseInt(tt[0],10)||0;
var _b6e=parseInt(tt[1],10)||0;
var _b6f=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_b6e,_b6f);
}});
})(jQuery);
(function($){
function init(_b70){
var _b71=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_b70);
var t=$(_b70);
t.addClass("slider-f").hide();
var name=t.attr("name");
if(name){
_b71.find("input.slider-value").attr("name",name);
t.removeAttr("name").attr("sliderName",name);
}
_b71.bind("_resize",function(e,_b72){
if($(this).hasClass("easyui-fluid")||_b72){
_b73(_b70);
}
return false;
});
return _b71;
};
function _b73(_b74,_b75){
var _b76=$.data(_b74,"slider");
var opts=_b76.options;
var _b77=_b76.slider;
if(_b75){
if(_b75.width){
opts.width=_b75.width;
}
if(_b75.height){
opts.height=_b75.height;
}
}
_b77._size(opts);
if(opts.mode=="h"){
_b77.css("height","");
_b77.children("div").css("height","");
}else{
_b77.css("width","");
_b77.children("div").css("width","");
_b77.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(_b77._outerHeight());
}
_b78(_b74);
};
function _b79(_b7a){
var _b7b=$.data(_b7a,"slider");
var opts=_b7b.options;
var _b7c=_b7b.slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_b7d(aa);
function _b7d(aa){
var rule=_b7c.find("div.slider-rule");
var _b7e=_b7c.find("div.slider-rulelabel");
rule.empty();
_b7e.empty();
for(var i=0;i<aa.length;i++){
var _b7f=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_b7f);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_b7e);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_b7f,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_b7f,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _b80(_b81){
var _b82=$.data(_b81,"slider");
var opts=_b82.options;
var _b83=_b82.slider;
_b83.removeClass("slider-h slider-v slider-disabled");
_b83.addClass(opts.mode=="h"?"slider-h":"slider-v");
_b83.addClass(opts.disabled?"slider-disabled":"");
var _b84=_b83.find(".slider-inner");
_b84.html("<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
if(opts.range){
_b84.append("<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>");
}
_b83.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _b85=_b83.width();
if(opts.mode!="h"){
left=e.data.top;
_b85=_b83.height();
}
if(left<0||left>_b85){
return false;
}else{
_b86(left,this);
return false;
}
},onStartDrag:function(){
_b82.isDragging=true;
opts.onSlideStart.call(_b81,opts.value);
},onStopDrag:function(e){
_b86(opts.mode=="h"?e.data.left:e.data.top,this);
opts.onSlideEnd.call(_b81,opts.value);
opts.onComplete.call(_b81,opts.value);
_b82.isDragging=false;
}});
_b83.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(e){
if(_b82.isDragging||opts.disabled){
return;
}
var pos=$(this).offset();
_b86(opts.mode=="h"?(e.pageX-pos.left):(e.pageY-pos.top));
opts.onComplete.call(_b81,opts.value);
});
function _b86(pos,_b87){
var _b88=_b89(_b81,pos);
var s=Math.abs(_b88%opts.step);
if(s<opts.step/2){
_b88-=s;
}else{
_b88=_b88-s+opts.step;
}
if(opts.range){
var v1=opts.value[0];
var v2=opts.value[1];
var m=parseFloat((v1+v2)/2);
if(_b87){
var _b8a=$(_b87).nextAll(".slider-handle").length>0;
if(_b88<=v2&&_b8a){
v1=_b88;
}else{
if(_b88>=v1&&(!_b8a)){
v2=_b88;
}
}
}else{
if(_b88<v1){
v1=_b88;
}else{
if(_b88>v2){
v2=_b88;
}else{
_b88<m?v1=_b88:v2=_b88;
}
}
}
$(_b81).slider("setValues",[v1,v2]);
}else{
$(_b81).slider("setValue",_b88);
}
};
};
function _b8b(_b8c,_b8d){
var _b8e=$.data(_b8c,"slider");
var opts=_b8e.options;
var _b8f=_b8e.slider;
var _b90=$.isArray(opts.value)?opts.value:[opts.value];
var _b91=[];
if(!$.isArray(_b8d)){
_b8d=$.map(String(_b8d).split(opts.separator),function(v){
return parseFloat(v);
});
}
_b8f.find(".slider-value").remove();
var name=$(_b8c).attr("sliderName")||"";
for(var i=0;i<_b8d.length;i++){
var _b92=_b8d[i];
if(_b92<opts.min){
_b92=opts.min;
}
if(_b92>opts.max){
_b92=opts.max;
}
var _b93=$("<input type=\"hidden\" class=\"slider-value\">").appendTo(_b8f);
_b93.attr("name",name);
_b93.val(_b92);
_b91.push(_b92);
var _b94=_b8f.find(".slider-handle:eq("+i+")");
var tip=_b94.next();
var pos=_b95(_b8c,_b92);
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_b8c,_b92));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _b96="left:"+pos+"px;";
_b94.attr("style",_b96);
tip.attr("style",_b96+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _b96="top:"+pos+"px;";
_b94.attr("style",_b96);
tip.attr("style",_b96+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
}
opts.value=opts.range?_b91:_b91[0];
$(_b8c).val(opts.range?_b91.join(opts.separator):_b91[0]);
if(_b90.join(",")!=_b91.join(",")){
opts.onChange.call(_b8c,opts.value,(opts.range?_b90:_b90[0]));
}
};
function _b78(_b97){
var opts=$.data(_b97,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_b8b(_b97,opts.value);
opts.onChange=fn;
};
function _b95(_b98,_b99){
var _b9a=$.data(_b98,"slider");
var opts=_b9a.options;
var _b9b=_b9a.slider;
var size=opts.mode=="h"?_b9b.width():_b9b.height();
var pos=opts.converter.toPosition.call(_b98,_b99,size);
if(opts.mode=="v"){
pos=_b9b.height()-pos;
}
if(opts.reversed){
pos=size-pos;
}
return pos.toFixed(0);
};
function _b89(_b9c,pos){
var _b9d=$.data(_b9c,"slider");
var opts=_b9d.options;
var _b9e=_b9d.slider;
var size=opts.mode=="h"?_b9e.width():_b9e.height();
var pos=opts.mode=="h"?(opts.reversed?(size-pos):pos):(opts.reversed?pos:(size-pos));
var _b9f=opts.converter.toValue.call(_b9c,pos,size);
return _b9f.toFixed(0);
};
$.fn.slider=function(_ba0,_ba1){
if(typeof _ba0=="string"){
return $.fn.slider.methods[_ba0](this,_ba1);
}
_ba0=_ba0||{};
return this.each(function(){
var _ba2=$.data(this,"slider");
if(_ba2){
$.extend(_ba2.options,_ba0);
}else{
_ba2=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_ba0),slider:init(this)});
$(this).removeAttr("disabled");
}
var opts=_ba2.options;
opts.min=parseFloat(opts.min);
opts.max=parseFloat(opts.max);
if(opts.range){
if(!$.isArray(opts.value)){
opts.value=$.map(String(opts.value).split(opts.separator),function(v){
return parseFloat(v);
});
}
if(opts.value.length<2){
opts.value.push(opts.max);
}
}else{
opts.value=parseFloat(opts.value);
}
opts.step=parseFloat(opts.step);
opts.originalValue=opts.value;
_b80(this);
_b79(this);
_b73(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_ba3){
return jq.each(function(){
_b73(this,_ba3);
});
},getValue:function(jq){
return jq.slider("options").value;
},getValues:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_ba4){
return jq.each(function(){
_b8b(this,[_ba4]);
});
},setValues:function(jq,_ba5){
return jq.each(function(){
_b8b(this,_ba5);
});
},clear:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
_b8b(this,opts.range?[opts.min,opts.max]:[opts.min]);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).slider("options");
$(this).slider(opts.range?"setValues":"setValue",opts.originalValue);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_b80(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_b80(this);
});
}};
$.fn.slider.parseOptions=function(_ba6){
var t=$(_ba6);
return $.extend({},$.parser.parseOptions(_ba6,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,range:false,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(_ba7){
return _ba7;
},converter:{toPosition:function(_ba8,size){
var opts=$(this).slider("options");
return (_ba8-opts.min)/(opts.max-opts.min)*size;
},toValue:function(pos,size){
var opts=$(this).slider("options");
return opts.min+(opts.max-opts.min)*(pos/size);
}},onChange:function(_ba9,_baa){
},onSlideStart:function(_bab){
},onSlideEnd:function(_bac){
},onComplete:function(_bad){
}};
})(jQuery);



/***/ }),

/***/ 3:
/***/ (function(module, exports) {

if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '共{pages}页';
	$.fn.pagination.defaults.displayMsg = '显示{from}到{to},共{total}记录';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = '正在处理，请稍待。。。';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = '确定';
	$.messager.defaults.cancel = '取消';
}
$.map(['validatebox','textbox','passwordbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
	if ($.fn[plugin]){
		$.fn[plugin].defaults.missingMessage = '该输入项为必输项';
	}
});
if ($.fn.validatebox){
	$.fn.validatebox.defaults.rules.email.message = '请输入有效的电子邮件地址';
	$.fn.validatebox.defaults.rules.url.message = '请输入有效的URL地址';
	$.fn.validatebox.defaults.rules.length.message = '输入内容长度必须介于{0}和{1}之间';
	$.fn.validatebox.defaults.rules.remote.message = '请修正该字段';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['日','一','二','三','四','五','六'];
	$.fn.calendar.defaults.months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = '今天';
	$.fn.datebox.defaults.closeText = '关闭';
	$.fn.datebox.defaults.okText = '确定';
	$.fn.datebox.defaults.formatter = function(date){
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
	};
	$.fn.datebox.defaults.parser = function(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	};
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText
	});
}
if ($.fn.datetimespinner){
	$.fn.datetimespinner.defaults.selections = [[0,4],[5,7],[8,10],[11,13],[14,16],[17,19]]
}


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

/**
 * portal - jQuery EasyUI
 * 
 * Licensed under the GPL:
 *   http://www.gnu.org/licenses/gpl.txt
 *
 * Copyright 2010-2012 www.jeasyui.com 
 * 
 * Dependencies:
 *   draggable
 *   panel
 * 
 */
(function ($) {
	/**
  * initialize the portal
  */
	function init(target) {
		$(target).addClass('portal');
		var table = $('<table border="0" cellspacing="0" cellpadding="0"><tr></tr></table>').appendTo(target);
		var tr = table.find('tr');

		var columnWidths = [];
		var totalWidth = 0;
		$(target).children('div:first').addClass('portal-column-left');
		$(target).children('div:last').addClass('portal-column-right');
		$(target).find('>div').each(function () {
			// each column panel
			var column = $(this);
			totalWidth += column.outerWidth();
			columnWidths.push(column.outerWidth());

			var td = $('<td class="portal-column-td"></td>').appendTo(tr);
			column.addClass('portal-column').appendTo(td);
			column.find('>div').each(function () {
				// each portal panel
				var p = $(this).addClass('portal-p').panel({
					doSize: false,
					cls: 'portal-panel'
				});
				makeDraggable(target, p);
			});
		});
		for (var i = 0; i < columnWidths.length; i++) {
			columnWidths[i] /= totalWidth;
		}

		$(target).bind('_resize', function () {
			var opts = $.data(target, 'portal').options;
			if (opts.fit == true) {
				setSize(target);
			}
			return false;
		});

		return columnWidths;
	}

	function initCss() {
		if (!$('#easyui-portal-style').length) {
			$('head').append('<style id="easyui-portal-style">' + '.portal{padding:0;margin:0;overflow:auto;border:1px solid #99bbe8;}' + '.portal-noborder{border:0;}' + '.portal .portal-panel{margin-bottom:10px;}' + '.portal-column-td{vertical-align:top;}' + '.portal-column{padding:10px 0 10px 10px;overflow:hidden;}' + '.portal-column-left{padding-left:10px;}' + '.portal-column-right{padding-right:10px;}' + '.portal-proxy{opacity:0.6;filter:alpha(opacity=60);}' + '.portal-spacer{border:3px dashed #eee;margin-bottom:10px;}' + '</style>');
		}
	}

	function setSize(target) {
		var t = $(target);
		var opts = $.data(target, 'portal').options;
		if (opts.fit) {
			var p = t.parent();
			opts.width = p.width();
			opts.height = p.height();
		}
		if (!isNaN(opts.width)) {
			t._outerWidth(opts.width);
		} else {
			t.width('auto');
		}
		if (!isNaN(opts.height)) {
			t._outerHeight(opts.height);
		} else {
			t.height('auto');
		}

		var hasScroll = t.find('>table').outerHeight() > t.height();
		var width = t.width();
		var columnWidths = $.data(target, 'portal').columnWidths;
		var leftWidth = 0;

		// calculate and set every column size
		for (var i = 0; i < columnWidths.length; i++) {
			var p = t.find('div.portal-column:eq(' + i + ')');
			var w = Math.floor(width * columnWidths[i]);
			if (i == columnWidths.length - 1) {
				//				w = width - leftWidth - (hasScroll == true ? 28 : 10);
				w = width - leftWidth - (hasScroll == true ? 18 : 0);
			}
			p._outerWidth(w);
			leftWidth += p.outerWidth();

			// resize every panel of the column
			p.find('div.portal-p').panel('resize', { width: p.width() });
		}
		opts.onResize.call(target, opts.width, opts.height);
	}

	/**
  * set draggable feature for the specified panel
  */
	function makeDraggable(target, panel) {
		var spacer;
		panel.panel('panel').draggable({
			handle: '>div.panel-header>div.panel-title',
			proxy: function proxy(source) {
				var p = $('<div class="portal-proxy">proxy</div>').insertAfter(source);
				p.width($(source).width());
				p.height($(source).height());
				p.html($(source).html());
				p.find('div.portal-p').removeClass('portal-p');
				return p;
			},
			onBeforeDrag: function onBeforeDrag(e) {
				e.data.startTop = $(this).position().top + $(target).scrollTop();
			},
			onStartDrag: function onStartDrag(e) {
				$(this).hide();
				spacer = $('<div class="portal-spacer"></div>').insertAfter(this);
				setSpacerSize($(this).outerWidth(), $(this).outerHeight());
			},
			onDrag: function onDrag(e) {
				var p = findPanel(e, this);
				if (p) {
					if (p.pos == 'up') {
						spacer.insertBefore(p.target);
					} else {
						spacer.insertAfter(p.target);
					}
					setSpacerSize($(p.target).outerWidth());
				} else {
					var c = findColumn(e);
					if (c) {
						if (c.find('div.portal-spacer').length == 0) {
							spacer.appendTo(c);
							setSize(target);
							setSpacerSize(c.width());
						}
					}
				}
			},
			onStopDrag: function onStopDrag(e) {
				$(this).css('position', 'static');
				$(this).show();
				spacer.hide();
				$(this).insertAfter(spacer);
				spacer.remove();
				setSize(target);
				panel.panel('move');

				var opts = $.data(target, 'portal').options;
				opts.onStateChange.call(target, panel);
			}
		});

		/**
   * find which panel the cursor is over
   */
		function findPanel(e, source) {
			var result = null;
			$(target).find('div.portal-p').each(function () {
				var pal = $(this).panel('panel');
				if (pal[0] != source) {
					var pos = pal.offset();
					if (e.pageX > pos.left && e.pageX < pos.left + pal.outerWidth() && e.pageY > pos.top && e.pageY < pos.top + pal.outerHeight()) {
						if (e.pageY > pos.top + pal.outerHeight() / 2) {
							result = {
								target: pal,
								pos: 'down'
							};
						} else {
							result = {
								target: pal,
								pos: 'up'
							};
						}
					}
				}
			});
			return result;
		}

		/**
   * find which portal column the cursor is over
   */
		function findColumn(e) {
			var result = null;
			$(target).find('div.portal-column').each(function () {
				var pal = $(this);
				var pos = pal.offset();
				if (e.pageX > pos.left && e.pageX < pos.left + pal.outerWidth()) {
					result = pal;
				}
			});
			return result;
		}

		/**
   * set the spacer size
   */
		function setSpacerSize(width, height) {
			spacer._outerWidth(width);
			if (height) {
				spacer._outerHeight(height);
			}
		}
	}

	$.fn.portal = function (options, param) {
		if (typeof options == 'string') {
			return $.fn.portal.methods[options](this, param);
		}

		options = options || {};
		return this.each(function () {
			var state = $.data(this, 'portal');
			if (state) {
				$.extend(state.options, options);
			} else {
				state = $.data(this, 'portal', {
					options: $.extend({}, $.fn.portal.defaults, $.fn.portal.parseOptions(this), options),
					columnWidths: init(this)
				});
			}
			if (state.options.border) {
				$(this).removeClass('portal-noborder');
			} else {
				$(this).addClass('portal-noborder');
			}
			initCss();
			setSize(this);
		});
	};

	$.fn.portal.methods = {
		options: function options(jq) {
			return $.data(jq[0], 'portal').options;
		},
		resize: function resize(jq, param) {
			return jq.each(function () {
				if (param) {
					var opts = $.data(this, 'portal').options;
					if (param.width) opts.width = param.width;
					if (param.height) opts.height = param.height;
				}
				setSize(this);
			});
		},
		getPanels: function getPanels(jq, columnIndex) {
			var c = jq; // the panel container
			if (columnIndex >= 0) {
				c = jq.find('div.portal-column:eq(' + columnIndex + ')');
			}
			var panels = [];
			c.find('div.portal-p').each(function () {
				panels.push($(this));
			});
			return panels;
		},
		add: function add(jq, param) {
			// param: {panel,columnIndex}
			return jq.each(function () {
				var c = $(this).find('div.portal-column:eq(' + param.columnIndex + ')');
				var p = param.panel.addClass('portal-p');
				p.panel('panel').addClass('portal-panel').appendTo(c);
				makeDraggable(this, p);
				p.panel('resize', { width: c.width() });
			});
		},
		remove: function remove(jq, panel) {
			return jq.each(function () {
				var panels = $(this).portal('getPanels');
				for (var i = 0; i < panels.length; i++) {
					var p = panels[i];
					if (p[0] == $(panel)[0]) {
						p.panel('destroy');
					}
				}
			});
		},
		disableDragging: function disableDragging(jq, panel) {
			panel.panel('panel').draggable('disable');
			return jq;
		},
		enableDragging: function enableDragging(jq, panel) {
			panel.panel('panel').draggable('enable');
			return jq;
		}
	};

	$.fn.portal.parseOptions = function (target) {
		var t = $(target);
		return {
			width: parseInt(target.style.width) || undefined,
			height: parseInt(target.style.height) || undefined,
			border: t.attr('border') ? t.attr('border') == 'true' : undefined,
			fit: t.attr('fit') ? t.attr('fit') == 'true' : undefined
		};
	};

	$.fn.portal.defaults = {
		width: 'auto',
		height: 'auto',
		border: true,
		fit: false,
		onResize: function onResize(width, height) {},
		onStateChange: function onStateChange(panel) {}
	};
})(jQuery);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })

/******/ });