const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar:true,
    width: 1000,
    icon: __dirname + '/icon.png',
    height: 600,
  })

  
  win.loadURL('https://vishnusanthosh.info/')
}

app.whenReady().then(() => {
  createWindow()
})