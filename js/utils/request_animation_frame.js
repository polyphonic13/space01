// var RequestAnimationFrame;
// (function () {
//     RequestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//     window.requestAnimationFrame = requestAnimationFrame;
// })();

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame || 
          window.oRequestAnimationFrame || 
          window.msRequestAnimationFrame || 
          function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();