// Named function

function add(num1: number, num2: number): number{
    return num1+num2;
}

// arrow function

let sub = (num1: number, num2: number): number => {
    return num1-num2;
}

// anonymous function

setTimeout(() => {
    console.log('Printed');
}, 5000)


// optional parameters => it should be the last one,

{
    function addition(num1: number, num2: number, num3?: number){
        if(num3){
            return num1+num2+num3;
        }
        return num1+num2;
    }

    console.log(addition(1,2,3));
    console.log(addition(1,2));
}

// default parameters => explicit undefined

{
    function addition1(num1: number, num2: number = 3, num3?: number){
        return num1+num2+num3;
    }

    console.log(addition1(1,2,3));
    console.log(addition1(1,2));
    console.log(addition1(1));
}

// Rest parameters => explicit undefined

{
    function sum(...num: number[]){
        let sum = 0;
        num.forEach(ele => sum+=ele);
        return sum;
    }

    console.log(sum(1,2,3));
    console.log(sum(1,2,3,3,5));
    console.log(sum(1,2));
    console.log(sum(1));
}