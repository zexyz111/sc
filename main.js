const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "LANE CLOUD",
        backgroundColor: '#050508',
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false // ЭТО ОТКЛЮЧАЕТ БЛОКИРОВКУ SOUNDCLOUD
        }
    });

    win.loadFile('index.html');
    // win.setMenu(null); // Убрать верхнее меню для чистого вида
}

app.whenReady().then(createWindow);
