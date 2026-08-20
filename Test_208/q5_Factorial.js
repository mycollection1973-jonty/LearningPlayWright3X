// Find the Factorial of a Number.

const data = require('fs').readFileSync(0,'utf8');

let fact = 1;

for(let i=1;i<=data;i++)
{
    fact = fact*i;
}

console.log(fact);