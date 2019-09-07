function Greet(fName, mName = "Thayse", lName) {
    if (lName) {
        return `${fName} ${mName} ${lName}`;
    }
    return `${fName} ${mName}`;
}
console.log(Greet("Rhea", "Suzan", "Alex"));
console.log(Greet("Rhea", undefined, "Alex"));
console.log(Greet("Rhea"));
