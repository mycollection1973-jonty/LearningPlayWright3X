//23-07-2026

// var sum = 0;
// for (var i = 1; i <= 5; i++);  // beacuse of ; inside loop will be empty
//   sum += i;
// console.log(sum);   // OP -> 6

// let i = 0;
// while (i < NaN) {  // any comparison with NaN will always false
//   i++;
// }
// console.log(i); // OP -> 0

let i = 3, count = 0;
do {
  count++;
} while (i-- > 0);
console.log(count + " " + i);  // 4 -1



