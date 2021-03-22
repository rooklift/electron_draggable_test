"use strict";

const electron = require("electron");
const path = require("path");

let win;

if (electron.app.isReady()) {
	startup();
} else {
	electron.app.once("ready", () => {
		startup();
	});
}

function startup() {

	win = new electron.BrowserWindow({
		show: false,
	});

	win.once("ready-to-show", () => {
		win.show();
		win.focus();
	});

	electron.app.on("window-all-closed", () => {
		electron.app.quit();
	});

	win.loadFile(path.join(__dirname, "test.html"));
}
