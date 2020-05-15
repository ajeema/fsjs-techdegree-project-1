/******************************************
 Aaron Jorgensen
 Treehouse FSJS Techdegree:
 project 1 - A Random Quote Generator
 ******************************************/
var currentRandQuote = [];
var currentRandColor = [];

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

function getRandomQuote() {
    let randNumb = Math.floor(Math.random() * quotes.length);
    prevRandQuote = randNumb;
    currentRandQuote.push(randNumb);

    if (currentRandQuote[0] === prevRandQuote) {
        alert("It a repeat quote");
    }
    return quotes[randNumb];
}

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

    document.getElementById('quote-box').innerHTML = quoteHTML;
}

// TODO: add timer

printQuote();
document.getElementById('load-quote').addEventListener("click", printQuote, false);

