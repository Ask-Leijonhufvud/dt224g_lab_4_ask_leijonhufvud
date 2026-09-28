/* Ask Leijonhufvud, 2026, Uppgift 8: Objekt */
"use strict";

// CREATE BOOK-OBJECT
let theGeneralDancedAtDawn = {
    // TITLE
    title: "The General Danced at Dawn",
    // AUTHOR
    author: "George MacDonald Fraser",
    // YEAR
    year: 1970
};

// FUNCTION printBook(book)
function printBook(book) {
    // PRINT: Titel: book.title
    console.log(`Titel: ${book.title}`);
    // PRINT: Författare: book.author
    console.log(`Författare: ${book.author}`);
    // PRINT: Utgivningsår: book.year
    console.log(`Utgivningsår: ${book.year}`);
}

printBook(theGeneralDancedAtDawn);