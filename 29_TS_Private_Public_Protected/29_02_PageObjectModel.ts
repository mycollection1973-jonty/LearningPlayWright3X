// 05-09-2026

class BasePage
{
    protected baseURL : string;

    constructor(url : string)
    {
        this.baseURL = url;
    }

    protected navigate(path: string) : void
    {
        console.log("Navigating to " + this.baseURL + path);
    }
}

class LoginPage extends BasePage
{
    constructor()
    {
        super("https://app.staging.com");
    }

    login(user : string) : void
    {
        this.navigate("/login");
        console.log("Typing " + user + " into #username");
        console.log("Clicking #login-btn");
    }
}

let page = new LoginPage();
page.login("admin");

// Navigating to https://app.staging.com/login
// Typing admin into #username
// Clicking #login-btn
