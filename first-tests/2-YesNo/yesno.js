export function niOuiNiNon(sentence) {
  const lowercaseSentence = sentence.toLowerCase();

  return !(
    lowercaseSentence.includes("oui") || lowercaseSentence.includes("non")
  );
}
