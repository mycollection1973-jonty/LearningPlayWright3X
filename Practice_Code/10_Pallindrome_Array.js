// Pallindrome

const data = require('fs').readFileSync(0, 'utf8').trim();
const str = data.split('\n')[0].toLowerCase();

let org = str;
let rev ="";

for(let i=str.length-1;i>=0;i--)
{
    rev += str[i];
}
if(org === rev)
{
    console.log("Pallindrome");
}
else
{
    console.log("No Pallindrome");
}