const MAX_TRIES = 10;

export function hangmanState(wordToGuess, guessedLetters) {
  const uppercaseWordToGuess = wordToGuess.toUpperCase();
  const uppercaseGuessedLetters = guessedLetters
    .toUpperCase()
    .replaceAll(" ", "");

  let remainingLetters = uppercaseWordToGuess;
  let wrongLetters = 0;

  for (const guessedLetter of uppercaseGuessedLetters) {
    const isValidLetter = uppercaseWordToGuess.includes(guessedLetter);
    if (!isValidLetter) wrongLetters++;
    else remainingLetters = remainingLetters.replaceAll(guessedLetter, "");

    if (wrongLetters >= MAX_TRIES) return "lose";
    if (remainingLetters === "") return "win";
  }

  return "in_progress";
}

export function hangmanWord(wordToGuess, guessedLetters) {
  return "";
}





// export function hangmanState(wordToGuess, guessedLetters) {
//   const uniqueLetters = new Set(wordToGuess.toUpperCase());
//   const guessedUniqueLetters = new Set(guessedLetters.toUpperCase());

//   const missingLetters = [...uniqueLetters].filter(letter => !guessedUniqueLetters.has(letter));
//   console.log(missingLetters)
//   if (missingLetters.length === 0) {
//     return "win";
//   } else if (guessedLetters.length >= 10) {
//     return "lose";
//   } else {
//     return "in_progress";
//   }
// }

// export function hangmanWord(wordToGuess, guessedLetters) {
//   return wordToGuess
//   .toUpperCase()
//   .split("")
//   .map(letter => (guessedLetters.toUpperCase().includes(letter) ? letter : "_"))
//   .join("");
// }
