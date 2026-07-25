//25-07-2026

let nums = [10,25,30,45];
let result = nums.find(temp => temp>20);  // only give first element as OP only
console.log(result);

// findIndex
let index = nums.findIndex(n => n>30);
console.log(index);

nums.findLast(n => n>20); //45
nums.findLastIndex(n => n>20); //3