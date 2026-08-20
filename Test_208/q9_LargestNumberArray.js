// Find the Largest Number in an Array.

const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let max = 0;

for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>max)
    {
        max = arr[i];
    }
}
console.log("Maximum number is ",max)