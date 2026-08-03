// /Write a program to count the number of vowels and consonants in a given string.

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();

let vowel = 0;
let consonants = 0;
let vowels = "aeiou";

for(let i=0;i<=str.length-1;i++)
{
    if(str[i] >="a" && str[i]<="z")
    {
        if(vowels.includes(str[i]))
        {
            vowel++;
        }
        else
            consonants++;
    }
}
console.log(`Vowels: ${vowel} Consonants: ${consonants}`);