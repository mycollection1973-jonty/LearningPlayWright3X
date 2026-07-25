//25-07-2026

let arr = [1,2,3];
console.log(arr);  //[ 1, 2, 3 ]

//Add to END
arr.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]

//Remove from END
arr.pop();
console.log(arr); // [ 1, 2, 3 ]

arr.push(5,6);
console.log(arr); // [ 1, 2, 3, 5, 6 ]

//Add to BEGINNING
arr.unshift(0);
console.log(arr); // [ 0, 1, 2, 3, 5, 6 ]

//Remove from BEGINNING
arr.shift();
console.log(arr);  // [ 1, 2, 3, 5, 6 ]

arr.splice(2,1);  // 2,1 - 2 is index & 1 is no of elements to be remove
console.log(arr); // [ 1, 2, 5, 6 ]

arr.splice(2,0,99) ; //2,0,99 - index:2, 0: no number remove, add 99 before on index 2
console.log(arr);  // [ 1, 2, 99, 5, 6 ]

arr.splice(1,2,10,20);
console.log(arr);  // [ 1, 10, 20, 5, 6 ]

arr.splice(-1,1,1);
console.log(arr);  // [ 1, 10, 20, 5, 1 ]
