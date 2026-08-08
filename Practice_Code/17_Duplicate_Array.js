const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

for(let i=0;i<arr.length;i++)
{
    let count = 0;
    let check = false;

    for(let k=0;k<i;k++)
    {
        if(arr[k] == arr[i])
        {
            check = true;
            break;
        }
    }
    if(check)
        continue;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[j] == arr[i])
        {
            count++;
        }
    }

    if(count>1)
    {
        console.log(arr[i]);
    }
}