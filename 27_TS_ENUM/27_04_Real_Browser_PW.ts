// 05-09-2026

enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "Edge"
}

function launchBrowser(browser : Browser) : void {
    switch(browser)
    {
        case Browser.Chrome:
            console.log("Lauching Chromium (Chrome v120)");
            break;
        case Browser.Firefox:
            console.log("Launching Gecko (Firefox v115)");    
            break;
        case Browser.Safari:
            console.log("Launching Webkit (Safari v17)");
            break;
        case Browser.Edge:
            console.log("Launching Chromium (Edge v120)");
            break;    
    }
}
launchBrowser(Browser.Chrome);