 let loadPhone = async(searchText,dataLimit) => {

  let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  let res = await fetch(url);
  let data = await res.json();
  displayPhones(data.data,dataLimit);

 }

 let displayPhones = (phones,dataLimit) => {

   let phonesContainer = document.getElementById('phone-container');
  //  phonesContainer.innerHTML = ``;
  phonesContainer.textContent = ``;
  // display 20 phones only
  let showAll = document.getElementById('show-all')
  if(dataLimit && phones.length > 10){
     phones = phones.slice(0,10);
   
    showAll.classList.remove('d-none');

   }
   else{
    showAll.classList.add('d-none')
   }
   
   // display no phones found
   let noPhones = document.getElementById('no-phone-massage');

   if(phones.length === 0){
     noPhones.classList.remove('d-none');
   }
   else{
    noPhones.classList.add('d-none')
   }
   // display all phones
   phones.forEach(phone => {
    console.log(phone)
    phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col')
    phoneDiv.innerHTML = `
    <div class="card">
      <img src="${phone.image}" class="card-img-top p-4" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">More Details</button>

      </div>
    </div>
    `;

    phonesContainer.appendChild(phoneDiv);

   }) ;

   //stop spinnre
   toggleSpiner(false);

 }

 let processSearch = (dataLimit) =>{

  toggleSpiner(true); 
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadPhone(searchText, dataLimit);

 }

 document.getElementById('btn-search').addEventListener('click', function(){

  //start loder
  processSearch(10)


 })

 document.getElementById('search-field').addEventListener('keypress', function (e) {

  console.log(e.key)
  if (e.key === 'Enter') {
    processSearch(10)
  }
});


let toggleSpiner = isLoading => {
  let loaderSection = document.getElementById('loder-spiner');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }

}

document.getElementById('show-all').addEventListener('click', function(){
  processSearch();
})


let loadPhoneDetails = id => {
  let url = ` https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data))

}

let displayPhoneDetail = phone =>{

   console.log(phone);
   let phoneDetails = document.getElementById('phoneDetailsModalLabel');
   phoneDetails.innerText = phone.name;
   let phoneDetails2 = document.getElementById('phone-details');
   phoneDetails2.innerHTML = `
    <p>Release Date: ${phone. releaseDate ? phone. releaseDate : 'No ReleaseDate Found'}</p>
    <p>Others: ${phone.others ? phone.others.Bluetooth : 'No bluetooth information'}</p>
    <p>Storage: ${phone.mainFeatures? phone.mainFeatures.memory : 'no found storage information'}</p>
   `

}






 loadPhone('phone')