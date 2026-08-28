// 27-08-2026

class Car {

    // constructor()
    // {
    //     // Default constructor
    // }

    // Parameterized constructor
    constructor(assigned_name)
    {
        this.name = assigned_name;  // this : object reference
    }
}

let tata_nexon = new Car("Nexon");
console.log(tata_nexon.name);  // Nexon

let tata_safari = new Car("Safari");
console.log(tata_safari.name);  // Safari


const a = new Car("Nano");
const b = new Car("thar");

//class Bad { constructor(a){} constructor(b){}}  //  not allowed to have multiple constructors

class Bike{}
new Bike(); // Bike{} - works fine, just has nothing in it