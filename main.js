const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const createWindow = () => {
    const window = new BrowserWindow({
        minWidth: 730
    })

    window.loadURL(
        url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    )
    window.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindow()
})
