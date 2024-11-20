// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Welcome message
console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100. Can you guess it?");

// TODO: Initialize variables
// constant variable to store the maximum # of attempts (use name `maxAttempts`)

// number variable to store current number of attempts (use name `attempts`)

// boolean variable to store whether a guess (use name `guessedCorrectly`)

// number array to store already guessed values (this is done for you below :D)
let guessed = [];
// boolean variable to store whether a guess is a valid number or not 
// (this is also done for you below :D)
let invalid = false;


// TODO: modify while loop condition to ensure that we only continue with the loop when guessedCorrectly is not false AND numbers of guesses is not greater than maximum number of attempts allowed
while ( true ) {
    // Prompt the user for their guess
    const userGuess = prompt("Enter your guess: ");
    // Convert the input to a number
    const guess = Number(userGuess);
    console.log("You guessed " + guess)
    attempts++;
    invalid = false; // reset invalid to false at every guess
    
    // TODO: look up how to use .includes function for JS array to check if the `guess` element is in the already in the `guessed` array
    if( false ){
        console.log("You have guessed this number already. Please guess another number.")
    }else{
        // Check if the guess is correct
        if (guess === randomNumber) {
            // TODO: change these console.log to print the message and number variable together **without** using the concatenation '+' sign
            console.log("🎉 Congratulations! You guessed the correct number: " + randomNumber); 
            console.log("It took you " + attempts + " attempts.");
            guessedCorrectly = true;
        } else if (guess > randomNumber) {
            console.log("📉 Too high! Try again.");
        } else if (guess < randomNumber) {
            console.log("📈 Too low! Try again.");
        } else {
            console.log("🚫 Invalid input. Please enter a number.");
            invalid = true;
        }
        
        // we dont want to push the `guess` to 
        // `guessed` array if it's an invalid guess:
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






