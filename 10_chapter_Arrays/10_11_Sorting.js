// 28-07-2026

//SORT

let fruits = ["banana", "cherry","apple"];
fruits.sort();
console.log(fruits);

let score = [4,3,2];
console.log(score.sort());

let nums = [10,1,21,2];
//nums.sort();
console.log(nums);  //  [ 1, 10, 2, 21 ]
// Natural Sorting - Lexicographic / string sort 


// Proper Sorting, Asc , Desc
// nums.sort((a,b) => a-b);
//console.log(nums); // [ 1, 2, 10, 21 ]

nums.sort((a,b) => b-a);
console.log(nums); // [ 21, 10, 2, 1 ]
nums.reverse();
console.log(nums); // [ 1, 2, 10, 21 ]