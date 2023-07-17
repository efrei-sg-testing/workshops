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
  let result = wordToGuess.toLowerCase()
  var pattern = /[0-9a-z]/g;
  for (const letter of guessedLetters.toLowerCase()) {
    result = result.replaceAll(letter,letter.toUpperCase())
  }
  result = result.replaceAll(pattern, "_");
  return result;
}

export function hangmanWord2(wordToGuess, guessedLetters) {
  return wordToGuess
  .toUpperCase()
  .split("")
  .map(letter => (guessedLetters.toUpperCase.includes(letter) ? letter : "_"))
  .join("");
}
