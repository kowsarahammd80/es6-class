let loadRandom = () =>{
  fetch('https://randomuser.me/api/?results=1')
  .then(res => res.json())
  .then(data => DisplayRandom(data))
}

let DisplayRandom = randoms =>{
  console.log(randoms)
  let randomDisplay = document.getElementById('random-container')
  randomDisplay.innerHTML = '';
  randomDisplay.innerHTML = `
  <img src="${randoms.results[0].picture.thumbnail}">
  <h3>name: ${randoms.results[0].name.first} </h3>
   <p>city: ${randoms.results[0].location.city}</p>
   <p>Street: ${randoms.results[0].location.street.name}</p>
  `
}

loadRandom();