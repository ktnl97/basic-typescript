// Named function
function add(num1, num2) {
    return num1 + num2;
}
// arrow function
let sub = (num1, num2) => {
    return num1 - num2;
};
// anonymous function
setTimeout(() => {
    console.log('Printed');
}, 5000);
// optional parameters => it should be the last one,
{
    function addition(num1, num2, num3) {
        if (num3) {
            return num1 + num2 + num3;
        }
        return num1 + num2;
    }
    console.log(addition(1, 2, 3));
    console.log(addition(1, 2));
}
// default parameters => explicit undefined
{
    function addition1(num1, num2 = 3, num3) {
        return num1 + num2 + num3;
    }
    console.log(addition1(1, 2, 3));
    console.log(addition1(1, 2));
    console.log(addition1(1));
}
// Rest parameters => explicit undefined
{
    function sum(...num) {
        let sum = 0;
        num.forEach(ele => sum += ele);
        return sum;
    }
    console.log(sum(1, 2, 3));
    console.log(sum(1, 2, 3, 3, 5));
    console.log(sum(1, 2));
    console.log(sum(1));
}
