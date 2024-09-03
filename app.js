const electron = require('electron')
const { app, BrowserWindow } = require('electron/main');

app.whenReady().then(() => {
  const defaultUrl = "https://www.example.com/",
        url = app.commandLine.getSwitchValue("url") || defaultUrl;
  if (url === defaultUrl) console.log(`Use --url="${defaultUrl}" argument to specify your URL`);

  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    titleBarStyle: 'customButtonsOnHover',
    roundedCorners: false,
    thickFrame: false,
  }).loadURL(url);
});