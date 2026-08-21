// Remove Duplicate Values from an Array.

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);

let result = [];

for(let i=0;i<arr.length;i++)
{
    let duplicate = false;

    for(let j=0;j<result.length;j++)
    {
        if(arr[i] === result[j])
        {
            duplicate = true;
            break;
        }
    }
    if(duplicate === false)
    {
        result.push(arr[i]);
    }
}

console.log(result);