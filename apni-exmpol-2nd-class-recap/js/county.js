let loadCountries = () =>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data));
}


let displayCountries = countries =>{
  let countriesContainer = document.getElementById('countires-countainer');

  countries.forEach(country => {
    console.log(country)
    let countryDive = document.createElement('div')
    countryDive.classList.add('country');
    countryDive.innerHTML = `
     <h3>Name: ${country.name.common}</h3>
     <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
     <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;
    countriesContainer.appendChild(countryDive);
  })

}


let loadCountryDetails = (code) => {
  let url = `https://restcountries.com/v3.1/alpha/${code}`
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayCountryDetail(data[0]))
  
}


let displayCountryDetail = country => {
  let countryDetail = document.getElementById('country-detail');
  countryDetail.innerHTML =`
   <h2>Details: ${country.name.common}</h2>
   <img src="${country.flags.png}">
  `
}



loadCountries()