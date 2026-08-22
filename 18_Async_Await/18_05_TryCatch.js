// 22-08-2026

// Error Handling — try/catch
// With Promises you use .catch().
// With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI(){
    try
    {
        let result = await Promise.reject("503 Service Unavailable");
        console.log(result);
    }
    catch(error)
    {
        console.log("Error :",error);  // Error : 503 Service Unavailable
    }
    finally
    {
        console.log("Clean Up!!");
    }

}

testAPI();

function step1()
{
    console.log("1");
}

function step2()
{
    console.log("2");
}

step1();
step2();

// step1 & Step2 will execute first then only async function will run