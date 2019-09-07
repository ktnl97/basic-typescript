interface LabeledValue {
    label: string,
    readonly [index: string]: string | number
}



function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
let myObj2 : LabeledValue = {size: 10, label: "Size 10 Object"}
myObj2.label = "Vishwa";

printLabel(myObj);
printLabel({size: 10, label: "Size 10 Object"});