// 05-09-2026
// it wont be used in automation
abstract class BaseTest 
{
    protected testName : string;
    constructor(testName : string)
    {
        this.testName = testName;
    }

    // incomplete function
    abstract setup() : void;
    abstract execute() : void;
    abstract teardown() : void;
    abstract loan() : void;

    // complete function
    loan1() : void
    {
        console.log("Hi");
    }
}

class UITest extends BaseTest
{
    setup(): void
    {
        console.log("Setup : launch browser");
    }
    execute(): void 
    {
        console.log("Execute : click buttons, fill forms");
    }
    teardown() : void
    {
        console.log(" Teardown : close browser");
    }
    loan() : void
    {
        console.log("GIVE LOAN");
    }
}