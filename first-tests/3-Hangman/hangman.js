export function hangmanState(wordToGuess, guessedLetters) {
  const lowercaseWordToGuess = wordToGuess.toLowerCase();
  const lowercaseGuessedLetters = guessedLetters.toLowerCase();

  const guessedSet = new Set(lowercaseGuessedLetters);
  const wordSet = new Set(lowercaseWordToGuess);

  const guessedAllLetters = [...wordSet].every(letter => guessedSet.has(letter));
  const missedLettersCount = [...lowercaseGuessedLetters].filter(letter => !wordSet.has(letter)).length;

  if (guessedAllLetters) {
    return "win";
  } else if (missedLettersCount >= 10) {
    return "lose";
  } else {
    return "in_progress";
  }
}

 

export function hangmanWord(wordToGuess, guessedLetters) {
  const lowercaseWordToGuess = wordToGuess.toLowerCase();
  const lowercaseGuessedLetters = guessedLetters.toLowerCase();

  const guessedSet = new Set(lowercaseGuessedLetters);

  return [...lowercaseWordToGuess].map(letter => (guessedSet.has(letter) ? letter.toUpperCase() : "_")).join("");
}