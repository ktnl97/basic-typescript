function Greet(fName: string, mName: string = "Thayse", lName?: string): string {
    if(lName){
        return `${fName} ${mName} ${lName}`;
    }
    return `${fName} ${mName}`;
}

console.log(Greet("Rhea", "Suzan", "Alex"));
console.log(Greet("Rhea", undefined, "Alex"));
console.log(Greet("Rhea"));
