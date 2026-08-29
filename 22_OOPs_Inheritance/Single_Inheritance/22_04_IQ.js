// 29-08-2026

class BaseTest{

    constructor()
    {
        console.log("Parent");
    }

    setup()
    {
        console.log("Base : Open browser");
    }

    teardown()
    {
        console.log("Base : Close browser");
    }
}

class UITest extends BaseTest{

    constructor()
    {
        super();
    }

    setup()
    {
        super.setup() // UITest will help you call your parent function. super() - Constructor, super.fname() - functions name
        console.log("UI : maximize window");
    }

    teardown()
    {
        console.log("UI : take screenshot");
        super.teardown();
    }
}

let test = new UITest();
test.setup();
test.teardown();

// Parent
// Base : Open browser
// UI : maximize window
// UI : take screenshot
// Base : Close browser