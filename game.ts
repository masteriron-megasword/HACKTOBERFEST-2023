// Interface for the game question-answer pairs
interface QA {
  question: string;
  answer: string;
}

// Array of sample questions and answers for the game
const qaPairs: QA[] = [
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "Who is the author of the Harry Potter series?", answer: "J.K. Rowling" },
  { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
  // Add more question-answer pairs as needed
];

// Function to play the TypeScript trivia game
function playTriviaGame(): void {
  const randomIndex: number = Math.floor(Math.random() * qaPairs.length);
  const qa: QA = qaPairs[randomIndex];

  console.log("Welcome to the TypeScript Trivia Game!");
  console.log("Answer the following question:");
  console.log(qa.question);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Your answer: ', (userAnswer: string) => {
    if (userAnswer.toLowerCase() === qa.answer.toLowerCase()) {
      console.log("Congratulations! Your answer is correct.");
    } else {
      console.log(`Oops! Your answer is incorrect. The correct answer is: ${qa.answer}`);
    }
    readline.close();
  });
}

// Call the function to play the trivia game
playTriviaGame();
