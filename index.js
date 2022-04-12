window.onload = init;
  function init() {
    generateQuote()
      }
function generateQuote() {
  let quoteSize = QUOTEPEDIA.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEPEDIA[randomIndex];
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22";

 // adding quote
  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
      twitterLink += quoteInApiFormat
 //adding author
  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
      twitterLink += " - " + authorInApiFormat

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;

          }