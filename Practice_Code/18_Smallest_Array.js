const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);

let small = arr[0];

for(let i=1;i<arr.length;i++)
{
    if(arr[i] < small)
    {
        small = arr[i];
    }
}
console.log(small);