export function hangmanState(wordToGuess, guessedLetters) {
  wordToGuess = wordToGuess.toUpperCase();
  guessedLetters = guessedLetters.toUpperCase();

  for (let i = 0; i < wordToGuess.length; i++) {

    if (!guessedLetters.includes(wordToGuess[i])) {
      return "in_progress";
    }
  }

  if (guessedLetters.length >= 10) {
    return "lose";
  }

  return "win";
}

export function hangmanWord(wordToGuess, guessedLetters) {
  wordToGuess = wordToGuess.toUpperCase();
  guessedLetters = guessedLetters.toUpperCase();

  let hangmanWord = "";

  for (let i = 0; i < wordToGuess.length; i++) {
    const letter = wordToGuess[i];
    if (guessedLetters.includes(letter)) {
      hangmanWord += letter;
    } else {
      hangmanWord += "_";
    }
  }

  return hangmanWord;
}

