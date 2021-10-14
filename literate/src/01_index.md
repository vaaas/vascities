# Vue

`src/index.js` is the entry point for the preload file. It's where webpack is directed towards to start its build.

In the preload script, nodejs APIs are available even in a browser context. Because webpack highjacks the `require` function, we can get around it by importing nodejs packages with `window.require`.

We load the root Vue module and also helper functions. Then we mount Vue on the body element.

```javascript src/index.js
self.fs = window.require('fs')
self.os = window.require('os')
self.path = window.require('path')

self.Vue = require('vue')
require('./helpers.js')

window.onload = function() {
    const main = require('./components/Main.vue')
    Vue.createApp(main.default).mount('#app')
}
```
