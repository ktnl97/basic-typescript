interface Rectangle{
    length: number,
    width:number,
    area() : number;
}

class Squares implements Rectangle{
   length : number
    width:number
    constructor(length: number, width: number){
        this.length = length;
        this.width = width;
    }
   area = () => {
       return  this.width * this.length;
   }
}

let square = new Squares(1,2);
square.area();