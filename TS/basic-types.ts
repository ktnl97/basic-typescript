var variable: string = "value";
var variable1: string = 'value1'
//variable = 5;
var greet = `printing the ${variable}`;
console.log(greet);

var count: number;
count = 5;
// count.isLowerCase();

var isActive: boolean = true && false

//Array 

var colors: string[] = ['Red', 'Green', 'Yellow'];

var flowers: Array<string> = ['Rose', 'Jasmine', 'Lily'];

var input: Array<string> = [];
input.push('N');
input.push('S');
input.push('E');

for(var i = 0; i< input.length; i++){
    console.log(input[i]);
}

input.pop();

for(var s in input){
    console.log(input[s]);
}

// var flowers: Array<string> = ['Rose', 'Jasmine', 3];

// tuple

var tuple: [number, string];
tuple = [0, "Nithya"];
// tuple = ["Vishwa", 1];

var answers: (string|number)[] = ["Place", 1];

answers.forEach(ele => {
      console.log((ele as string).length);
});

var notSure: any = "Something";
notSure = 5;

var nothing: null;
nothing = null;

// enum 
enum Numbers {
    One = 1, //value
    Two = 1 + 1, // Arithmetic operation
    Three = Two + 1, //Operation on other enums
    Four = "Four".length, // Pre-defined methods
    Five = (Four + (Three - Two)) // parentheses enum const.
}

// reverse mapping
var value = Numbers.One; // Find the value.
var key = Numbers[value]; // Find the Key associated to this value.
console.log(value, key);

for(var num in Numbers){
    const s  = Numbers[num];
    console.log(Numbers[num], num);
}

type mine = string | number; // custom defined or enum or class or interface.
let arr: mine[] = [1, 'e'];
