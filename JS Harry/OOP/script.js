// let obj = {
//     name : "ajay",
//     age : 18
// };

// console.log(obj);

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps : true
// };

// // what is prototype ?? --> additional properties of object 

// rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

class animal{
    constructor(name)
    {
        this.name = name;
        console.log("Object is created");
    }

    eats()
    {
        console.log("Eating");
    }
    jumps()
    {
        console.log("Jumping");
    }
};
// inheritance -> done using extends keyword
class lion extends animal{
    constructor (name)
    {
        super(name); // call the constructor of parent class
        this.name = name;
        console.log("Object is created with lion class.....")
    }
};

class user
{
    constructor (name)
    {
        this.name = name;
    }
    get name()
    {
        return this.name;
    }
    set name(value)
    {
        if(value.length() < 4)
        {
            console.log("Name is too short.");
            return;
        }
        this.name = value;
    }

};
let a = new animal();
console.log(a);
a.jumps();
let l = new lion("shera");
console.log(l);
