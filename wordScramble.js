// List of sample words for the word scramble game
const words = [
  "apple",
  "banana",
  "cherry",
  "orange",
  "strawberry",
  // Add more words as needed
];

// Function to randomly select a word
function selectRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

// Function to scramble a word
function scrambleWord(word) {
  const scrambledWord = word.split("").sort(() => 0.5 - Math.random()).join("");
  return scrambledWord;
}

// Function to play the word scramble game
function playWordScrambleGame() {
  const randomWord = selectRandomWord(words);
  const scrambledWord = scrambleWord(randomWord);
  const guessedWord = prompt(
    `Unscramble the word: ${scrambledWord}`
  );

  if (!guessedWord) {
    alert("Please provide your answer!");
    return;
  }

  if (guessedWord.toLowerCase() === randomWord) {
    alert("Congratulations! You unscrambled the word correctly.");
  } else {
    alert(`Oops! Your guess is incorrect. The correct word is: ${randomWord}`);
  }
}

// Call the game function on button click or any other trigger
// For example, add an event listener to the button element
document.querySelector(".btn").addEventListener("click", playWordScrambleGame);
