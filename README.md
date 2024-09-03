# How to open any URL in borderless Chrome window

> Without going to fullscreen mode

Borderless is a micro electron app designed to be used in terminal.
I wrote it to share browser windows with presentations in Zoom without going to fullscreen.
Once window is opened with Borderless, you can resize it using your mouse.

## MacOS

1. Download repository
2. Run `npm install`
3. Build app with `npm run make`, `/out` folder will be created
4. Copy Borderless.app from `/out/..` to your Applications folder
5. Open terminal and run `open /Applications/Borderless.app --args --url="https://www.example.com/"`