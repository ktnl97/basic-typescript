// string
var hi = "Hi";
var msg = `${hi} welcome`;
// Array
var array = [1, 3, 5];
var array1 = [1, 3, 5];
array.push(10);
for (let i in array) {
    console.log(array[i]);
}
// Tuple
var tuple = [0, 'Hi'];
// multitype
var multi = ['2', 2, 'df'];
// any
var any = ['sfda', 2, false];
// enum
var Direction;
(function (Direction) {
    Direction[Direction["One"] = 1] = "One";
    Direction[Direction["Two"] = 2] = "Two";
    Direction[Direction["Three"] = 3] = "Three";
    Direction[Direction["Four"] = "four".length] = "Four";
    Direction[Direction["Five"] = 5] = "Five";
})(Direction || (Direction = {}));
// reverse mapping
const value = Direction.One;
const key = Direction[value];
console.log(key, value);
var ar;
var arr = [
    [1, 4],
    ["ewf", 3]
];
