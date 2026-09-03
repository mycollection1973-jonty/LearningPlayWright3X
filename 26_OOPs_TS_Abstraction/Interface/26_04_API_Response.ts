// 03-09-2026

// Interface are used in API testing

interface APIResponse
{
    statuscode : number;
    body : string;
    headers? : object;   // ? means it is optional
    responseTime : number;
}

let responseData : APIResponse = {
    statuscode : 200,
    body : "{}",
    headers : {},
    responseTime : 200
}

console.log("Status: ", responseData.statuscode);  // Status:  200
console.log("Body: ", responseData.body);  // Body:  {}
//console.log("Headers: ", responseData.headers); // Headers: {}

let responseData2 : APIResponse = {
    statuscode : 200,
    body : "{}",
    headers : {},
    responseTime : 200
}