class Animal{
    name: string;
    constructor(name : string){
this.name = name;
    }
    move(feet: number){
        console.log("hey i moved this many feet today",feet);
    }
}

class Dog extends Animal{
constructor(){
    super("Dog");
}
move(feet: number){
    super.move(feet);
    console.log("Hey I am dog Btw");
}
}

let animals = new Animal("some name");
let dog = new Dog();
animals.move(12);
dog.move(13);