// 13-08-2026

let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All checks : ", results);  //All checks :  [ 'Auth OK', 'DB OK', 'Cache OK' ]
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),  // for this will get error message
    Promise.resolve("OK")
])
    .then(function(r){
        console.log(r);
    }).catch(function(err){
        console.log("Failed : ",err);  // Failed :  DB DOWN
    })