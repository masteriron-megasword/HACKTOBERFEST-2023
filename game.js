// Array of sample recipes
const recipes = [
  {
    name: "Chocolate Chip Cookies",
    ingredients: ["flour", "sugar", "chocolate chips", "butter", "vanilla extract"],
  },
  {
    name: "Margherita Pizza",
    ingredients: ["dough", "tomatoes", "mozzarella cheese", "basil", "olive oil"],
  },
  {
    name: "Chicken Alfredo Pasta",
    ingredients: ["pasta", "chicken", "cream", "garlic", "parmesan cheese"],
  },
  // Add more sample recipes as needed
];

// Function to randomly select a recipe
function selectRandomRecipe(recipes) {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// Function to play the recipe guessing game
function playRecipeGuessingGame() {
  const randomRecipe = selectRandomRecipe(recipes);
  const guessedIngredients = prompt(
    `Guess the ingredients for the recipe: ${randomRecipe.name}`
  );

  if (!guessedIngredients) {
    alert("Please provide your answer!");
    return;
  }

  const actualIngredients = randomRecipe.ingredients.join(", ");

  if (guessedIngredients.toLowerCase() === actualIngredients.toLowerCase()) {
    alert(`Congratulations! You guessed it right. The recipe for ${randomRecipe.name} includes ${actualIngredients}.`);
  } else {
    alert(`Oops! Your guess is incorrect. The recipe for ${randomRecipe.name} includes ${actualIngredients}.`);
  }
}

// Call the game function on button click or any other trigger
// For example, add an event listener to the button element
document.querySelector(".btn").addEventListener("click", playRecipeGuessingGame);
