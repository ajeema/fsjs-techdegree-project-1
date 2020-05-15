/******************************************
 Aaron Jorgensen
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/
/* Empty arrays to store and compare current random value
to build logic of eliminating sequentially repeat results */

var currentRandQuote = [];
var currentRandColor = [];

// Function to generate a random color

function getRandomColor() {
    let randColor = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randColor];
    document.getElementById('load-quote').style.backgroundColor = randColor;
    prevRandColor = randColor;
    currentRandColor.push(randColor);
    if (currentRandColor[0] === prevRandQuote) {
        alert("It a repeat color");
    }
    return colors[randColor];
}

// Function to generate a random quote
function getRandomQuote() {
    let randNumb = Math.floor(Math.random() * quotes.length);
    prevRandQuote = randNumb;
    currentRandQuote.push(randNumb);

    if (currentRandQuote[0] === prevRandQuote) {
        alert("It a repeat quote");
    }
    return quotes[randNumb];
}

/* function to add information parsed from array of quotes
 and inserted into placeholder based on loop */

function printQuote() {
    let randQuote = getRandomQuote();
    getRandomColor();
    let quoteHTML = '<p class="quote">' + randQuote.quote + '</p><p class="source">' + randQuote.source;
    if ('citation' in randQuote) {
        quoteHTML = quoteHTML + '<span class="citation">' + randQuote.citation + '</span>';
    }
    if ('year' in randQuote) {
        quoteHTML = quoteHTML + '<span class="year">' + randQuote.year + '</span>';
    }
    if ('tag' in randQuote) {
        quoteHTML = quoteHTML + '<br>' + 'tags: ' + '<span class="tag">' + randQuote.tag + '</span>';
    }
    // Adding to HTML page
    document.getElementById('quote-box').innerHTML = quoteHTML;
}

// Credit: https://www.w3schools.com/jsref/met_win_settimeout.asp
function quoteTimer() {
    window.setInterval(printQuote, 7000);
}

// Calling and instatiating the functions
quoteTimer();
printQuote();

// Load the function printQuote on click and display a new randomly generated quote

document.getElementById('load-quote').addEventListener("click", printQuote, false);


