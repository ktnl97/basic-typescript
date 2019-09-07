class Point {
    readonly x : number;
    readonly y : number;
    constructor(x : number){
        this.x = x;
    }
}
let point = new Point(10);
point.x = 10;