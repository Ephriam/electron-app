const {app, BrowserWindow} = require('electron')

let createWindow = () => {
    //Create the browser window
    win = new BrowserWindow({width: 800, height: 600})
    
    // and load the index.html of the appk
    win.loadFile('index.html')
}

app.on('ready', createWindow)