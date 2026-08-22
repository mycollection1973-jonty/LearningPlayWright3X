// 22-08-2026

// Async & Await
// Async Fn ->  An async function always returns a promise.
// Await Fn(call) -> await reads the resolved value inside another async function.

async function getTestResults(){
    return "Pass";
}

getTestResults().then(function(results){
    console.log(results);
})


async function runTest(){

    let result = await Promise.resolve("Login Test passed");
    console.log(result);

    let result2 = await Promise.resolve("Dashboard Test passed");
    console.log(result2);
}

runTest();


// Pass
// Login Test passed
// Dashboard Test passed