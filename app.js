//elements definition
const getMealBtn = document.getElementById("getMeal");
let mealImg = document.getElementById("img");
let mealName = document.getElementById("meal-name");
let mealArea = document.getElementById("location");
let recipe = document.getElementById("recipe");
let youTubeLink = document.getElementById("youtube-link");
let mealContainer = document.getElementById("meal-container");

//get meal btn which calls the api function
getMealBtn.addEventListener("click", () => {
  findMeal();
});

//api function to fetch the meal
function findMeal() {
  let apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  axios.get(apiUrl).then(renderMeal);
}

//rendering meals out
function renderMeal(response) {
  console.log(response.data);
  mealImg.innerHTML = `<img src="${response.data.meals[0].strMealThumb}" alt="meal image" />`;
  mealName.innerText = response.data.meals[0].strMeal;
  mealArea.innerText = response.data.meals[0].strArea;
  recipe.innerText = response.data.meals[0].strInstructions;
  youTubeLink.innerText = response.data.meals[0].strYoutube;
}
