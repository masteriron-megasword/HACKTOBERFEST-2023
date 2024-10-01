import random

# List of sample questions and answers for the game
qa_pairs = [
    {"question": "What is the capital of France?", "answer": "Paris"},
    {"question": "Which planet is known as the Red Planet?", "answer": "Mars"},
    {"question": "Who wrote Romeo and Juliet?", "answer": "William Shakespeare"},
    # Add more question-answer pairs as needed
]

# Function to play the Python trivia game
def play_trivia_game():
    qa = random.choice(qa_pairs)
    question = qa["question"]
    answer = qa["answer"]

    print("Welcome to the Python Trivia Game!")
    print("Answer the following question:")
    print(question)

    user_answer = input("Your answer: ")

    if user_answer.lower() == answer.lower():
        print("Congratulations! Your answer is correct.")
    else:
        print(f"Oops! Your answer is incorrect. The correct answer is: {answer}")

# Call the function to play the trivia game
play_trivia_game()
