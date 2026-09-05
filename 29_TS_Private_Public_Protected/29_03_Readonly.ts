// 05-09-2026

class PlayWrightConfig
{
    private readonly baseURL : string;
    private readonly timeout : number;
    private readonly retries : number;

    constructor(baseURL : string, timeout : number, retries : number)
    {
        this.baseURL = baseURL;
        this.timeout = timeout;
        this.retries = retries;
    }

    showConfig() : void
    {
        console.log("URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout + " ms");
        console.log("Retries: " + this.retries);
    }
}

let config = new PlayWrightConfig("https://staging.app.com", 3000, 2);
config.showConfig();

//config.baseURL = "https://other.com";

// URL: https://staging.app.com
// Timeout: 3000 ms
// Retries: 2