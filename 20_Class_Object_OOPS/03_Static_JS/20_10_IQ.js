// 27-08-2026

class Student{
    static collegeName = "PW AT Batch";

    constructor(name)
    {
        this.name = name;
    }

    static display()
    {
        console.log(this.name +" are part of the ", Student.collegeName );
    }
}

let alex = new Student("Alex");
let jimmy = new Student("Jimmy");
let carl = new Student("Carl");
let david = new Student("David");

console.log(Student.collegeName);  // PW AT Batch
//console.log(Student.display());
console.log(alex.name);  // Alex
console.log(jimmy.name);  // Jimmy