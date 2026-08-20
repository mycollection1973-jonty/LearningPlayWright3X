// Check whether a string is a Palindrome.

const data = require('fs').readFileSync(0, 'utf8').trim();
const str = data.split('\n')[0].toLowerCase();

let org = str;
let rev = "";

for(let i=str.length-1;i>=0;i--)
{
    rev += str.charAt(i);
}

if(org == rev)
{
    console.log(rev,": This is pallindrome");
}

else
{
    console.log(rev,": This is not Pallindrome");
}