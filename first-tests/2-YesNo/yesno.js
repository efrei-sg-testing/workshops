export function niOuiNiNon(sentence) {
  const sentenceoui = sentence.toLowerCase().includes("oui");
  const sentencenon = sentence.toLowerCase().includes("non");
  return !(sentenceoui || sentencenon);
}
