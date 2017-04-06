/**
 * 功能:
 *
 * @author: wuyaoxing(82565097@qq.com)
 * @create: 2017-04-01 10:37:31
 * @version: 2017 version 1.0
 * @company: 创海科技 Created with IntelliJ IDEA
 */

(function(){
  let Vue
  let isVueLoaded = true

  if (typeof require === 'undefined') {
    Vue = Window.Vue
  } else {
    Vue = require('vue')
  }

  if (!Vue) {
    isVueLoaded = false
    console.warn('Vue is not loaded yet. Please make sure it is loaded before installing vue-scroll-animate.')
  }

  let Scroll = {}
  Scroll.install = function (Vue, options) {

    // requestAnimationFrame
    (function() {
      let lastTime = 0
      const vendors = ['webkit', 'moz']
      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
          window[vendors[x] + 'CancelRequestAnimationFrame']
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          const currTime = new Date().getTime()
          let timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
          let id = window.setTimeout(function () {
            callback(currTime + timeToCall)
          }, timeToCall)
          lastTime = currTime + timeToCall
          return id
        }
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id)
        }
      }
    }())

    // (function() {
    //   var lastTime = 0;
    //   var vendors = ['webkit', 'moz'];
    //   for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    //     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    //     window.cancelAnimationFrame =
    //       window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    //   }
    //
    //   if (!window.requestAnimationFrame)
    //     window.requestAnimationFrame = function(callback, element) {
    //       var currTime = new Date().getTime();
    //       var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    //       var id = window.setTimeout(function() { callback(currTime + timeToCall); },
    //         timeToCall);
    //       lastTime = currTime + timeToCall;
    //       return id;
    //     };
    //
    //   if (!window.cancelAnimationFrame)
    //     window.cancelAnimationFrame = function(id) {
    //       clearTimeout(id);
    //     };
    // }());

    // requestAnimFrame
    // window.requestAnimFrame = (function(){
    //   return  window.requestAnimationFrame       ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame    ||
    //     window.oRequestAnimationFrame      ||
    //     window.msRequestAnimationFrame     ||
    //     function(/* function */ callback, /* DOMElement */ element){
    //       window.setTimeout(callback, 1000 / 60);
    //     }
    // })()

    Vue.prototype.$scroll = (num, type, tagName, speed) => {
      const getTag = document.getElementById(tagName) || document.getElementsByClassName(tagName)[0] || document.body
      const nowScrollTop = getTag.scrollTop
      const nowScrollLeft = getTag.scrollLeft
      const GET_SPEED = speed || 20
      let flag = "run"
      //处理负数时内存泄漏
      // num < 0 ? num = 0 : num
      // num > nowScrollTop ? num = nowScrollTop : num
      // num > nowScrollLeft ? num = nowScrollLeft : num
      function funScroll() {
        let top = getTag.scrollTop
        let left = getTag.scrollLeft
        if (flag === 'run') {
          if (type === "top") {
            if (nowScrollTop > num){
              top -= GET_SPEED
              if (top <= num) {
                top = num
                flag = 'stop'
              }
            } else if(nowScrollTop < num){
              top += GET_SPEED
              if (top >= num) {
                top = num
                flag = 'stop'
              }
            } else {
              return
            }
          } else if (type === "left") {
            if (nowScrollLeft > num) {
              left -= GET_SPEED
              if (left <= num) {
                left = num
                flag = 'stop'
              }
            } else if (nowScrollLeft < num) {
              left += GET_SPEED
              if (left >= num) {
                left = num
                flag = 'stop'
              }
            } else {
              return
            }
          } else {
            return
          }
        } else {
          return
        }
        getTag.scrollTop = top
        getTag.scrollLeft = left
        requestAnimationFrame(funScroll)
      }
      if (flag === 'run') {
        funScroll()
      }
    }
  }
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Scroll
  } else {
    window.vScroll = Scroll
  }
})()
