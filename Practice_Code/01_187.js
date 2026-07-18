// let a = 100;
// console.log(a++ + ++a + a++ + ++a); // O/P -> 408
// console.log(a); // O/P -> 104

//A/a = a++ -> 100/101
//B/a = ++a -> 102/102
//C/a = a++ -> 102/103
//D/a = ++a -> 104/104

// let a = 37;
// console.log(--a + a--); // O/P -> 72
// console.log(a);   // O/P -> 35   

//A/a = --a -> 36/36
//B/a = a-- -> 36/35

// let a = 5;
// let b = a-- - --a;
console.log(b,a); // O/P -> (2,3)

//A/a = a-- -> 5/4
//B/a = --a -> 3/3

let i =1;
let r =i++ > 1? i++ : ++i;
console.log(r,i); // O/P -> 3,3

// A/a = 1/2
// B/a = 3/3