// Reverse a String.

const data = require('fs').readFileSync(0, 'utf8').trim();
const str = data.split('\n')[0];

let rev = "";

for(let i=str.length-1;i>=0;i--)
{
    rev += str.charAt(i);
    // rev += str[i];
}
console.log(rev);
