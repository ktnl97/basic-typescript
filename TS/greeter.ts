class Greeter{
    message: string;
    constructor(message: string){
        this.message = message;
    }
    greet(){
        console.log("####",this.message);
    }
}
let myObject :Greeter;
myObject = new Greeter("My mesasage");
myObject.greet();