//25-07-2026

//Array literal (preferred)

let browsers = ["chrome","safari","firefox"];

//Array constructor
let scores = new Array(3); // creates [empty x 3] 
console.log(scores);  // [ <3 empty items> ]

let scores2 = new Array(1,2,3); // creates [1,2,3]
console.log(scores2);  // [ 1, 2, 3 ]

let numbers = new Array(100,200,300,400);

let test = Array.of(10,20,30,40,50);
console.log(test.length);  // 5

//Array.form()
let chars = Array.from("hello");
console.log(chars);  // ["h", "e", "l", "l", "o"]