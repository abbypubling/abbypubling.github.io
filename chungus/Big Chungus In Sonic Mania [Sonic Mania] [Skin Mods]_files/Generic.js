/*
* jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
* http://benalman.com/projects/jquery-dotimeout-plugin/
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function() {return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function() {var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function() {k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);
/*! jQuery Cookie Plugin v1.4.1 https://github.com/carhartl/jquery-cookie Copyright 2013 Klaus Hartl Released under the MIT license */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; Expires="+f.expires.toUTCString():"",f.path?"; Path="+f.path:"",f.domain?"; Domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var s=r?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,x=p.length;x>m;m++){var v=p[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){s=t(l,c);break}r||void 0===(l=t(l))||(s[k]=l)}return s};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});
/*!
* jquery.json-2.3.min.fjs
* http://code.google.com/p/jquery-json/
*/
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var type=typeof o;if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return''+o;}
if(type==='string'){return $.quoteString(o);}
if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
return'['+ret.join(',')+']';}
var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
val=$.toJSON(o[k]);pairs.push(name+':'+val);}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};})(jQuery);
/*!
* hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
* http://briancherne.github.io/jquery-hoverIntent/
*
* You may use hoverIntent under the terms of the MIT license. Basically that
* means you are free to use hoverIntent as long as this header is left intact.
* Copyright 2007-2017 Brian Cherne
*/
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});
/*
* jQuery Superfish Menu Plugin
* Copyright (c) 2013 Joel Birch
*
* Dual licensed under the MIT and GPL licenses:
*	http://www.opensource.org/licenses/mit-license.php
*	http://www.gnu.org/licenses/gpl.html
*/
!function(e,s){"use strict";var o,t,n,i,r,a,h,l,p,u,f,c,d,v,m,y,C,w,g=(n="sf-breadcrumb",i="sf-js-enabled",r="sf-with-ul",a="sf-arrows",(t=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent))&&e("html").css("cursor","pointer").on("click",e.noop),h=t,l="behavior"in(o=document.documentElement.style)&&"fill"in o&&/iemobile/i.test(navigator.userAgent),p=!!s.PointerEvent,u=function(e,s,o){var t=i;s.cssArrows&&(t+=" "+a),e[o?"addClass":"removeClass"](t)},f=function(e,s){var o=s?"addClass":"removeClass";e.children("a")[o](r)},c=function(e){var s=e.css("ms-touch-action"),o=e.css("touch-action");o="pan-y"===(o=o||s)?"auto":"pan-y",e.css({"ms-touch-action":o,"touch-action":o})},d=function(e){return e.closest("."+i)},v=function(e){return d(e).data("sfOptions")},m=function(){var s=e(this),o=v(s);clearTimeout(o.sfTimer),s.siblings().superfish("hide").end().superfish("show")},y=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(d(this)),s.$path.length&&e.proxy(m,s.$path)())},C=function(){var s=e(this),o=v(s);h?e.proxy(y,s,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout(e.proxy(y,s,o),o.delay))},w=function(s){var o=e(this),t=v(o),n=o.siblings(s.data.popUpSelector);if(!1===t.onHandleTouch.call(n))return this;n.length>0&&n.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?o.trigger("focus"):e.proxy(m,o.parent("li"))())},{hide:function(s){if(this.length){var o=v(this);if(!o)return this;var t=!0===o.retainPath?o.$path:"",n=this.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),i=o.speedOut;if(s&&(n.show(),i=0),o.retainPath=!1,!1===o.onBeforeHide.call(n))return this;n.stop(!0,!0).animate(o.animationOut,i,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=v(this);if(!e)return this;var s=this.addClass(e.hoverClass).children(e.popUpSelector);return!1===e.onBeforeShow.call(s)?this:(s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),this)},destroy:function(){return this.each(function(){var s,o=e(this),t=o.data("sfOptions");if(!t)return!1;s=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),u(o,t),f(s),c(o),o.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,s){if(void 0!==s)return s.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sfOptions")})},init:function(s){return this.each(function(){var o=e(this);if(o.data("sfOptions"))return!1;var t,i=e.extend({},e.fn.superfish.defaults,s),r=o.find(i.popUpSelector).parent("li");i.$path=(t=i,o.find("li."+t.pathClass).slice(0,t.pathLevels).addClass(t.hoverClass+" "+n).filter(function(){return e(this).children(t.popUpSelector).hide().show().length}).removeClass(t.pathClass)),o.data("sfOptions",i),u(o,i,!0),f(r,!0),c(o),function(s,o){var t="li:has("+o.popUpSelector+")";e.fn.hoverIntent&&!o.disableHI?s.hoverIntent(m,C,t):s.on("mouseenter.superfish",t,m).on("mouseleave.superfish",t,C);var n="MSPointerDown.superfish";p&&(n="pointerdown.superfish"),h||(n+=" touchend.superfish"),l&&(n+=" mousedown.superfish"),s.on("focusin.superfish","li",m).on("focusout.superfish","li",C).on(n,"a",o,w)}(o,i),r.not("."+n).superfish("hide",!0),i.onInit.call(this)})}});e.fn.superfish=function(s,o){return g[s]?g[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):g.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window);
/** Abstract base class for collection plugins v1.0.1.
Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);
/* http://keith-wood.name/countdown.html
Countdown for jQuery v2.0.2.
Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
Available under the MIT (http://keith-wood.name/licence.html) license.
Please attribute the author if you use it. */
(function($){var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.JQPlugin.createPlugin({name:w,defaultOptions:{until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,padZeroes:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1},regionalOptions:{'':{labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,digits:['0','1','2','3','4','5','6','7','8','9'],timeSeparator:':',isRTL:false}},_getters:['getTimes'],_rtlClass:w+'-rtl',_sectionClass:w+'-section',_amountClass:w+'-amount',_periodClass:w+'-period',_rowClass:w+'-row',_holdingClass:w+'-holding',_showClass:w+'-show',_descrClass:w+'-descr',_timerElems:[],_init:function(){var c=this;this._super();this._serverSyncs=[];var d=(typeof Date.now=='function'?Date.now:function(){return new Date().getTime()});var e=(window.performance&&typeof window.performance.now=='function');function timerCallBack(a){var b=(a<1e12?(e?(performance.now()+performance.timing.navigationStart):d()):a||d());if(b-g>=1000){c._updateElems();g=b}f(timerCallBack)}var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;var g=0;if(!f||$.noRequestAnimationFrame){$.noRequestAnimationFrame=null;setInterval(function(){c._updateElems()},980)}else{g=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||d();f(timerCallBack)}},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},resync:function(){var d=this;$('.'+this._getMarker()).each(function(){var a=$.data(this,d.name);if(a.options.serverSync){var b=null;for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][0]==a.options.serverSync){b=d._serverSyncs[i];break}}if(b[2]==null){var c=($.isFunction(a.options.serverSync)?a.options.serverSync.apply(this,[]):null);b[2]=(c?new Date().getTime()-c.getTime():0)-b[1]}if(a._since){a._since.setMilliseconds(a._since.getMilliseconds()+b[2])}a._until.setMilliseconds(a._until.getMilliseconds()+b[2])}});for(var i=0;i<d._serverSyncs.length;i++){if(d._serverSyncs[i][2]!=null){d._serverSyncs[i][1]+=d._serverSyncs[i][2];delete d._serverSyncs[i][2]}}},_instSettings:function(a,b){return{_periods:[0,0,0,0,0,0,0]}},_addElem:function(a){if(!this._hasElem(a)){this._timerElems.push(a)}},_hasElem:function(a){return($.inArray(a,this._timerElems)>-1)},_removeElem:function(b){this._timerElems=$.map(this._timerElems,function(a){return(a==b?null:a)})},_updateElems:function(){for(var i=this._timerElems.length-1;i>=0;i--){this._updateCountdown(this._timerElems[i])}},_optionsChanged:function(a,b,c){if(c.layout){c.layout=c.layout.replace(/&lt;/g,'<').replace(/&gt;/g,'>')}this._resetExtraLabels(b.options,c);var d=(b.options.timezone!=c.timezone);$.extend(b.options,c);this._adjustSettings(a,b,c.until!=null||c.since!=null||d);var e=new Date();if((b._since&&b._since<e)||(b._until&&b._until>e)){this._addElem(a[0])}this._updateCountdown(a,b)},_updateCountdown:function(a,b){a=a.jquery?a:$(a);b=b||this._getInst(a);if(!b){return}a.html(this._generateHTML(b)).toggleClass(this._rtlClass,b.options.isRTL);if($.isFunction(b.options.onTick)){var c=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date());if(b.options.tickInterval==1||this.periodsToSeconds(c)%b.options.tickInterval==0){b.options.onTick.apply(a[0],[c])}}var d=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(d&&!b._expiring){b._expiring=true;if(this._hasElem(a[0])||b.options.alwaysExpire){this._removeElem(a[0]);if($.isFunction(b.options.onExpiry)){b.options.onExpiry.apply(a[0],[])}if(b.options.expiryText){var e=b.options.layout;b.options.layout=b.options.expiryText;this._updateCountdown(a[0],b);b.options.layout=e}if(b.options.expiryUrl){window.location=b.options.expiryUrl}}b._expiring=false}else if(b._hold=='pause'){this._removeElem(a[0])}},_resetExtraLabels:function(a,b){for(var n in b){if(n.match(/[Ll]abels[02-9]|compactLabels1/)){a[n]=b[n]}}for(var n in a){if(n.match(/[Ll]abels[02-9]|compactLabels1/)&&typeof b[n]==='undefined'){a[n]=null}}},_adjustSettings:function(a,b,c){var d=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==b.options.serverSync){d=this._serverSyncs[i][1];break}}if(d!=null){var e=(b.options.serverSync?d:0);var f=new Date()}else{var g=($.isFunction(b.options.serverSync)?b.options.serverSync.apply(a[0],[]):null);var f=new Date();var e=(g?f.getTime()-g.getTime():0);this._serverSyncs.push([b.options.serverSync,e])}var h=b.options.timezone;h=(h==null?-f.getTimezoneOffset():h);if(c||(!c&&b._until==null&&b._since==null)){b._since=b.options.since;if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(b.options.until,f));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}}b._show=this._determineShow(b)},_preDestroy:function(a,b){this._removeElem(a[0]);a.empty()},pause:function(a){this._hold(a,'pause')},lap:function(a){this._hold(a,'lap')},resume:function(a){this._hold(a,null)},toggle:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'pause':'resume'](a)},toggleLap:function(a){var b=$.data(a,this.name)||{};this[!b._hold?'lap':'resume'](a)},_hold:function(a,b){var c=$.data(a,this.name);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addElem(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,this.name,c);this._updateCountdown(a,c)}},getTimes:function(a){var b=$.data(a,this.name);return(!b?null:(b._hold=='pause'?b._savePeriods:(!b._hold?b._periods:this._calculatePeriods(b,b._show,b.options.significant,new Date()))))},_determineTime:function(k,l){var m=this;var n=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var o=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,m._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var p=(k==null?l:(typeof k=='string'?o(k):(typeof k=='number'?n(k):k)));if(p)p.setMilliseconds(0);return p},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this;c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,c.options.significant,new Date()));var e=false;var f=0;var g=c.options.significant;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=(c.options.compact?c.options.compactLabels:c.options.labels);var l=c.options.whichLabels||this._normalLabels;var m=function(a){var b=c.options['compactLabels'+l(c._periods[a])];return(h[a]?d._translateDigits(c,c._periods[a])+(b?b[a]:k[a])+' ':'')};var n=(c.options.padZeroes?2:1);var o=function(a){var b=c.options['labels'+l(c._periods[a])];return((!c.options.significant&&h[a])||(c.options.significant&&j[a])?'<span class="'+d._sectionClass+'">'+'<span class="'+d._amountClass+'">'+d._minDigits(c,c._periods[a],n)+'</span>'+'<span class="'+d._periodClass+'">'+(b?b[a]:k[a])+'</span></span>':'')};return(c.options.layout?this._buildLayout(c,h,c.options.layout,c.options.compact,c.options.significant,j):((c.options.compact?'<span class="'+this._rowClass+' '+this._amountClass+(c._hold?' '+this._holdingClass:'')+'">'+m(Y)+m(O)+m(W)+m(D)+(h[H]?this._minDigits(c,c._periods[H],2):'')+(h[M]?(h[H]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[M],2):'')+(h[S]?(h[H]||h[M]?c.options.timeSeparator:'')+this._minDigits(c,c._periods[S],2):''):'<span class="'+this._rowClass+' '+this._showClass+(c.options.significant||f)+(c._hold?' '+this._holdingClass:'')+'">'+o(Y)+o(O)+o(W)+o(D)+o(H)+o(M)+o(S))+'</span>'+(c.options.description?'<span class="'+this._rowClass+' '+this._descrClass+'">'+c.options.description+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=c.options[f?'compactLabels':'labels'];var k=c.options.whichLabels||this._normalLabels;var l=function(a){return(c.options[(f?'compactLabels':'labels')+k(c._periods[a])]||j)[a]};var m=function(a,b){return c.options.digits[Math.floor(a/b)%10]};var o={desc:c.options.description,sep:c.options.timeSeparator,yl:l(Y),yn:this._minDigits(c,c._periods[Y],1),ynn:this._minDigits(c,c._periods[Y],2),ynnn:this._minDigits(c,c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:this._minDigits(c,c._periods[O],1),onn:this._minDigits(c,c._periods[O],2),onnn:this._minDigits(c,c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:this._minDigits(c,c._periods[W],1),wnn:this._minDigits(c,c._periods[W],2),wnnn:this._minDigits(c,c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:this._minDigits(c,c._periods[D],1),dnn:this._minDigits(c,c._periods[D],2),dnnn:this._minDigits(c,c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:this._minDigits(c,c._periods[H],1),hnn:this._minDigits(c,c._periods[H],2),hnnn:this._minDigits(c,c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:this._minDigits(c,c._periods[M],1),mnn:this._minDigits(c,c._periods[M],2),mnnn:this._minDigits(c,c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:this._minDigits(c,c._periods[S],1),snn:this._minDigits(c,c._periods[S],2),snnn:this._minDigits(c,c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}([\\s\\S]*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b,c){b=''+b;if(b.length>=c){return this._translateDigits(a,b)}b='0000000000'+b;return this._translateDigits(a,b.substr(b.length-c))},_translateDigits:function(b,c){return(''+c).replace(/[0-9]/g,function(a){return b.options.digits[a]})},_determineShow:function(a){var b=a.options.format;var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=this._getDaysInMonth(f.getFullYear(),f.getMonth());var j=this._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=this._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}})})(jQuery);
/* jquery-dateFormat 18-05-2015
* Thx phstc/jquery-dateFormat
* https://github.com/phstc/jquery-dateFormat
*/
var DateFormat={};!function(a){var b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],f={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},g=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;a.format=function(){function a(a){return b[parseInt(a,10)]||a}function h(a){return c[parseInt(a,10)]||a}function i(a){var b=parseInt(a,10)-1;return d[b]||a}function j(a){var b=parseInt(a,10)-1;return e[b]||a}function k(a){return f[a]||a}function l(a){var b,c,d,e,f,g=a,h="";return-1!==g.indexOf(".")&&(e=g.split("."),g=e[0],h=e[e.length-1]),f=g.split(":"),3===f.length?(b=f[0],c=f[1],d=f[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),g=g.replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:g,hour:b,minute:c,second:d,millis:h}):{time:"",hour:"",minute:"",second:"",millis:""}}function m(a,b){for(var c=b-String(a).length,d=0;c>d;d++)a="0"+a;return a}return{parseDate:function(a){var b,c,d={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof a)return this.parseDate(new Date(a));if("function"==typeof a.getFullYear)d.year=String(a.getFullYear()),d.month=String(a.getMonth()+1),d.dayOfMonth=String(a.getDate()),d.time=l(a.toTimeString()+"."+a.getMilliseconds());else if(-1!=a.search(g))b=a.split(/[T\+-]/),d.year=b[0],d.month=b[1],d.dayOfMonth=b[2],d.time=l(b[3].split(".")[0]);else switch(b=a.split(" "),6===b.length&&isNaN(b[5])&&(b[b.length]="()"),b.length){case 6:d.year=b[5],d.month=k(b[1]),d.dayOfMonth=b[2],d.time=l(b[3]);break;case 2:c=b[0].split("-"),d.year=c[0],d.month=c[1],d.dayOfMonth=c[2],d.time=l(b[1]);break;case 7:case 9:case 10:d.year=b[3],d.month=k(b[1]),d.dayOfMonth=b[2],d.time=l(b[4]);break;case 1:c=b[0].split(""),d.year=c[0]+c[1]+c[2]+c[3],d.month=c[5]+c[6],d.dayOfMonth=c[8]+c[9],d.time=l(c[13]+c[14]+c[15]+c[16]+c[17]+c[18]+c[19]+c[20]);break;default:return null}return d.date=d.time?new Date(d.year,d.month-1,d.dayOfMonth,d.time.hour,d.time.minute,d.time.second,d.time.millis):new Date(d.year,d.month-1,d.dayOfMonth),d.dayOfWeek=String(d.date.getDay()),d},date:function(b,c){try{var d=this.parseDate(b);if(null===d)return b;for(var e,f=d.year,g=d.month,k=d.dayOfMonth,l=d.dayOfWeek,n=d.time,o="",p="",q="",r=!1,s=0;s<c.length;s++){var t=c.charAt(s),u=c.charAt(s+1);if(r)"'"==t?(p+=""===o?"'":o,o="",r=!1):o+=t;else switch(o+=t,q="",o){case"ddd":p+=a(l),o="";break;case"dd":if("d"===u)break;p+=m(k,2),o="";break;case"d":if("d"===u)break;p+=parseInt(k,10),o="";break;case"D":k=1==k||21==k||31==k?parseInt(k,10)+"st":2==k||22==k?parseInt(k,10)+"nd":3==k||23==k?parseInt(k,10)+"rd":parseInt(k,10)+"th",p+=k,o="";break;case"MMMM":p+=j(g),o="";break;case"MMM":if("M"===u)break;p+=i(g),o="";break;case"MM":if("M"===u)break;p+=m(g,2),o="";break;case"M":if("M"===u)break;p+=parseInt(g,10),o="";break;case"y":case"yyy":if("y"===u)break;p+=o,o="";break;case"yy":if("y"===u)break;p+=String(f).slice(-2),o="";break;case"yyyy":p+=f,o="";break;case"HH":p+=m(n.hour,2),o="";break;case"H":if("H"===u)break;p+=parseInt(n.hour,10),o="";break;case"hh":e=0===parseInt(n.hour,10)?12:n.hour<13?n.hour:n.hour-12,p+=m(e,2),o="";break;case"h":if("h"===u)break;e=0===parseInt(n.hour,10)?12:n.hour<13?n.hour:n.hour-12,p+=parseInt(e,10),o="";break;case"mm":p+=m(n.minute,2),o="";break;case"m":if("m"===u)break;p+=n.minute,o="";break;case"ss":p+=m(n.second.substring(0,2),2),o="";break;case"s":if("s"===u)break;p+=n.second,o="";break;case"S":case"SS":if("S"===u)break;p+=o,o="";break;case"SSS":var v="000"+n.millis.substring(0,3);p+=v.substring(v.length-3),o="";break;case"a":p+=n.hour>=12?"PM":"AM",o="";break;case"p":p+=n.hour>=12?"p.m.":"a.m.",o="";break;case"E":p+=h(l),o="";break;case"'":o="",r=!0;break;default:p+=t,o=""}}return p+=q}catch(w){return console&&console.log&&console.log(w),b}},prettyDate:function(a){var b,c,d;return("string"==typeof a||"number"==typeof a)&&(b=new Date(a)),"object"==typeof a&&(b=new Date(a.toString())),c=((new Date).getTime()-b.getTime())/1e3,d=Math.floor(c/86400),isNaN(d)||0>d?void 0:60>c?"just now":120>c?"1 minute ago":3600>c?Math.floor(c/60)+" minutes ago":7200>c?"1 hour ago":86400>c?Math.floor(c/3600)+" hours ago":1===d?"Yesterday":7>d?d+" days ago":31>d?Math.ceil(d/7)+" weeks ago":d>=31?"more than 5 weeks ago":void 0},toBrowserTimeZone:function(a,b){return this.date(new Date(a),b||"MM/dd/yyyy HH:mm:ss")}}}()}(DateFormat),function(a){a.format=DateFormat.format}(jQuery);
var g_bIsCrawler = false,
g_bIsMobile = false;

if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) {
g_bIsCrawler = true;
}
else if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
g_bIsMobile = true;
}

g_oBrowserIncompatibilities = {};

if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
g_oBrowserIncompatibilities.PnlHistory = true;
}

if (g_bIsGuest) {
g_oBrowserIncompatibilities.Pnl = true;
}

if (!window.localStorage) {
g_oBrowserIncompatibilities.Pnl = true;
}

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
g_oBrowserIncompatibilities.Pnl = true;
}

if (g_bIsCrawler) {
g_oBrowserIncompatibilities.Pnl = true;
}

function bBrowserIsCompatible(p_nFeature) {
if (g_oBrowserIncompatibilities.hasOwnProperty(p_nFeature)) {
console.log('Skipping incompatible feature "'+p_nFeature+'"');
return false;
}
else
{
return true;
}
}

var g_bMasterLogEntryRemovalTimerPaused = false;

function vShowMasterLog(p_oMasterLog) {
if ($("#MasterLog").length == 0) {
$('<overlay id="MasterLog"><logs></logs></overlay>').hover(function() {
g_bMasterLogEntryRemovalTimerPaused = true;
},function() {
g_bMasterLogEntryRemovalTimerPaused = false;
})
.appendTo('#BodyWrapper');
}

var _sErrorIcon = '<spriteIcon class="MessageIcon ErrorIcon"></spriteIcon>',
_sSuccessIcon = '<spriteIcon class="MessageIcon SuccessIcon"></spriteIcon>',
_sCloseIcon = '<matIcon class="CloseButton">cancel</matIcon>';

vOpenMasterLog();

$.each(p_oMasterLog._aSuccessMessages,function(index,_sSuccessMessage) {
vAppendToMasterLog('<log>' +
_sSuccessIcon + '<span class="GreenColor">'+_sSuccessMessage+'</span>' + _sCloseIcon +
'</log>');
});

$.each(p_oMasterLog._aErrorMessages,function(index,_sErrorMessage) {
vAppendToMasterLog('<log>' +
_sErrorIcon + '<span class="RedColor">'+_sErrorMessage+'</span>' + _sCloseIcon +
'</log>');
});
}

function vOpenMasterLog() {
$("#MasterLog")
.addClass("Visible")
.css({
"left": $("#MainContentWrapper").offset().left+"px",
"width": $("#MainContentWrapper").width()
});
}

function vCloseMasterLog() {
$("#MasterLog").removeClass("Visible");
}

function vInitOldestMasterLogEntryRemovalTimer() {
$.doTimeout(5000,function() {
if (g_bMasterLogEntryRemovalTimerPaused) {
return true;
}

$("#MasterLog log").first().addClass("Hidden");

$.doTimeout(500,function() {
$("#MasterLog log").first().remove();

if ($("#MasterLog log").length == 0) {
vCloseMasterLog();
}
});
});
}

function vAppendToMasterLog(p_htmlEntry) {
var _joLogEntry = $(p_htmlEntry);

_joLogEntry.find(".CloseButton").click(function() {
$(this).parent().remove();

if ($("#MasterLog log").length == 0) {
vCloseMasterLog()
}
});

_joLogEntry.appendTo("#MasterLog logs");

vInitOldestMasterLogEntryRemovalTimer();
}
$.fn.joQuickLazy = function() {
$(this).each(function() {
var _sDataSrc = $(this).attr("data-src");
$(this).attr("src",_sDataSrc).removeAttr("data-src").removeClass("lazy");
return $(this);
});
};

$.fn.joTrueLazy = function() {
$(this).each(function() {
if ($(this).offset().top < window.innerHeight+window.pageYOffset) {
var _sDataSrc = $(this).attr("data-src");

//console.log("Loading img:"+_sDataSrc+" elementOffset:"+$(this).offset().top+",windowHeight"+window.innerHeight+",windowOffset"+window.pageYOffset);

$(this).attr("src",_sDataSrc).removeAttr("data-src").removeClass("lazy");
}
});
return $(this);
};

$(window).resize(function() {
$("#ContentGrid .lazy").not(".BananaTip .lazy").joTrueLazy();
});

$(window).scroll(function() {
$("#ContentGrid .lazy").not(".BananaTip .lazy").joTrueLazy();
});

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$("#ContentGrid .lazy").not(".BananaTip .lazy").joTrueLazy();
});

$("#ContentGrid .lazy").not(".BananaTip .lazy").joTrueLazy();
function vSendNotification(p_sTitle,p_sMessage,p_sMessageHash,p_cOnclick) {
if ("Notification" in window) {
if (Notification.permission === "granted") {
_oNotification = new Notification(p_sTitle,{
body: p_sMessage,
icon: "https://files.gamebanana.com/static/img/banana.png",
tag : p_sMessageHash,
dir : "ltr"
});
_oNotification.onclick = p_cOnclick;
}
else if (Notification.permission !== 'denied') {
Notification.requestPermission(function (permission) {
if (!('permission' in Notification)) {
Notification.permission = permission;
}

if (permission === "granted") {
_oNotification = new Notification(p_sTitle,{
body: p_sMessage,
icon: "https://files.gamebanana.com/static/img/banana.png",
tag : p_sMessageHash,
dir : "ltr"
});
_oNotification.onclick = p_cOnclick;
}
});
}
}
}
function vSetColumnWidthIndicatorAttibutes() {
$("#ContentGrid > row > column").each(function() {
var _aHundreds = [];
for (var i=100;i<=Math.ceil($(this).width()/100)*100;) {
_aHundreds.push(i);
i += 100;
}

$(this).attr("data-_nWidth",_aHundreds.join(" "));
});
}

function vSetContentGridWidthClass() {
$("#ContentGrid").removeClass("xs sm md");

var _nWidth = $("#ContentGrid").width();

if (_nWidth <= 500) {
$("#ContentGrid").addClass("xs");
}
else if (_nWidth <= 700) {
$("#ContentGrid").addClass("sm");
}
else if (_nWidth <= 1000) {
$("#ContentGrid").addClass("md");
}
}

function vShowHideToggleHiddenColumnModeButton() {
if ($("#ContentGrid row").find(".xs-h:hidden,.sm-h:hidden,.md-h:hidden,.lg-h:hidden").length > 0) {
$("#ToggleHiddenColumnModeButton").addClass("Active");
}
else {
$("#ToggleHiddenColumnModeButton:not(.Selected)").removeClass("Active");
}
}

function vDisableHiddenColumnMode() {
$("#ContentGrid")
.removeClass("HiddenColumnMode")
.css("min-height","");

$("#ToggleHiddenColumnModeButton").removeClass("Selected");
}

$(document).on("InitialPageReady PersistentNavReqComplete NavOptionsApplied",function() {
vSetColumnWidthIndicatorAttibutes();
vSetContentGridWidthClass();

if ($("#ToggleHiddenColumnModeButton").length == 0) {
$('<blankButton id="ToggleHiddenColumnModeButton" class="Absolute" title="Toggle hidden column">' +
'<matIcon>arrow_back</matIcon>' +
'</blankButton>')
.click(function() {
if ($("#ContentGrid").hasClass("HiddenColumnMode")) {
vDisableHiddenColumnMode();
}
else {
var _nHiddenColumnHeight = $("#ContentGrid row").find(".xs-h:hidden,.sm-h:hidden,.md-h:hidden,.lg-h:hidden").first().height();

if (_nHiddenColumnHeight > $("#ContentGrid").height()) {
$("#ContentGrid").css("min-height",_nHiddenColumnHeight);
}

$("#ContentGrid").addClass("HiddenColumnMode");
$(this).addClass("Selected");
}
})
.appendTo("#ContentGrid");
}

vDisableHiddenColumnMode();
vShowHideToggleHiddenColumnModeButton();
});

$(window).scroll(function() {
var _oContentGridOffset = $("#ContentGrid").offset();

if ($(document).scrollTop() > _oContentGridOffset.top-$("#TopNav").height()) {
var _nRightOffset = $(window).width()-(_oContentGridOffset.left+$("#ContentGrid").width());

$("#ToggleHiddenColumnModeButton")
.addClass("Fixed")
.css("right",_nRightOffset+"px")
.removeClass("Absolute");
}
else {
$("#ToggleHiddenColumnModeButton")
.addClass("Absolute")
.css("right",'')
.removeClass("Fixed");
}
});

$(window).resize(function() {
vSetColumnWidthIndicatorAttibutes();
vSetContentGridWidthClass();
vShowHideToggleHiddenColumnModeButton();
});
$.fn.CloseModal = function() {
$("#"+$(this).attr("data-launcher_id"))
.prop("disabled",false)
.removeClass("DisabledModalLauncher")
.addClass("ModalLauncher");
$(this).slideUp("fast");
if ($(this).find(".ModalContents").length > 0) {
$(this).find(".ModalContents").insertBefore($(this));
}
};

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(".ModalLauncher").joUninited().click(function() {
if ($(this).hasClass("DisabledModalLauncher")) {
return;
}

$(this).removeClass("ModalLauncher")
.prop("disabled",true)
.addClass("DisabledModalLauncher");

if (!$(this)._bHasAttr("id")) {
$(this).attr("id","requester_"+guid());
}

var _oNewModal = $('<div><div class="Contents"></div></div>')
.attr({
"id": $(this).attr("id")+"_response",
"data-launcher_id": $(this).attr("id")
})
.addClass("Modal");

$('<matIcon title="Close" class="CloseModal">cancel</matIcon>')
.click(function() {
$(this).parents(".Modal").first().CloseModal();
})
.prependTo(_oNewModal);

if ($(this).next().hasClass("ModalContents")) {
_oNewModal.insertAfter($(this).next());
_oNewModal.find(".Contents")
.append($(this).next());
_oNewModal.slideDown("fast");
}
else if ($(this).attr("data-PrependModalToSelector")) {
_oNewModal.prependTo($(this).attr("data-PrependModalToSelector"));
}
else if ($(this).attr("data-AppendModalToSelector")) {
_oNewModal.appendTo($(this).attr("data-AppendModalToSelector"));
}
else if ($(this).attr("data-InsertModalBeforeSelector")) {
_oNewModal.insertBefore($(this).attr("data-InsertModalBeforeSelector"));
}
else if ($(this).attr("data-InsertModalAfterSelector")) {
_oNewModal.insertAfter($(this).attr("data-InsertModalAfterSelector"));
}
else {
_oNewModal.insertAfter($(this));
}
});
});

var g_oTimers = {};

function vStartTooltipClose(p_sTooltipId) {
g_oTimers["CloseTooltip_"+p_sTooltipId] = setTimeout(function() {
delete g_oTimers["CloseTooltip_"+p_sTooltipId];

$("#"+p_sTooltipId).addClass("Closing");

g_oTimers["DeleteTooltip_"+p_sTooltipId] = setTimeout(function() {
delete g_oTimers["DeleteTooltip_"+p_sTooltipId];

$("#"+p_sTooltipId)
.removeClass("Active Closing")
.insertAfter("#"+$("#"+p_sTooltipId).attr("data-_sTriggerId"));
},200);
},500);
}

function vCancelTooltipClose(p_sTooltipId) {
clearTimeout(g_oTimers["CloseTooltip_"+p_sTooltipId]);
clearTimeout(g_oTimers["DeleteTooltip_"+p_sTooltipId]);

$("#"+p_sTooltipId).removeClass("Closing");
}

$.fn.joBindBananaTip = function() {
$(this).prev().hoverIntent(function() {
if ($(this)._bHasAttr("data-_sTooltipId")) {
var _joTooltip = $("#"+$(this).attr("data-_sTooltipId"));
var _sTooltipTriggerId = $(this).attr("id");
var _sTooltipId = $(this).attr("data-_sTooltipId");
}
else {
var _joTooltip = $(this).next();
var _sTooltipTriggerId = $(this).attr("id");
var _sTooltipId = _joTooltip.attr("id");

if (typeof _sTooltipTriggerId === typeof undefined || _sTooltipTriggerId === false) {
_sTooltipTriggerId = "ttt_"+guid();

$(this).attr("id",_sTooltipTriggerId);
}

if (typeof _sTooltipId === typeof undefined || _sTooltipId === false) {
_sTooltipId = "_"+_sTooltipTriggerId;

_joTooltip.attr({
"id": _sTooltipId,
"data-_sTriggerId": _sTooltipTriggerId,
});
}

_joTooltip.find(".lazy").joQuickLazy();

_joTooltip.hover(function() {
_joTooltip.addClass("Hovered")
vCancelTooltipClose($(this).attr("id"));
},function() {
_joTooltip.removeClass("Hovered")
vStartTooltipClose($(this).attr("id"));
});

$(this).attr("data-_sTooltipId",_sTooltipId);
}

vCancelTooltipClose(_sTooltipId);

if (!_joTooltip.hasClass("Active")) {
_joTooltip.addClass("Active");

var _iTriggerOffsetTop = $(this).offset().top,
_iTriggerOffsetLeft = $(this).offset().left,
_iTriggerHeight = $(this).height(),
_iTriggerWidth = $(this).width();

var	_iTooltipOffsetTop = _iTriggerOffsetTop+_iTriggerHeight,
_iTooltipOffsetLeft = _iTriggerOffsetLeft+_iTriggerWidth,
_iWindowHeight = $(window).height(),
_iWindowWidth = $(window).width(),
_iWindowOffsetTop = $(window).scrollTop(),
_iWindowOffsetLeft = $(window).scrollLeft();

var	_iWindowOffsetBottom = _iWindowOffsetTop+_iWindowHeight,
_iWindowOffsetRight = _iWindowOffsetLeft+_iWindowWidth;

_joTooltip.appendTo("body")
.css({
height: "",
width: "",
opacity: 0,
top: "0px",
left: "0px"
});

setTimeout(function() {
var _iTooltipHeight = _joTooltip.outerHeight(),
_iTooltipWidth = _joTooltip.outerWidth();

var _iTooltipOffsetBottom = _iTooltipOffsetTop+_iTooltipHeight,
_iTooltipOffsetRight = _iTooltipOffsetLeft+_iTooltipWidth;

if (_iTooltipOffsetBottom > _iWindowOffsetBottom) {
_iTooltipOffsetTop = _iTriggerOffsetTop-_iTooltipHeight;

if (_iWindowOffsetTop > _iTooltipOffsetTop) {
_iTooltipOffsetTop = _iWindowOffsetTop;

if (_iTooltipHeight > _iWindowHeight) {
_iTooltipHeight = _iWindowHeight;

_joTooltip.css("height",_iTooltipHeight+"px");
}
}
}

if (_iTooltipOffsetRight > _iWindowOffsetRight) {
_iTooltipOffsetLeft = _iTriggerOffsetLeft-_iTooltipWidth;

if (_iWindowOffsetLeft > _iTooltipOffsetLeft) {
_iTooltipOffsetLeft = _iWindowOffsetLeft;

if (_iTooltipWidth > _iWindowWidth) {
_iTooltipWidth = _iWindowWidth;

_joTooltip.css("width",_iTooltipWidth+"px");
}
}
}

_joTooltip.css({
"top": _iTooltipOffsetTop+"px",
"left": _iTooltipOffsetLeft+"px",
"opacity": 1
});

/*console.log(
"_iTriggerOffsetTop : "+_iTriggerOffsetTop+"\n"
+"_iTriggerOffsetLeft : "+_iTriggerOffsetLeft+"\n"
+"_iTriggerHeight : "+_iTriggerHeight+"\n"
+"_iTriggerWidth : "+_iTriggerWidth+"\n"
+"_iWindowHeight : "+_iWindowHeight+"\n"
+"_iWindowWidth : "+_iWindowWidth+"\n"
+"_iTooltipHeight : "+_iTooltipHeight+"\n"
+"_iTooltipWidth : "+_iTooltipWidth+"\n"
+"_iWindowOffsetTop : "+_iWindowOffsetTop+"\n"
+"_iWindowOffsetLeft : "+_iWindowOffsetLeft+"\n"
+"_iWindowOffsetBottom : "+_iWindowOffsetBottom+"\n"
+"_iWindowOffsetRight : "+_iWindowOffsetRight+"\n"
+"_iTooltipOffsetTop : "+_iTooltipOffsetTop+"\n"
+"_iTooltipOffsetLeft : "+_iTooltipOffsetLeft+"\n"
+"_iTooltipOffsetBottom : "+_iTooltipOffsetBottom+"\n"
+"_iTooltipOffsetRight : "+_iTooltipOffsetRight+"\n"
);*/
},5);
}
},function() {
var _sTooltipId = $(this).attr("data-_sTooltipId");

if (!$("#"+_sTooltipId).hasClass("Hovered")) {
vStartTooltipClose(_sTooltipId);
}
})
.on("remove",function() {
var _sTooltipId = $(this).attr("data-_sTooltipId");

$("#"+_sTooltipId).remove();
});

return $(this);
};

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(".BananaTip").joUninited().joBindBananaTip();
});
$.fn.ExpandableToggle = function() {
$(this).click(function() {
var _joExpandableContent = $($(this).attr("data-_sExpandableContentSelector"));
if (_joExpandableContent.parent().hasClass("ExpandedModuleWrapper")) {
_joExpandableContent.parent().removeClass("ExpandedModuleWrapper");
_joExpandableContent.parent().addClass("CollapsedModuleWrapper");
}
else if (_joExpandableContent.parent().hasClass("CollapsedModuleWrapper")) {
_joExpandableContent.parent().removeClass("CollapsedModuleWrapper");
_joExpandableContent.parent().addClass("ExpandedModuleWrapper");
}
else {
_joExpandableContent
.appendTo('<div class="ExpandedModuleWrapper"></div>')
.parent()
.appendTo($(this).attr("data-_sAppendExpandableContentTo"))
}
});
return $(this);
};

$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(".ExpandableToggle").ExpandableToggle();
});
/*http://stackoverflow.com/questions/11803215/how-to-include-multiple-js-files-using-jquery-getscript-method*/
$.getMultiScripts = function(p_aScriptUrls) {
var _arr = $.map(p_aScriptUrls,function(scr) {
return $.getScript(scr);
});

_arr.push($.Deferred(function(deferred) {
$(deferred.resolve);
}));

return $.when.apply($,_arr);
}

function aUnloadedScriptUrls(p_aScriptUrls,p_sVersionHash) {
var _aUnloadedScriptUrls = [],
_aLoadedScriptUrls = [];

$("script[src]").each(function() {
_aLoadedScriptUrls.push($(this).attr("src"));
});

$.each(p_aScriptUrls, function(_iKey, _sScriptUrl) {
if ($.inArray(_sScriptUrl+p_sVersionHash,_aLoadedScriptUrls) == -1) {
_aUnloadedScriptUrls.push(_sScriptUrl+p_sVersionHash);
}
});

return _aUnloadedScriptUrls;
}
vAreRequest = function(p_sRequestData,p_sJqueryInputSelector,p_oAjaxOptions,p_bShowLoaderAnim) {
p_oAjaxOptions.data.d = p_sRequestData;

if ($(p_sJqueryInputSelector).length >= 1) {
p_oAjaxOptions.data.f = $.toJSON($(p_sJqueryInputSelector).serialize());
}

if (p_bShowLoaderAnim) {
p_oAjaxOptions.beforeSend = function() {
g_oLoaderAnim.vStart();
};

p_oAjaxOptions.xhr = function() {
var _oXhr = new window.XMLHttpRequest();
_oXhr.upload.addEventListener('progress',function(p_oEvent) {
if (p_oEvent.lengthComputable) {
g_oLoaderAnim.vUpdate(Math.round(p_oEvent.loaded / p_oEvent.total * 100));
}
},false);
_oXhr.addEventListener('progress',function(p_oEvent) {
if (p_oEvent.lengthComputable) {
g_oLoaderAnim.vUpdate(Math.round(p_oEvent.loaded / p_oEvent.total * 100));
}
},false);
return _oXhr;
};

p_oAjaxOptions.complete = function() {
g_oLoaderAnim.vFinish();
};
}

$.ajax(Object.assign({
type:'POST',
dataType:'script'
},p_oAjaxOptions));
};
jQuery.fn.messageError = function(p_sErrorMessage) { return jQuery(this).html('<p class="RedColor">'+p_sErrorMessage+'</p>'); }
jQuery.fn.messageSuccess = function(p_sSuccessMessage) { return jQuery(this).html('<p class="GreenColor">'+p_sSuccessMessage+'</p>'); }
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(".SelectUnselectAll").click(function() {
if ($(this).hasClass("Selected")) {
$(this).removeClass("Selected");
$(this).parents("records").find("record :checkbox").prop("checked",false);
}
else {
$(this).addClass("Selected");
$(this).parents("records").find("record :checkbox").prop("checked",true);
}
});
});
$.fn.joToggleOptionalInput = function() {
$(this).parents("fieldset").find(".InputWrapper,.InputHelp").toggle();
if ($(this).parents("fieldset").find(".InputWrapper:visible").length > 0) {
$(this).find(".ShowContentIcon").attr("class","MiscIcon HideContentIcon");
}
else {
$(this).find(".HideContentIcon").attr("class","MiscIcon ShowContentIcon");
}
return $(this);
};

$.fn.joSelectCategory = function() {
if ($(this).hasClass("Selected")) {
return;
}

$(".CategoryTab.Selected,.CategoryPane.Selected").removeClass("Selected");

$(this).addClass("Selected");
var _sCategoryName = $(this).attr("data-_sCategoryName");
$(".CategoryPane."+_sCategoryName+"Pane").addClass("Selected");

return $(this);
};

$(document).on("InitialPageReady ModuleChanged PersistentNavReqComplete",function(e) {
$(".MainForm").each(function() {
if ($(this).find(".InputsWrapper > fieldset").length > 2) {
$(this).find(".InputsWrapper > fieldset.OptionalInput").each(function() {
if ($(this).hasClass("InputHasError")
|| $(this).hasClass("Collapsible")) {
return;
}

$(this).addClass("Collapsible")
.find("legend")
.click(function() {
$(this).joToggleOptionalInput();
})
.prepend('<spriteIcon class="MiscIcon HideContentIcon"></spriteIcon>')
.joToggleOptionalInput();
});
}
});

$("form").joUninited("SubmitDisablerInited")
.submit(function() {
$(this).find("button[type=submit]").attr("disabled","true").find("span").html("Submitting...");
});

if ($(".CategoryTabs").length > 0) {
$(".MainForm input").on("invalid",function(event) {
var _sCategoryName = $(this).parents(".CategoryPane").attr("data-_sCategoryName");
$(".CategoryTab."+_sCategoryName+"Tab").joSelectCategory();
});

if ($(".CategoryTab.CategoryHasErrors").length > 0) {
$(".CategoryTab.CategoryHasErrors:first").joSelectCategory();
}
else {
$(".CategoryTab:first").joSelectCategory();
}

$(".CategoryTab").click(function() {
$(this).joSelectCategory();
});
}
});
function vLoadAjaxListPage(p_joContainer,p_sApiUrl,p_fRowAppender) {
$.getJSON(p_sApiUrl,function(_xResponse) {
if (typeof _xResponse === "object"
&& _xResponse.hasOwnProperty("_aCellValues")) {

if (p_joContainer.find(".AjaxListRows").length == 0) {
p_joContainer.html('<ul class="AjaxListRows"></ul>\
<div class="AjaxListPaginator">\
<button type="button" class="PrevAjaxListPage">\
<spriteIcon class="LeftArrowIcon MicroWhiteArrowIcon"></spriteIcon>\
</button>\
<span></span>\
<button type="button" class="NextAjaxListPage">\
<spriteIcon class="RightArrowIcon MicroWhiteArrowIcon"></spriteIcon>\
</button>\
</div>');
}

if (_xResponse.hasOwnProperty("_aPaginator")) {
p_joContainer.find(".AjaxListPaginator").show();
p_joContainer.find(".AjaxListPaginator > span").html(_xResponse._aPaginator._nCurrentPage);
if (_xResponse._aPaginator._nCurrentPage == _xResponse._aPaginator._nPagesInList) {
p_joContainer.find(".NextAjaxListPage").val("");
}
else {
p_joContainer.find(".NextAjaxListPage").val(_xResponse._aPaginator._nCurrentPage+1);
}
if (_xResponse._aPaginator._nCurrentPage == 1) {
p_joContainer.find(".PrevAjaxListPage").val("");
}
else {
p_joContainer.find(".PrevAjaxListPage").val(_xResponse._aPaginator._nCurrentPage-1);
}
}
else {
p_joContainer.find(".AjaxListPaginator").hide();
}

p_joContainer.find(".AjaxListPaginator button").unbind("click");
p_joContainer.find(".AjaxListPaginator button").click(function() {
if ($(this).val() == 0) return;
vLoadAjaxListPage(p_joContainer,_xResponse._aPaginator._sPageUrlTemplate.replace("{{PAGE_NUMBER}}",$(this).val()),p_fRowAppender);
});

p_joContainer.find(".AjaxListRows").html("");
$.each(_xResponse._aCellValues,function(_iKey,_oCell) {
p_fRowAppender(p_joContainer,_oCell);
});
p_joContainer.find(".AjaxListRows").scrollTop(0);
}
});
}
$.fn.joReverse = [].reverse;

function sSizeFormat(p_nBytes) {
p_nBytes = parseInt(p_nBytes);
if (p_nBytes == 0) {
return "0 bytes";
}
if (p_nBytes < 1024) {
return p_nBytes+" bytes";
}
if (p_nBytes < 1048576) {
return Math.round(p_nBytes / 1024)+" kb";
}
if (p_nBytes < 1073741824) {
return Math.round(p_nBytes / 1048576)+" mb";
}
return Math.round(p_nBytes / 1073741824 * 100) / 100+" gb";
}

function guid() {
function s4() {
return Math.floor((1+Math.random()) * 0x10000)
.toString(16)
.substring(1);
}

return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();
}

$.fn._bHasAttr = function(p_sAttrName) {
return this.attr(p_sAttrName) !== undefined;
};

$.fn.joUninited = function(p_sInitedAttrName) {
p_sInitedAttrName = p_sInitedAttrName || "Inited";
return $(this)
.filter(":not(["+p_sInitedAttrName+"])")
.attr(p_sInitedAttrName,true);
}

/*https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
function array_shuffle(array) {
var currentIndex = array.length,temporaryValue,randomIndex;
while (0 !== currentIndex) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}
$("body").on("mousewheel DOMMouseScroll",".PreventBodyScroll",function(e) {
if ($(this)[0].scrollHeight !== $(this).outerHeight()) {
var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
dir = d > 0 ? 'up' : 'down',
stop = (dir == 'up' && this.scrollTop == 0) ||
(dir == 'down' && this.scrollTop == this.scrollHeight-this.offsetHeight);
stop && e.preventDefault();
}
});
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(".ReadMoreList").each(function () {
if ($(this).find("li").length > 15) {
$(this).find("li:gt(15)").hide();
$('<li class="Linklike">Show all</li>')
.click(function() {
$(this).parent().find("li:hidden").fadeIn();
$(this).remove();
})
.insertAfter($(this).find("li:visible").last());
}
});
});
window.onbeforeunload = null;

var g_bNavigateAwayPreventerIsActive = false;

function vDisableNavigateAwayPreventer() {
g_bNavigateAwayPreventerIsActive = false;
window.onbeforeunload = null;
}

function vEnableNavigateAwayPreventer() {
if (!g_bNavigateAwayPreventerIsActive) {
window.onbeforeunload = function() {
return true;
};
g_bNavigateAwayPreventerIsActive = true;
}
}

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
vDisableNavigateAwayPreventer();

$(".MainForm :input,.MainForm [contenteditable=true]").change(function() {
vEnableNavigateAwayPreventer();
});

$("button[type=submit],.CloseModal").click(function() {
vDisableNavigateAwayPreventer();
});
});
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(window).resize(function() {
vInitMainContentHeader();
});

$(window).scroll(function() {
vPositionMainContentHeader();
});

vInitMainContentHeader();
vPositionMainContentHeader();
});

$(document).on("ModuleChanged",function() {
vPositionMainContentHeader();
});

function vInitMainContentHeader() {
$("#MainContentHeader").removeClass("Fixed");
}

function vPositionMainContentHeader() {
var _iMainContentScrollOffset = $(window).scrollTop();

if (_iMainContentScrollOffset > 600) {
if ($("#MainContentHeaderPlaceholder").length == 0) {
$('<placeholder id="MainContentHeaderPlaceholder"'
+' style="height:'+$("#MainContentHeader").height()+'px"></placeholder>')
.insertAfter($("#MainContentHeader"));
}

if (!$("#MainContentHeader").hasClass("Fixed")) {
$("#MainContentHeader")
.addClass("Fixed")
.css("opacity",0)
.fadeTo(500,1);
}
}
else {
if ($("#MainContentHeaderPlaceholder").length > 0) {
$("#MainContentHeaderPlaceholder").remove();
}

if ($("#MainContentHeader").hasClass("Fixed")) {
$("#MainContentHeader")
.removeClass("Fixed")
.css("opacity",0)
.fadeTo(500,1);
}
}
}
var g_tsLastActivityTime = new Date().getTime(),
g_bCancelSiteRefresher = false;

$(document.body).bind("mousemove keypress",function() {
g_tsLastActivityTime = new Date().getTime();
});

if (!g_bIsGuest) {
g_bCancelSiteRefresher = true;
}

$("input,select,textarea").bind("click",function() {
g_bCancelSiteRefresher = true;
});

function vSiteRefresher() {
if (g_bCancelSiteRefresher) {
return;
}

if (new Date().getTime()-g_tsLastActivityTime >= 300000)  {
window.location.reload(true);
}
else {
setTimeout(vSiteRefresher,30000);
}
}

setTimeout(vSiteRefresher,30000);

var g_bWindowIsFocussed = true;

$(window)
.blur(function() {
g_bWindowIsFocussed = false;
})
.focus(function() {
g_bWindowIsFocussed = true;
});

function vInitNavModulePaginator(p_joParentSelector,p_nNavModulePages) {
$("<controls>"+"<span></span>".repeat(p_nNavModulePages)+"</controls>")
.click(function() {
var _nCurrentPage = $(this).find(".Selected").index()+1;

if (_nCurrentPage == p_nNavModulePages) {
vShowNavModulePage($(this).parent(),1);
}
else {
vShowNavModulePage($(this).parent(),_nCurrentPage+1);
}
})
.prependTo(p_joParentSelector);

vShowNavModulePage(p_joParentSelector,1);
}

function vShowNavModulePage(p_joParentSelector,p_nPage) {
p_joParentSelector.find("controls .Selected").removeClass("Selected");
p_joParentSelector.find("controls span:eq("+(p_nPage-1)+")").addClass("Selected");

p_joParentSelector.find("module").addClass("Hidden");
p_joParentSelector.find('module[data-_nPage="'+p_nPage+'"]').removeClass("Hidden");
}

function vEvaluateModuleConfig(p_joModule) {
p_joModule.joUninited("QuickLazyInited").on("NavPaneOpened NavModuleChanged",function() {
$(this).find(".lazy").joQuickLazy();
});

if (p_joModule.find("config").length > 0) {
var _oConfig = JSON.parse(p_joModule.find("config").html());

if (_oConfig.hasOwnProperty("_bIsDisabled")
&& _oConfig._bIsDisabled) {
p_joModule.addClass("Disabled");
}

if (_oConfig.hasOwnProperty("_bHasUpdates")) {
if (_oConfig._bHasUpdates) {
p_joModule.addClass("HasIndicator HasUpdates");
}

p_joModule.find("icon,widget")
.unbind("mouseenter.ResetTask")
.bind("mouseenter.ResetTask",function() {
if (p_joModule.hasClass("HasUpdates")) {
p_joModule.removeClass("HasIndicator HasUpdates");
eval(_oConfig._sResetTask);
}
});
}

if (_oConfig.hasOwnProperty("_sRefreshTask")) {
$.doTimeout(p_joModule.attr("id")+"RefreshTask");
$.doTimeout(p_joModule.attr("id")+"RefreshTask",_oConfig._nRefreshInterval,function() {
if (!p_joModule.hasClass("InUse") && g_bWindowIsFocussed) {
eval(_oConfig._sRefreshTask);
}
else {
vEvaluateModuleConfig(p_joModule);
}
});
}

if (_oConfig.hasOwnProperty("_sUnfocussedTask")
&& !g_bWindowIsFocussed) {
eval(_oConfig._sUnfocussedTask);
}
}
}

function vSetNavOffset() {
if ($("body").attr("data-_sSiteMaxWidth") == "Auto") {
$("#TopNav,#SideNav,#MainContentHeader").css({
"left": "",
"max-width": "",
"right": ""
});
}
else {
var _nBodyWrapperOffset = $("#BodyWrapper").offset().left,
_nBodyWrapperWidth = $("#BodyWrapper").width();

$("#TopNav,#MainContentHeader").css({
"left": _nBodyWrapperOffset+"px",
"max-width": _nBodyWrapperWidth+"px"
});

if ($("body").attr("data-_sSideNavPosition") == "Right") {
$("#SideNav").css({
"right": ($(window).width()-(_nBodyWrapperOffset+_nBodyWrapperWidth))+"px",
"left": "auto"
});
}
else {
$("#SideNav").css({
"left": _nBodyWrapperOffset+"px",
"right": "auto"
});
}
}

$("#TopNav,#SideNav").removeClass("Initializing");
}

var oApplyNavOptions = {
_sSideNavMode: function(p_xOptionValue) {
if (g_bIsMobile) {
p_xOptionValue = "Collapsed";
}

$("body").attr("data-_sSideNavMode",p_xOptionValue);
},
_sSiteMaxWidth: function(p_xOptionValue) {
if (g_bIsMobile) {
p_xOptionValue = "Auto";
}

$("body").attr("data-_sSiteMaxWidth",p_xOptionValue);
},
_sSiteJustification: function(p_xOptionValue) {
if (g_bIsMobile) {
return;
}

$("body").attr("data-_sSiteJustification",p_xOptionValue);
vSetNavOffset();
},
_sContentMaxWidth: function(p_xOptionValue) {
if (g_bIsMobile) {
return;
}

$("body").attr("data-_sContentMaxWidth",p_xOptionValue);
},
_sContentJustification: function(p_xOptionValue) {
if (g_bIsMobile) {
return;
}

$("body").attr("data-_sContentJustification",p_xOptionValue);
},
_sSideNavIconSize: function(p_xOptionValue) {
if (g_bIsMobile) {
p_xOptionValue = "Small";
}

$("body").attr("data-_sSideNavIconSize",p_xOptionValue);
},
_sHeaderStyle: function(p_xOptionValue) {
if (g_bIsMobile) {
p_xOptionValue = "Fixed";
}

$("body").attr("data-_sHeaderStyle",p_xOptionValue);
},
_sSideNavPosition: function(p_xOptionValue) {
$("body").attr("data-_sSideNavPosition",p_xOptionValue);
},
_sNavItemActivation: function(p_xOptionValue) {
if (g_bIsMobile) {
p_xOptionValue = "Click";
}

$("body").attr("data-_sNavItemActivation",p_xOptionValue);
},
_aAppTemplate: function(p_xOptionValue) {
vCloseSideNavPane();
vCloseTopNavPane();

$.each(p_xOptionValue.topnav,function(p_iKey,p_sApp) {
$("#"+p_sApp.substring(2)+"NavModule").appendTo($("#TopNav"));
});

$.each(p_xOptionValue.sidenav,function(p_iKey,p_sApp) {
$("#"+p_sApp.substring(2)+"NavModule").appendTo($("#SideNav > wrapper"));
});

$(document).trigger("AppTemplateApplied");
},
_aThemeRowIds: function(p_xOptionValue) {
$("head .CustomTheme").remove();

if (p_xOptionValue.length == 0) {
return;
}

$.each(p_xOptionValue,function(_iKey,_idThemeRow) {
$.get("/scripts/raw/"+_idThemeRow,function(p_sCss) {
$('<style type="text/css" class="CustomTheme" data-_idThemeRow="'+_idThemeRow+'"></style>')
.html(p_sCss)
.appendTo("head");
});
});
}
};

$(window).on({
resize: function() {
if ($(document.activeElement).attr("type") === "text") {
return true;
}

vSetSideNavArea();
vPositionOpenedTopNavPane();
vPositionOpenedSideNavPane();
vFitTopNavModules();
vFitSideNavModules();
vSetNavOffset();
}
});

$(document).on("InitialPageReady PersistentNavReqComplete",function() {
if (!g_oContentScrollToer.m_bCancelDefaultScroll) {
g_oContentScrollToer.vExecute();
}
});

$(document).on("InitialPageReady NavOptionsApplied SanityCheck",function() {
vSetSideNavArea();
vFitTopNavModules();
vFitSideNavModules();
vPositionMainContentHeader();

if ($("body").attr("data-_sSideNavMode") == "Expanded") {
g_joSelectedSideNavModule = $("#SideNav module:not(.Disabled):first");
vOpenSideNav();
}
else {
vCloseSideNavPane();
}

$("#TopNav module,#SideNav module").each(function() {
vEvaluateModuleConfig($(this));
});

vSetNavOffset();
});

$(document).ready(function() {
$(document).trigger("InitialPageReady");

$.doTimeout(3000,function() {
console.log("sanity check...");
if ($("#TopNav .Initializing").length > 0
|| $("#SideNav .Initializing").length > 0) {
console.log("sanity check FAILED! re-initing navigation...");
$(document).trigger("SanityCheck");
}
});
});

var g_joSelectedTopNavModule;

function vPositionOpenedTopNavPane() {
if (!g_joSelectedTopNavModule) return;

if (g_joSelectedTopNavModule.find("style.Positioning").length == 0) {
g_joSelectedTopNavModule.append('<style type="text/css" class="Positioning"></style>');
}

g_joSelectedTopNavModule.find("style.Positioning").html("");

var _joPane = g_joSelectedTopNavModule.find("pane");

var _iPaneOffsetLeft = _joPane.offset().left,
_iPaneOffsetTop = $("#TopNav").height(),
_iPaneWidth = _joPane.outerWidth(),
_iPaneHeight = _joPane.outerHeight(),
_iWindowWidth = $(window).width(),
_iWindowHeight = $(window).height(),
_iScrollbarWidthAllowance = 15,
_sCss = '';

var _iMaxPaneWidth = _iWindowWidth-60;

if (_iPaneWidth > _iMaxPaneWidth) {
_iPaneWidth = _iMaxPaneWidth;
_sCss += '#'+g_joSelectedTopNavModule.attr("id")+' pane { width:'+_iPaneWidth+'px; }'+"\n";
}

if (_iPaneOffsetLeft+_iPaneWidth > _iWindowWidth) {
_sCss += '#'+g_joSelectedTopNavModule.attr("id")+' pane { left:'+(_iPaneOffsetLeft-(_iPaneOffsetLeft+_iPaneWidth-_iWindowWidth)-_iScrollbarWidthAllowance)+'px; }'+"\n";
}

if (_iPaneOffsetTop+_iPaneHeight > _iWindowHeight) {
_sCss += '#'+g_joSelectedTopNavModule.attr("id")+' pane { height:'+(_iWindowHeight-_iPaneOffsetTop-50)+'px; }'+"\n";
}

g_joSelectedTopNavModule.find("style.Positioning").html(_sCss);
}

function vFitTopNavModules() {
$("#TopNav controls").remove();
$("#TopNav module.Hidden").removeClass("Hidden");

var _iTopNavMaxWidth = $("#TopNav").width()-50,
_iTopNavTotalModuleWidth = 0;

$("#TopNav module.Compact").each(function() {
$(this).removeClass("Compact")
.find("pane widget").insertAfter($(this).find("icon"));
});

$("#TopNav module").each(function() {
_iTopNavTotalModuleWidth += $(this).width();
});

if (_iTopNavTotalModuleWidth > _iTopNavMaxWidth) {
$("#TopNav module").joReverse().each(function() {
var _iOldModuleWidth = $(this).width();
$(this).addClass("Compact")
.find("widget").insertBefore($(this).find("pane article"));
var _iNewModuleWidth = $(this).width();

_iTopNavTotalModuleWidth -= _iOldModuleWidth;
_iTopNavTotalModuleWidth += _iNewModuleWidth;

if (_iTopNavTotalModuleWidth < _iTopNavMaxWidth) {
return false;
}
});
}

if (_iTopNavTotalModuleWidth > _iTopNavMaxWidth) {
_iTopNavMaxWidth -= 50;
var _iTopNavModulePages = Math.ceil(_iTopNavTotalModuleWidth/_iTopNavMaxWidth);

var _nPage = 1,
_nCurrentPageWidth = 0;
$("#TopNav module").each(function() {
_nCurrentPageWidth += $(this).width();
if (_nCurrentPageWidth >= _iTopNavMaxWidth) {
++_nPage;
_nCurrentPageWidth = 0;
}
$(this).attr("data-_nPage",_nPage);
});

if (_iTopNavModulePages > 1) {
vInitNavModulePaginator($("#TopNav"),_iTopNavModulePages);
}
}

$("#TopNav .Initializing").removeClass("Initializing");
}

function vCloseTopNavPane() {
$("#TopNav module.Selected").removeClass("Selected");
}

$("#TopNav").on({
mouseenter: function () {
if ($("body").attr("data-_sNavItemActivation") == "Click") return;

g_joSelectedTopNavModule = $(this).parent();
$(this).parent().addClass("InUse");

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");

if (g_joSelectedTopNavModule.hasClass("Selected")) {
return;
}

$.doTimeout("ShowTopNavPane",100,function() {
vCloseTopNavPane();
g_joSelectedTopNavModule.addClass("Selected");
g_joSelectedTopNavModule.trigger("NavPaneOpened");
vPositionOpenedTopNavPane();
});
},
mouseleave: function () {
if ($("body").attr("data-_sNavItemActivation") == "Click") return;

$(this).parent().removeClass("InUse");

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");
$.doTimeout("CloseTopNavPane",300,function() {
vCloseTopNavPane();
g_joSelectedTopNavModule = null;
});
},
click: function () {
if ($("body").attr("data-_sNavItemActivation") == "Hover") return;

g_joSelectedTopNavModule = $(this).parent();
$(this).parent().addClass("InUse");

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");

if (g_joSelectedTopNavModule.hasClass("Selected")) {
vCloseTopNavPane();
g_joSelectedTopNavModule = null;
return;
}

vCloseTopNavPane();
g_joSelectedTopNavModule.addClass("Selected");
g_joSelectedTopNavModule.trigger("NavPaneOpened");
vPositionOpenedTopNavPane();
}
},"module:not(.Disabled) > icon,module:not(.Disabled) > widget");

$("#TopNav").on({
mouseenter: function () {
$(this).parent().addClass("InUse");

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");
},
mouseleave: function () {
$(this).parent().removeClass("InUse");

$.doTimeout("CloseTopNavPane",300,function() {
vCloseTopNavPane();
g_joSelectedTopNavModule = null;
});
}
},"module > pane");

var g_joSelectedSideNavModule;

function vPositionOpenedSideNavPane() {
if (!g_joSelectedSideNavModule) return;

if (g_joSelectedSideNavModule.find("style.Positioning").length == 0) {
g_joSelectedSideNavModule.append('<style type="text/css" class="Positioning"></style>');
}

g_joSelectedSideNavModule.find("style.Positioning").html("");

var _joPane = g_joSelectedSideNavModule.find("pane");

var _iPaneHeight = _joPane.height(),
_iPaneExtrasHeight = 0;

if (_joPane.find("header").length > 0) {
_iPaneExtrasHeight = _joPane.find("header").outerHeight();
}

if (_joPane.find("footer").length > 0) {
_iPaneExtrasHeight += _joPane.find("footer").outerHeight();
}

var _sCss = '#'+g_joSelectedSideNavModule.attr("id")+' pane article { height:'+(_iPaneHeight-_iPaneExtrasHeight)+'px; }';

g_joSelectedSideNavModule.find("style.Positioning").html(_sCss);
}

function vFitSideNavModules() {
//console.log("vFitSideNavModules");
$("#SideNav controls").remove();
$("#SideNav module.Hidden").removeClass("Hidden");

var _iSideNavMaxHeight = $("#SideNav").height(),
_iSideNavModuleHeight = $("#SideNav > wrapper > module:not(.Selected):first").outerHeight(true),
_iSideNavModuleCount = $("#SideNav > wrapper > module").length;

//console.log("_iSideNavMaxHeight"+_iSideNavMaxHeight);
//console.log("_iSideNavModuleHeight"+_iSideNavModuleHeight);
//console.log("_iSideNavModuleCount"+_iSideNavModuleCount);

var _iSideNavTotalModuleHeight = _iSideNavModuleHeight*_iSideNavModuleCount;
var _iSideNavModulePages = Math.ceil(_iSideNavTotalModuleHeight/_iSideNavMaxHeight);

//console.log("_iSideNavTotalModuleHeight"+_iSideNavTotalModuleHeight);
//console.log("_iSideNavModulePages"+_iSideNavModulePages);

if (_iSideNavModulePages > 1) {
//console.log("_iSideNavModulePages > 1");

var _nPage = 1,
_nCurrentPageHeight = 0;
$("#SideNav module").each(function() {
_nCurrentPageHeight += _iSideNavModuleHeight;
if (_nCurrentPageHeight >= _iSideNavMaxHeight) {
++_nPage;
_nCurrentPageHeight = 0;
}
$(this).attr("data-_nPage",_nPage);
});

vInitNavModulePaginator($("#SideNav > wrapper"),_iSideNavModulePages);
}

$("#SideNav .Initializing").removeClass("Initializing");
}

var oOpenSideNavModes = {
Expanded: function(p_joSelectedSideNavModule) {
$("#SideNav module.Selected").removeClass("Selected");
g_joSelectedSideNavModule.addClass("Selected");
g_joSelectedSideNavModule.trigger("NavPaneOpened");
vPositionOpenedSideNavPane();
},
Collapsed: function(p_joSelectedSideNavModule) {
if (g_joSelectedSideNavModule.hasClass("Selected")) {
vCloseSideNavPane();
return;
}
$("#SideNav module.Selected").removeClass("Selected");
$("#SideNav").addClass("Expanded");
g_joSelectedSideNavModule.addClass("Selected");
g_joSelectedSideNavModule.trigger("NavPaneOpened");
vPositionOpenedSideNavPane();
},
Hidden: function(p_joSelectedSideNavModule) {
if (g_joSelectedSideNavModule.hasClass("Selected")) {
vCloseSideNavPane();
return;
}
$("#SideNav module.Selected").removeClass("Selected");
$("#SideNav").addClass("Expanded");
g_joSelectedSideNavModule.addClass("Selected");
g_joSelectedSideNavModule.trigger("NavPaneOpened");
vPositionOpenedSideNavPane();
}
};

var oCloseSideNavPaneModes = {
Expanded: function() {

},
Collapsed: function() {
$("#SideNav").removeClass("Expanded");
$("#SideNav module.Selected").removeClass("Selected");
g_joSelectedSideNavModule = null;
},
Hidden: function() {
$("#SideNav").removeClass("Expanded");
$("#SideNav module.Selected").removeClass("Selected");
g_joSelectedSideNavModule = null;
}
};

function vOpenSideNav() {
oOpenSideNavModes[$("body").attr("data-_sSideNavMode")]();
}

function vCloseSideNavPane() {
oCloseSideNavPaneModes[$("body").attr("data-_sSideNavMode")]();
}

function vShowSideNavModulePage(p_nPage) {
$("#SideNav controls .Selected").removeClass("Selected");
$("#SideNav controls span:eq("+(p_nPage-1)+")").addClass("Selected");

$("#SideNav module").addClass("Hidden");
$('#SideNav module[data-_nPage="'+p_nPage+'"]').removeClass("Hidden");
}

function vSetSideNavArea() {
var _nSideNavHeight = window.innerHeight-$("#TopNav").height();
//if ($("#PersistentLargeRectModule:visible").length > 0) {
//	_nSideNavHeight -= 300;
//}
$("#SideNav").height(_nSideNavHeight);
}

$("#SideNav").hoverIntent({
over: function() {
if ($("body").attr("data-_sNavItemActivation") == "Click") return;

g_joSelectedSideNavModule = $(this).parent();

g_joSelectedSideNavModule.addClass("InUse");

$.doTimeout("CloseSideNavPane");

if (g_joSelectedSideNavModule.hasClass("Selected")) {
return;
}

vOpenSideNav();
},
out: function() {
// required to prevent re-triggering "over" (hoverintent quirk)
},
selector: "module:not(.Disabled) > icon"
});

$("#SideNav").on({
mouseleave: function () {
if ($("body").attr("data-_sNavItemActivation") == "Click") return;

$(this).parent().removeClass("InUse");

$.doTimeout("CloseSideNavPane",300,function() {
vCloseSideNavPane();
});
},
click: function () {
if ($("body").attr("data-_sNavItemActivation") == "Hover") return;

g_joSelectedSideNavModule = $(this).parent();

g_joSelectedSideNavModule.addClass("InUse");

$.doTimeout("CloseSideNavPane");

vOpenSideNav();
}
},"module:not(.Disabled) > icon");

$("#SideNav").on({
mouseenter: function () {
$(this).parent().addClass("InUse");

$.doTimeout("CloseSideNavPane");
},
mouseleave: function () {
$(this).parent().removeClass("InUse");

$.doTimeout("CloseSideNavPane",300,function() {
vCloseSideNavPane();
});
}
},"module > pane");

$(document).on("click","#AlertsNavModule .Controls .MarkAllAsSeen,#ActivityNavModule .Controls .MarkAllAsSeen",function() {
$(this).parents("pane").find("article .Unseen").removeClass("Unseen");
});

$(document).on("click","#AlertsNavModule li .BroadcastStatusWrapper,#ActivityNavModule li .BroadcastStatusWrapper",function() {
$(this).parent().removeClass("Unseen");
});
$(document).on("InitialPageReady",function() {
$("#ManageNavModule .PaneTabs li").hover(function() {
var _sPaneClass = $(this).attr("data-_sPane");

if (!$(".Pane."+_sPaneClass).hasClass("Selected")) {
$("#ManageNavModule .PaneTabs .Selected").removeClass("Selected");
$("#ManageNavModule .Panes .Selected").removeClass("Selected");

$(".Pane."+_sPaneClass).addClass("Selected");
$(this).addClass("Selected");
}
},function () {

});
});
$("#GamesNavModule widget li").joUninited().click(function() {
if ($("body").attr("data-_sNavItemActivation") != "Click"
|| $("#GamesNavModule").hasClass("Selected")) {
if (!bBrowserIsCompatible("Pnl")) {
window.location.href = $(this).attr("data-_sGameUrl");
}
else {
$.doTimeout("CloseSideNavPane");
$.doTimeout("CloseSideNavPane",300,function() {
vCloseSideNavPane();
});

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");
$.doTimeout("CloseTopNavPane",300,function() {
vCloseTopNavPane();
});

var _oPnl = new PersistentNavigationLoader();
_oPnl.m_sUrl = $(this).attr("data-_sGameUrl");
_oPnl.vLoadComponents();
}
}
});
var g_oSearchablePageHistory = {},
g_bSearchPredictingIsOccurring = false,
g_bTopSearchQueriesAreBeingRetrieved = false,
g_sSearchString,
g_nPageHistoryMatchCount = 0;

if (Storage !== undefined) {
_jsonSearchablePageHistory = localStorage.getItem("_jsonSearchablePageHistoryNov18");
if (typeof _jsonSearchablePageHistory == "string"
&& _jsonSearchablePageHistory != "") {
g_oSearchablePageHistory = JSON.parse(_jsonSearchablePageHistory);
}
}

function vSuggestPopularSearchesAndRecentHistory() {
if ($("#SearchQueryInput").val().length < 3
|| g_sSearchString == $("#SearchQueryInput").val()
|| g_bTopSearchQueriesAreBeingRetrieved) return;

$.doTimeout("vSuggestPopularSearchesAndRecentHistory");

g_sSearchString = $("#SearchQueryInput").val();
g_bTopSearchQueriesAreBeingRetrieved = true;

$.getJSON("/responders/sar",{method:"TopSearchQueries",query:g_sSearchString},function(data) {
g_bTopSearchQueriesAreBeingRetrieved = false;
$("#PopularTermSuggestions").html("").hide();

if (!jQuery.isEmptyObject(data)) {
$.each(data,function(_iKey,_sMatch) {
$("#PopularTermSuggestions").append('<li><a href="/search?query='+_sMatch+'">'+_sMatch+'</a></li>');
});
}

if ($("#PopularTermSuggestions li").length > 0) {
$("#PopularTermSuggestions").show();
}

vSuggestRecentlyViewedPages();
});
}

function vSuggestRecentlyViewedPages() {
$("#BrowserHistorySuggestions").hide();
$("#BrowserHistorySuggestions ul").html("");

for (_sUrl in g_oSearchablePageHistory) {
if (g_nPageHistoryMatchCount >= 10) {
g_nPageHistoryMatchCount = 0;
break;
}

var _oRegex = new RegExp("(?:^| )"+g_sSearchString,"ig");

if (g_oSearchablePageHistory[_sUrl].title.search(_oRegex) != -1
|| g_oSearchablePageHistory[_sUrl].breadcrumb.search(_oRegex) != -1) {
var _sTitle = g_oSearchablePageHistory[_sUrl].title.replace(_oRegex,function (_sMatch) {
return "<strong>"+_sMatch+"</strong>";
});
var _sBreadcrumb = g_oSearchablePageHistory[_sUrl].breadcrumb.replace(_oRegex,function (_sMatch) {
return "<strong>"+_sMatch+"</strong>";
});
$("#BrowserHistorySuggestions ul").append('<li><a href="'+_sUrl+'">'+_sTitle+'</a><small>'+_sBreadcrumb+'</small></li>');
++g_nPageHistoryMatchCount;
}
}

if ($("#BrowserHistorySuggestions li").length > 0) {
$("#BrowserHistorySuggestions").show();
}
}

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$("#SearchForm").joUninited()
.submit(function() {
$(this).find(".SearchOption").remove();

$("#SearchOptionsForm input").each(function() {
if ($(this).is(":checked")) {
$('<input type="hidden" class="SearchOption" name="'+$(this).attr("name")+'"'
+' value="'+$(this).attr("value")+'" />').appendTo("#SearchForm");
}
});

return true;
});

var _sSearchOptionsHtml = "";
if ($('meta[property="gb:gameid"]').length > 0) {
_sSearchOptionsHtml += '<label>'
+'<input checked type="checkbox" name="game" value="'+$('meta[property="gb:gameid"]').attr("content")+'">'
+'<span>'+$('meta[property="gb:game_name"]').attr("content")+'</span>'
+'</label>';
}

if ($('meta[property="gb:model_name"]').length > 0) {
_sSearchOptionsHtml += '<label>'
+'<input type="checkbox" name="section" value="'+$('meta[property="gb:model_name"]').attr("content")+'">'
+'<span>'+$('meta[property="gb:plural_title"]').attr("content")+'</span>'
+'</label>';
}

if (_sSearchOptionsHtml.length > 0) {
$("#SearchOptionsForm").show()
.find("form_extension").html(_sSearchOptionsHtml);
}
else {
$("#SearchOptionsForm").hide()
.find("form_extension").html("");
}

if ($("#SideNav #SearchNavModule").length > 0) {
$("#SearchNavModule #SearchForm").prependTo($("#SearchNavModule pane article"));
}

$("#SearchQueryInput").joUninited()
.click(function(p_oEvent) {

})
.keyup(function() {
if ($(this).val().length >= 3) {
$.doTimeout("vSuggestPopularSearchesAndRecentHistory",250,function() {
vSuggestPopularSearchesAndRecentHistory();
});
}
else {
$("#PopularTermSuggestions").html("").hide();
$("#BrowserHistorySuggestions").hide();
$("#BrowserHistorySuggestions ul").html("");
}
});

if (Storage !== undefined) {
_jsonSearchablePageHistory = localStorage.getItem("_jsonSearchablePageHistoryNov18");
if (typeof _jsonSearchablePageHistory == "string"
&& _jsonSearchablePageHistory != "") {
g_oSearchablePageHistory = JSON.parse(_jsonSearchablePageHistory);
}
else {
g_oSearchablePageHistory = {};
}

var _sUrl = window.location.href;

if (_sUrl.indexOf("?") !== -1) {
_sUrl = _sUrl.substr(0,_sUrl.indexOf("?"));
}

g_oSearchablePageHistory[_sUrl] = {
"title": $("#PageTitle").text().replace(/[\n\r\t]/g,""),
"breadcrumb": $("#Breadcrumb").text().replace(/[\n\r\t]/g,"")
};

localStorage.setItem("_jsonSearchablePageHistoryNov18",JSON.stringify(g_oSearchablePageHistory));
}
});

$(document).on("AppTemplateApplied",function() {
if ($("#SideNav #SearchNavModule").length > 0) {
$("#SearchNavModule #SearchForm").prependTo($("#SearchNavModule pane article"));
}
else if ($("#TopNav #SearchNavModule").length > 0
&& $("#SearchNavModule pane article #SearchForm").length > 0) {
$("#SearchNavModule #SearchForm").appendTo($("#SearchNavModule widget"));
}
});

function vAppendThemeRowId(p_oThemeInfo) {
var _joLi = $('<li data-_idThemeRow="'+p_oThemeInfo._idRow+'">'
+'<spriteIcon class="MiscIcon SortHandle" title="Move"></spriteIcon>'
+p_oThemeInfo._sProfileLink
+'<span>by '+p_oThemeInfo._sSubmitter+'</span>'
+'<button title="Remove" type="button" class="TrashButton IconOnlyButton">'
+'<spriteIcon class="SubnavigatorIcon TrashIcon"></spriteIcon>'
+'</button>'
+'</li>');

_joLi.find(".TrashButton").click(function() {
$(this).parent().remove();
vRefreshStoredThemeRowIds();
});

_joLi.appendTo("#NavOptionsUiThemeList");

vRefreshStoredThemeRowIds();
}

function vRefreshStoredThemeRowIds() {
var _aThemeRowIds = [];

$("#NavOptionsUiThemeList li").each(function() {
_aThemeRowIds.push($(this).attr("data-_idThemeRow"));
});

$("#ThemeRowIdsInput").val(_aThemeRowIds.join(" "));
}

$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$("#NavOptionsUiThemeList").sortable({
handle: ".SortHandle",
axis: "y",
stop: function() {
vRefreshStoredThemeRowIds();
}
});
});
function vBindPmOnclickDebolder() {
$("#LatestPmsColumn a").joUninited().click(function() {
$(this).parent().removeClass("Unread");
});
}

$("#MessagesNavModule").on("NavModuleChanged", function() {
vBindPmOnclickDebolder();
});

$(document).on("InitialPageReady",function() {
vBindPmOnclickDebolder();
});

if (bBrowserIsCompatible("Pnl")) {
window.history.pushState({
"_sUrl": window.location.href
},"",window.location.href);
}

function ResponseCacher() {
this.m_sCacheKey;

this.sStoreResponse = function(p_oResponse) {
var _sCacheKey = "ck_"+sRandId();

if (!bBrowserIsCompatible("Pnl")
|| !bBrowserIsCompatible("PnlHistory")) {
return _sCacheKey;
}

if (window.localStorage) {
if (localStorage._aCachedResponses) {
var _aCachedResponses = JSON.parse(localStorage._aCachedResponses);

if (_aCachedResponses.length >= 5) {
var _sCacheKeyToDelete = _aCachedResponses.shift();
localStorage.removeItem(_sCacheKeyToDelete);
}
}
else {
var _aCachedResponses = [];
}

try {
localStorage[_sCacheKey] = JSON.stringify(p_oResponse);

_aCachedResponses.push(_sCacheKey);

localStorage._aCachedResponses = JSON.stringify(_aCachedResponses);
}
catch (p_oException) {
console.log(p_oException.message);
}
}

return _sCacheKey;
};

this.bCacheExists = function(p_sCacheKey) {
if (!bBrowserIsCompatible("Pnl")) {
return false;
}

if (localStorage[p_sCacheKey]) {
return true;
}
else {
return false;
}
};

this.oResponse = function(p_sCacheKey) {
return JSON.parse(localStorage[p_sCacheKey]);
}
}

function LoaderAnim() {
this.m_sUrl,
this.m_cbOnComplete = function() { },
this.m_sHistoryUpdateMethod = "pushState",
this.m_oAdditionalAjaxOptions = {};

this.vStart = function() {
$("#Loader").removeClass("Complete").fadeTo(500,1)
.find("num").html("");
};

this.vUpdate = function(p_nPercentageCompleted) {
$("#Loader num").html(p_nPercentageCompleted);
};

this.vFinish = function() {
$("#Loader").addClass("Complete").fadeTo(500,0);
};
}

function ContentScrollToer() {
this.m_nScrollOffset = 0,
this.m_cbOnComplete = function() { },
this.m_bCancelDefaultScroll = false;

if ("scrollRestoration" in history) {
history.scrollRestoration = "manual";
}

this.vExecute = function() {
$("body,html").animate({
scrollTop: this.m_nScrollOffset
},this.m_cbOnComplete);
}
}

var g_oLoaderAnim = new LoaderAnim(),
g_aCurrentDynamicMetaTags,
g_oResponseCacher = new ResponseCacher(),
g_oLoadedScripts = [],
g_oContentScrollToer = new ContentScrollToer();

function PersistentNavigationLoader() {
this.m_sUrl,
this.m_cbOnComplete = function() { },
this.m_sHistoryUpdateMethod = "pushState",
this.m_oAdditionalAjaxOptions = {};

this.vLoadComponents = function() {
g_oLoaderAnim.vStart();

var _oElement = document.createElement("a");
_oElement.href = this.m_sUrl;

var _sCurrentHostname = window.location.hostname;
var _sRequestHostname = _oElement.hostname;

if (_sCurrentHostname != _sRequestHostname) {
this.m_sUrl = this.m_sUrl.replace(_sRequestHostname,_sCurrentHostname);
}

if (this.m_sUrl.includes("http:")) {
this.m_sUrl = this.m_sUrl.replace("http:","https:");
}

var _oParentThis = this;
$.ajax(Object.assign({
xhr: function() {
var _oXhr = new window.XMLHttpRequest();
_oXhr.upload.addEventListener("progress", function(p_oEvent){
if (p_oEvent.lengthComputable) {
g_oLoaderAnim.vUpdate(Math.round(p_oEvent.loaded/p_oEvent.total*100));
}
},false);
_oXhr.addEventListener("progress", function(p_oEvent){
if (p_oEvent.lengthComputable) {
g_oLoaderAnim.vUpdate(Math.round(p_oEvent.loaded/p_oEvent.total*100));
}
},false);
return _oXhr;
},
url: this.m_sUrl,
dataType: "json",
headers: {
"Accept": "application/json; charset=utf-8",
"Aardvark-ComponentSet": "content"
}},this.m_oAdditionalAjaxOptions)
).done(function(p_oResponse) {
g_oLoaderAnim.vFinish();

var _sResponseCacheKey = g_oResponseCacher.sStoreResponse(p_oResponse);

if (_oParentThis.m_sHistoryUpdateMethod == "pushState") {
window.history.pushState({
"_sResponseCacheKey": _sResponseCacheKey,
"_sUrl": p_oResponse._sResponseUri
},"",p_oResponse._sResponseUri);
}
else {
window.history.replaceState({
"_sResponseCacheKey": _sResponseCacheKey,
"_sUrl": p_oResponse._sResponseUri
},"",p_oResponse._sResponseUri);
}

_oParentThis.vSetComponents(p_oResponse);
});
};

this.vSetComponents = function(p_oResponse) {
if (p_oResponse._sVersionHash != $("html").attr("data-_sVersionHash")) {
location.reload();
}

$("html").attr({
id: p_oResponse._sHtmlTagId,
class: p_oResponse._sHtmlTagClasses,
"data-_sVersionHash": p_oResponse._sVersionHash
});

$("head title").html(p_oResponse._sMetaTitle);

$('link[rel="canonical"]').attr("href",p_oResponse._sCanonicalUrl);

if (p_oResponse.hasOwnProperty("_aDynamicMetaTags")) {
var _aDynamicMetaTagNames = [];
$.each(p_oResponse._aDynamicMetaTags,function(_iKey,_oTag) {
if (_oTag.hasOwnProperty("name")) {
$('meta[name="'+_oTag.name+'"]').remove();
_aDynamicMetaTagNames.push("name:"+_oTag.name);
}
else if (_oTag.hasOwnProperty("property")) {
$('meta[property="'+_oTag.property+'"]').remove();
_aDynamicMetaTagNames.push("property:"+_oTag.property);
}

var _aAttributes = [];
$.each(_oTag,function(_sAttribute,_xValue) {
_aAttributes.push(_sAttribute+'="'+_xValue+'"');
});

$('<meta '+_aAttributes.join(" ")+'></meta>').appendTo("head");
});

$.each(g_aCurrentDynamicMetaTags,function(_iKey,_oTag) {
if (_oTag.hasOwnProperty("name")
&& $.inArray("name:"+_oTag.name,_aDynamicMetaTagNames) == -1) {
$('meta[name="'+_oTag.name+'"]').remove();
}
else if (_oTag.hasOwnProperty("property")
&& $.inArray("property:"+_oTag.property,_aDynamicMetaTagNames) == -1) {
$('meta[property="'+_oTag.property+'"]').remove();
}
});

g_aCurrentDynamicMetaTags = p_oResponse._aDynamicMetaTags;
}

if (p_oResponse.hasOwnProperty("_aStylesheetUrls")) {
var _oExistingStylesheets = {};
$('link[rel="stylesheet"]').each(function() {
if (bIsLocalUrl($(this).attr("href"))) {
$(this).attr("id","ele"+sRandId());
_oExistingStylesheets[$(this).attr("href")] = $(this).attr("id");
}
});

$.each(p_oResponse._aStylesheetUrls,function(_iKey,_sUrl) {
if (!_oExistingStylesheets.hasOwnProperty(_sUrl+"?"+p_oResponse._sVersionHash)) {
$("body").append('<link rel="stylesheet" type="text/css" href="'+_sUrl+'?'+p_oResponse._sVersionHash+'"></link>');
}
});

$.each(_oExistingStylesheets,function(_sUrl,_sId) {
if ($.inArray(_sUrl.replace("?"+p_oResponse._sVersionHash,""),p_oResponse._aStylesheetUrls) == -1) {
$("#"+_sId).remove();
}
});
}

$("#ModuleStyles,body > .BananaTip").remove();

if (p_oResponse.hasOwnProperty("_sEmbeddedStyleTag")) {
$(p_oResponse._sEmbeddedStyleTag).appendTo("body");
}

if (p_oResponse.hasOwnProperty("_aTopNavApps")) {
$("#TopNav module").remove();

$.each(p_oResponse._aTopNavApps,function(_iKey,_sAppOutput) {
$("#TopNav").append(_sAppOutput);
});

$("#TopNav module").each(function() {
vEvaluateModuleConfig($(this));
});
}

if (p_oResponse.hasOwnProperty("_aSideNavApps")) {
$("#SideNav module").remove();

$.each(p_oResponse._aSideNavApps,function(_iKey,_sAppOutput) {
$("#SideNav > wrapper").append(_sAppOutput);
});

$("#SideNav module").each(function() {
vEvaluateModuleConfig($(this));
});
}

if (p_oResponse.hasOwnProperty("_sPageTitle")
|| p_oResponse.hasOwnProperty("_aBreadcrumbLinks")) {
if ($("#Headline").length == 0) {
$('<overlay id="Headline"></overlay>').appendTo("#HeadlineWrapper");
}
}
else {
$("#Headline").remove();
}

if (p_oResponse.hasOwnProperty("_aBreadcrumbLinks")) {
if ($("#Breadcrumb").length == 0) {
$('<nav id="Breadcrumb"></nav>').prependTo("#Headline");
}

if ($("#StructuredDataBreadcrumb").length == 0) {
$('<script type="application/ld+json" id="StructuredDataBreadcrumb"></script>').appendTo("body");
}

$("#Breadcrumb").html(p_oResponse._aBreadcrumbLinks.join(" > "));
$("#StructuredDataBreadcrumb").html(JSON.stringify(p_oResponse._aStructuredDataBreadcrumbLinkData));
}
else {
$("#Breadcrumb,#StructuredDataBreadcrumb").remove();
}

if (p_oResponse.hasOwnProperty("_sPageTitle")) {
if ($("#PageTitle").length == 0) {
$('<h1 id="PageTitle"></h1><h2 id="PageDescription"></h2>').appendTo("#Headline");
}

$("#PageTitle").html(p_oResponse._sPageTitle);

if (p_oResponse.hasOwnProperty("_sPageDescription")) {
$("#PageDescription").html(p_oResponse._sPageDescription);
}
else {
$("#PageDescription").remove();
}
}
else {
$("#PageTitle,#PageDescription").remove();
}

if (p_oResponse.hasOwnProperty("_sBackgroundUrl")) {
if ($("#HeadlineBackground").length == 0) {
$("#HeadlineWrapper")
.append('<bgImg id="HeadlineBackground"></bgImg>');

$("#BodyWrapper")
.append('<bgImg id="PageBackground"></bgImg>');
}

$("#HeadlineBackground,#PageBackground")
.css("background-image","url('"+p_oResponse._sBackgroundUrl+"')");

$("#HeadlineWrapper").addClass("HasBackground");
}
else {
$("#HeadlineWrapper").removeClass("HasBackground");
$("#HeadlineBackground,#PageBackground").remove();
}

if (p_oResponse.hasOwnProperty("_sSubNavigator")) {
if ($("#SubNavigator").length == 0) {
$('<wrapper id="SubNavigator"></wrapper>').insertAfter("#HeadlineWrapper");
}

$("#SubNavigator").html(p_oResponse._sSubNavigator);
}
else {
$("#SubNavigator").remove();
}

if (p_oResponse.hasOwnProperty("_aMasterLog")) {
vShowMasterLog(p_oResponse._aMasterLog);
}

$("#MainContentWrapper > *:not(#ContentGrid,header,.Background)").remove();

$("#ContentGrid").html(p_oResponse._sGrid);

var _aScriptPromises = [];
if (p_oResponse.hasOwnProperty("_aScriptUrls")) {
$('body script[src]').each(function() {
if (bIsLocalUrl($(this).attr("src"))) {
$(this).attr("id","ele"+sRandId());
g_oLoadedScripts[$(this).attr("src")] = $(this).attr("id");
}
});

//console.log(g_oLoadedScripts);
//console.log(p_oResponse._sVersionHash);
//console.log(p_oResponse._aScriptUrls);

$.each(p_oResponse._aScriptUrls,function(_iKey,_sUrl) {
if (!g_oLoadedScripts.hasOwnProperty(_sUrl+"?"+p_oResponse._sVersionHash)) {
_aScriptPromises[_iKey] = new $.Deferred();
var _eleScript = document.createElement( "script" );
_eleScript.onload = function() {
_aScriptPromises[_iKey].resolve();
};
_eleScript.src = _sUrl+'?'+p_oResponse._sVersionHash;
document.body.appendChild(_eleScript);

//console.log('adding script: '+_sUrl+"?"+p_oResponse._sVersionHash);
}
});

$.each(g_oLoadedScripts,function(_sUrl,_sId) {
if ($.inArray(_sUrl.replace("?"+p_oResponse._sVersionHash,""),p_oResponse._aScriptUrls) == -1) {
$("#"+_sId).remove();
}
});
}
else {
var _oScriptPromise = new $.Deferred();
_oScriptPromise.resolve();
_aScriptPromises.push(_oScriptPromise);
}

$.when.apply($,_aScriptPromises).done(function() {
$("#ModuleScripts").remove();

if (p_oResponse.hasOwnProperty("_sModuleScriptsTag")) {
$(p_oResponse._sModuleScriptsTag).appendTo("body");
}

if (p_oResponse.hasOwnProperty("_sNavScriptsTag")) {
$("#NavScripts").remove();
$(p_oResponse._sNavScriptsTag).appendTo("body");
}

$(document).trigger("PersistentNavReqComplete");
});

this.m_cbOnComplete();
};
}

function sRandId() {
return Math.random().toString().substring(2);
}

function bIsLocalUrl(p_sUrl) {
var _oElement = document.createElement("a");
_oElement.href = p_sUrl;

return _oElement.hostname.includes("gamebanana.com");
}

function bIsPnlCompatibleLocalUrl(p_sUrl) {
var _oElement = document.createElement("a");
_oElement.href = p_sUrl;

return _oElement.hostname.includes("gamebanana.com")
&& !_oElement.hostname.includes("api.gamebanana.com")
&& !_oElement.hostname.includes("files.gamebanana.com")
&& !p_sUrl.includes("gamebanana.com/scripts/raw/")
&& !p_sUrl.includes("gamebanana.com/dl/");
}

var g_bCtrlKeyPressed = false;

$(document).keydown(function(p_oEvent) {
if (p_oEvent.which == "17") {
g_bCtrlKeyPressed = true;
}
})
.keyup(function(){
g_bCtrlKeyPressed = false;
});

if (bBrowserIsCompatible("Pnl")) {
$(window).on("popstate",function(p_oEvent) {
if (p_oEvent.originalEvent.state.hasOwnProperty("_sResponseCacheKey")
&& g_oResponseCacher.bCacheExists(p_oEvent.originalEvent.state._sResponseCacheKey)) {
var _oPnl = new PersistentNavigationLoader();
_oPnl.vSetComponents(g_oResponseCacher.oResponse(p_oEvent.originalEvent.state._sResponseCacheKey));
}
else {
var _oPnl = new PersistentNavigationLoader();
_oPnl.m_sUrl = p_oEvent.originalEvent.state._sUrl;
_oPnl.m_sHistoryUpdateMethod = "replaceState";
_oPnl.vLoadComponents();
}
});

$("body").on("click","a",function(p_oEvent) {
var _sUrl = $(this).attr("href");

if (bIsPnlCompatibleLocalUrl(_sUrl)
&& !g_bCtrlKeyPressed) {

$.doTimeout("CloseSideNavPane");
$.doTimeout("CloseSideNavPane",300,function() {
vCloseSideNavPane();
});

$.doTimeout("ShowTopNavPane");
$.doTimeout("CloseTopNavPane");
$.doTimeout("CloseTopNavPane",300,function() {
vCloseTopNavPane();
});

var _oPnl = new PersistentNavigationLoader();
_oPnl.m_sUrl = _sUrl;
_oPnl.vLoadComponents();

p_oEvent.stopPropagation();
return false;
}
else {
return true;
}
});

$("body").on("submit","form",function(event) {
var _sUrl = $(this).attr("action");

if (_sUrl === undefined) {
_sUrl = "";
}

if (bIsPnlCompatibleLocalUrl(_sUrl)) {
var _sMethod = $(this).attr("method"),
_sData = $(this).serialize(),
_sSubmitButtonName = $(this).find("button:last").attr("name");

if (_sMethod === undefined) {
_sMethod = "GET";
}

if (_sSubmitButtonName !== undefined) {
_sData += '&'+_sSubmitButtonName+'='
}

var _oPnl = new PersistentNavigationLoader();
_oPnl.m_sUrl = _sUrl;
_oPnl.m_oAdditionalAjaxOptions = {
method: _sMethod,
data: _sData
};
_oPnl.vLoadComponents();

event.stopPropagation();
return false;
}
else {
return true;
}
});
}
var ADDRESS = "https://gamebanana.com";
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$("article p img").each(function() {
$('<span class="ResizedImageWrapper"><a href="'+$(this).attr("src")+'" target="_blank"><spriteIcon class="MiscIcon OpenInNewWindowButton"></spriteIcon></a></span>').insertAfter($(this));
$(this).next().prepend($(this));
});
});
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$("ul.sf-menu").superfish({
delay: 300,
autoArrows: false,
dropShadows: false,
speed: 0
});
});
function UsernameSuggestor(p_sTargetInputId) {
this.m_sTargetInputId = p_sTargetInputId;

this.vEnable = function() {
$("#"+this.m_sTargetInputId).after('<ul class="UsernameSuggestionList" id="'+this.m_sTargetInputId+'_UsernameSuggestionList"></ul>');
};
this.vEnable();

this.vDisable = function() {
$("#"+this.m_sTargetInputId+"_UsernameSuggestionList").remove();
};

this.vRequestUsernameSuggestions = function(p_sInput) {
if (p_sInput.length == 0) return;
if (p_sInput.length > 10)
{
this.vDisable();
$("#"+this.m_sTargetInputId).removeData("_oUsernameSuggestor");
}
else {
$.getJSON("https://gamebanana.com/responders/us",{name:p_sInput},(function(parent_this) {
return function(data) {
var _aUsernameSuggestions = [];
$.each(data, function(key,val) {
_aUsernameSuggestions.push("<li data-userid=\""+val[0]+"\">"+val[1]+"</li>");
});
$("#"+parent_this.m_sTargetInputId+"_UsernameSuggestionList").html(_aUsernameSuggestions.join("")).show();
};
}(this)));
}
};
}

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(document).on("keyup","textarea",function(e) {
if (e.shiftKey
&& e.keyCode == 53
&& $(this).val().slice(-2) == "%%") {
if ($(this).data("_oUsernameSuggestor")) {
$(this).data("_oUsernameSuggestor").vDisable();
$(this).removeData("_oUsernameSuggestor");
}
else {
$(this).data("_oUsernameSuggestor",new UsernameSuggestor($(this).attr("id")));
}
}
else if ($(this).data("_oUsernameSuggestor")) {
$(this).data("_oUsernameSuggestor").vRequestUsernameSuggestions($(this).val().substr($(this).val().lastIndexOf("%%")+2));
}
});

$("body").on("click",".UsernameSuggestionList li",function() {
_joTargetInput = $(this).parent().prev();
_sTargetInputText = _joTargetInput.val();
_sTargetInputTextBeforeUsername = _sTargetInputText.substr(0,_sTargetInputText.lastIndexOf("%%"));
_joTargetInput.val(_sTargetInputTextBeforeUsername+"%%"+$(this).html()+"%%");
_joTargetInput.focus();
_joTargetInput.data("_oUsernameSuggestor").vDisable();
_joTargetInput.removeData("_oUsernameSuggestor");
});
});
$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$("a").each(function() {
if ($(this).attr("href") !== undefined
&& $(this).attr("target") == undefined
&& $(this).attr("href").indexOf("gamebanana.com") == -1
&& $(this).attr("href").charAt(0) != "#"
&& $(this).attr("href").charAt(0) != "?"
&& $(this).attr("href").charAt(0) != "/"
&& $(this).attr("href").substr(0,10) != "javascript") {
$(this).attr("target","_blank");
}
});
});
$.fn.joMaximizeOrMinimizeModule = function() {
if ($(this).hasClass("Maximized")) {
$(this).joMinimizeModule();
}
else {
$(this).joMaximizeModule();
}
return $(this);
}

$.fn.joMaximizeModule = function() {
$(this).removeAttr("style");
if (!$(this).hasClass("Maximized")) {
$(this).addClass("Maximized").width($("#ContentGrid").width()-$(this).offset().left);
$(this).find(".MaximizeMinimizeButton .ModuleToolsIcon")
.removeClass("MaximizeIcon")
.addClass("MinimizeIcon");
}
return $(this);
}

$.fn.joMinimizeModule = function() {
$(this).removeAttr("style");
if ($(this).hasClass("Maximized")) {
$(this).next().remove();
$(this).removeClass("Maximized").width("");
$(this).find(".MaximizeMinimizeButton .ModuleToolsIcon")
.removeClass("MinimizeIcon")
.addClass("MaximizeIcon");
}
return $(this);
}

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(".MaximizeMinimizeButton").joUninited()
.click(function() {
$(this).parents("module").joMaximizeOrMinimizeModule();
});
});
var g_sSectionPath = window.location.pathname
.match(/[a-z\/]+/g);

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
if ("_aModuleLayout_"+g_sSectionPath in localStorage) {
var _jsonSavedModulelayout = localStorage.getItem("_aModuleLayout_"+g_sSectionPath);

$("#ColumnGrid").addClass("CustomModuleLayout");

$.each(JSON.parse(_jsonSavedModulelayout),function(index,_aValue) {
$(".ContentColumn:eq("+_aValue[0]+")").append($("#"+_aValue[1]));

$('<button class="ResetModulesButton IconOnlyButton" title="Reset module locations">'
+'<spriteIcon class="ModuleToolsIcon ResetModulesIcon/>'
+'</button>')
.click(function() {
localStorage.removeItem("_aModuleLayout_"+g_sSectionPath);
location.reload();
})
.appendTo($("#"+_aValue[1]).find(".ModuleTools"));

});
}

$(".Module .MoveButton").click(function() {
$(".Module.Maximized").joMinimizeModule();

$("body").addClass("ModuleMoverMode");

$(".ContentColumn").disableSelection()
.sortable({
"items": ".Module",
"placeholder": "MovingModuleDropzone",
"connectWith": ".ContentColumn",
"start": function(event,ui) {
ui.placeholder.height(ui.item.height());
}
});

$('<div id="ModuleMoverControls">'
+'<span>Move modules by clicking and dragging the purple bars.</span>'
+'</div>')
.appendTo("body");

$('<button type="button">'
+'<spriteIcon class="MiscIcon DiskIcon"></spriteIcon>'
+' <span>Save</span>'
+'</button>')
.click(function() {
$("body").removeClass("ModuleMoverMode");

$("#ModuleMoverControls").remove();

$(".ContentColumn").sortable("destroy")
.enableSelection();

var _aModulelayout = new Array();
$(".ContentColumn .Module").each(function() {
_aModulelayout.push([$(this).parent().index(),$(this).attr("id")]);
});

localStorage.setItem("_aModuleLayout_"+g_sSectionPath,$.toJSON(_aModulelayout));
})
.appendTo("#ModuleMoverControls");
});
});
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(".AdvancedListSettingsModule legend").click(function () {
var _oShowHideContentToggle = $(this).find("spriteIcon");
if (_oShowHideContentToggle.hasClass("ShowContentIcon")) {
_oShowHideContentToggle.removeClass("ShowContentIcon");
_oShowHideContentToggle.addClass("HideContentIcon");
$(this).parent().addClass("Expanded");
}
else {
_oShowHideContentToggle.removeClass("HideContentIcon");
_oShowHideContentToggle.addClass("ShowContentIcon");
$(this).parent().removeClass("Expanded");
}
});
});
function vInitWysiwygEditor(p_joEditor) {
p_joEditor.find(".Toolbars .Wysiwyg .BoldButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('bold', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .ItalicButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('italic', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .UnderlinedButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('underline', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .SpoilerTextButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
document.execCommand("fontSize", false, 1);
var _joInsertedElement = $(this).parents(".Editor").find(".RichText font[size=1]");
_joInsertedElement.replaceWith("<span class=\"Spoiler\">" + _joInsertedElement.html() + "</span>");
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .RedTextButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
document.execCommand("fontSize", false, 1);
var _joInsertedElement = $(this).parents(".Editor").find(".RichText font[size=1]");
_joInsertedElement.replaceWith("<span class=\"RedColor\">" + _joInsertedElement.html() + "</span>");
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .GreenTextButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
document.execCommand("fontSize", false, 1);
var _joInsertedElement = $(this).parents(".Editor").find(".RichText font[size=1]");
_joInsertedElement.replaceWith("<span class=\"GreenColor\">" + _joInsertedElement.html() + "</span>");
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .StrikethroughTextButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
document.execCommand("fontSize", false, 1);
var _joInsertedElement = $(this).parents(".Editor").find(".RichText font[size=1]");
_joInsertedElement.replaceWith("<del>" + _joInsertedElement.html() + "</del>");
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .InlineCodeButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
document.execCommand("fontSize", false, 1);
var _joInsertedElement = $(this).parents(".Editor").find(".RichText font[size=1]");
_joInsertedElement.replaceWith("<code>" + _joInsertedElement.html() + "</code>");
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .NumberedListButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('insertOrderedList', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .BulletListButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('insertUnorderedList', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .HorizontalLineButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('insertHorizontalRule', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .CodeBlockButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('formatBlock', false, '<pre>');
});

p_joEditor.find(".Toolbars .Wysiwyg .BigHeadingButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('formatBlock', false, '<h1>');
});

p_joEditor.find(".Toolbars .Wysiwyg .MediumHeadingButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('formatBlock', false, '<h2>');
});

p_joEditor.find(".Toolbars .Wysiwyg .SmallHeadingButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('formatBlock', false, '<h3>');
});

p_joEditor.find(".Toolbars .Wysiwyg .LinkButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _oSelection = window.getSelection();
if (_oSelection.toString().length > 0) {
var _sLink = prompt('Link URL:', 'http:\/\/');
document.execCommand('createlink', false, _sLink);
} else {
alert("Please select some text first");
}
});

p_joEditor.find(".Toolbars .Wysiwyg .ImageButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _sLink = prompt('Image URL:', 'http:\/\/');
document.execCommand('insertImage', false, _sLink);
});

p_joEditor.find(".Toolbars .Wysiwyg .VideoButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
var _sVideoCode = prompt("Video Code:", "");
try {
if ($(_sVideoCode).prop("nodeName") !== undefined) {
document.execCommand("insertHTML", false, _sVideoCode);
}
} catch (err) {
var _sRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/;
var _aMatch = _sVideoCode.match(_sRegex);
if (_aMatch && _aMatch[7].length == 11) {
document.execCommand("insertHTML", false, "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + _aMatch[7] + "\" frameborder=\"0\" allowfullscreen></iframe>");
} else {
alert("Unrecognized video URL");
}
}
});

p_joEditor.find(".Toolbars .Wysiwyg .UndoButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('undo', false, null);
});

p_joEditor.find(".Toolbars .Wysiwyg .RedoButton").click(function () {
$(this).parents(".Editor").find(".RichText").focus();
document.execCommand('redo', false, null);
});

function getSelectionStart() {
var node = document.getSelection().anchorNode;
if (!node) return false;
return (node.nodeType == 3 ? node.parentNode : node);
}

$.fn.joSelectElement = function () {
$(this).parents(".Editor").find(".RichText .SelectedElement").removeClass("SelectedElement");

$(this).addClass("SelectedElement");

return $(this);
}

p_joEditor.find(".ViewModes .Wysiwyg .RichText")
.droppable({
drop: function (event, ui) {
$(this).append(decodeURIComponent(ui.draggable.attr("data-_sHtmlDrop")));

$(this).focus().scrollTop($(this).prop("scrollHeight"));
}
})
.bind("keydown.EnableNavigateAwayPreventer", function (e) {
vEnableNavigateAwayPreventer();
})
.bind("keydown.backspace", function (e) {
if (e.keyCode === 8) {
if ($(this).html().length == 0) {
return false;
}
}
})
.bind("keydown.tab", function (e) {
if (e.keyCode == 9) { // tab
document.execCommand("insertHTML", false, "&#009");
return false;
}
})
.bind("keydown.enter", function (e) {
if (e.keyCode === 13) {
var _xCaretNode = getSelectionStart();
if (_xCaretNode.tagName.toLowerCase() == "pre") {
return true;
} else if (_xCaretNode.tagName.toLowerCase() == "li") {
if ($(_xCaretNode).text().length > 0) {
return true;
} else {
$("<br><br>").insertAfter($(_xCaretNode).parent());
$(_xCaretNode).remove();
return false;
}
} else {
document.execCommand("insertHTML", false, "<br/><br/>");
return false;
}
}
})
.click(function () {
var _joEditor = $(this).parents(".Editor");

if (_joEditor.find(".ElementConfig").length == 0) {
return;
}

$(this).find(".SelectedElement").removeClass("SelectedElement");
_joEditor.find(".ElementConfig").html("");
})
.blur(function () {
vCleanupWysiwygCode($(this));
})
.on("blur DOMNodeInserted DOMNodeRemoved", function () {
var _sText = $(this).text(),
_joSourceTextarea = $(this).parents(".Editor").find(".Source textarea");

if (_sText.length == 0) {
_joSourceTextarea.val("");
}
else {
_joSourceTextarea.val($(this).html());
}
})
.on({
mouseover: function () {
if ($(this).parents(".Editor").find(".ElementConfig").length == 0) {
return;
}

$(this).addClass("HoveredElement");
return false;
},
mouseout: function () {
if ($(this).parents(".Editor").find(".ElementConfig").length == 0) {
return;
}

$(this).removeClass("HoveredElement");
return false;
},
click: function (p_oEvent) {
if ($(this).parents(".Editor").find(".ElementConfig").length == 0) {
return;
}

p_oEvent.stopPropagation();

var _joElementConfig = $(this).parents(".Editor").find(".ElementConfig");

_joElementConfig.prev().joShowWysiwygPaletteTab();

_joElementConfig.html('<code class="GreenColor">&lt;' + $(this).prop("nodeName").toLowerCase() + '&gt;</code>');

var _joSelectedElement = $(this).joSelectElement();

if ($.inArray($(this).prop("nodeName").toLowerCase(), ["li"]) != -1) {
$('<button type="button">Split</button>')
.click(function () {
var _joParentList = _joSelectedElement.parent();
var _joNewList = _joParentList.clone().empty();

_joNewList.insertAfter(_joParentList);
$("<br/>").insertAfter(_joParentList);

var _joFollowingSiblings = _joSelectedElement.nextAll();

_joFollowingSiblings.appendTo(_joNewList);
_joNewList.prepend(_joSelectedElement);
})
.appendTo(_joElementConfig);
}

if ($.inArray($(this).prop("nodeName").toLowerCase(), ["font", "pre", "h1", "h2", "h3", "del", "code", "b", "i", "u", "span"]) != -1) {
$('<button type="button">Remove Formatting</button>')
.click(function () {
_joSelectedElement.replaceWith(_joSelectedElement.html());

_joElementConfig.html("");
})
.appendTo(_joElementConfig);
}

if ($(this).prop("nodeName").toLowerCase() == "a") {
$('<span>Destination:</span>' +
'<input class="LinkUrlInput" type="text" value="' + $(this).attr("href") + '">' +
'<button class="UnlinkButton" type="button">Unlink</button>')
.appendTo(_joElementConfig)

_joElementConfig.find(".LinkUrlInput").change(function () {
_joSelectedElement.attr("href", $(this).val());
});

_joElementConfig.find(".UnlinkButton").click(function () {
_joSelectedElement.replaceWith(_joSelectedElement.html());

_joElementConfig.html("");
});
}

if ($(this).prop("nodeName").toLowerCase() == "img") {
var _nElementWidth = $(this).width(),
_nParentWidth = $(this).offsetParent().width();

var _nElementWidthPercent = Math.round(_nElementWidth / _nParentWidth * 100);

$('<span>Source:</span>' +
'<input class="ImageUrl" type="text" value="' + $(this).attr("src") + '">' +
'<span>Width (%):</span>' +
'<input class="ImageWidth" type="number" min="5" max="100" step="5" value="' + _nElementWidthPercent + '">')
.appendTo(_joElementConfig);

_joElementConfig.find(".ImageUrl").change(function () {
_joSelectedElement.attr("src", $(this).val());
});

_joElementConfig.find(".ImageWidth").change(function () {
_joSelectedElement.attr("width", $(this).val() + "%");
});
}

$('<button type="button">Remove</button>')
.click(function () {
_joSelectedElement.remove();

_joElementConfig.html("");
})
.appendTo(_joElementConfig);

return false;
}
}, "*");

p_joEditor.find(".ViewModeSwitchers .Wysiwyg").click(function () {
vSwitchToWysiwygViewMode($(this).parents(".Editor"));
});

p_joEditor.find(".WysiwygPalettes h4").click(function () {
$(this).joShowWysiwygPaletteTab();
});
}

$.fn.joShowWysiwygPaletteTab = function () {
if (!$(this).hasClass("Active")) {
$(this).parents(".WysiwygPalettes").find(".Active").removeClass("Active");
$(this).addClass("Active").next().addClass("Active");
}

return $(this);
}

function vCleanupWysiwygCode(p_joWysiwygEditor) {
p_joWysiwygEditor.find("div").each(function () {
if ($(this).text().length == 0) {
$(this).remove();
}
if (!$(this).attr("class") || $(this).attr("class").length == 0) {
$(this).replaceWith($(this).html() + "<br/><br/>");
}
});

p_joWysiwygEditor.find("p").each(function () {
$(this).replaceWith($(this).html() + "<br/><br/>");
});

p_joWysiwygEditor.find("[style]").each(function () {
$(this).removeAttr("style");
});

p_joWysiwygEditor.find("[id]").each(function () {
$(this).removeAttr("id");
});

p_joWysiwygEditor.find("[class]").each(function () {
if ($(this).attr("class").length == 0) {
$(this).removeAttr("class");
}
});

p_joWysiwygEditor.find("span").each(function () {
if (!$(this).attr("class") || $(this).attr("class").length == 0) {
$(this).replaceWith($(this).html());
}
});
}

function vSwitchToWysiwygViewMode(p_joEditor) {
var _joSourceView = p_joEditor.find(".ViewModes .Source"),
_joWysiwygView = p_joEditor.find(".ViewModes .Wysiwyg");

if (_joSourceView.hasClass("Active")) {
var _sSourceHtml = _joSourceView.find("textarea").val();

_joWysiwygView.find(".RichText").html(_sSourceHtml);
}

vShowViewMode(p_joEditor, "Wysiwyg");

p_joEditor.find(".WysiwygPalettes").show();
}

function vShowViewMode(p_joEditor, p_sMode) {
if (p_joEditor.find(".ViewModes > ." + p_sMode).hasClass("Active")) {
return;
} else {
p_joEditor.find(".ViewModes > .Active").removeClass("Active");
p_joEditor.find(".Toolbars > .Active").removeClass("Active");
p_joEditor.find(".ViewModeSwitchers > .Active").removeClass("Active");

p_joEditor.find(".ViewModes > ." + p_sMode).addClass("Active");
p_joEditor.find(".Toolbars > ." + p_sMode).addClass("Active");
p_joEditor.find(".ViewModeSwitchers > ." + p_sMode).addClass("Active");
}
}

function vInitSourceEditor(p_joEditor) {
p_joEditor.find(".Toolbars .Source .ToggleSourceViewWrappingButton").click(function () {
if (p_joEditor.find(".ViewModes .Source textarea").hasClass("NoWrap")) {
p_joEditor.find(".ViewModes .Source textarea").removeClass("NoWrap");
} else {
p_joEditor.find(".ViewModes .Source textarea").addClass("NoWrap");
}
});

p_joEditor.find(".Toolbars .Source .CleanupHtmlButton").click(function () {
var _joSourceView = p_joEditor.find(".ViewModes .Source");
var _joWysiwygView = p_joEditor.find(".ViewModes .Wysiwyg");
vCleanupWysiwygCode(_joWysiwygView.find(".RichText"));
_joSourceView.find("textarea").val(_joWysiwygView.find(".RichText").html());
});

p_joEditor.find(".ViewModeSwitchers .Source").click(function () {
vShowViewMode(p_joEditor, "Source");
p_joEditor.find(".WysiwygPalettes").hide();
});
}

function vInitEditorBackupSystem(p_joEditor) {
$(".Editor .ViewModeSwitchers .Backup").click(function () {
vShowViewMode($(this).parents(".Editor"), "Backup");
$(this).parents(".Editor").find(".WysiwygPalettes").hide();
});

p_joEditor.find(".ViewModes .Wysiwyg .RichText").data("_tsLastEditorSave", Date.now());

var _jsonEditorInputBackup = localStorage.getItem("_jsonEditorInputBackup");

if (typeof _jsonEditorInputBackup == "string"
&& _jsonEditorInputBackup != "") {
_oEditorInputBackup = JSON.parse(_jsonEditorInputBackup);

if (_oEditorInputBackup.hasOwnProperty(window.location.href + "_" + p_joEditor.parents("fieldset").attr("id"))) {
p_joEditor.find(".ViewModes .Backup .RichText")
.html(_oEditorInputBackup[window.location.href + "_" + p_joEditor.parents("fieldset").attr("id")]);

p_joEditor.find(".ViewModeSwitchers .Backup").css("visibility", "visible");

p_joEditor.find(".Toolbars .Backup button")
.click(function () {
p_joEditor.find(".ViewModes .Wysiwyg .RichText")
.html(p_joEditor.find(".ViewModes .Backup .RichText").html());
p_joEditor.find(".ViewModes .Wysiwyg .Source textarea")
.val(p_joEditor.find(".ViewModes .Backup .RichText").html());
vSwitchToWysiwygViewMode(p_joEditor);
p_joEditor.find(".Toolbars .Backup").hide();
p_joEditor.find(".ViewModeSwitchers .Backup").css("visibility", "hidden");
});
}
}

p_joEditor.find(".ViewModes .Wysiwyg .RichText")
.keyup(function (event) {
if ($(this).data("_tsLastEditorSave") + 10 * 1000 > Date.now()) return;

$(this).data("_tsLastEditorSave", Date.now());

_jsonEditorInputBackup = localStorage.getItem("_jsonEditorInputBackup");

if (typeof _jsonEditorInputBackup != "string"
|| _jsonEditorInputBackup == "") {
_jsonEditorInputBackup = "{}";
}

_oEditorInputBackup = JSON.parse(_jsonEditorInputBackup);
_oEditorInputBackup[window.location.href + "_" + $(this).parents("fieldset").attr("id")] = $(this).html();

localStorage.setItem("_jsonEditorInputBackup", JSON.stringify(_oEditorInputBackup));
});
}
var g_oBeaconTitles = {
Update: "New Update",
Help: "Help Info",
Advice: "Recommendation"
};

$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$("script.Beacon").each(function() {
var _oBeacon = JSON.parse($(this).html());

if ($(_oBeacon._sTargetSelector).css("position") == "static") {
$(_oBeacon._sTargetSelector).css("position","relative");
}

$(_oBeacon._sTargetSelector).addClass("BeaconParent");

if ($("#"+_oBeacon._sId).length == 0) {
$('<spriteIcon id="'+_oBeacon._sId+'" class="Beacon '+_oBeacon._sType+'Beacon" '+(_oBeacon.hasOwnProperty("_sCssOverride")?'style="'+_oBeacon._sCssOverride+'"':'')+'/>'
+'<div class="BananaTip '+_oBeacon._sType+'BeaconTooltip">'
+'<div class="Title">'+(_oBeacon.hasOwnProperty("_sTitleOverride")?_oBeacon._sTitleOverride:g_oBeaconTitles[_oBeacon._sType])+'</div>'
+_oBeacon._sText+'<br/><br/>'
+'<button type="button" class="IconButton" onclick="'+_oBeacon._sRequest+'; $(\'#'+_oBeacon._sId+'\').remove();">'
+'<spriteIcon class="SubnavigatorIcon TrashIcon"></spriteIcon> <span>Dismiss</span>'
+'</button>'
+'</div>')
.appendTo(_oBeacon._sTargetSelector);

$("#"+_oBeacon._sId).next().joUninited().joBindBananaTip();
}
});
});
function MatchSuggester(p_oOptions) {
var m_oOptions = p_oOptions,
m_bMatchesAreBeingRetrieved = false,
$this = this;

this.vInit = function() {
this.vBindMatchListClosingOnWindowClick();
this.vBindInputBehaviors();
}

this.vBindMatchListClosingOnWindowClick = function() {
$("html").click(function() {
$(m_oOptions._sResultSelector).hide();
});
$(m_oOptions._sInputSelector+","+m_oOptions._sResultSelector).click(function(event) {
event.stopPropagation();
});
}

this.vBindInputBehaviors = function() {
$.fn.vSelectSearchSuggestion = function() {
$(m_oOptions._sResultSelector+" .Selected").removeClass("Selected");
$(this).addClass("Selected");
}

$(m_oOptions._sInputSelector)
.click(function() {
if ($(m_oOptions._sResultSelector+" li").length > 0) {
$(m_oOptions._sResultSelector).show();
}
})
.keyup(function(e) {
if (e.keyCode == 38) { // up arrow
if ($(m_oOptions._sResultSelector+" .Selected").length > 0
&& $(m_oOptions._sResultSelector+" .Selected").prev().length > 0) {
$(m_oOptions._sResultSelector+" .Selected").prev().vSelectSearchSuggestion();
}
else {
$(m_oOptions._sResultSelector+" li:last").vSelectSearchSuggestion();
}
return;
}
else if (e.keyCode == 40) { // down arrow
if ($(m_oOptions._sResultSelector+" .Selected").length > 0
&& $(m_oOptions._sResultSelector+" .Selected").next().length > 0) {
$(m_oOptions._sResultSelector+" .Selected").next().vSelectSearchSuggestion();
}
else {
$(m_oOptions._sResultSelector+" li:first").vSelectSearchSuggestion();
}
return;
}
else if (e.keyCode == 13) { // enter
if ($(m_oOptions._sResultSelector+" .Selected").length > 0) {
window.location = $(m_oOptions._sResultSelector+" .Selected a").attr("href");
return false;
}
else {
return true;
}
}

if ($(this).val().length >= 3) {
$.doTimeout("vSuggestMatches",250,function() {
$this.vSuggestMatches();
});
}
});
}

this.vSuggestMatches = function() {
if ($(m_oOptions._sInputSelector).val().length < 3
|| g_sSearchString == $(m_oOptions._sInputSelector).val()
|| m_bMatchesAreBeingRetrieved) return;

$.doTimeout("vSuggestMatches");

g_sSearchString = $(m_oOptions._sInputSelector).val();
m_bMatchesAreBeingRetrieved = true;

$.getJSON("https://api.gamebanana.com/"+m_oOptions._sApiEndpoint,m_oOptions._oApiRequestData,function(data) {
m_bMatchesAreBeingRetrieved = false;
$(m_oOptions._sResultSelector).html("");

if (!jQuery.isEmptyObject(data)) {
m_oOptions._cbMatchOutputter(data);
}

if ($(m_oOptions._sResultSelector+" li").length > 0) {
$(m_oOptions._sResultSelector).show();
}
else {
$(m_oOptions._sResultSelector).hide();
}
});
}
}
$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(".AdvancedElement_GraphicalSelect").joUninited().each(function() {
var _joOptionsToggle = $(this).find(".OptionsToggle");
_joOptionsToggle.css("top",(_joOptionsToggle.parent().height() / 2-_joOptionsToggle.height() / 2)+"px");

$(this).click(function(e) {
e.stopPropagation();
});

$("html").click(function() {
$(".AdvancedElement_GraphicalSelect .Active").removeClass("Active");
});

$(this).find(".SelectedOption,.OptionsToggle").click(function() {
var _joOptionsWrapper = $(this).parents(".AdvancedElement_GraphicalSelect").find(".OptionsWrapper");

if (_joOptionsWrapper.hasClass("Active")) {
_joOptionsWrapper.removeClass("Active");
}
else {
$(".AdvancedElement_GraphicalSelect .Active").removeClass("Active");

_joOptionsWrapper.addClass("Active");
}
});

$(this).find(".Options li").click(function() {
$(this).parents(".OptionsWrapper").removeClass("Active");
if ($(this).hasClass("Selected")) {
return;
}
$(this).parent().find("li.Selected").removeClass("Selected");
$(this).addClass("Selected");
$(this).parents(".AdvancedElement_GraphicalSelect").find("input[type=hidden]")
.val($(this).attr("data-value"));
$(this).parents(".AdvancedElement_GraphicalSelect").find(".SelectedOption")
.html($(this).html());
});
});

$(".AdvancedElement_Switch").joUninited().each(function() {
$(this).find("li").click(function() {
var _joSwitch = $(this).parents(".AdvancedElement_Switch");

_joSwitch.find(".Selected").removeClass("Selected");
$(this).addClass("Selected");
_joSwitch.find("input").val($(this).attr("data-value")).trigger("change");
});
});
});

function vTriggerPaginatorMechanism(p_joPaginator,p_nPageNumber) {
p_joPaginator.find(".AjaxPaginatorMechanism :hidden").val(p_nPageNumber);
p_joPaginator.find(".AjaxPaginatorMechanism button").click();
}

$(document).on("InitialPageReady PersistentNavReqComplete ModuleChanged",function() {
$(".AjaxPaginator .Controls a").joUninited()
.click(function () {
vTriggerPaginatorMechanism($(this).parents(".AjaxPaginator"),$(this).attr("data-_nPageNumber"));

return false;
});

$(".AjaxPaginatorTooltip a").joUninited()
.click(function () {
var _sListModuleId = $(this).parents(".AjaxPaginatorTooltip").find(":hidden").val();

vTriggerPaginatorMechanism($("#"+_sListModuleId+" .AjaxPaginator"),$(this).html());

return false;
});
});

$("body").on("blur",".AjaxPaginatorTooltip input.CurrentPage", function() {
var _sListModuleId = $(this).parents(".AjaxPaginatorTooltip").find(":hidden").val();

vTriggerPaginatorMechanism($("#"+_sListModuleId+" .AjaxPaginator"),$(this).val());

return false;
});
$(document).on("InitialPageReady PersistentNavReqComplete",function() {
$(".ViewModeSwitcherModule li").joUninited()
.click(function () {
var _sViewMode = $(this).attr("data-value");
var _sTargetModuleId = $(".ViewModeSwitcherModule input").val();

$("#"+_sTargetModuleId).attr("data-_sViewMode",_sViewMode);
});
});