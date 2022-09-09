let loadPhones = async (searchText, dataLimit) => {

  let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  let res = await fetch(url);
  let data = await res.json();
  disPlayPhones(data.data, dataLimit);

}

let disPlayPhones =(phones, dataLimit) => {
  let phonesContainer = document.getElementById('phone-container');
  // phonesContainer.innerHTML = ``;
  phonesContainer.textContent = '';
  //display 10 phones only
  let showAll = document.getElementById('show-all');     
    if(dataLimit && phones.length > 10){
    phones = phones.slice(0, 10)
   
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.add('d-none');
  }
  
  // display no phones found

  let noPhone = document.getElementById('no-found-massage');
    if(phones.length === 0){
      noPhone.classList.remove('d-none');
    }
    else{
      noPhone.classList.add('d-none')
    }
  // display all phone
  phones.forEach( phone => {
   
    let phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    
    <div class="card p-4">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadphoneDetails('${phone.slug}')" href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        
      </div>
    </div>
 
    `;

    phonesContainer.appendChild(phoneDiv);

  });

  //stop loader
  toggleSpiner(false);
}

let processSearch = (dataLimit) =>{
   
  toggleSpiner(true);
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadPhones(searchText,dataLimit);

}

// heandel search button click
document.getElementById('btn-search').addEventListener('click', function(){
  //start loader
 processSearch(10);

})

// search input enter key hendler
document.getElementById('search-field').addEventListener('keypress', function (e) {
  console.log(e.key)
  if (e.key === 'Enter') {
    processSearch(10);
  }
});

let toggleSpiner = isLoading => {
  let loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none');
  }
}



// not the best way to show all 
document.getElementById('btn-show-all').addEventListener('click', function(){

  processSearch();
   
})

let loadphoneDetails = async id => {

  let url = `https://openapi.programming-hero.com/api/phone/${id}`
  let res = await fetch(url)
  let data = await res.json()
  disPlayPhoneDitails(data.data);

}

let disPlayPhoneDitails = phone =>{
   
  console.log(phone);
  let modalTitel = document.getElementById('phoneDetailsModalLabel');
  modalTitel.innerText = phone.name ;
  let phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
   <p>Relese Date : ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'} </p>
    <p>Storage : ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage information found'}</p>
   <p>Others :  ${phone.others ? phone.others.Bluetooth : 'No Blutooth'}</p>
  `

}

// loadPhones('');
