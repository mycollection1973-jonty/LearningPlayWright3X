// 22-08-2026

// Question 1

async function sayHello(){
    return "HELLO, QA!!";
}

sayHello().then(function(msg){
    console.log(msg);  // HELLO, QA!!
});

// Question 2

async function getStatus(){
    let status = await Promise.resolve(200);
    console.log("Status Code:",status);
}

getStatus(); // Status Code: 200

// Question 3

// async function testFlow(){
//     let step1 = await Promise.resolve("Opened browser");
//     console.log(step1);

//     let step2 = await Promise.resolve("Clicked Login");
//     console.log(step2);

//     let step3 = await Promise.resolve("Verified browser");
//     console.log(step3);
// }
// testFlow();

// Opened browser
// Clicked Login
// Verified browser

// Question 4

async function riskyTest(){
    try
    {
        let data = await Promise.reject("Element not found");
        console.log(data);
    }
    catch(err)
    {
        console.log("Test failed: ",err);  // Test failed:  Element not found

    }
}
riskyTest();

// Question 5

async function apiTest(){
    try
    {
        let response = await Promise.resolve({status:200, body:"Created"});
        console.log("Status:", response.status);
        console.log("Body:", response.body);
    }
    catch(err)
    {   
        console.log("Error: ",err);
    }
    finally
    {
        console.log("Test completed");
    }
}
apiTest();

// Status: 200
// Body: Created
// Test completed

// Question 6

console.log("A");
async function test(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();
console.log("D");

// A
// B
// D
// C  due to await