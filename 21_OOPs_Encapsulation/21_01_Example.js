// 29-08-2026

class Person{
    // hide your child
    #child1;
    #child2;

    constructor(name, ch1, ch2)
    {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1()
    {
        return this.#child1;
    }

    setChild1(changed_name)
    {
        this.#child1 = changed_name;
    }
}

let p = new Person("John", "Daniel", "Mark");
//console.log(p.#child1);
console.log(p.getChild1());  // Daniel
p.setChild1("Peter");
console.log(p.getChild1());  // Peter