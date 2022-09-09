
let loadQuote = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayQuote(data))
}

let displayQuote = quote => {
  let blockQuote = document.getElementById('quote');
  blockQuote.innerText = quote.quote;
}