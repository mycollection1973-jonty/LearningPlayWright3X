//Reverse Array Elements

const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let rev = "";
for(let i=arr.length-1;i>=0;i--)
{
    rev += arr[i]+" ";
}
console.log(rev);