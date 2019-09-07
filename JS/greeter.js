class Greeter {
    constructor(message) {
        this.message = message;
    }
    greet() {
        console.log("####", this.message);
    }
}
let myObject;
myObject = new Greeter("My mesasage");
myObject.greet();
