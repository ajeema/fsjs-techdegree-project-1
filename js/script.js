/******************************************
 Aaron Jorgensen
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/
let randQuote;

function getRandomNumber () {
    let randNumb = Math.floor(Math.random() * quotes.length);
    return quotes[randNumb];
}
function printQuote(){
    randQuote = getRandomNumber();
    console.log(randQuote);
}
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);
