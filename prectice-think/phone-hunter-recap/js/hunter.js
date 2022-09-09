let loadData = (searchText,dataLimit) =>{
  let url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhones(data.data, dataLimit))

}

let displayPhones = (phones, dataLimit) => {
  
  let phonesContainer = document.getElementById('phones-container');
  phonesContainer.textContent = ``;
  //show all
  let showAll = document.getElementById('show-all')
  if(dataLimit && phones.length > 10){
    phones = phones.slice(0,10)
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.add('d-none')
  }

  // no found result
     let noFound = document.getElementById('no-found')
   if(phones.length === 0){
     noFound.classList.remove('d-none')
   }
   else{
    noFound.classList.add('d-none')
   }
  

   // phones div
   phones.forEach(phone => {
    console.log(phone)
    phoneDive = document.createElement('div')
    phoneDive.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top p-5" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModals">
   Show Details
</button>
    </div>
    
  </div>
    `;
    phonesContainer.appendChild(phoneDive);
    toggolSpiner(false);
    
   });

     
}


 let searchProssece = (dataLimit) =>{
  toggolSpiner(true);
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadData(searchText,dataLimit);

 }


 document.getElementById('search-btn').addEventListener('click', function(){

  searchProssece(10)

 })


 document.getElementById('show-all').addEventListener('click', function(){

  searchProssece();

 })

 let toggolSpiner = isLoading => {
  let toggleSpiner = document.getElementById('spinner');
  if(isLoading){
    toggleSpiner.classList.remove('d-none');
  }
  else{
    toggleSpiner.classList.add('d-none')
  }
 }
 

 document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchProssece(10);
  }
});


let loadPhoneDetails = id => {
  let url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => phoneDetailsShow(data.data))

}

let phoneDetailsShow = phone => {
  console.log(phone)
  let phoneDetails = document.getElementById('phoneDetailsModalsLabel');
  phoneDetails.innerText = phone.name;
  let phoneModal = document.getElementById('modal-pera');
   phoneModal.innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No found release date'}</p>
    <p>Storage: ${phone.mainFeatures ?phone.mainFeatures.storage : 'no found Details' }</p>
    <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth'}</p>
   `
}


loadData('phone')