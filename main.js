import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    kiosk: true, 
    autoHideMenuBar: true,
  })
  
  
  win.loadFile(path.join(__dirname, 'dist', 'index.html'))
}

app.whenReady().then(createWindow)