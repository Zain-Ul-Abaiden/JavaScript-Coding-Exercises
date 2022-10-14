// Q 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

"use strict";
function titleCase(personName) {
    let $personName = personName.split(" ");
    let finalPersonName = new Array;
    $personName.forEach(element => {
        finalPersonName.push(element[0].toUpperCase() + element.slice(1));
    });
    return finalPersonName.join(" ");
}

let personName = "zain ul abaiden";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase(personName));