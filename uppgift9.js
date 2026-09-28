/* Ask Leijonhufvud, 2026, Uppgift 9: Sammanhängande program */
"use strict";

// CREATE ARRAY people
    // ARRAY-OBJECT VALUES
        // name
        // age
        // place
let people = [
    {
        name: "Adam",
        age: 15,
        place: "Sundsvall"
    }, {
        name: "Bertil",
        age: 16,
        place: "Boden"
    }, {
        name: "Cesar",
        age: 17,
        place: "Stockholm"
    }, {
        name: "David",
        age: 18,
        place: "Östersund"
    }, {
        name: "Erik",
        age: 19,
        place: "Kiruna"
    }, {
        name: "Filip",
        age: 20,
        place: "Luleå"
    }
];

// forEach-loop
people.forEach(person => {
    // IF age < 18
    if (person.age < 18) {
        // PRINT name bor i place och är inte myndig.
        console.log(`${person.name} bor i ${person.place} och är inte myndig.`);
    } else { // ELSE
        // PRINT name bor i place och är myndig.
        console.log(`${person.name} bor i ${person.place} och är myndig.`);
    }
});
