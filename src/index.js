self.fs = require('fs')
self.vue = require('@vue/runtime-core')
import Main from './components/Main.vue'

self.Vue = Vue

window.onload = main

function main() {
    Vue.createApp(Main).mount('body')
}
