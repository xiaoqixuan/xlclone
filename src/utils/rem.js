/**
 * Created by dongping on 2017/3/7.
 */
(function(g,i){var c=i.documentElement;var e=g.navigator.appVersion;var a=e.match(/android/gi);var f=e.match(/iphone/gi);var j=g.devicePixelRatio;var h=1,d=1;if(f){if(j>=3){h=3}else{if(j>=2){h=2}else{h=1}}}else{h=1}d=1/h;var k=i.querySelector('meta[name="viewport"]');if(!k){k=i.createElement("meta");k.setAttribute("name","viewport");if(c.firstElementChild){c.firstElementChild.appendChild(k)}else{var b=i.createElement("div");b.appendChild(k);i.write(b.innerHTML)}}if(h!=1){k.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no")}window.DPR=h})(window,document);(function(d,c){var e=d.documentElement,a="orientationchange" in window?"orientationchange":"resize",b=function(){var f=e.clientWidth>=window.DPR*540?window.DPR*540:e.clientWidth;if(!f){return}e.style.fontSize=10*(f/375)+"px";e.style.maxWidth=f+"px"};b();if(!d.addEventListener){return}c.addEventListener(a,b,false)})(document,window);