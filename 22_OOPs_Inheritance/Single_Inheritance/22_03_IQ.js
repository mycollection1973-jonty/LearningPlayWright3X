// 29-08-2026

class BaseTest{
    
    setup()
    {
        console.log("Base : Open browser");
    }
}

class APITest extends BaseTest{
    
    setup()  // if this function is not there basetest function will be called
    {
        console.log("APITest : Open browser"); 
    }
}

let test = new APITest();
test.setup();  // APITest : Open browser