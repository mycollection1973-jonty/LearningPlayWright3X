// Print the Fibonacci Series up to N terms.

const data = require('fs').readFileSync(0,'utf8');

let first = 0;
let second = 1;
let sum;

for(let i=1;i<=data;i++)
{
    console.log(first);
    sum = first + second;
    first = second;
    second = sum;
}
