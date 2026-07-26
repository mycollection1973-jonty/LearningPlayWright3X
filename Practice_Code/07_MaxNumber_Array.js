// const data = require('fs').readFileSync(0, 'utf8');
// const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
// const n = tokens[0];
// const arr = tokens.slice(1, 1 + n);

// let max = 0;
// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] > max)
//     { 
//         max = arr[i];
//     }
// }

//  console.log(max)

let arr = [10,20,50,30,45];
let max = 0;
for (let i=0; i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max = arr[i];
    }
}
console.log(max);