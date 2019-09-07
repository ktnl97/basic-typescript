var Direction;
(function (Direction) {
    Direction["N"] = "South";
    Direction["S"] = "North";
    Direction["E"] = "West";
    Direction["W"] = "East";
})(Direction || (Direction = {}));
var encodedInput = [Direction.N, Direction.S, Direction.W, Direction.N];
let message = "Directions \n";
for (let input in encodedInput) {
    const key = encodedInput[input];
    message += `Step: ${(input)}\tTake ${key}\n`;
}
console.log(message);
