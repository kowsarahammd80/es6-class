let loadMeals = (search) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}

let displayMeals = meals => {
  let mealsContainer = document.getElementById('meal-container');
  // mealsContainer.innerText = '';
  mealsContainer.innerHTML = ``;
   meals.forEach(meal => {
    console.log(meal)
     let mealDiv = document.createElement('div');
     mealDiv.classList.add('col')
     mealDiv.innerHTML = `
     <div onclick="loadMealDetail('${meal.idMeal}')" class="card">
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
     </div>
   </div>
     `;
     mealsContainer.appendChild(mealDiv);
   })
}

let searchFood = () =>{
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadMeals(searchText);
  searchField.value  = '';

}

let loadMealDetail = (idMeal) =>{
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealsDitails(data.meals[0]));
}


let displayMealsDitails = meal =>{
  let displayDetails = document.getElementById('detail-container');
  displayDetails.innerHTML = ``;
  let mealDiv = document.createElement('div');
  mealDiv.classList.add('card')
  mealDiv.innerHTML= `
  <div class="card" style="width: 18rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
  </div>
</div>
  `;
  displayDetails.appendChild(mealDiv);
} 

loadMeals('')