export function petitBacScore(currentLetter, proposedWords) {
  return proposedWords.map((word) => {
    if (!word.startsWith(currentLetter)) return 0;
    if (proposedWords.filter((w) => w === word).length > 1) return 1;
    return 2;
  });
}
