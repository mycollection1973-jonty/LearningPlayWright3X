// 13-08-2026

function openBrowser(){
    return new Promise(function(resolve){
        //time 10,15
        resolve("Browser has been opened!");
    });
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login page loaded");
    });
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered");
    });
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function(msg){
        console.log("Step 1",msg);
    }).then(function(msg){
        console.log("Step 2",msg);
    }).then(function(msg){
        console.log("Step 3",msg);
    }).then(function(msg){
        console.log("Step 4",msg);
    }).catch(function(error){
        console.log("Error :", error);
    }).finally(function(){
        console.log("Done execution");
    })