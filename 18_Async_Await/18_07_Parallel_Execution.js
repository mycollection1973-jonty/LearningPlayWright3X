// 22-08-2026

// Step 1 & Step 2 doesn't depend upon each other

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name + ": 200 OK");
        });
    });
}

async function parallelTest(){
    console.log("Starting of the Test");
    let start = Date.now();

    let [r1,r2,r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start)+ "ms");
}

parallelTest();

// Starting of the Test
// Auth Service: 200 OK
// User Service: 200 OK
// Payment Service: 200 OK
// Time: ~4ms
