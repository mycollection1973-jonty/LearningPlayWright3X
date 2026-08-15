// 13-08-2026

//Question 1
Promise.resolve("Quick win")
    .then(function(msg){
        console.log(msg);  // Quick win
    })

Promise.reject("Quick loss")
    .catch(function(msg){
        console.log(msg);
    })    


// Question 2
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Search: PASS");

Promise.all([t1, t2, t3]).then(function(results){
    console.log(results);  // [ 'Login: PASS', 'Search: PASS', 'Search: PASS' ]
})

// Question 3
let a1 = Promise.resolve("PASS");
let a2 = Promise.reject("FAIL");
let a3 = Promise.resolve("PASS");

Promise.all([a1, a2, a3])
    .then(function(r){
        console.log("All:",r);  
    }).catch(function(err){
        console.log("Stopped: ",err) // Stopped:  FAIL
    })


// Question 4
Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results){
    results.forEach(function(r){
        let val = r.status === "fulfilled" ? r.value : r.reason
        console.log(r.status +" -> "+ val)
    })
})

// fulfilled -> API 200
// rejected -> API 500
// fulfilled -> API 201
