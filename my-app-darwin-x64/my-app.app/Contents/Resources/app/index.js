// console.log('hello')

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', e => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL("file://"+__dirname+"/index.html");
});

app.on("window-all-closed", e => {
    app.quit();
});
