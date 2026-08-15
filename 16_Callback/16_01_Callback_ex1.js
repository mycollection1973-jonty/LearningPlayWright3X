// 13-08-2026

function placeOrder(item, callback)
{
    console.log("Order Placed....");
    callback();
}

function print()
{
    console.log("Normal Function - Done with order");
}

// First way
placeOrder("Burger",print);

// Second way Anonymous
placeOrder("Burger", function()
{
    console.log("Order is ready!, Please pick it up!");
})

// Third way Arrow function  -- Playwright will use this function
placeOrder("Burger", () => {
    console.log("Arrow Fucntion, I am also a function without name");
})


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// PW Fucntion
test('has little', async({page}) =>{

});