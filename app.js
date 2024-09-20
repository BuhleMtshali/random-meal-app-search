//elements definition
const getMealBtn = document.getElementById("getMeal");
let mealImg = document.getElementById("img");
let mealName = document.getElementById("meal-name");
let mealArea = document.getElementById("meal-area");
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
  mealImg.src = response.data.meals[0].strMealThumb;
  mealName.innerHTML = response.data.meals[0].strMeal;
}
