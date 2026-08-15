// 13-08-2026

// Question 1
let p = new Promise(function(resolve, reject){
    resolve(42);
})
p.then(function(value){
    console.log("Answer : ", value);  // Answer :  42
})

// Question 2
let q = new Promise(function(resolve,reject){
    reject("Something wrong");
});
q.catch(function(err){
    console.log("Caught:",err);  // Caught: Something wrong
});

// Question 3
// let r = Promise.resolve(5);

// r.then(function(val){
//     return val*10;
// }).then(function (val){
//     console.log("Result:", val); // Result: 50
// });

// Question 4
// Promise.resolve(1)
//     .then(function(data){
//         console.log(data);  // 1
//         return data+1;
//     })
//     .then(function(data){
//         console.log(data); // 2
//         return data+1;
//     })
//     .then(function(data){
//         console.log(data); // 3
//     })

// Question 5
Promise.resolve("start")
    .then(function(cet){
        console.log(cet);  // start
        throw new Error("Broke at Step 2");
    })
    .then(function(){
        console.log("This will NOT run");
    })
    .catch(function(error){
        console.log("Caught:",error.message); // Caught: Broke at Step 2
    })

// Question 6
Promise.reject("Test Failed")
    .then(function(data){
        console.log("Data:",data);
    })
    .catch(function(err){
        console.log("Error:",err);  // Error: Test Failed
    })
    .finally(function(){
        console.log("Clenup Done"); // Clenup Done
    })