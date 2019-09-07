enum Direction {
    N = "South",
    S = "North",
    E = "West",
    W = "East"
}
var encodedInput: Array<Direction> = [Direction.N, Direction.S, Direction.W, Direction.N];
let message = "Directions \n";

for (let input in encodedInput){
   const key = encodedInput[input];
   message+=`Step: ${(input)}\tTake ${key}\n`
}

console.log(message);
