// 27-08-2026

class Browser{
    constructor(name)
    {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser()
    {
        console.log("Starting the browser");
    }

    closeBrowser()
    {
        console.log("Closing the browser");
    }
}

let chrome = new Browser("Chrome");
let safari = new Browser("Safari");
console.log(chrome.isOpen);