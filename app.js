const inputBox = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");


const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

const fetchRecipes  =  async (query) => {
  recipeContainer.innerHTML = "<h3>fetching recipes....</h2>"
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const response = await data.json();

  recipeContainer.innerHTML = "";
  response.meals.forEach(meal => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `<img src = "${meal.strMealThumb}">
    <h2>${meal.strMeal}</h2>
    <p>${meal.strArea}</p>
    <p>${meal.strCategory}</p>
    `;
    recipeContainer.appendChild(recipeDiv);

  });
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchInput = inputBox.value.trim();
  fetchRecipes(searchInput);

})
