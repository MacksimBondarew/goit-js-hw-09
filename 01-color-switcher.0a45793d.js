!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body"),o=null;t.addEventListener("click",(function(l){t.disabled=!l.target.value,e.disabled=l.target.value,console.log("start"),o=setInterval((function(){a.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)})),e.addEventListener("click",(function(a){clearInterval(o),console.log("stop"),t.disabled=a.target.value,e.disabled=!a.target.value}))}();
//# sourceMappingURL=01-color-switcher.0a45793d.js.map