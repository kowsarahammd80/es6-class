let loadQuote = () =>{
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayData(data))
}

let displayData = users =>{
  // console.log(users)
  let blockQuote  = document.getElementById('quote');
  
  blockQuote.innerText = users.quote;
}

