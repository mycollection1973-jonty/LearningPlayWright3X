// Count the Vowels in a given string.

const data = require('fs').readFileSync(0, 'utf8').trim();
const str = data.split('\n')[0].toLowerCase();

let vowel = 0;
let vowels = "aeiou";

for(let i=0; i<=str.length-1;i++)
{
    if(vowels.includes(str[i].toLowerCase()))
    {
        vowel++;
    }
}

console.log("Vowel count of ",str," : ",vowel);

