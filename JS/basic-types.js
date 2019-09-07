var variable = "value";
var variable1 = 'value1';
//variable = 5;
var greet = `printing the ${variable}`;
console.log(greet);
var count;
count = 5;
// count.isLowerCase();
var isActive = true && false;
//Array 
var colors = ['Red', 'Green', 'Yellow'];
var flowers = ['Rose', 'Jasmine', 'Lily'];
var input = [];
input.push('N');
input.push('S');
input.push('E');
for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
}
input.pop();
for (var s in input) {
    console.log(input[s]);
}
// var flowers: Array<string> = ['Rose', 'Jasmine', 3];
// tuple
var tuple;
tuple = [0, "Nithya"];
// tuple = ["Vishwa", 1];
var answers = ["Place", 1];
answers.forEach(ele => {
    console.log(ele.length);
});
var notSure = "Something";
notSure = 5;
var nothing;
nothing = null;
// enum 
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 1] = "One";
    Numbers[Numbers["Two"] = 2] = "Two";
    Numbers[Numbers["Three"] = 3] = "Three";
    Numbers[Numbers["Four"] = "Four".length] = "Four";
    Numbers[Numbers["Five"] = (Numbers.Four + (Numbers.Three - Numbers.Two))] = "Five"; // parentheses enum const.
})(Numbers || (Numbers = {}));
// reverse mapping
var value = Numbers.One; // Find the value.
var key = Numbers[value]; // Find the Key associated to this value.
console.log(value, key);
for (var num in Numbers) {
    const s = Numbers[num];
    console.log(Numbers[num], num);
}
let arr = [1, 'e'];
