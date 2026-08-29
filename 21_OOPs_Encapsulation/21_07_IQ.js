// 29-08-2026

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

let u1 = new User("Jack");
let u2 = new User("Pope");

u1.greet();  // Hi, I am Jack
u2.greet();  // Hi, I am Pope