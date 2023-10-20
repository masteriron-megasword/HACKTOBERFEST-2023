// List of sample numbers for the guessing game
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to randomly select a number
function selectRandomNumber(numbers) {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

// Function to play the number guessing game
function playNumberGuessingGame() {
  const randomNumber = selectRandomNumber(numbers);
  let attempts = 3;

  while (attempts > 0) {
    const userGuess = prompt(`Guess a number between 1 and 10 (inclusive). Remaining attempts: ${attempts}`);

    if (!userGuess || isNaN(userGuess)) {
      alert("Please enter a valid number.");
      continue;
    }

    const parsedGuess = parseInt(userGuess, 10);

    if (parsedGuess === randomNumber) {
      alert("Congratulations! You guessed the correct number.");
      return;
    } else {
      attempts--;
      if (attempts > 0) {
        alert(`Incorrect guess. Try again. Remaining attempts: ${attempts}`);
      } else {
        alert(`Out of attempts! The correct number was ${randomNumber}.`);
      }
    }
  }
}

// Call the function on button click or any other trigger
// For example, add an event listener to the button element
document.querySelector(".btn").addEventListener("click", playNumberGuessingGame);
