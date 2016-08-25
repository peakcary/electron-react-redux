// console.log('hello')

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const ipcMain = electron.ipcMain;


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

ipcMain.on("click-my-button",(sender,e)=>{
  console.log(sender,e);
});
