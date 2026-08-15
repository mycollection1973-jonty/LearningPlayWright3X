// 13-08-2026

let apiCall = new Promise(function(resolve, reject){
    resolve({status : 200});
    //reject(error);
});

apiCall.then(function(data){
    console.log(data);   // { status: 200 }
}).catch(function(error){
    console.log(error);
}).finally(function(){
    // Always Executed
    console.log("I will be executed anyhow!!!");  // I will be executed anyhow!!!

})