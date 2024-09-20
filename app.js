//get btn and calls the api function
const getMealBtn = document.getElementById("getMeal");
let mealContainer = document.getElementById("meal-container");
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
  mealContainer.innerHTML = `<div class="img">
          <img src="#" alt="meal image" />
        </div>
        <div class="meal-name">
          <h2 class="name"></h2>
          <p class="meal-area"></p>
        </div>
        <div class="recipe-instructions">
          <p class="recipe"></p>
          <p class="link"></p>
        </div>
      `;
}
