(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,o,e){},QfWi:function(t,o,e){"use strict";e.r(o);e("L1EO");var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={butStart:document.querySelector('button[data-action="start"]'),butStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")};function r(t){var o,e,n=t[(o=0,e=t.length-1,Math.floor(Math.random()*(e-o+1)+o))];a.body.style.backgroundColor=n,console.log(n)}var c=null;refs.butStart.addEventListener("click",(function(){c=setInterval(r,1e3,n),a.butStart.disabled=!0})),refs.butStop.addEventListener("click",(function(){a.butStart.disabled=!1,clearInterval(c)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.7cead24ab8460d2e5199.js.map