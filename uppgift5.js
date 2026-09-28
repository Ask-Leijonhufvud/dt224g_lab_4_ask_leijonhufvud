/* Ask Leijonhufvud, 2026, Uppgift 5: Skapan en array och sedan skriva ut eller manipulera hela eller delar av arrayen */
"use strict";

// CREATE ARRAY
let food = ["Lasagn", "Spaghetti", "Ramen", "Pad Thai", "Stuvade Makaroner"];

// PRINT WHOLE ARRAY
console.table(food);

// PRINT FIRST ELEMENT IN ARRAY
console.log(food[0]);

// PRINT LAST ELEMENT IN ARRAY
console.log(food[food.length - 1]); // last index in array will be length -1

// ADD NEW ELEMENT TO END OF ARRAY
food.push("Schnitzel");

// REMOVE FIRST ELEMENT IN ARRAY
food.shift();

// PRINT WHOLE ARRAY AGAIN