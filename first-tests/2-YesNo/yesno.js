export function niOuiNiNon(sentence) {
  const sentenceOui = sentence.toLowerCase().includes("oui")
  const sentenceNon = sentence.toLowerCase().includes("non")
  return !(sentenceOui || sentenceNon);
}
