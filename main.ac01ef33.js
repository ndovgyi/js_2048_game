parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e={boardSize:4,blocks:[],score:0};function o(){e.blocks=[],e.score=0,t(),a(),document.querySelector(".message-container").classList.add("hidden")}var r=function(o,r){return e.blocks.find(function(e){return e.x===o&&e.y===r})};function t(){for(var e=0;e<2;e++)n()}function n(){var o=function(o,r){return e.blocks.some(function(e){return e.x===o&&e.y===r})};if(function(){for(var r=0;r<e.boardSize;r++)for(var t=0;t<e.boardSize;t++)if(!o(r,t))return!1;return!0}())f();else{var r,t;do{r=Math.floor(Math.random()*e.boardSize),t=Math.floor(Math.random()*e.boardSize)}while(o(r,t));var n=Math.random()<.9?2:4;document.querySelector('.field-cell[data-x="'.concat(r,'"][data-y="').concat(t,'"]')).textContent=n,e.blocks.push({x:r,y:t,value:n})}}function a(){e.blocks.forEach(function(e){var o=document.querySelector('.field-cell[data-x="'.concat(e.x,'"][data-y="').concat(e.y,'"]'));o&&(o.textContent=e.value)}),document.querySelector(".game-score").textContent=e.score}var c={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};function u(e){"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||(i(e.key.toLowerCase()),e.preventDefault())}function i(o){var r=c[o];e.blocks.sort(function(e,r){return e["up"===o||"down"===o?"y":"x"]-r["up"===o||"down"===o?"y":"x"]});for(var t=0;t<e.blocks.length-1;t++){var n=e.blocks[t],u=e.blocks[t+1];n.x===u.x&&n.y===u.y&&n.value===u.value&&(n.value*=2,e.score+=n.value,e.blocks.splice(t+1,1))}e.blocks.forEach(function(e){if(e&&r){e.x+=r.x,e.y+=r.y;var o=document.querySelector('.field-cell[data-x="'.concat(e.x,'"][data-y="').concat(e.y,'"]'));o&&(o.textContent=e.value)}}),a(),l()||f()}function l(){return["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].some(d)}function d(o){var t=c[o];if(!t)return!1;for(var n=0;n<e.boardSize;n++)for(var a=0;a<e.boardSize;a++){var u=r(n,a);if(u){var i=n+t.x,l=a+t.y;if(i>=0&&i<e.boardSize&&l>=0&&l<e.boardSize){var d=r(i,l);if(!d||d&&d.value===u.value)return!0}}}return!1}function f(){console.log("Game Over!")}function s(e){"keydown"===e.type&&("Enter"===e.key?o():u(e))}document.addEventListener("keydown",s),document.querySelector(".button.start").addEventListener("click",o),t(),a();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ac01ef33.js.map