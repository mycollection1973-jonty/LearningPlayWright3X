// 03-09-2026

interface TestConfig
{
    browser : string;
    headless : boolean;
    baseURL : string;
    timeout? : number;
    retries? : number;
}

let localConfig : TestConfig = {
    browser : "Chrome",
    headless : true,
    baseURL : "https://staging.app.com"
}

let ciConfig : TestConfig = {
    browser : "Firefox",
    headless : false,
    baseURL : "https://localhost:3000",
    timeout : 10000,
    retries : 3
}

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout); // CI: Firefox | timeout: 10000
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout); // Local: Chrome | timeout: undefined