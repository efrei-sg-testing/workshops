export function hangmanState(wordToGuess, guessedLetters) {
  const MAX_TRIES =10;
  const uppercasewordToGuess = wordToGuess.toUpperCase();
  const uppercaseguessedLetters = guessedLetters.toUpperCase();
  let wrongLetter = 0;

  for(const guessedLetter of uppercaseguessedLetters.split()){
    const isValidLetter = uppercasewordToGuess.includes(guessedLetter);
    if(!isValidLetter) wrongLetter++;
    else rema
    if(isValidLetter >= MAX_TRIES) return "lose";
    }
  return "in_progress"; return "win"; return "lose";
}

export function hangmanWord(wordToGuess, guessedLetters) {
  return "";
}
