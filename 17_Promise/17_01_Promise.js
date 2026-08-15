// 13-08-2026

let order = new Promise(function(resolve, reject){

    let foodready = true;
    if(foodready)
    {
        resolve("Pizza is delivered");  
    }
    else
    {
        reject("Order Cancelled");
    }
});

console.log(order);  // Promise { 'Pizza is delivered' }