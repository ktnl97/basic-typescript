class Squares {
    constructor(length, width) {
        this.area = () => {
            return this.width * this.length;
        };
        this.length = length;
        this.width = width;
    }
}
let square = new Squares(1, 2);
square.area();
