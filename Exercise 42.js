// Q 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

"use strict";

function show_magicians(magicians_name){
    magicians_name.forEach(element => {
        console.log(element);
    });
}

function make_great(magician_name) {
    let num = 0
    magician_name.forEach(element => {
        magician_name[num] = `The Great ${element}`;
        ++num;
    });

    show_magicians(magician_name);
}

show_great(["Magician Apic", "Magician Zoe", "Magician Lela", "Magician Bagi"]);