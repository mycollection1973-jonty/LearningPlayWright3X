// 27-08-2026
let a =10;
class TestRunner{
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed)
    {
        this.name = name;
        TestRunner.totalTests++;
        if(passed)
        {
            TestRunner.passCount++;
        }   
    }

    non_static_display()
    {
        return this.name;
    }

    static summary()
    {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}

new TestRunner("Login", true);
new TestRunner("SignUp", false);
new TestRunner("Cart", true);
new TestRunner("Checkout",true);
console.log(TestRunner.summary());  // 3/4 passed