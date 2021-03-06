# vue-scroll-animate

> Use requestAnimationFrame as animate. A scroll for Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 使用说明

**安装**

>npm install vue-scroll-animate

**开始**

```
// main.js
import Vue from 'vue'
import vueScroll from 'vue-scroll-animate.js'

Vue.use(vueScroll)
```
在组件中通过调用 **this.$scroll(num, type, tagName, speed)** 传入相应的值即可
- this.$scroll(num, type, tagName, speed）
- num 滚动条位置(将要滚动到的)
- type scrollTop/scrollLeft
- tagName DOM对象，可为id、class、body
- speed 步阶默认为2，可传入步阶控制速度

具体请参考Demo

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
