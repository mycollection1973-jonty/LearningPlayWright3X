let browser = "Edge";  // Chromium Project

switch(browser)
{
    case "Chrome" : 
    case "Edge" : 
    case "Brave" :
    case "Opera" :
        console.log("Chromium Project!");
        break;
    case "Firefox" : 
        console.log("Mozilla Project !");
        break;
    case "Safari" : 
        console.log("Apple browser - uses JavascriptCore engine");
        break;
    default : 
        console.log("Unknown browser - Manual Testing needed");
}