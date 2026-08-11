// 11-08-2026

let scores = [
    [85, 90, 78],  // sum : 253
    [60, 45, 70],  // sum : 175
    [95, 88, 92]   // sum : 275
];

let rowSums = scores.map(row => row.reduce((a,b) => a+b));
console.log(rowSums);  // [ 253, 175, 275 ]


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for(let i=0; i<suiteResults.length;i++)
{
    for(let j=0; j<suiteResults[i].length;j++)
    {
        if(suiteResults[i][j].includes("fail"))
        {
            console.log(suiteResults[i][j]); // filter-fail checkout-fail payment-fail
        }
    }
}