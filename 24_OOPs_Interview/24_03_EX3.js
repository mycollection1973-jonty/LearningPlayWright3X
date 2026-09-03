// 01-09-2026

class User{
    constructor(name)
    {
        this.name = name;
    }

    greet()
    {
        console.log("Hi, I am " + this.name);
    }
}

let u1 = new User("Bob");
let u2 = new User("David");

u1.greet();  // Hi, I am Bob
u2.greet();  // Hi, I am David