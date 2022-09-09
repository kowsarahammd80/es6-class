let loadCountris = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}
  
let displayCountries = countries => {
  let countrisCountainer = document.getElementById('countries-container');
   countries.forEach(country => {
     let countryDiv = document.createElement('div');
     countryDiv.classList.add('country')
     console.log(country)
     countryDiv.innerHTML = `
      <h3>User Countery Name: ${country.name.common}</h3>
      <p> Capital: ${country.capital ? country.capital[0]: 'No Capilat'}</p>
      <button onclick="loadCountryDeteil('${country.cca2}')">Details</button>
     `;
     countrisCountainer.appendChild(countryDiv)
   })
}

let loadCountryDeteil = (code) => {
  let url = `https://restcountries.com/v3.1/alpha/${code}`
  // console.log('get country deteil', code)
  // fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  fetch(url)
  .then(res => res.json())
  .then(data => displayCountryDetail(data[0]))
}

let displayCountryDetail = country => {
  // console.log(country);
  let CountryDeteil = document.getElementById('country-detail');
  CountryDeteil.innerHTML = `
   <h2>Detail: ${country.name.common} </h2>
   <img src="${country.flags.png}">
  `
}





// let displayCountry = users => {
  
//   let countrisCountainer = document.getElementById('countries-container');
//   for(let user of users){
//     console.log(user)
//      let userDiv = document.createElement('div');
//      userDiv.innerHTML = `
//       <h3>User Name: ${user.name.common}</h3>
//      `;
//      countrisCountainer.appendChild(userDiv)
//   }
// }

loadCountris()