// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Welcome message
console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100. Can you guess it?");

const maxAttempts = 8;
let attempts = 0;
let guessedCorrectly = false;
let guessed = [];
let invalid = false;


while (!guessedCorrectly && guessed.length < maxAttempts) {
    // Prompt the user for their guess
    const userGuess = prompt("Enter your guess: ");
    // Convert the input to a number
    const guess = Number(userGuess);
    console.log(`You guesses ${guess}`)
    attempts++;
    invalid = false;
    if( guessed.includes(guess) ){
        console.log("You have guessed this number already. Please guess another number.")
    }else{
        // Check if the guess is correct
        if (guess === randomNumber) {
            console.log(`🎉 Congratulations! You guessed the correct number: ${randomNumber}`);
            console.log(`It took you ${attempts} attempts.`);
            guessedCorrectly = true;
        } else if (guess > randomNumber) {
            console.log("📉 Too high! Try again.");
        } else if (guess < randomNumber) {
            console.log("📈 Too low! Try again.");
        } else {
            console.log("🚫 Invalid input. Please enter a number.");
            invalid = true;
        }
        if( !invalid ){
            guessed.push(guess)
        }
    }
}
console.log("========================")
if( guessed.length === maxAttempts){
    console.log("You have reached maximum attempts of guesses.")
}
console.log("Thanks for playing!");
