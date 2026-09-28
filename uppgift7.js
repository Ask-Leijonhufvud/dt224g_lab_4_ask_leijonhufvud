/* Ask Leijonhufvud, 2026, Uppgift 7: Arrayer och funktioner */
"use strict";

// CREATE ARRAY OF MIN 6 NUMBERS
let numbers = [1, 2, 3, 5, 7, 11, 13];

// FUNCTION sumArray
    // PARAMETERS numbers[]
function sumArray(numbers) {
    // create sum variable
    let sum = 0;
    // loop through array, adding each value to array
    numbers.forEach(number => {
        sum += number;
    });
    // RETURN sum
    return sum;
}

// CALL sumArray, PRINT RESULT
