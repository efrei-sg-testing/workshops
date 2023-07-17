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
  const uppercaseGuessedLetters = guessedLetters.toUpperCase();
  return wordToGuess
    .toUpperCase()
    .split("")
    .map((letter) => (uppercaseGuessedLetters.includes(letter) ? letter : "_"))
    .join("");
}
