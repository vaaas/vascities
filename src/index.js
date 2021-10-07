self.fs = window.require('fs')
self.os = window.require('os')
self.path = window.require('path')
self.electron = window.require('electron')

self.Vue = require('vue')
require('./helpers.js')

window.onload = function() {
    const main = require('./components/Main.vue')
    Vue.createApp(main.default).mount('#app')
}
