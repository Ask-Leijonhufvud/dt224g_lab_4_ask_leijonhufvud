/* Ask Leijonhufvud, 2026, Uppgift 3: lagra en ålder, skriv ut barn/vuxen/pensionär beroende på åldern */
"use strict";

// STORE AGE
let age = 65;

// IF-ELSE TREE
// IF age < 18
if (age < 18) {
    // PRINT: Barn
    console.log("Barn");
} else if (age < 65) { // ELSE IF age < 65
    // since (age < 18) has already been caught, this will trigger on (18 <= age < 65)
    // PRINT: Vuxen
    console.log("Vuxen");
} else { // ELSE
    // since (age < 65) has already been caught, this will trigger on (age >= 65)
    // PRINT: Pensionär
    console.log("Pensionär");
}