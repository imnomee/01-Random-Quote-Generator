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

/* Many of these quotes citation and year are made up but source is real. */
let quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    year: 2009
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    citation: "facebook",
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    source: "James Cameron",
    citation: "Twitter",
    year: 2015
  },
  {
    quote: "What we achieve inwardly will change outer reality.",
    source: "Plutarch",
    citation: "Inc Quotes",
    year: 2015
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle Onassis",

  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "JRobert Louis Stevenson",

  },
  {
    quote: "Build your own dreams, or someone else will hire you to build theirs.",
    source: "Farrah Gray",
    citation: "Inc Quotes",
    year: 2015
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",

    year: 2005
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    source: "Jimmy Dean",

    year: 2012
  },


];





/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var randNumber = Math.floor(Math.random() * quotes.length);
  console.log(randNumber);

  return quotes[randNumber];


}

console.log(getRandomQuote());


/***
 * `printQuote` function
***/

function printQuote() {

  var quote = getRandomQuote();



  var html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source + ' ';

  /* I found this 'key' in quote method from :
  https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript
  */

  if ('citation' in quote) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }

  if ('year' in quote) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  html += '</p>';


  document.getElementById('quote-box').innerHTML = html;
  return html;

}
console.log(printQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);