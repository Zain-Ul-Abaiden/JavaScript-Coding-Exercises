// Q 24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let name = "Zain Ul Abaiden";
console.log(name == "Zain Ul Abaiden"); //true
console.log(name != "Zain Ul Abaiden"); //false

// • Tests using the lower case function

console.log(name.toLowerCase() == "zain ul abaiden"); // true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number = 5;
console.log(number == 10);//false
console.log(number != 10);//true
console.log(number > 10);//false
console.log(number < 10);//true
console.log(number >= 10);//false
console.log(number <= 10);//true

// • Tests using "and" and "or" operators

let num1 = 2;
let num2 = 10;

console.log(num1<10 && num2>2?"true":"false"); // true
console.log(num1<1 || num2>20?"true":"false"); // false


let arr = [10,20,30,40,50]
// • Test whether an item is in a array

console.log(arr.includes(50)); //true

// • Test whether an item is not in a array

console.log(arr.includes(100)); //false