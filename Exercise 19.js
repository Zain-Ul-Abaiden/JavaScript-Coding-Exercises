// Q 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guests = ["Muhammad Hamza", "Muhammad Abubakar", "Sajid Ali khan"];

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner at 8 pm.`);
});

console.log(`\nThe total number of guests coming for dinner today is ${guests.length}.`);