/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
{
  quote: 'You know as well as I do that fear only exists for one purpose... to be conquered.',
  source: 'Captain Katherine Janeway',
  citation: 'Star Trek: Voyager',
},
{
  quote: 'There is a way out of every box, a solution to every puzzle; it\'s just a matter of finding it.',
  source: 'Captain Jean-Luc Picard',
  citation: 'Star Trek: The Next Generation',
  year: '47304.2'
},
{
  quote: 'Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?',
  source: 'Albus Dumbledore',
  citation: 'Harry Potter and the Deathly Hallows',
  year: '2007'
},
{
  quote: 'Things we lose have a way of coming back to us in the end, if not always in the way we expect',
  source: 'Luna Lovegood',
  citation: 'Harry Potter and the Order of the Phoenix',
  year: '2003'
},
{
  quote: 'I solemnly swear I am up to no good.',
  source: 'Harry Potter',
  citation: 'Harry Potter and the Prisoner of Azkaban',
  year: '2004'
}
];

/***
 * `getRandomQuote` function

 * getRandomQuote() returns a random object from the quotes array.
 * randomNumber generates a random number up to the length of the quotes array.
 * returns a random quote object.
***/


function getRandomQuote() {
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function

 * printQuote() returns an HTML string based on the quote object's properties.
 * quoteObject calls getRandomQuote() and returns a quote object.
 * htmlString contains the HTML string base including the quote and source      properties.
* The 2 if statements add additional properties to htmlString if they are applicable.
* returns complete htmlString and inserts it into the HTML.
***/

function printQuote() {
  quoteObject = getRandomQuote();
  let htmlString = '<p class="quote">' + quoteObject.quote + '</p>' + '<p class="source">' + quoteObject.source;
  if (quoteObject.citation) {
    htmlString = htmlString + '<span class="citation">' + quoteObject.citation + '</span>';
  }
  if (quoteObject.year) {
    htmlString = htmlString + '<span class="year">' + quoteObject.year + '</span>';
  }
  return document.getElementById('quote-box').innerHTML = htmlString + '</p>' ;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
