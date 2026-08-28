// 27-08-2026

class TestCase{
    constructor(name, status, priority)
    {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display()
    {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signupTest_ref = new TestCase("Sign Up","FAIL","P1");

loginTest_ref.display();  // Login Test -> PASS -> P0
signupTest_ref.display();  // Sign Up -> FAIL -> P1