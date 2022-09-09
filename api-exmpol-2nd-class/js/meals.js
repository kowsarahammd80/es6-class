let loadMeals = (search) =>{
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}

let displayMeals = meals => {
  let mealsContainer = document.getElementById('meal-container');
  mealsContainer.innerHTML = '';
  meals.forEach(meal =>{
    // console.log(meal);
    let mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
    `;
    mealsContainer.appendChild(mealDiv);


  })
}

let searchFood = () => {
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadMeals(searchText)
  searchField.value = '';
}

let loadMealDetail =(idMeal) =>{
  // console.log('get details of id', idMeal);
 let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//  console.log(url)

fetch(url)
.then(res => res.json())
.then(data => displayMealDetails(data.meals[0]))
}

let displayMealDetails = meal => {
 let detailContainer = document.getElementById('detail-container');
 detailContainer.innerHTML = ``;
 let mealDiv = document.createElement('div');
 mealDiv.classList.add('crad');
 mealDiv.innerHTML =`
 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
 `;
 detailContainer.appendChild(mealDiv);

}

loadMeals('');