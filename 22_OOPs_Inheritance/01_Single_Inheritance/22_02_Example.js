// 29-08-2026

class Animal{

    constructor(name)
    {
        this.name = name;
    }

    eat()
    {
        console.log(this.name + " is eating");
    }

    sleep()
    {
        console.log(this.name + " is sleeping");
    }

     foo()
    {
        console.log("FOO called");
    }
}

class Dog extends Animal{

    constructor(name, breed)
    {
        super(name) // It is used to call parent constructor
        this.breed = breed;
    }

    bark()
    {
        super.foo();  // Used to call parent method
        //console.log(super.name)  // vairable can't be called via super
        console.log(this.name + " is barking");
    }  
}

let dog = new Dog("Tuffy", "Labrador");
dog.eat();  // Tuffy is eating
dog.sleep(); // Tuffy is sleeping
dog.bark(); // Tuffy is barking
console.log(dog.breed);  // Labrador