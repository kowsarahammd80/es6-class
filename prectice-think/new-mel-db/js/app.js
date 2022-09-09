let loaddata =(search) =>{
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
  .then(res => res.json())
  .then(data => dataDisplay(data.meals))
}

let dataDisplay = (meals) =>{
  console.log(meals)
  let mealContainer = document.getElementById('mael-container');
  mealContainer.innerHTML = ``;
  meals.forEach(meal => {
    console.log(meal)
    mealDiv = document.createElement('div');
    mealDiv.innerHTML = `
    <div onclick= "loadMealDetail(${meal.idMeal})" class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
  </div>
    `;
    mealContainer.appendChild(mealDiv);
  })
}


let searchFood = () =>{

  let searchFeild = document.getElementById('search-field')
  let searchText = searchFeild.value;
  loaddata(searchText);
  searchFeild.value = '';
}

 let loadMealDetail = (idMeal) => {
  // console.log(idMeal)
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  // console.log(url)
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))

 }

  let displayMealDetails = meal =>{
     let detailContainer = document.getElementById('details-container');
     detailContainer.innerHTML =``;
     let mealDiv = document.createElement('div');
     mealDiv.innerHTML = `
     
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0, 500)}</p>
       
     </div>
   
     `
     detailContainer.appendChild(mealDiv);

    
  }





loaddata('');