class Animal {
    constructor(name) {
        this.name = name;
    }
    move(feet) {
        console.log("hey i moved this many feet today", feet);
    }
}
class Dog extends Animal {
    constructor() {
        super("Dog");
    }
    move(feet) {
        super.move(feet);
        console.log("Hey I am dog Btw");
    }
}
let animals = new Animal("some name");
let dog = new Dog();
animals.move(12);
dog.move(13);
