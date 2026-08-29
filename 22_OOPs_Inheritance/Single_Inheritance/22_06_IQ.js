// 29-08-2026

class BasePage{
    verify()
    {
        console.log("Verifying the page");
    }
}

class LoginPage extends BasePage{
    verify()
    {
        console.log("Verify : username field exsists");
        console.log("Verify : password field exsists");
        console.log("Verify : login button is visible");
    }
}

class DashboardPage extends BasePage{
    verify()
    {
        console.log("Verify : welcome page shown");
        console.log("Verify : sidebar menu loaded");
    }
}

class CartPage extends BasePage{
    verify()
    {
        console.log("Verify : cart items displayed");
        console.log("Verify : total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];
pages.forEach(function(page){
    page.verify();
    console.log("----------------")
})

// Verify : username field exsists
// Verify : password field exsists
// Verify : login button is visible
// ----------------
// Verify : welcome page shown
// Verify : sidebar menu loaded
// ----------------
// Verify : cart items displayed
// Verify : total price is correct
// ----------------