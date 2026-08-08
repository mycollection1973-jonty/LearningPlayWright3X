// 08-08-2026

const user = {
    name : "peter",
    age : 32,
    email : "peter@gmail.com"
};

console.log(user);  // { name: 'peter', age: 32, email: 'peter@gmail.com' }

// Accessing properties
console.log(user.name);  // peter
console.log(user["age"]);  //32

// Adding/modifying properties
user.city = "NYC";
user.age = 26;

console.log(user);  // { name: 'peter', age: 26, email: 'peter@gmail.com', city: 'NYC' }