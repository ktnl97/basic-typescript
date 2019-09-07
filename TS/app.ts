// string
var hi = "Hi";
var msg = `${hi} welcome`
// Array

var array: number[] = [1,3,5];
var array1: Array<number> = [1,3,5];

array.push(10);

for(let i in array){
    console.log(array[i]);
}

// Tuple

var tuple: [number, string] = [0, 'Hi']

// multitype

var multi: (string|number)[] = ['2', 2, 'df' ]

// any

var any: any = ['sfda', 2, false];

// enum

enum Direction {
    One = 1,
    Two = 1+1,
    Three = Two + 1,
    Four = "four".length,
    Five = (Two + (Two + One))
}

// reverse mapping

const value = Direction.One;
const key = Direction[value];
console.log(key, value);

type mine = number | string;

var ar: mine;

var arr: (string|number)[][] = [
    [1,4],
    ["ewf", 3]
]


