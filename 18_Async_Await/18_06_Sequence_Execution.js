// 22-08-2026

// When Step 2 depends on Step 1's result,
// you MUST run them sequentially.

function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name+": 200 OK");
        }, 1000);
    });
}

async function sequentialTest(){
    console.log("Starting of the test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~"+ (Date.now() - start)+ "ms");
}

sequentialTest();

// Starting of the test
// Login: 200 OK
// Dashboard: 200 OK
// Report: 200 OK
// Time: ~3022ms
