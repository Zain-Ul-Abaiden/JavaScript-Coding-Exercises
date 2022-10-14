// Q 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guests = ["Muhammad Hamza", "Muhammad Abubakar", "Sajid Ali Khan"];

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner at 8 pm.`);
});

console.log(`Dear ${guests[2]}, cannot be able to came at dinner.`);

guests[2] = "Talha Nisar Mughal";

guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner at 8 pm.`);
});

console.log("<- We found a bigger dinner table for our guests ->");

// • Add one new guest to the beginning of your array.
guests.unshift("Muhammad Waleed");

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

guests.splice(2, 0, "Ahmad Raza");

guests.push("Mohsin");

console.log("\nNew Invitations after get a bigger dinner table\n")
guests.forEach(element => {
    console.log(`Dear ${element}, Please come to dinner at 8 pm.`);
});