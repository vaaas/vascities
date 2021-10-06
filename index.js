const electron = require('electron')
const path = require('path')

function main() {
    const win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'dist', 'main.js'),
            nodeIntegration: true,
        },
    })
    // win.removeMenu()
    win.loadFile('index.html')
}

electron.app.whenReady().then(main)
