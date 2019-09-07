interface SquareConfig{
    color? : string,
    side? : number,
    colour?: string
}

function CreateSquare(squareConfig : SquareConfig):{color : string, area: number}{
 let newSquare = {color: "red", area: 0};
 if(squareConfig.color){
     newSquare.color = squareConfig.color;
 }
 if(squareConfig.side){
     newSquare.area = squareConfig.side * squareConfig.side;
 }
 console.log("^^^^^^^^^", newSquare);
 return newSquare;
}
let mySquare = CreateSquare({color: "black"});
// let mySquare1 = CreateSquare({color:"yellow",size: 5});

let mysquare1 = {color: "yellow", size: 5};
let mySquare3 : SquareConfig;

let mysquare2 = CreateSquare(mysquare1);


