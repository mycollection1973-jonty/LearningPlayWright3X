// 01-09-2026

class BaseTest{
    setup()
    {
        console.log("Base : Open Browser");
    }
}

class APIPage extends BaseTest{
    setup()
    {
        console.log("APIPage : Open Browser");
    }
}

let btest = new BaseTest();
let test = new APIPage();
test.setup();  // APIPage : Open Browser
btest.setup(); // Base : Open Browser

// TS = JS + Rules