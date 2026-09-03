// 03-09-2026

interface BasePage
{
    url : string;
    title : string;
}

interface LoginPage extends BasePage
{
    usernameSelector : string;
    passwordSelector : string;
    loginButtonSelector : string;
}

interface FreeTrialPage extends BasePage
{
    usernameSelector : string;
    submitButtonSelector : string;
}

let loginpage : LoginPage ={
    url : "/login",
    title : "Login Page",
    usernameSelector : "#username",
    passwordSelector : "#password",
    loginButtonSelector : "#login-btn"
}

let freetrialPage : FreeTrialPage = {
    url : "/free-trial",
    title : "Free Page",
    usernameSelector : "#username",
    submitButtonSelector : "#submit"
}

console.log("URL:", loginpage.url);  // URL: /login
console.log("Title:", loginpage.title); // Title: Login Page
console.log("Username field:", loginpage.usernameSelector);  // Username field: #username