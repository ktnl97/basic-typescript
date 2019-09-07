// Three ways of having functions
// Named functions

function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Arrow functions

let arrowAdd = (num1: number, num2: number): number => {
    return num1 + num2;
}

//anonymous functions
setTimeout(function () { console.log(3); }, 1000
)
setTimeout(function (){
    console.log('EE')
}, 10000)
// Three ways of passing parameters

// Optional parameter: Always the last one.
{
    function sum(num1: number, num2: number = 3, num3?: number): number {
        if (num3) {
            return num1 + num2 + num3;
        }
        return num1 + num2;
    }
    let result = sum(2, 3); // 5
    let anotherResult = sum(2, 3, 4); // 9
    console.log(result);
    console.log(anotherResult);
}

// Default parameter: Need not be the last one. Explicitly pass undefined if it is in between
{
    function sum(num1: number, num2: number = 3, num3: number = 1): number {
        if (num3) {
            return num1 + num2 + num3;
        }
        return num1 + num2;
    }
    let result = sum(2, undefined, 3); // 8
    let anotherResult = sum(2, 5); // 8
    console.log(result);
    console.log(anotherResult);
}

// Rest parameter: If the number of parameters are not know before.
{
    function sum(...numbers: number[]): number {
        let sum = 0;
        numbers.forEach(ele => sum += ele);
        return sum;
    }
    let result = sum(2, 3, 6, 4, 5); // 20
    let anotherResult = sum(2, 5, 4); // 11
    console.log(result);
    console.log(anotherResult);
}

// overloading
{
    function sum(num1: number): string;
    function sum(num1: string): string;
    function sum(num1: number | string) {
        return num1.toString();
    }
    console.log(sum(4));
    console.log(sum('EEE'));
}
// Argument Type/ Order / Number / Return type
{
    function sum(num1: number): string;
    function sum(num1: string, num2: number): number;
    function sum(num1: number | string, num2: number = 0): string | number {
        return num1.toString() + num2;
    }
    console.log(sum(4));
    console.log(sum('EEE', 4));
}

// function passed as argument to another function

function add1(num1: number, num2: number, multiply: (n1: number, n2: number) => number): number {
    multiply(num1, num2);
    return num1 + num2;
}

let g = add1(2, 3, ((s: number, t: number) => {
    console.log(s + t);
    return s + t;
}));
console.log(g);


function greeter(fname: string, lname: string, age: number, isMinor: (age: number) => boolean) {
    console.log(`${fname} ${lname} of age ${age} is`,isMinor(age) ? 'a Minor' : 'not a Minor');
}

var person = greeter("Nithya", "lakshmi", 22, (age: number) => {
    if(age >= 18){
        return false;
    }
    return true;
})

person;