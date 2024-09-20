 Random Meal Search App:

```md
# 🍝 Random Recipe Generator

A simple web application that fetches a random meal recipe using the [TheMealDB API](https://www.themealdb.com/). With a single click, you can discover a new meal, learn its origin, see its main ingredients, and watch a cooking tutorial on YouTube.

[Live Demo](https://spectacular-gingersnap-46816f.netlify.app/)

## Features
- Fetch a random meal recipe from TheMealDB API
- Displays the meal name, category, and origin
- Shows the main ingredients used in the meal
- Provides a link to a YouTube video tutorial for preparing the meal
- Clean and responsive UI with CSS styling

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- [Axios](https://axios-http.com/) for API requests
- [TheMealDB API](https://www.themealdb.com/api.php) for meal data

## How to Use
1. Click the **Random Meal** button to fetch a new random meal.
2. The app will display:
   - A picture of the meal.
   - The meal's name, category, and its country of origin.
   - The main ingredients used in the recipe.
   - A YouTube link to a video tutorial for the meal.
   
## Project Setup
To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/BuhleMtshali/random-meal-generator.git
   ```

2. Navigate to the project folder:
   ```bash
   cd random-meal-generator
   ```

3. Open `index.html` in your browser.

Alternatively, you can use any local server to serve the project (like `Live Server` in VSCode).

## API Reference
The project uses the [TheMealDB](https://www.themealdb.com/api.php) to fetch random meal data. The API returns a JSON response with the following key data used in the app:
- `strMeal`: The name of the meal.
- `strMealThumb`: A URL to an image of the meal.
- `strCategory`: The meal category (e.g., "Dessert").
- `strArea`: The origin of the meal (e.g., "Italian").
- `strIngredient1` to `strIngredient20`: The ingredients of the meal.
- `strYoutube`: A YouTube tutorial for the recipe.

## Folder Structure
```bash
random-meal-generator/
│
├── index.html          # The main HTML file
├── app.js              # JavaScript code for fetching and rendering meals
├── app.css             # Stylesheet for the app
└── README.md           # Project documentation

---

**Happy Cooking! 🍳**
```
