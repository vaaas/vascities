const fs = require('fs')
import Vue from './libs/Vue.js'
import Main from './libs/Main.js'

window.onload = main

function main() {
    Vue.createApp(Main).mount('body')
}
