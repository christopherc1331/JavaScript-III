/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In global scope, this refers to the object that it's in
* 2. When a method is called the object that the function is binded to is what this is referring to
* 3. When this is inside of a constructor method, this refers to an instance of the constructor method when it is called
* 4. When an object's "this" reference is overridden by apply/call, then this refers to the overridden object inside of the call/apply parenthesis
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const randObj = {
    showObjDetails: console.log(this),
    random: "info",
}

randObj.showObjDetails;


// Principle 2

// code example for Implicit Binding

const Animal = function (attr) {
    this.age = attr.age;
    this.gender = attr.gender;
    this.name = attr.name;

}

Animal.prototype.greeting = function (attr) {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    console.log(this);
};


// Principle 3

// code example for New Binding

const testAnimal = new Animal({ name: "Ralph", age: "2" });

testAnimal.greeting();
console.log(testAnimal.age);


// Principle 4

// code example for Explicit Binding


const Dog = function (attr) {
    Animal.call(this, attr);
    this.furry = attr.furry;
    this.isFurry = () => {
        if (this.isFurry === "Yes") {
            return true;
        } else {
            return false;
        }
    };
};

Dog.prototype = Object.create(Animal.prototype);


const testDog = new Dog({ name: "Milly", age: "12", isFurry: "Yes" });

testDog.greeting();
console.log(testDog.age);
console.log(testDog.isFurry());