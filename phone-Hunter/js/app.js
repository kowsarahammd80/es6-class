let loadPhone = async(searchText,dataLimit) =>{
  let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  let res = await fetch(url)
  let data = await res.json()
  displayPhones(data.data, dataLimit);
}

 let displayPhones = (phones, dataLimit) => {
  let phonesContainer = document.getElementById('phone-container')
  // phonesContainer.innerHTML = ``;
  phonesContainer.textContent = ``;
  // display 20 phones only
  let showall = document.getElementById('Show-all');
  if(dataLimit && phones.length > 10){
    phones = phones.slice(0, 10)
    showall.classList.remove('d-none');

  }
 else{
  showall.classList.add('d-none');
 }

  //display no phones found
  let noPhone = document.getElementById('no-found-message')
   if(phones.length === 0){
    noPhone.classList.remove('d-none')
   }
   else{
    noPhone.classList.add('d-none')
   }

  // display all phone
  phones.forEach(phone => {
    console.log(phone)
    phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    
      <div class="card p-4  ">
        <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longe<p> <button oneclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal"> Show Details </button>

        </div>
      </div>
   
    `;
    phonesContainer.appendChild(phoneDiv);
  });
  //stop spiner loader
  toggolSpiner(false);
  
 }

 let ProsesSerch = (dataLimit) =>{

  toggolSpiner(true);
  let searchField = document.getElementById('input-field');
  let searchText = searchField.value;
  loadPhone(searchText, dataLimit);

 }

document.getElementById('search-btn').addEventListener('click', function(){
 //start loader
 
 ProsesSerch(10);


})

// search input field enter key handeler
document.getElementById('input-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    ProsesSerch(10);
  }
}); 



let toggolSpiner = isLoading => {
  let loaderSection = document.getElementById('loader')
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}

//not the best way to load show All
document.getElementById('show-btn').addEventListener('click', function(){
   
  ProsesSerch();

})


let loadPhoneDetails = async id => {
  let url = `https://openapi.programming-hero.com/api/phone/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  displayPhoneDetails(data.data);

}


let displayPhoneDetails = phone => {
 
  console.log(phone);
  let modalTitale = document.getElementById('phoneDetailModalLabel');
  modalTitale.innerText = phone.name;

}



 loadPhone('apple')