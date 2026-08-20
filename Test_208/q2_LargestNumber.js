// Find the Largest of 3 Numbers.

const data = require('fs').readFileSync(0,'utf8');
let sides = data.trim().split(/\s+/).map(Number);
let a = sides[0];
let b = sides[1];
let c = sides[2];

let largest;

if(a>b && a>c)
{
    largest = a;
}
else if (b>a && b>c)
{
    largest = b;
}
else
{
    largest = c;
}

console.log("Largest number is: ", largest);