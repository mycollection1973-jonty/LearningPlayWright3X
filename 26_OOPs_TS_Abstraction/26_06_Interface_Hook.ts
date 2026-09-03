// 03-09-2026
// this will be rarely used
interface TestHook
{
    (testName : string) : void; // this is a anonymous function
}

let beforeEachHook : TestHook = function (testName : string) : void {
    console.log("[BEFORE] Setting Up: " +testName);
}

let afterEachHook : TestHook = function (testName : string) : void {
    console.log("[AFTER] Tearing down: "+ testName);
}

beforeEachHook("Login Test")