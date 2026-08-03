//Find and print the frequency of each element in an array.

const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

for(let i=0; i<arr.length;i++)
{
    let count = 0;
    let checked = false;

    for(let k=0;k<i;k++)
    {
        if(arr[k]==arr[i])
            {
                checked=true;
                break;
            }         // 3  2 1 3 1
    }
    if(checked)  
        continue;

    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]==arr[i])
        {
            count++;
        }
    }
    console.log(arr[i],"appears",count,"times");
}